import type { Metadata } from "next";
import TokenAction from "@/components/subscribe/token-action";

export const metadata: Metadata = {
  title: "Unsubscribe from Insights",
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
        <h1 className="text-3xl font-bold text-black mb-4">Unsubscribe from Insights</h1>
        {email && token ? (
          <>
            <p className="text-slate-600 mb-6">Click the button below to stop receiving Nainika Technologies Insights emails.</p>
            <TokenAction
              email={email}
              token={token}
              endpoint="/api/unsubscribe"
              buttonLabel="Unsubscribe"
              successText="You're unsubscribed. We won't send you any more Insights emails."
            />
          </>
        ) : (
          <p className="text-slate-600">This link is incomplete. Please open it again from your email.</p>
        )}
      </div>
    </div>
  );
}
