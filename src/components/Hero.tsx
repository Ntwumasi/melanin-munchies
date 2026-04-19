"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brown-dark"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark via-brown-dark/90 to-brown-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brown-medium)_0%,_transparent_70%)] opacity-30" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/logo.png"
            alt="Melanin Munchies"
            width={220}
            height={220}
            className="mx-auto mb-6 drop-shadow-2xl rounded-full"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-4"
        >
          Melanin{" "}
          <span className="gold-shimmer">Munchies</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-serif text-xl sm:text-2xl text-gold-light italic mb-2"
        >
          A Taste of Culture, A Bite of Bold
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium charcuterie, grazing tables, &amp; more&mdash;curated with
          love, rooted in culture. Beautifully curated. Boldly delicious.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-gold/20"
          >
            Explore Our Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-gold/50 hover:border-gold text-gold hover:text-gold-light px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Book Your Experience
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
