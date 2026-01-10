"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

import { categories, menuItems, type MenuItem } from "@/lib/data";

export default function OrdersPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const PHONE_NUMBER = "+44 7586 558414";

    // Group items by category
    const getGroupedItems = () => {
        let items = menuItems;

        // 1. Search Filter
        if (searchQuery) {
            items = items.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // 2. Grouping
        const grouped: Record<string, MenuItem[]> = {};

        // Initialize groups based on selected category or all categories
        const catsToShow = selectedCategory === "All" ? categories : [selectedCategory];

        catsToShow.forEach(cat => {
            const catItems = items.filter(item => item.category === cat);
            if (catItems.length > 0) {
                grouped[cat] = catItems;
            }
        });

        return grouped;
    };

    const groupedItems = getGroupedItems();
    const hasResults = Object.keys(groupedItems).length > 0;

    return (
        <main className="min-h-screen bg-black pt-24 pb-20">

            {/* Sticky Call to Order Banner (Mobile) */}
            <div className="fixed bottom-6 right-6 z-50 md:hidden">
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-green-500/30 hover:bg-green-700 transition-colors"
                >
                    <Phone className="w-5 h-5" /> Call to Order
                </a>
            </div>

            {/* Header */}
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
                        Our Menu
                    </h1>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                    <div className="hidden md:flex justify-center pt-2">
                        <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-bold text-xl transition-colors">
                            <Phone className="w-5 h-5" /> {PHONE_NUMBER}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Filters & Search */}
            <div className="sticky top-[72px] z-40 bg-black/95 backdrop-blur-md border-b border-white/10 mb-12 shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                                    selectedCategory === "All"
                                        ? "bg-orange-600 text-white"
                                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                                        selectedCategory === cat
                                            ? "bg-orange-600 text-white"
                                            : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu List */}
            <div className="container mx-auto px-4 max-w-7xl">
                {!hasResults ? (
                    <div className="text-center py-20 text-slate-500">
                        <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No items found.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-orange-500 hover:text-orange-400 underline"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className={cn(
                        "transition-all",
                        selectedCategory === "All"
                            ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                            : "space-y-12"
                    )}>
                        {Object.entries(groupedItems).map(([category, items]) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "50px" }}
                                className={cn(
                                    "break-inside-avoid mb-6", // For masonry layout
                                    selectedCategory === "All"
                                        ? "bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-colors"
                                        : ""
                                )}
                            >
                                <div className={cn(
                                    "flex items-center gap-4 mb-6",
                                    selectedCategory !== "All" && "justify-center"
                                )}>
                                    <h2 className={cn(
                                        "font-display font-bold text-orange-500",
                                        selectedCategory === "All" ? "text-2xl" : "text-4xl"
                                    )}>
                                        {category}
                                    </h2>
                                    {selectedCategory !== "All" && <div className="h-0.5 bg-orange-500/50 w-24 rounded-full" />}
                                </div>

                                <div className={cn(
                                    selectedCategory === "All"
                                        ? "space-y-4"
                                        : "grid md:grid-cols-2 gap-x-12 gap-y-8"
                                )}>
                                    {items.map((item) => (
                                        <div key={item.id} className="group flex justify-between gap-3 relative">
                                            <div className="grow">
                                                <div className="flex items-baseline justify-between">
                                                    <h3 className={cn(
                                                        "font-bold text-slate-200 group-hover:text-orange-400 transition-colors text-base",
                                                        selectedCategory !== "All" && "text-lg"
                                                    )}>
                                                        {item.name}
                                                    </h3>
                                                    {/* Dotted Line */}
                                                    {selectedCategory !== "All" && (
                                                        <div className="grow mx-3 border-b border-white/10 border-dotted opacity-30 h-1 hidden sm:block" />
                                                    )}
                                                </div>
                                                <p className="text-xs text-slate-500 leading-snug line-clamp-2 mt-0.5">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <span className={cn(
                                                "font-semibold text-orange-500 whitespace-nowrap text-sm",
                                                selectedCategory !== "All" && "text-base"
                                            )}>
                                                £{item.price.toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
