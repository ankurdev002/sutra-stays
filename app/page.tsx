import Image from "next/image";
import HeroSection from "@/views/home/HeroSection";
import Featured from "@/views/home/Featured";
import WhySutra from "@/views/home/WhySutra";
import SutraFootPrint from "@/views/home/SutraFootPrint";
import SutraClients from "@/views/home/SutraClients";
import ExploreSutra from "@/views/home/ExploreSutra";

export default function Home() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <Featured />
      <WhySutra />
      <SutraFootPrint />
      <SutraClients />
      <ExploreSutra />
    </div>
  );
}
