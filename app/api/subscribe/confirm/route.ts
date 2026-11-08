import { NextResponse } from "next/server";
import { tokenSchema } from "@/lib/subscribe-schema";
import { createToken, verifyToken } from "@/lib/subscribe-token";
import { welcomeEmailText } from "@/lib/subscribe-emails";
import { notifyEmail, resend, websiteFromEmail } from "@/lib/resend";
import { site } from "@/lib/site";

// Step 2 of double opt-in: the person clicked Confirm on the page linked from their inbox.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = tokenSchema.safeParse(body);
  if (!parsed.success || !verifyToken("confirm", parsed.data.email, parsed.data.token)) {
    return NextResponse.json({ error: "This link is invalid or has expired." }, { status: 400 });
  }

  const { email } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const confirmedAt = new Date().toISOString();
  const segmentId = process.env.RESEND_SEGMENT_ID;
  const contact = await resend(apiKey, "POST", "/contacts", {
    email,
    unsubscribed: false,
    ...(segmentId ? { segments: [segmentId] } : {}),
  }).catch(() => null);

  // An existing contact is resubscribing, so switch them back on instead
  let saved = Boolean(contact?.ok);
  if (!saved) {
    const update = await resend(apiKey, "PATCH", `/contacts/${encodeURIComponent(email)}`, { unsubscribed: false }).catch(() => null);
    saved = Boolean(update?.ok);
  }

  // The team email is the consent record: who agreed, and when they confirmed
  const notify = await resend(apiKey, "POST", "/emails", {
    from: websiteFromEmail,
    to: [site.email],
    bcc: [notifyEmail],
    subject: "New Insights subscriber (confirmed)",
    text: [
      `Email: ${email}`,
      "Consent: ticked the consent box on the website, then confirmed from their inbox (double opt-in)",
      `Confirmed at: ${confirmedAt}`,
      `Saved to Resend contacts: ${saved ? "Yes" : "No, please add manually"}`,
    ].join("\n"),
  }).catch(() => null);

  if (!saved && !notify?.ok) {
    return NextResponse.json({ error: "The subscription could not be saved." }, { status: 502 });
  }

  const unsubscribeUrl = `${site.url}/subscribe/unsubscribe?${new URLSearchParams({ email, token: createToken("unsubscribe", email) })}`;
  try {
    await resend(apiKey, "POST", "/emails", {
      from: `${site.name} <${site.email}>`,
      to: [email],
      subject: "You're subscribed to Nainika Insights",
      text: welcomeEmailText(unsubscribeUrl),
      headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` },
    });
  } catch (error) {
    console.error("The welcome email could not be sent.", error);
  }

  return NextResponse.json({ ok: true });
}
