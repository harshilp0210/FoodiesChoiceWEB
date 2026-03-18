"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
            {/* Background Gradient & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

            {/* Placeholder Background Image (Covered by dark overlay) */}
            <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 container mx-auto px-4 text-center mt-16 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Optional overlay tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Order Online | Fast Delivery | Easy Payment
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto">
                        Order Your Favorite Food Online — <br className="hidden md:block"/>
                        <span className="text-orange-500">Fast, Easy & Secure</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
                        Enjoy delicious meals from Foodies Choice. Reserve your table, order takeaway, or discover our seamless POS system for hassle-free service.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/orders"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25"
                        >
                            Order Now <ArrowRight className="w-5 h-5" />
                        </Link>
                        
                        <Link 
                            href="/reservations"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg transition-all"
                        >
                            Reserve a Table <Calendar className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
