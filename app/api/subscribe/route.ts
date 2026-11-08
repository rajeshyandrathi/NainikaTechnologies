import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/subscribe-schema";
import { site } from "@/lib/site";

const notifyEmail = "rajeshyandrathi@gmail.com";
const fromEmail = "Nainika Technologies Website <website@nainikatechnologies.co.za>";
const welcomeFromEmail = `Nainika Technologies <${site.email}>`;

// The text is fixed so the form can't be used to send a visitor's words to someone else.
const welcomeText = [
  "Hello,",
  "",
  "Thank you for subscribing to Nainika Technologies Insights.",
  "",
  "You'll get our new playbooks on AI agents, Salesforce, HubSpot, and RevOps when they are published. No spam, and we never share your email address.",
  "",
  "Every newsletter includes an unsubscribe link. You can also reply to this email with the word unsubscribe at any time.",
  "",
  "Kind regards,",
  "",
  "The Nainika Technologies Team",
  `${site.url}/insights`,
].join("\n");

function resend(apiKey: string, path: string, body: Record<string, unknown>) {
  return fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid subscription details." }, { status: 400 });
  }

  const { email, website } = parsed.data;

  // Bots fill in the hidden website field, so accept the request without saving it
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the subscription was not saved.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  // Save the subscriber as a Resend contact, in the Insights segment when one is set
  const segmentId = process.env.RESEND_SEGMENT_ID;
  let saved = false;
  try {
    const contact = await resend(apiKey, "/contacts", {
      email,
      unsubscribed: false,
      ...(segmentId ? { segments: [segmentId] } : {}),
    });
    saved = contact.ok;
    if (!contact.ok) {
      console.error(`Resend rejected the contact with status ${contact.status}.`);
    }
  } catch (error) {
    console.error("The contact could not be saved.", error);
  }

  // Always tell the team, so no subscriber is lost if the contact step fails
  const notify = await resend(apiKey, "/emails", {
    from: fromEmail,
    to: [site.email],
    bcc: [notifyEmail],
    subject: "New Insights subscriber",
    text: [
      `Email: ${email}`,
      `Saved to Resend contacts: ${saved ? "Yes" : "No, please add manually"}`,
      `Consent given: Yes, ${new Date().toISOString()}`,
    ].join("\n"),
  }).catch(() => null);

  if (!saved && !notify?.ok) {
    return NextResponse.json({ error: "The subscription could not be saved." }, { status: 502 });
  }

  // The subscription is recorded, so a failed welcome email shouldn't show the visitor an error.
  try {
    const welcome = await resend(apiKey, "/emails", {
      from: welcomeFromEmail,
      to: [email],
      subject: "You're subscribed to Nainika Insights",
      text: welcomeText,
    });
    if (!welcome.ok) {
      console.error(`Resend rejected the welcome email with status ${welcome.status}.`);
    }
  } catch (error) {
    console.error("The welcome email could not be sent.", error);
  }

  return NextResponse.json({ ok: true });
}
