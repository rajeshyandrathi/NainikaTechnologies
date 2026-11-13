import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/subscribe-schema";
import { saveSubscriber } from "@/lib/subscribe-save";

// One-click subscribe: ticking the consent box and clicking Subscribe adds the person straight away.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid subscription details." }, { status: 400 });
  }

  const { email, website } = parsed.data;

  // Bots fill in the hidden website field, so accept the request without saving anything
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the subscriber was not saved.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const ok = await saveSubscriber(apiKey, email, "ticked the consent box and clicked Subscribe on the website");
  if (!ok) {
    return NextResponse.json({ error: "The subscription could not be saved." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
