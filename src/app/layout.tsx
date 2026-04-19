import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melanin Munchies | A Taste of Culture, A Bite of Bold",
  description:
    "Premium charcuterie boxes, domes, boards & grazing tables in the Boston area. Beautifully curated. Boldly delicious. Rooted in culture.",
  keywords: [
    "charcuterie",
    "grazing table",
    "Boston charcuterie",
    "melanin munchies",
    "premium charcuterie",
    "kids charcuterie",
  ],
  openGraph: {
    title: "Melanin Munchies | A Taste of Culture, A Bite of Bold",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
