"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { type SubscribeValues, subscribeSchema } from "@/lib/subscribe-schema";

type SubscribeInsightsProps = {
  className?: string;
};

export default function SubscribeInsights({ className = "" }: SubscribeInsightsProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeValues) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("The subscription was not saved.");
      setStatus("success");
      track("insights_subscribe");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={`rounded-xl bg-slate-900 text-white p-8 md:p-10 shadow-lg ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-cyan-600 rounded-lg">
          <Mail size={20} />
        </div>
        <h2 className="text-2xl font-bold">Subscribe to Insights</h2>
      </div>
      <p className="text-slate-300 mb-6">
        Get our new playbooks on AI agents, Salesforce, HubSpot, and RevOps in your inbox. No spam, and you can unsubscribe at any time.
      </p>

      {status === "success" ? (
        <p className="text-cyan-300 font-medium" role="status">
          Thank you. You're subscribed, and a welcome email is on its way.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              {...register("email")}
              className="flex-1 rounded-md px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white font-medium py-3 px-6 rounded-md transition-all"
            >
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {errors.email && <p className="text-red-300 text-sm mt-2">{errors.email.message}</p>}

          <label className="flex items-start gap-3 mt-4 text-sm text-slate-300">
            <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 accent-cyan-600" />
            <span>
              I agree to receive Insights emails from Nainika Technologies. See our{" "}
              <Link href="/privacy" className="underline hover:text-white">
                privacy policy
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="text-red-300 text-sm mt-2">{errors.consent.message}</p>}

          {status === "error" && (
            <p className="text-red-300 text-sm mt-3" role="alert">
              Something went wrong. Please try again, or email us to subscribe.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
