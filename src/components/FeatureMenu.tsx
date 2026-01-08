"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Flame, Leaf, ShoppingBag } from "lucide-react"; // Icons for dietary (Flame=Spicy, Leaf=Veg)
import { categories, menuItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { POS_URL } from "@/lib/constants";

export function FeatureMenu() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    // Helper to generate safe IDs for scrolling
    const toId = (cat: string) => cat.toLowerCase().replace(/[^a-z0-9]/g, '-');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for navbar

            for (const category of categories) {
                const id = toId(category);
                const element = sectionRefs.current[id];
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveCategory(category);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCategory = (cat: string) => {
        const id = toId(cat);
        const element = sectionRefs.current[id];
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 120; // Adjust for sticky headers
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-neutral-900 min-h-screen pb-20">
            {/* Sticky Category Nav */}
            <div className="sticky top-[72px] md:top-[88px] z-40 bg-neutral-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
                <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-6 py-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => scrollToCategory(cat)}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-wider transition-all duration-300 relative px-2 py-1",
                                    activeCategory === cat ? "text-orange-500" : "text-neutral-400 hover:text-white"
                                )}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-[17px] left-0 right-0 h-1 bg-orange-500"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="container mx-auto px-4 pt-8">
                {categories.map((category) => {
                    const categoryItems = menuItems.filter(item => item.category === category);
                    // Skip categories with no items
                    if (categoryItems.length === 0) return null;

                    return (
                        <div
                            key={category}
                            id={toId(category)}
                            ref={(el) => { sectionRefs.current[toId(category)] = el; }}
                            className="scroll-mt-32 mb-16"
                        >
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-display font-bold text-white mb-8 border-l-4 border-orange-500 pl-4"
                            >
                                {category}
                            </motion.h3>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                {categoryItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="group flex flex-col gap-2 pb-6 border-b border-white/5"
                                    >
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                                {item.name}
                                            </h4>
                                            <span className="text-lg font-semibold text-orange-500 shrink-0 ml-4">
                                                £{item.price.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 text-xs font-medium text-neutral-400">
                                            {item.dietary?.isVegetarian && (
                                                <span className="flex items-center gap-1 text-green-400 bg-green-950/30 px-2 py-0.5 rounded border border-green-900">
                                                    <Leaf className="w-3 h-3" /> Veg
                                                </span>
                                            )}
                                            {item.dietary?.isSpicy && (
                                                <span className="flex items-center gap-1 text-red-400 bg-red-950/30 px-2 py-0.5 rounded border border-red-900">
                                                    <Flame className="w-3 h-3" /> Spicy
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center pb-12">
                <Link
                    href={POS_URL}
                    className="flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/20"
                >
                    Order Full Menu Online <ShoppingBag className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
