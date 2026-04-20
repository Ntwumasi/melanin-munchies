"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, open mailto with form data
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const event = data.get("event") as string;
    const date = data.get("date") as string;
    const guests = data.get("guests") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Booking Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent Type: ${event}\nEvent Date: ${date}\nGuest Count: ${guests}\n\nMessage:\n${message}`
    );
    window.open(`mailto:melaninmunchies25@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-b from-brown-dark to-[#1a0d07] relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <Image
              src="/logo.png"
              alt="Melanin Munchies"
              width={80}
              height={80}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4">
              Let&apos;s Create Something{" "}
              <span className="gold-shimmer">Beautiful</span> Together
            </h2>
            <p className="text-cream/60 text-lg max-w-xl mx-auto">
              Ready to elevate your next event? Fill out the form below or reach
              out on Instagram.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <FadeIn direction="left">
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                  Thank You!
                </h3>
                <p className="text-cream/60">
                  Your inquiry has been sent. We&apos;ll get back to you soon!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/20 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-cream/70 text-sm mb-1.5 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cream/70 text-sm mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="event" className="block text-cream/70 text-sm mb-1.5 font-medium">
                      Event Type
                    </label>
                    <select
                      id="event"
                      name="event"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                    >
                      <option value="personal" className="bg-brown-dark">Personal</option>
                      <option value="party" className="bg-brown-dark">Party</option>
                      <option value="wedding" className="bg-brown-dark">Wedding</option>
                      <option value="corporate" className="bg-brown-dark">Corporate</option>
                      <option value="other" className="bg-brown-dark">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-cream/70 text-sm mb-1.5 font-medium">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-cream/70 text-sm mb-1.5 font-medium">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="# of guests"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-cream/70 text-sm mb-1.5 font-medium">
                    Tell us about your event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors resize-none"
                    placeholder="What are you looking for? Any dietary needs, themes, or special requests?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white py-3.5 rounded-full font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-brown-dark"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-medium">Location</p>
                      <p className="text-cream/60 text-sm">Boston Area, MA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-medium">Instagram</p>
                      <a
                        href="https://www.instagram.com/melaninmunchies25/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-light text-sm transition-colors underline underline-offset-2"
                      >
                        @melaninmunchies25
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-medium">Notice</p>
                      <p className="text-cream/60 text-sm">
                        48-hour advance notice required
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-medium">Deposit</p>
                      <p className="text-cream/60 text-sm">
                        50% deposit required to book
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/melaninmunchies25/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold hover:bg-gold-dark text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-gold/20 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-brown-dark"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow @melaninmunchies25
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
