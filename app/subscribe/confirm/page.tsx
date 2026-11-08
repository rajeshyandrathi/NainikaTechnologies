import type { Metadata } from "next";
import TokenAction from "@/components/subscribe/token-action";

export const metadata: Metadata = {
  title: "Confirm your subscription",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ email?: string; token?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { email = "", token = "" } = await searchParams;

  return (
    <div className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-4">Confirm your subscription</h1>
        {email && token ? (
          <>
            <p className="text-slate-600 mb-6">Click the button below to confirm you want to receive Nainika Technologies Insights emails.</p>
            <TokenAction
              email={email}
              token={token}
              endpoint="/api/subscribe/confirm"
              buttonLabel="Confirm subscription"
              successText="Thank you. You're subscribed to Insights, and a welcome email is on its way. Every email we send includes a link to unsubscribe."
            />
          </>
        ) : (
          <p className="text-slate-600">This link is incomplete. Please open it again from your email.</p>
        )}
      </div>
    </div>
  );
}
