export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Melanin Munchies",
    description:
      "Premium charcuterie boxes, domes, boards & grazing tables in the Boston area. Beautifully curated. Boldly delicious. Rooted in culture.",
    image: "https://melaninmunchies.com/logo.png",
    url: "https://melaninmunchies.com",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Boston",
    },
    sameAs: ["https://www.instagram.com/melaninmunchies25/"],
    priceRange: "$$",
    servesCuisine: "Charcuterie",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Charcuterie Menu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal & Small Boxes",
            description:
              "Curated charcuterie boxes for 1-3 people. Starting at $12.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medium & Large Boxes",
            description:
              "Premium charcuterie boxes for 4-10 people. Starting at $55.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Charcuterie Domes",
            description:
              "Elegant individual charcuterie domes. Starting at $20.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Charcuterie Boards",
            description:
              "Beautifully styled boards for up to 25 people. Starting at $120.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grazing Tables",
            description:
              "Full grazing table experience for up to 50+ guests. Starting at $350.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kids Charcuterie",
            description:
              "Fun, kid-friendly charcuterie boxes and boards. Starting at $10.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
