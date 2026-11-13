"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { fileProblem } from "@/lib/careers-schema";

type Props = { options: { value: string; label: string }[] };

const inputClass =
  "w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500";
const labelClass = "block text-sm font-medium text-slate-700 mb-1";

export default function CareersApplicationForm({ options }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Apply buttons link here with ?role=<slug>, so preselect that role.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("role");
    const match = options.find((o) => o.value === slug);
    if (match) setRole(match.label);
  }, [options]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const cv = data.get("cv") as File | null;
    const coverLetter = data.get("coverLetter") as File | null;
    const coverLetterText = String(data.get("coverLetterText") ?? "").trim();

    const problem =
      (name.length < 2 && "Please enter your full name.") ||
      (!/^\S+@\S+\.\S+$/.test(email) && "Please enter a valid email address.") ||
      (!role && "Please choose a role or area.") ||
      fileProblem(cv, "CV", true) ||
      fileProblem(coverLetter, "cover letter", false) ||
      ((!coverLetter || coverLetter.size === 0) && !coverLetterText && "Please attach a cover letter or write one in the box.") ||
      (!data.get("consent") && "Please confirm we may use your details for recruitment.");
    if (problem) {
      setError(problem);
      return;
    }

    data.set("role", role);
    data.set("consent", "true");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/careers", { method: "POST", body: data });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your application could not be sent.");
      setIsSuccess(true);
      track("careers_application_submit");
      form.reset();
      setRole("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Your application could not be sent.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-3">Thank you for applying</h3>
        <p className="text-slate-600">
          Your application has reached us, and we have sent a confirmation to your email. If there is a fit, we will be
          in touch to arrange a short call.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-cyan-600 hover:text-cyan-700 font-medium underline"
        >
          Send another application
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6" noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Full Name *</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" className={inputClass} maxLength={100} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>Email Address *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" className={inputClass} maxLength={200} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>Phone Number</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} maxLength={50} />
        </div>
        <div>
          <label htmlFor="cf-role" className={labelClass}>Role or Area *</label>
          <select
            id="cf-role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={inputClass}
          >
            <option value="">Choose one</option>
            {options.map((o) => (
              <option key={o.value} value={o.label}>{o.label}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-link" className={labelClass}>LinkedIn, GitHub or Portfolio Link</label>
        <input id="cf-link" name="link" type="url" placeholder="https://" className={inputClass} maxLength={300} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-cv" className={labelClass}>CV *</label>
          <input
            id="cf-cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-cyan-50 file:text-cyan-700 file:font-medium hover:file:bg-cyan-100"
          />
          <p className="mt-1 text-xs text-slate-500">PDF, DOC or DOCX, up to 2 MB.</p>
        </div>
        <div>
          <label htmlFor="cf-cover" className={labelClass}>Cover Letter (file)</label>
          <input
            id="cf-cover"
            name="coverLetter"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-cyan-50 file:text-cyan-700 file:font-medium hover:file:bg-cyan-100"
          />
          <p className="mt-1 text-xs text-slate-500">Upload a file, or write your cover letter below.</p>
        </div>
      </div>

      <div>
        <label htmlFor="cf-letter" className={labelClass}>Cover Letter (text)</label>
        <textarea
          id="cf-letter"
          name="coverLetterText"
          rows={6}
          maxLength={6000}
          className={inputClass}
          placeholder="Tell us about yourself and what you would like to build with us."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="consent" value="true" className="mt-1 h-4 w-4 accent-cyan-600" />
        <span>
          I agree that Nainika Technologies may use my details and documents to consider me for current and future
          roles, as described in the{" "}
          <a href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline">privacy policy</a>. *
        </span>
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="subscribe" value="true" className="mt-1 h-4 w-4 accent-cyan-600" />
        <span>Also send me Insights emails about AI agents, Salesforce, HubSpot, and RevOps. I can unsubscribe at any time.</span>
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 rounded-md p-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white font-medium py-3 px-8 rounded-md transition-all"
      >
        {isSubmitting ? "Sending..." : "Submit Application"}
      </button>
    </form>
  );
}
