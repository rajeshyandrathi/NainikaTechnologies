import { NextResponse } from "next/server";
import { tokenSchema } from "@/lib/subscribe-schema";
import { verifyToken } from "@/lib/subscribe-token";
import { saveSubscriber } from "@/lib/subscribe-save";

// Kept so confirmation links already sent before one-click subscribe still work.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = tokenSchema.safeParse(body);
  if (!parsed.success || !verifyToken("confirm", parsed.data.email, parsed.data.token)) {
    return NextResponse.json({ error: "This link is invalid or has expired." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const ok = await saveSubscriber(apiKey, parsed.data.email, "ticked the consent box on the website, then confirmed from their inbox");
  if (!ok) {
    return NextResponse.json({ error: "The subscription could not be saved." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
