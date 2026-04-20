"use client";

import FadeIn from "./FadeIn";

const kidsItems = [
  {
    name: "Lil' Munchie Snack Box",
    price: "$10",
    desc: "Crackers, cheese, deli roll-ups, fruit, cookies",
  },
  {
    name: "Build-A-Munch Box",
    price: "$12",
    desc: "Pick any 5: cheese, crackers, meat, fruit, pretzels, yogurt bites, sweets",
  },
  {
    name: "Sweet Tooth Box",
    price: "$12",
    desc: "Chocolate treats, cookies, marshmallows, fruit, candy mix",
  },
  {
    name: "Mini Munchie Board",
    price: "$18",
    desc: "Perfect for sharing (2–3 kids). Savory + sweet mix",
  },
  {
    name: "Kids Grazing Tray",
    price: "$35",
    desc: "Feeds 5–7 kids. Perfect for birthdays & events!",
  },
];

const kidsAddOns = [
  { name: "Juice Box", price: "+$2" },
  { name: "Chocolate Dip", price: "+$3" },
  { name: "Themed Box", price: "Custom" },
  { name: "Name Personalization", price: "+$3" },
];

export default function KidsMenu() {
  return (
    <section
      id="kids"
      className="py-20 sm:py-28 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-accent-pink font-semibold tracking-widest uppercase text-sm mb-3">
              For the Little Ones
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-2">
              Kids Charcuterie
            </h2>
            <p className="font-serif text-xl text-gold italic mb-2">
              Little Boards, Big Vibes!
            </p>
            <p className="text-brown-medium text-base max-w-xl mx-auto">
              Fun, flavorful, and made with love! Perfect for playdates,
              parties, and even the pickiest eaters.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {kidsItems.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-accent-pink/20 hover:border-gold/30 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-lg font-bold text-brown-dark flex-1">
                    {item.name}
                  </h3>
                  <span className="text-gold font-bold text-xl ml-3">
                    {item.price}
                  </span>
                </div>
                <p className="text-brown-medium text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-tan-light/50 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-brown-dark mb-4 text-center">
              Kids Add-Ons
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {kidsAddOns.map((addon) => (
                <div
                  key={addon.name}
                  className="text-center p-3 rounded-xl bg-cream border border-tan-light/30"
                >
                  <p className="font-semibold text-brown-dark text-sm">
                    {addon.name}
                  </p>
                  <p className="text-gold font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
