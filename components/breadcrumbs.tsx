import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

// Visible breadcrumb trail plus BreadcrumbList data for search engines and AI assistants.
export default function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
  const linkClass = tone === "dark" ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700";
  const textClass = tone === "dark" ? "text-slate-300" : "text-slate-500";

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${textClass}`}>
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span aria-current="page" className="line-clamp-1">{item.name}</span>
              ) : (
                <Link href={item.href} className={`py-2 font-medium ${linkClass}`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
