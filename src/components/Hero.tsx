"use client";

import { motion } from "framer-motion";

interface HeroProps {
    title?: string;
    highlight?: string;
    subtitle?: string;
}

export function Hero({
    title = "Our",
    highlight = "Menu",
    subtitle = "Authentic flavors, traditional recipes, and a passion for culinary excellence."
}: HeroProps) {
    return (
        <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
            {/* Background Gradient & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

            {/* Video Background or Image (you can add this later) */}
            <div className="absolute inset-0 opacity-40">
                {/* Placeholder for background image */}
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display tracking-tight text-white mb-6">
                        {title} <span className="text-orange-500">{highlight}</span>
                    </h1>

                    <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full mb-8" />

                    <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
