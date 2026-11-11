import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { current: number; total: number; basePath: string };

export function pageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}/page/${page}`;
}

export default function Pagination({ current, total, basePath }: Props) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const base = "inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-md text-sm font-medium transition-colors";
  const idle = "bg-white text-slate-700 shadow hover:bg-cyan-50 hover:text-cyan-700";
  const disabled = "bg-white text-slate-300 shadow cursor-not-allowed";
  return (
    <nav aria-label="Pagination" className="max-w-5xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-2">
      {current > 1 ? (
        <Link href={pageHref(basePath, current - 1)} className={`${base} ${idle} gap-1`} rel="prev">
          <ChevronLeft size={16} /> Previous
        </Link>
      ) : (
        <span className={`${base} ${disabled} gap-1`} aria-disabled="true">
          <ChevronLeft size={16} /> Previous
        </span>
      )}
      {pages.map((p) =>
        p === current ? (
          <span key={p} aria-current="page" className={`${base} bg-cyan-600 text-white shadow`}>
            {p}
          </span>
        ) : (
          <Link key={p} href={pageHref(basePath, p)} className={`${base} ${idle}`} aria-label={`Page ${p}`}>
            {p}
          </Link>
        ),
      )}
      {current < total ? (
        <Link href={pageHref(basePath, current + 1)} className={`${base} ${idle} gap-1`} rel="next">
          Next <ChevronRight size={16} />
        </Link>
      ) : (
        <span className={`${base} ${disabled} gap-1`} aria-disabled="true">
          Next <ChevronRight size={16} />
        </span>
      )}
    </nav>
  );
}
