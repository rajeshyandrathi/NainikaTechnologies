import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard Coming Soon</h1>
        <p>This area is under development. Please check back later.</p>
      </div>
    </div>
  );
}