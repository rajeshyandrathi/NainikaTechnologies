import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { serviceGroups } from "@/lib/services";
import { site } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo-dark.svg"
              alt="Nainika Technologies"
              width={194}
              height={70}
              unoptimized
              className="mb-4 h-16 w-auto"
            />
            <p className="text-slate-300 mb-4">
              AI agents and RevOps systems for B2B SaaS companies
            </p>
            <Link href={site.cta.href} className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-all">
              {site.cta.shortLabel}
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nainika Technologies on LinkedIn"
              className="block w-fit mt-4 p-2 -ml-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {serviceGroups.map((group) => (
                <li key={group.id}>
                  <Link href={`/services#${group.id}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  13 Glen Abbey Rd, Cape Farms<br />
                  Sunningdale, Cape Town, South Africa, 7441
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-cyan-400 mr-2 flex-shrink-0" />
                <a href="tel:+27688906854" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  +27 68 890 6854
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-cyan-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@nainikatechnologies.co.za" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  info@nainikatechnologies.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            &copy; {currentYear} Nainika Technologies. All rights reserved.{" "}
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}


