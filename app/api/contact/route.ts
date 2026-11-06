import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

const bccEmail = "rajeshyandrathi@gmail.com";
const fromEmail = "Nainika Technologies Website <website@nainikatechnologies.co.za>";
const autoReplyFromEmail = `Nainika Technologies <${site.email}>`;

// The text is fixed so the form can't be used to send a visitor's words to someone else.
const autoReplyText = [
  "Hello,",
  "",
  "Thank you for contacting Nainika Technologies.",
  "",
  "This is an automatic confirmation that your message has reached us. A member of our team will review it and reply within one business day.",
  "",
  "If you would like to add more details, such as your project scope, timeline, or any relevant documents, simply reply to this email and it will be added to your enquiry.",
  "",
  "Kind regards,",
  "",
  "The Nainika Technologies Team",
  site.url,
].join("\n");

function sendEmail(apiKey: string, email: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form details." }, { status: 400 });
  }

  const { name, email, phone, company, message, website } = parsed.data;

  // Bots fill in the hidden website field, so accept the request without sending it
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the enquiry was not sent.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const response = await sendEmail(apiKey, {
    from: fromEmail,
    to: [site.email],
    bcc: [bccEmail],
    reply_to: email,
    subject: `New website enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      "",
      message,
    ].join("\n"),
  });

  if (!response.ok) {
    console.error(`Resend rejected the enquiry with status ${response.status}.`);
    return NextResponse.json({ error: "The email could not be sent." }, { status: 502 });
  }

  // The enquiry has arrived, so a failed confirmation shouldn't show the visitor an error.
  try {
    const autoReply = await sendEmail(apiKey, {
      from: autoReplyFromEmail,
      to: [email],
      subject: "We've received your message",
      text: autoReplyText,
    });
    if (!autoReply.ok) {
      console.error(`Resend rejected the auto-reply with status ${autoReply.status}.`);
    }
  } catch (error) {
    console.error("The auto-reply could not be sent.", error);
  }

  return NextResponse.json({ ok: true });
}
