"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, CreditCard, User, MapPin, Mail, Phone, Banknote } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        clearCart();
        router.push("/order-confirmation");
        setIsSubmitting(false);
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-black pt-32 pb-12 px-4 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <CreditCard className="w-10 h-10 text-slate-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
                <p className="text-slate-400 mb-8">Add some delicious items before checking out.</p>
                <Link
                    href="/orders"
                    className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors"
                >
                    Return to Menu
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href="/orders" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Menu
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Checkout Form */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Checkout</h1>
                            <p className="text-slate-400">Complete your order details below.</p>
                        </div>

                        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Info */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <User className="w-5 h-5 text-orange-500" /> Personal Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name</label>
                                        <input required type="text" id="firstName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input required type="text" id="lastName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                                        <input required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                                        <input required type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="+44 7123 456789" />
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-orange-500" /> Delivery Details
                                </h2>
                                <div className="space-y-2">
                                    <label htmlFor="address" className="text-sm font-medium text-slate-300">Street Address</label>
                                    <input required type="text" id="address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="123 Main St" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="city" className="text-sm font-medium text-slate-300">Town / City</label>
                                        <input required type="text" id="city" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="London" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="postcode" className="text-sm font-medium text-slate-300">Postcode</label>
                                        <input required type="text" id="postcode" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base md:text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="SW1A 1AA" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment (Visual Only) */}
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-orange-500" /> Payment Method
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("card")}
                                        className={cn(
                                            "flex flex-col items-center gap-3 p-4 rounded-xl border transition-all",
                                            paymentMethod === "card"
                                                ? "bg-orange-500/10 border-orange-500 text-white"
                                                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                        )}
                                    >
                                        <CreditCard className={cn("w-8 h-8", paymentMethod === "card" ? "text-orange-500" : "text-slate-500")} />
                                        <span className="font-medium">Card Payment</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("cash")}
                                        className={cn(
                                            "flex flex-col items-center gap-3 p-4 rounded-xl border transition-all",
                                            paymentMethod === "cash"
                                                ? "bg-orange-500/10 border-orange-500 text-white"
                                                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                        )}
                                    >
                                        <Banknote className={cn("w-8 h-8", paymentMethod === "cash" ? "text-orange-500" : "text-slate-500")} />
                                        <span className="font-medium">Cash on Delivery</span>
                                    </button>
                                </div>

                                {paymentMethod === "card" && (
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 mt-4 animate-in fade-in slide-in-from-top-2">
                                        <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-white">VISA</div>
                                        <div>
                                            <div className="text-sm font-medium text-white">Ending in 4242</div>
                                            <div className="text-xs text-slate-400">Expires 12/28</div>
                                        </div>
                                        <button type="button" className="ml-auto text-orange-500 text-sm hover:underline">Change</button>
                                    </div>
                                )}

                                {paymentMethod === "cash" && (
                                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mt-4 animate-in fade-in slide-in-from-top-2">
                                        <p className="text-sm text-yellow-200 text-center">
                                            Please have the exact amount ready upon delivery.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-white font-medium text-sm line-clamp-2">{item.name}</h3>
                                                <span className="text-slate-300 font-medium text-sm ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <p className="text-slate-500 text-xs mt-1">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t border-white/10 pt-6 mb-8">
                                <div className="flex justify-between text-slate-400">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Delivery Fee</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Taxes (8%)</span>
                                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10">
                                    <span>Total</span>
                                    <span>${(cartTotal * 1.08 + 5).toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>Place Order <CheckCircle2 className="w-5 h-5" /></>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-500 mt-4">
                                By placing this order, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
