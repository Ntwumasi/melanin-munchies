"use client";

import FadeIn from "./FadeIn";
import { ReactNode } from "react";

const iconClass = "w-10 h-10 sm:w-12 sm:h-12";

const BoxIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} className={iconClass}>
    <rect x="8" y="18" width="32" height="22" rx="2" />
    <path d="M8 18l16-10 16 10" />
    <path d="M24 8v32" />
    <path d="M8 18h32" />
  </svg>
);

const DomeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} className={iconClass}>
    <path d="M6 32c0-9.94 8.06-18 18-18s18 8.06 18 18" />
    <line x1="4" y1="32" x2="44" y2="32" />
    <line x1="6" y1="36" x2="42" y2="36" />
    <circle cx="24" cy="10" r="2" />
  </svg>
);

const BoardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} className={iconClass}>
    <rect x="6" y="10" width="36" height="28" rx="3" />
    <circle cx="16" cy="20" r="2.5" />
    <circle cx="28" cy="18" r="1.5" />
    <circle cx="34" cy="24" r="2" />
    <circle cx="20" cy="28" r="1.5" />
    <circle cx="30" cy="30" r="2.5" />
    <circle cx="14" cy="32" r="1" />
  </svg>
);

const TableIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} className={iconClass}>
    <rect x="4" y="14" width="40" height="6" rx="2" />
    <line x1="10" y1="20" x2="10" y2="40" />
    <line x1="38" y1="20" x2="38" y2="40" />
    <line x1="7" y1="40" x2="13" y2="40" />
    <line x1="35" y1="40" x2="41" y2="40" />
    <path d="M16 14c0-4 3.5-6 8-6s8 2 8 6" />
  </svg>
);

const categories: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <BoxIcon />,
    title: "Boxes",
    desc: "Personal & shareable charcuterie boxes for every occasion",
  },
  {
    icon: <DomeIcon />,
    title: "Domes",
    desc: "Elegant, individual servings — unforgettable presentation",
  },
  {
    icon: <BoardIcon />,
    title: "Boards",
    desc: "Styled to impress. Made to share. A centerpiece for any gathering",
  },
  {
    icon: <TableIcon />,
    title: "Grazing Tables",
    desc: "A full experience, beautifully set up for your guests",
  },
];

export default function About() {
  return (
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-border-shimmer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
              Elevate Every Occasion
            </h2>
            <p className="text-brown-medium text-lg max-w-2xl mx-auto">
              Made to taste, made to share, made to wow. From intimate date
              nights to grand celebrations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-tan-light/50 hover:border-gold/30 hover:-translate-y-1">
                <div className="text-brown-medium group-hover:text-gold transition-colors mb-4 flex justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-dark mb-2 group-hover:text-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-brown-medium text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
