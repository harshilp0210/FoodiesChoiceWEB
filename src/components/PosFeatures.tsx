"use client";

import { motion } from "framer-motion";
import { Zap, PackageSearch, Users, LineChart, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { POS_URL } from "@/lib/constants";

const features = [
    {
        title: "Fast & Intuitive Ordering",
        description: "Capture orders in seconds, designed for high-volume environments.",
        icon: Zap,
    },
    {
        title: "Inventory Management",
        description: "Track stock in real-time, get alerts, and significantly reduce waste.",
        icon: PackageSearch,
    },
    {
        title: "Table & Reservation Management",
        description: "Optimize your seating capacity and service efficiency effortlessly.",
        icon: Users,
    },
    {
        title: "Real-Time Reporting",
        description: "Monitor sales and performance analytics from anywhere, anytime.",
        icon: LineChart,
    },
    {
        title: "Secure Payments",
        description: "PCI-compliant online & offline payment options integrated seamlessly.",
        icon: ShieldCheck,
    },
    {
        title: "Multi-Device Support",
        description: "Works beautifully on tablets, phones, and desktop computers.",
        icon: Smartphone,
    },
];

export function PosFeatures() {
    return (
        <section className="py-24 bg-black border-b border-orange-500/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold mb-6 border border-orange-500/20">
                            For Restaurants
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Streamline Your Restaurant with <br/>
                            <span className="text-orange-500">Foodies Choice POS</span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-xl">
                            Our all-in-one restaurant management system is designed to help you run operations smoother, manage inventory better, and scale faster.
                        </p>
                        
                        <Link 
                            href={POS_URL}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25"
                        >
                            Learn More About Our POS <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-5 shadow-inner">
                                    <feature.icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
