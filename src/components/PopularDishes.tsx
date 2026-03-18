"use client";

import { motion } from "framer-motion";
import { menuItems } from "@/lib/data";
import { Flame, Leaf, ShoppingCart } from "lucide-react";
import Image from "next/image";

export function PopularDishes() {
    // Filter out 4-8 popular dishes
    const popularDishes = menuItems.filter(item => item.popular).slice(0, 8);

    return (
        <section className="py-20 bg-neutral-900 border-b border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Our Customer <span className="text-orange-500">Favorites</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Discover the dishes our customers keep coming back for, featuring the best flavors Foodies Choice has to offer.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularDishes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-black border border-white/5 rounded-2xl overflow-hidden group hover:border-orange-500/30 transition-all shadow-xl hover:shadow-orange-500/10 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-neutral-800">
                                {/* Placeholder image using unsplash for better look, or keep gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                                {/* Example real image integration if images were available:
                                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> 
                                */}
                                
                                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Customer Favorite
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">{item.name}</h3>
                                    <span className="text-lg font-bold text-orange-500 ml-3">£{item.price.toFixed(2)}</span>
                                </div>
                                
                                <div className="flex items-center gap-2 text-xs mb-3">
                                    {item.dietary?.isVegetarian && (
                                        <span className="flex items-center gap-1 text-green-400">
                                            <Leaf className="w-3 h-3" /> Veg
                                        </span>
                                    )}
                                    {item.dietary?.isSpicy && (
                                        <span className="flex items-center gap-1 text-red-400 ml-2">
                                            <Flame className="w-3 h-3" /> Spicy
                                        </span>
                                    )}
                                </div>

                                <p className="text-neutral-400 text-sm mb-6 flex-grow">{item.description}</p>
                                
                                <button className="w-full flex items-center justify-center gap-2 py-3 mt-auto bg-white/5 hover:bg-orange-500 text-white rounded-xl font-semibold transition-colors duration-300">
                                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
