import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Cloudforce Technologies</h3>
            <p className="text-slate-300 mb-4">
              Empowering Innovation, Driving Digital Transformation
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Cloudforce-Technologies/61576771890468/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/cloudforceSA" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/cloudforce-technologies" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
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
              <li>
                <Link href="/services#software-development" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Cloud-Native Application Development
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Innovative Web & Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-implementation" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Enterprise Cloud Architecture & Migration
                </Link>
              </li>
              <li>
                <Link href="/services#custom-integrations" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  API-Driven Integration & Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce-solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  AI-Powered E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#quality-assurance" className="text-slate-300 hover:text-cyan-400 transition-colors">
                 Intelligent Quality Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  1 Boschendal, 28 Harry Galaun<br />
                  Halfway Gardens, Midrand, South Africa, 1686
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-slate-300">+27 68 890 6854</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-cyan-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@cftechnologies.co.za" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  info@cftechnologies.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            &copy; {currentYear} Cloudforce Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
