import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import About from "@/components/About";
import Highlight from "@/components/Highlight";
import Menu from "@/components/Menu";
import KidsMenu from "@/components/KidsMenu";
import AddOns from "@/components/AddOns";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Story />
        <About />
        <Highlight />
        <Menu />
        <KidsMenu />
        <AddOns />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
