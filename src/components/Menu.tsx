"use client";

import FadeIn from "./FadeIn";

interface MenuItem {
  name: string;
  serves: string;
  price: string;
  desc?: string;
}

interface MenuCategory {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Personal & Small Boxes",
    subtitle: "Perfect for personal snacking & light grazing",
    items: [
      {
        name: "Mini Box",
        serves: "1 person",
        price: "$12–$15",
        desc: "Perfect snack size with curated meats, cheeses & fruit",
      },
      {
        name: "Small Box",
        serves: "2–3 people",
        price: "$25–$35",
        desc: "Great for date nights or light grazing",
      },
    ],
  },
  {
    title: "Medium & Large Boxes",
    subtitle: "Ideal for gatherings & events",
    items: [
      {
        name: "Medium Box",
        serves: "4–6 people",
        price: "$55–$75",
        desc: "Balanced selection of premium items",
      },
      {
        name: "Large Box",
        serves: "8–10 people",
        price: "$95–$120",
        desc: "Ideal for small gatherings",
      },
    ],
  },
  {
    title: "Charcuterie Domes",
    subtitle: "Elegant. Individual. Unforgettable.",
    items: [
      {
        name: "Single Dome",
        serves: "1–2 people",
        price: "$20–$30",
      },
      {
        name: "Set of 4 Domes",
        serves: "4–8 people",
        price: "$75–$100",
      },
      {
        name: "Set of 6 Domes",
        serves: "6–12 people",
        price: "$110–$140",
        desc: "Perfect for events & parties",
      },
    ],
  },
  {
    title: "Charcuterie Boards",
    subtitle: "Styled to impress. Made to share.",
    items: [
      {
        name: "Small",
        serves: "Up to 8 people",
        price: "$120–$150",
      },
      {
        name: "Medium",
        serves: "10–15 people",
        price: "$180–$250",
      },
      {
        name: "Large",
        serves: "15–25 people",
        price: "$275–$400",
        desc: "Includes premium styling & presentation",
      },
    ],
  },
  {
    title: "Grazing Tables",
    subtitle: "A full experience, beautifully set up",
    items: [
      {
        name: "Small",
        serves: "Up to 20 guests",
        price: "Starting at $350",
      },
      {
        name: "Medium",
        serves: "25–40 guests",
        price: "Starting at $550",
      },
      {
        name: "Large",
        serves: "50+ guests",
        price: "Starting at $800+",
        desc: "Includes setup, styling & breakdown. Custom themes available.",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-brown-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Our Offerings
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">
              Menu &amp; Pricing
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              Beautifully curated. Boldly delicious.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuData.map((category, ci) => (
            <FadeIn key={category.title} delay={ci * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/10 hover:border-gold/30 transition-all h-full">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-1">
                  {category.title}
                </h3>
                <p className="text-cream/50 text-sm mb-6 italic">
                  {category.subtitle}
                </p>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-cream font-semibold">
                            {item.name}
                          </p>
                          <p className="text-cream/40 text-xs">
                            {item.serves}
                          </p>
                        </div>
                        <span className="text-gold font-bold text-lg whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="text-cream/50 text-sm mt-1">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
