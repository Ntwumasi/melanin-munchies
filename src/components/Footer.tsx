import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a0d07] border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Melanin Munchies"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-cream/70 text-sm">
              &copy; {new Date().getFullYear()} Melanin Munchies. All rights
              reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/melaninmunchies25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#menu"
              className="text-cream/60 hover:text-gold transition-colors text-sm"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-cream/60 hover:text-gold transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
