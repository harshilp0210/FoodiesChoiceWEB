"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import { POS_URL } from "@/lib/constants";

const steps = [
    {
        title: "Browse Menu",
        description: "Check out our curated menu with mouth-watering options.",
        icon: Utensils,
    },
    {
        title: "Place Your Order",
        description: "Customize your meals, choose pickup or delivery, and pay online.",
        icon: ShoppingBag,
    },
    {
        title: "Enjoy Your Food",
        description: "Freshly prepared, delivered or ready for pickup in no time.",
        icon: Truck,
    },
];

export function HowItWorks() {
    return (
        <section className="py-20 bg-black border-b border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        How to Enjoy Foodies Choice in <span className="text-orange-500">3 Easy Steps</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="text-center relative z-10"
                        >
                            <div className="w-24 h-24 mx-auto bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black group hover:border-orange-500/50 transition-colors">
                                <step.icon className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl text-white font-bold mb-3">{step.title}</h3>
                            <p className="text-neutral-400 max-w-xs mx-auto text-sm md:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Optional POS Note */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-neutral-900/50 border border-orange-500/20 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        <span className="text-orange-400 font-bold">Restaurant Owner?</span> Restaurants also benefit from our integrated POS system — manage orders, track inventory, and streamline operations.
                    </p>
                    <Link
                        href={POS_URL}
                        className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors"
                    >
                        Discover our POS System →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
