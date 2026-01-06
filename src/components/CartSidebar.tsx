"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function CartSidebar() {
    const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-950 border-l border-white/10 z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-orange-500" />
                                Your Order
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-lg">Your cart is empty</p>
                                        <p className="text-slate-400 text-sm mt-1">Add some delicious items to get started!</p>
                                    </div>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
                                    >
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-white font-medium line-clamp-1">{item.name}</h3>
                                                <p className="text-orange-500 font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-black/40 rounded-full px-1 border border-white/10">
                                                    <button
                                                        onClick={() => item.quantity === 1 ? removeFromCart(item.id) : updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                                                    >
                                                        {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                                                    </button>
                                                    <span className="text-sm font-medium text-white w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                                                    >
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/5 bg-slate-900/50">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-slate-400">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span>Taxes (Estimated)</span>
                                        <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-white/5">
                                        <span>Total</span>
                                        <span>${(cartTotal * 1.08).toFixed(2)}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Proceed to Checkout <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
