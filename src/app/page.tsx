import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500/30">
      <Hero />
      {/* Featured sections moved to their own pages */}
    </main>
  );
}
