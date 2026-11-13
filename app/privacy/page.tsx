import type { Metadata } from "next";
import LogoWatermark from "@/components/logo-watermark";
import { site } from "@/lib/site";

const title = "Privacy Policy";
const fullTitle = `${title} | ${site.name}`;
const description = "How Nainika Technologies collects, uses, and protects your personal information under POPIA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: fullTitle, description, url: "/privacy", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

const sections = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is the responsible party for personal information collected through this website. You can reach us at ${site.email}, on ${site.phone}, or at 13 Glen Abbey Rd, Cape Farms, Sunningdale, Cape Town, South Africa, 7441.`,
      "This policy explains how we handle your personal information in line with the Protection of Personal Information Act, 2013 (POPIA).",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you complete our contact form, we collect your name, email address, message, and, if you choose to give them, your phone number and company name. When you book a consultation, we receive the details you enter on the booking page. When you subscribe to Insights, we collect your email address and a record of your consent, including when you confirmed it.",
      "If you apply for a job through our careers page, we collect your name, email address, the role or area you are interested in, your CV and cover letter, and, if you choose to give them, your phone number and a LinkedIn, GitHub or portfolio link. We use these only to consider you for current and future roles.",
      "If you contact us by email, phone, or WhatsApp, we receive your contact details and whatever you send us.",
      "When you browse the site, we collect anonymised usage and performance information, such as pages viewed, country, device type, and page speed, through Vercel Analytics and Speed Insights. This also includes whether our contact form was submitted or our WhatsApp button was clicked. Our hosting provider may also keep technical logs for security and reliability.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your information to respond to your enquiry, discuss and provide our services, keep records of our communications, improve this website, and meet our legal obligations.",
      "We process it because you asked us to contact you, because it's needed for a contract or potential contract with you, because we have a legitimate interest in running and improving our business, or because the law requires it.",
      "We don't sell your personal information. We'll only send you marketing if the law allows it. We send the Insights newsletter only to people who tick the consent box and then confirm from their own inbox. Every email has an unsubscribe link, and we act on an unsubscribe straight away. If you unsubscribe, we keep only your email address on a do-not-email list so we don't contact you again.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We share information only with service providers that help us run this website and our business, such as our hosting provider (Vercel), our analytics, and our email provider (Resend), which stores newsletter subscribers and sends our emails, or where the law requires it.",
      "Some of these providers operate outside South Africa, so your information may be stored or processed in other countries. Where this happens, we take steps to confirm that it's protected as POPIA requires.",
      "Our contact page includes an embedded Google Map, our WhatsApp button takes you to WhatsApp, and our consultation booking links take you to Calendly. Google, WhatsApp, and Calendly handle any information they collect under their own privacy policies.",
    ],
  },
  {
    heading: "How long we keep it and how we protect it",
    body: [
      "We keep personal information only for as long as we need it for the purposes above, or for as long as the law requires, and then we delete or anonymise it.",
      "We keep job applications for up to 12 months so we can consider you for future roles, unless you ask us to delete yours sooner.",
      "We use reasonable technical and organisational measures to protect your information against loss, misuse, and unauthorised access.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `Under POPIA, you may ask whether we hold your personal information, request a copy, ask us to correct or delete it, and object to how we use it, including for direct marketing. To make a request, contact our Information Officer at ${site.email}.`,
      "If you're unhappy with how we've handled your information, please contact us first. You also have the right to complain to the Information Regulator of South Africa at inforegulator.org.za.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: ["We may update this policy from time to time. The latest version will always be on this page."],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 px-4 bg-white">
      <LogoWatermark className="top-24" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
        <p className="text-slate-600 mb-10">Last updated: 13 November 2026</p>
        {sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-slate-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
