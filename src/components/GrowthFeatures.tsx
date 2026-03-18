"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { POS_URL } from "@/lib/constants";
import Link from "next/link";

export function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-orange-600 text-white px-4 py-2 relative z-50 flex items-center justify-center text-sm font-medium">
            <div className="container mx-auto flex items-center justify-center">
                <span>
                    🎉 Limited Time Offer: Get <strong>10% OFF</strong> your first online order with code <strong>FOODIE10</strong>
                </span>
                <Link href="/orders" className="ml-4 underline hover:text-orange-200 transition-colors hidden sm:inline">
                    Order Now
                </Link>
            </div>
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 hover:bg-black/20 rounded-full transition-colors"
                aria-label="Close banner"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}

export function GrowthPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);

    useEffect(() => {
        // Only show once per session in this simple implementation
        if (hasSeen) return;

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            setHasSeen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [hasSeen]);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsVisible(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-900 border border-white/10 rounded-2xl p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full" />
                            
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center relative z-10">
                                <h3 className="text-3xl font-display font-bold text-white mb-2">Wait! Don't Miss Out</h3>
                                <p className="text-orange-500 font-bold mb-6">Get 10% OFF your first order</p>
                                
                                <p className="text-neutral-300 text-sm mb-6">
                                    Subscribe to our newsletter for exclusive deals, menu updates, and a sweet discount on your first online order.
                                </p>

                                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        required
                                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                                    />
                                    <button 
                                        type="submit"
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 font-bold transition-all flex items-center justify-center gap-2"
                                    >
                                        Claim My Code <ArrowRight className="w-4 h-4" />
                                    </button>
                                </form>
                                <button 
                                    onClick={() => setIsVisible(false)}
                                    className="mt-4 text-neutral-500 text-xs hover:text-white transition-colors underline"
                                >
                                    No thanks, I'll pay full price
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
