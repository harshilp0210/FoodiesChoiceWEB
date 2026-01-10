import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500/30">
      <Hero
        title="Welcome to"
        highlight="Foodie's Choice"
        subtitle="Experience the rich, authentic flavors of India right here in Wembley. Traditional recipes, modern dining."
      />

      {/* Featured / Introduction Section */}
      <section className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Explore Our <span className="text-orange-500">Delicacies</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
            From sizzling tandoori starters to rich, aromatic curries, our menu is a journey through the streets of India.
          </p>
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20"
          >
            View Full Menu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <StorySection />
    </main>
  );
}
