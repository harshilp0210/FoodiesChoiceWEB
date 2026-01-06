"use client";

import Link from "next/link";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderConfirmationPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-12 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <CheckCircle2 className="w-10 h-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Order Placed!</h1>
                <p className="text-slate-400 text-lg mb-8">
                    Thank you for your order. We have received it and will begin preparing your food shortly.
                </p>

                <div className="bg-white/5 rounded-xl p-6 mb-8 text-left">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                        <span className="text-slate-400">Order Number</span>
                        <span className="text-white font-mono font-bold">#ORD-{Math.floor(Math.random() * 10000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Estimated Time</span>
                        <span className="text-white font-bold">30 - 45 mins</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/orders"
                        className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        Order More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
