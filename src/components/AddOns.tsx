"use client";

import FadeIn from "./FadeIn";

const addOns = [
  { name: "Chocolate-Covered Strawberries", price: "$15/dozen" },
  { name: "Specialty Cheeses", price: "+$10–$25" },
  { name: "Extra Meats", price: "+$15" },
  { name: "Honeycomb", price: "+$10" },
  { name: "Crackers/Bread Upgrades", price: "+$5–$15" },
  { name: "Custom Themes/Colors", price: "Starting at +$25" },
];

export default function AddOns() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-cream-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Customize Your Order
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
              Add-Ons
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {addOns.map((addon, i) => (
            <FadeIn key={addon.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-lg transition-all border border-tan-light/50 hover:border-gold/30 hover:-translate-y-1">
                <p className="font-semibold text-brown-dark mb-2 text-sm sm:text-base">
                  {addon.name}
                </p>
                <p className="text-gold font-bold text-lg">{addon.price}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Important Info */}
        <FadeIn delay={0.2}>
          <div className="bg-brown-dark rounded-2xl p-6 sm:p-10">
            <h3 className="font-serif text-2xl font-bold text-gold mb-6 text-center">
              Important Info
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "48-hour notice required for all orders",
                "50% deposit required to book",
                "Delivery available (fee based on location)",
                "Custom orders welcomed — pricing may vary",
              ].map((info) => (
                <div key={info} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-lg flex-shrink-0">
                    &#9829;
                  </span>
                  <p className="text-cream/80 text-sm sm:text-base">{info}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
