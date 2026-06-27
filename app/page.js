import Navbar from "@/components/Landing/Navbar/Navbar";
import Hero from "@/components/Landing/Hero/Hero";
import Features from "@/components/Landing/Features/Features";
import Journey from "@/components/Landing/Journey/Journey";
import CTA from "@/components/Landing/CTA/CTA";
import Footer from "@/components/Landing/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Journey />
      <CTA />
      <Footer />
    </>
  );
}
