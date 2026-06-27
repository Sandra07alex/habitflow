import CTA from "@/components/Landing/CTA/CTA";
import Features from "@/components/Landing/Features/Features";
import Footer from "@/components/Landing/Footer/Footer";
import Hero from "@/components/Landing/Hero/Hero";
import Journey from "@/components/Landing/Journey/Journey";
import Navbar from "@/components/Landing/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
