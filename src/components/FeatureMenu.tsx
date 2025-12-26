"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Plus } from "lucide-react";
import { POS_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const featuredItems = [
    {
        id: 1,
        name: "Artisan Truffle Burger",
        description: "Wagyu beef patty, black truffle aioli, brie cheese, and caramelized onions on brioche.",
        price: "$18.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500&auto=format&fit=crop",
        category: "Signature"
    },
    {
        id: 2,
        name: "Spicy Miso Ramen",
        description: "Rich pork broth, chashu, soft-boiled egg, corn, and chili oil.",
        price: "$16.50",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1500&auto=format&fit=crop",
        category: "Bestseller"
    },
    {
        id: 3,
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.",
        price: "$22.00",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1500&auto=format&fit=crop",
        category: "Vegetarian"
    }
];

export function FeatureMenu() {
    return (
        <section id="menu" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-500 font-medium tracking-wider uppercase text-sm"
                    >
                        Curated Selection
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
                    >
                        Menu Highlights
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        Explore our chef's hand-picked favorites, crafted with passion and precision.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                                        <Star className="w-4 h-4 fill-yellow-500" />
                                        {item.rating}
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-white">{item.price}</span>
                                    <Link
                                        href={POS_URL}
                                        className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-orange-600 transition-colors group-hover:scale-110"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href={POS_URL}
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-orange-500 transition-colors group"
                    >
                        View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
