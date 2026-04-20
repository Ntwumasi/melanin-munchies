"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Story() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-tan-light to-cream-dark flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Melanin Munchies"
                  width={320}
                  height={320}
                  className="rounded-2xl"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-6">
                Rooted in Culture
              </h2>
              <div className="space-y-4 text-brown-medium leading-relaxed">
                <p>
                  Melanin Munchies was born from a love of food, community, and
                  celebration. What started as beautifully crafted boards for
                  family gatherings quickly grew into a passion for elevating
                  every occasion with bold flavors and stunning presentation.
                </p>
                <p>
                  Based in the Boston area, we believe food is more than
                  nourishment &mdash; it&apos;s culture, connection, and art.
                  Every box, board, and grazing table is curated with intention,
                  blending premium ingredients with a style that&apos;s
                  unapologetically bold.
                </p>
                <p>
                  From intimate date nights to milestone celebrations, we bring
                  the wow factor &mdash; because your moments deserve to be
                  beautiful.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-serif text-2xl font-bold text-gold">
                    Boston
                  </p>
                  <p className="text-brown-medium text-sm">Based &amp; Local</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-gold">
                    Fresh
                  </p>
                  <p className="text-brown-medium text-sm">
                    Quality Ingredients
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-gold">
                    Custom
                  </p>
                  <p className="text-brown-medium text-sm">Made for You</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
