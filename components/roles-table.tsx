"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Role } from "@/lib/careers";

const PAGE_SIZE = 5;

function locationsOf(role: Role) {
  return role.location.split(/\s+or\s+|,\s*/).map((l) => l.trim()).filter(Boolean);
}

export default function RolesTable({ roles }: { roles: Role[] }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);

  const allLocations = useMemo(
    () => Array.from(new Set(roles.flatMap(locationsOf))).sort(),
    [roles],
  );

  const filtered = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return roles.filter((role) => {
      if (location && !locationsOf(role).includes(location)) return false;
      const text = [role.title, role.type, role.location, role.summary, ...role.responsibilities, ...role.requirements]
        .join(" ")
        .toLowerCase();
      return words.every((w) => text.includes(w));
    });
  }, [roles, query, location]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const pageRoles = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <label className="flex-1">
          <span className="sr-only">Search roles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by keyword, for example AI, Salesforce, data"
            className="w-full border border-slate-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </label>
        <label>
          <span className="sr-only">Filter by location</span>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-56 border border-slate-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All locations</option>
            {allLocations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </div>

      {pageRoles.length === 0 ? (
        <p className="bg-white rounded-xl shadow-lg p-6 text-center text-slate-600">
          No roles match your search. Try another keyword or location.
        </p>
      ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-white text-sm uppercase tracking-wide">
                  <tr>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4"><span className="sr-only">Apply</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {pageRoles.map((role) => (
                    <tr key={role.slug} id={role.slug} className="align-top">
                      <td className="py-4 px-4 min-w-[280px]">
                        <h3 className="font-bold text-cyan-600 text-lg">{role.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{role.summary}</p>
                        <details className="mt-2 text-sm">
                          <summary className="cursor-pointer text-cyan-600 hover:text-cyan-700 font-medium">View details</summary>
                          <div className="grid md:grid-cols-2 gap-4 mt-3">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">What you will do</h4>
                              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                {role.responsibilities.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">What we are looking for</h4>
                              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                {role.requirements.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </details>
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm whitespace-nowrap">{role.type}</td>
                      <td className="py-4 px-4 text-slate-600 text-sm">{role.location}</td>
                      <td className="py-4 px-4">
                        <Link
                          href={`/careers?role=${role.slug}#apply`}
                          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-all inline-flex items-center text-sm"
                        >
                          Apply
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      )}

      {pageCount > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-6" aria-label="Open roles pages">
          <button
            type="button"
            onClick={() => setPage(current - 1)}
            disabled={current === 1}
            className="px-3 py-1 rounded-md border border-slate-300 bg-white text-slate-700 disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === current ? "page" : undefined}
              className={`px-3 py-1 rounded-md border ${n === current ? "bg-cyan-600 border-cyan-600 text-white" : "bg-white border-slate-300 text-slate-700"}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(current + 1)}
            disabled={current === pageCount}
            className="px-3 py-1 rounded-md border border-slate-300 bg-white text-slate-700 disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
      <p className="text-center text-sm text-slate-500 mt-3">
        Showing {pageRoles.length} of {filtered.length} roles
      </p>
    </div>
  );
}
