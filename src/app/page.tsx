import { Hero } from "@/components/Hero";
import { FeatureMenu } from "@/components/FeatureMenu";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500/30">
      <Hero />
      <FeatureMenu />
      <StorySection />
    </main>
  );
}
