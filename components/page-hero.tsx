import type { ReactNode } from "react";
import LogoWatermark from "@/components/logo-watermark";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#08283C] to-cyan-900 text-white pt-28 md:pt-36 pb-16 md:pb-24 px-4">
      <LogoWatermark />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-medium text-cyan-200">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
          {title}{highlight && <span className="text-cyan-300"> {highlight}</span>}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl">{description}</p>
        {children}
      </div>
    </section>
  );
}
