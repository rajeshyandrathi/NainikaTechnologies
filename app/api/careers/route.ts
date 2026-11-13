import { NextResponse } from "next/server";
import { careersSchema, fileProblem } from "@/lib/careers-schema";
import { notifyEmail, websiteFromEmail } from "@/lib/resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const autoReplyFromEmail = `Nainika Technologies <${site.email}>`;

// Fixed text, so the form can't be used to send a visitor's words to someone else.
const autoReplyText = [
  "Hello,",
  "",
  "Thank you for applying to Nainika Technologies.",
  "",
  "This is an automatic confirmation that your application has reached us. We review every application, and if there is a fit we will contact you to arrange a short call.",
  "",
  "Nainika Technologies will never ask you to pay a fee or share bank details during hiring.",
  "",
  "Kind regards,",
  "",
  "The Nainika Technologies Team",
  site.url,
].join("\n");

function sendEmail(apiKey: string, email: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(email),
  });
}

// Check the file's first bytes so a renamed file can't pass as a document.
function looksLikeDocument(bytes: Uint8Array, name: string) {
  const lower = name.toLowerCase();
  const startsWith = (sig: number[]) => sig.every((b, i) => bytes[i] === b);
  if (lower.endsWith(".pdf")) return startsWith([0x25, 0x50, 0x44, 0x46]); // %PDF
  if (lower.endsWith(".docx")) return startsWith([0x50, 0x4b, 0x03, 0x04]); // zip
  if (lower.endsWith(".doc")) return startsWith([0xd0, 0xcf, 0x11, 0xe0]); // OLE
  return false;
}

function safeFileName(name: string, fallback: string) {
  const ext = name.toLowerCase().match(/\.(pdf|docx?)$/)?.[0] ?? "";
  const base = name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9 _-]/g, "").trim().slice(0, 60);
  return `${base || fallback}${ext}`;
}

async function toAttachment(file: File, fallback: string) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!looksLikeDocument(bytes, file.name)) return null;
  return { filename: safeFileName(file.name, fallback), content: Buffer.from(bytes).toString("base64") };
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Invalid form details." }, { status: 400 });

  const text = (key: string) => {
    const v = form.get(key);
    return typeof v === "string" && v.length > 0 ? v : undefined;
  };

  const parsed = careersSchema.safeParse({
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    role: text("role"),
    link: text("link"),
    coverLetterText: text("coverLetterText"),
    consent: form.get("consent") === "true",
    website: text("website"),
  });
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid form details." }, { status: 400 });
  }
  const { name, email, phone, role, link, coverLetterText, website } = parsed.data;

  // Bots fill in the hidden website field, so accept the request without sending it.
  if (website) return NextResponse.json({ ok: true });

  const cv = form.get("cv");
  const coverLetter = form.get("coverLetter");
  const cvFile = cv instanceof File ? cv : null;
  const coverFile = coverLetter instanceof File && coverLetter.size > 0 ? coverLetter : null;

  const problem = fileProblem(cvFile, "CV", true) ?? fileProblem(coverFile, "cover letter", false);
  if (problem) return NextResponse.json({ error: problem }, { status: 400 });
  if (!coverFile && !coverLetterText) {
    return NextResponse.json({ error: "Please attach a cover letter or write one in the box." }, { status: 400 });
  }

  const attachments = [];
  const cvAttachment = await toAttachment(cvFile!, "CV");
  if (!cvAttachment) return NextResponse.json({ error: "Your CV file could not be read. Please upload a valid PDF, DOC or DOCX." }, { status: 400 });
  attachments.push(cvAttachment);
  if (coverFile) {
    const coverAttachment = await toAttachment(coverFile, "Cover letter");
    if (!coverAttachment) {
      return NextResponse.json({ error: "Your cover letter file could not be read. Please upload a valid PDF, DOC or DOCX." }, { status: 400 });
    }
    attachments.push(coverAttachment);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the application was not sent.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const response = await sendEmail(apiKey, {
    from: websiteFromEmail,
    to: [site.email],
    bcc: [notifyEmail],
    reply_to: email,
    subject: `Job application: ${role} from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Role or area: ${role}`,
      `LinkedIn or portfolio: ${link || "Not provided"}`,
      `Consent to use details for recruitment: Yes`,
      "",
      coverFile ? "Cover letter: attached" : "Cover letter:",
      coverFile ? "" : coverLetterText ?? "",
    ].join("\n"),
    attachments,
  });

  if (!response.ok) {
    console.error(`Resend rejected the application with status ${response.status}.`);
    return NextResponse.json({ error: "The application could not be sent." }, { status: 502 });
  }

  try {
    const autoReply = await sendEmail(apiKey, {
      from: autoReplyFromEmail,
      to: [email],
      subject: "We've received your application",
      text: autoReplyText,
    });
    if (!autoReply.ok) console.error(`Resend rejected the application auto-reply with status ${autoReply.status}.`);
  } catch (error) {
    console.error("The application auto-reply could not be sent.", error);
  }

  return NextResponse.json({ ok: true });
}
