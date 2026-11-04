"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo-Transparent.png"
                alt="Nainika Technologies Logo"
                width={64}
                height={64}
                priority
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold text-cyan-600">
                Nainika{" "}
                <span
                  className={`${
                    scrolled ? "text-black" : "text-black"
                  }`}
                >
                  Technologies
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={site.cta.href}
              className="hidden lg:inline-flex bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-all"
            >
              {site.cta.shortLabel}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none text-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 rounded-md font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={site.cta.href}
              className="block py-3 px-4 rounded-md font-medium text-center bg-cyan-600 hover:bg-cyan-700 text-white transition-all"
            >
              {site.cta.shortLabel}
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
