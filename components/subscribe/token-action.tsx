"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type TokenActionProps = {
  email: string;
  token: string;
  endpoint: string;
  buttonLabel: string;
  successText: string;
};

// A button, not an automatic action, so email link scanners can't confirm or unsubscribe by visiting the page.
export default function TokenAction({ email, token, endpoint, buttonLabel, successText }: TokenActionProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const run = async () => {
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status">
        <p className="text-slate-700 mb-6">{successText}</p>
        <Link href="/insights" className="text-cyan-600 font-medium hover:text-cyan-700">
          Go to Insights
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-slate-700 mb-6 break-all">
        Email address: <strong>{email}</strong>
      </p>
      <button
        type="button"
        onClick={run}
        disabled={status === "sending"}
        className="bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white font-medium py-3 px-6 rounded-md transition-all"
      >
        {status === "sending" ? "Please wait..." : buttonLabel}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-4" role="alert">
          This link is invalid or has expired. Please try again, or email us at {site.email}.
        </p>
      )}
    </div>
  );
}
