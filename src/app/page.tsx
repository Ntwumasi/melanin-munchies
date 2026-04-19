import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlight from "@/components/Highlight";
import Menu from "@/components/Menu";
import KidsMenu from "@/components/KidsMenu";
import AddOns from "@/components/AddOns";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlight />
        <Menu />
        <KidsMenu />
        <AddOns />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
