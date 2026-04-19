"use client";

import FadeIn from "./FadeIn";

const categories = [
  {
    icon: "📦",
    title: "Boxes",
    desc: "Personal & shareable charcuterie boxes for every occasion",
  },
  {
    icon: "🔔",
    title: "Domes",
    desc: "Elegant, individual servings — unforgettable presentation",
  },
  {
    icon: "🧀",
    title: "Boards",
    desc: "Styled to impress. Made to share. A centerpiece for any gathering",
  },
  {
    icon: "🍽️",
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
                <div className="text-4xl sm:text-5xl mb-4">{cat.icon}</div>
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
