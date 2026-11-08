import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/subscribe-schema";
import { createToken } from "@/lib/subscribe-token";
import { confirmEmailText } from "@/lib/subscribe-emails";
import { resend } from "@/lib/resend";
import { site } from "@/lib/site";

// Step 1 of double opt-in: nothing is saved until the person confirms from their inbox.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid subscription details." }, { status: 400 });
  }

  const { email, website } = parsed.data;

  // Bots fill in the hidden website field, so accept the request without sending anything
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the confirmation email was not sent.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const params = new URLSearchParams({ email, token: createToken("confirm", email) });
  const confirmUrl = `${site.url}/subscribe/confirm?${params}`;

  const response = await resend(apiKey, "POST", "/emails", {
    from: `${site.name} <${site.email}>`,
    to: [email],
    subject: "Please confirm your Nainika Insights subscription",
    text: confirmEmailText(confirmUrl),
  });

  if (!response.ok) {
    console.error(`Resend rejected the confirmation email with status ${response.status}.`);
    return NextResponse.json({ error: "The confirmation email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
