"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
            {/* Background Gradient & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-4">
                        Our <span className="text-orange-500">Menu</span>
                    </h1>

                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-6" />

                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Authentic flavors, traditional recipes, and a passion for culinary excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
