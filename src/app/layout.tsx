import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://melaninmunchies.com"),
  title: "Melanin Munchies | Premium Charcuterie in Boston",
  description:
    "Premium charcuterie boxes, domes, boards & grazing tables in the Boston area. Beautifully curated. Boldly delicious. Rooted in culture. Book your experience today.",
  keywords: [
    "charcuterie Boston",
    "grazing table Boston",
    "charcuterie board delivery",
    "melanin munchies",
    "premium charcuterie",
    "kids charcuterie",
    "charcuterie boxes",
    "event catering Boston",
  ],
  openGraph: {
    title: "Melanin Munchies | Premium Charcuterie in Boston",
    description:
      "Premium charcuterie boxes, domes, boards & grazing tables. Beautifully curated. Boldly delicious. Rooted in culture.",
    type: "website",
    locale: "en_US",
    siteName: "Melanin Munchies",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Melanin Munchies - A Taste of Culture, A Bite of Bold",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Melanin Munchies | Premium Charcuterie in Boston",
    description:
      "Premium charcuterie boxes, domes, boards & grazing tables. Beautifully curated. Boldly delicious.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
