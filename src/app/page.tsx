import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularDishes } from "@/components/PopularDishes";
import { PosFeatures } from "@/components/PosFeatures";
import { Testimonials } from "@/components/Testimonials";
import { ReservationsContact } from "@/components/ReservationsContact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500/30">
      <Hero />
      <HowItWorks />
      <PopularDishes />
      <PosFeatures />
      <Testimonials />
      <ReservationsContact />
    </main>
  );
}
