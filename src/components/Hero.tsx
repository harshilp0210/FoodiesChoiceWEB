"use client";

import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Star } from "lucide-react";
import { POS_URL } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Gradient & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

            {/* Floating Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 md:left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 md:right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Accepting Orders Now
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
                        Experience the <br />
                        <span className="text-gradient">Art of Taste</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Authentic Indian cuisine in the heart of Wembley.
                        Fresh ingredients, traditional recipes, and a passion for culinary excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href={POS_URL}
                            className="group relative px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Order Online <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link href="/orders" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-2">
                            <UtensilsCrossed className="w-5 h-5" />
                            View Menu
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
                        <span className="flex text-yellow-500">
                            {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                            <Star className="w-4 h-4 fill-current text-yellow-500/50" />
                        </span>
                        <span>4.5/5 on Google (160+ Reviews)</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm"
            >
                <span>Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
}
