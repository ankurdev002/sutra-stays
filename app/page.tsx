"use client";
import Image from "next/image";
import HeroSection from "@/views/home/HeroSection";
import Featured from "@/views/home/Featured";
import WhySutra from "@/views/home/WhySutra";
import SutraFootPrint from "@/views/home/SutraFootPrint";
import SutraClients from "@/views/home/SutraClients";
import ExploreSutra from "@/views/home/ExploreSutra";
import { usePageTransition } from "@/hooks/usePageTransition";

export default function Home() {
  usePageTransition();

  return (
    <div className="h-full w-full">
      <HeroSection />
      <section id="stays" data-section="stays">
        <Featured />
      </section>
      <section id="about" data-section="about-us">
        <WhySutra />
      </section>
      <section id="partner" data-section="partners">
        <SutraFootPrint />
      </section>
      <section id="reviews" data-section="reviews">
        <SutraClients />
      </section>
      <ExploreSutra />
    </div>
  );
}
