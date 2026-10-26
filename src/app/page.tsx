import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import WhatIsPossible from "@/components/WhatIsPossible";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-night">
        <Hero />
        <About />
        <WhatIsPossible />
        <Vision />
        <Mission />
      </main>
      <Footer />
    </>
  );
}