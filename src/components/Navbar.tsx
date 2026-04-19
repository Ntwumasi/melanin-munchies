"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Kids", href: "#kids" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brown-dark/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Melanin Munchies"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-serif text-lg sm:text-xl font-bold text-cream hidden sm:block">
              Melanin Munchies
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-cream transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brown-dark/98 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/90 hover:text-gold text-lg font-medium tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full text-center font-semibold mt-2"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
