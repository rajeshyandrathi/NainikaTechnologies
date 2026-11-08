import { NextResponse } from "next/server";
import { tokenSchema } from "@/lib/subscribe-schema";
import { verifyToken } from "@/lib/subscribe-token";
import { notifyEmail, resend, websiteFromEmail } from "@/lib/resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = tokenSchema.safeParse(body);
  if (!parsed.success || !verifyToken("unsubscribe", parsed.data.email, parsed.data.token)) {
    return NextResponse.json({ error: "This link is invalid." }, { status: 400 });
  }

  const { email } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const update = await resend(apiKey, "PATCH", `/contacts/${encodeURIComponent(email)}`, { unsubscribed: true }).catch(() => null);

  // Tell the team every time, so an opt-out is never missed even if Resend didn't update
  const notify = await resend(apiKey, "POST", "/emails", {
    from: websiteFromEmail,
    to: [site.email],
    bcc: [notifyEmail],
    subject: "Insights unsubscribe",
    text: [
      `Email: ${email}`,
      `Unsubscribed at: ${new Date().toISOString()}`,
      `Updated in Resend contacts: ${update?.ok ? "Yes" : "No, please unsubscribe them manually now"}`,
    ].join("\n"),
  }).catch(() => null);

  if (!update?.ok && !notify?.ok) {
    return NextResponse.json({ error: "We couldn't process this. Please email us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
