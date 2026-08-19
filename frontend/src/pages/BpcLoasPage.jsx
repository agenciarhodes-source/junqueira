import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Situations } from "@/components/landing/Situations";
import { Chapters } from "@/components/landing/Chapters";
import { Analysis } from "@/components/landing/Analysis";
import { Steps } from "@/components/landing/Steps";
import { Faq } from "@/components/landing/Faq";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";
import { StickyCta } from "@/components/landing/StickyCta";
import { pushEvent } from "@/lib/tracking";

export default function BpcLoasPage() {
  useEffect(() => {
    document.title = "BPC/LOAS: entenda os critérios da análise | Junqueira Advogados";
    pushEvent("landing_view", { landing: "bpc-loas" });
  }, []);

  return (
    <div data-testid="bpc-loas-page" className="grain min-h-screen bg-[#F1F1F1]">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Marquee />
        <Situations />
        <Chapters />
        <Analysis />
        <Steps />
        <Faq />
        <About />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
