"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const PHONE_NUMBER = "+44 7586 558414";

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/orders" },
        { name: "Our Story", href: "/story" },
        { name: "Reservations", href: "/reservations" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    scrolled ? "bg-black/95 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/50" : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-14 w-48 md:h-24 md:w-72 transition-transform hover:scale-105">
                        <Image
                            src="/logo-new.jpg"
                            alt="Foodie's Choice"
                            fill
                            className="object-contain object-left md:object-center"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-sm px-8 py-2.5 rounded-full border border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white hover:text-orange-500 transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold uppercase tracking-wide text-xs transition-all hover:shadow-lg hover:shadow-green-500/20"
                        >
                            Call to Order
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 text-white hover:text-orange-500 transition-colors"
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[300px] bg-slate-950 border-l border-white/10 z-[70] p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold font-display text-white">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-300 hover:text-orange-500 transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
                                    >
                                        {link.name}
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-orange-500" />
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/10">
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex w-full items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold uppercase tracking-wide transition-all"
                                >
                                    Call to Order
                                </a>
                                <p className="text-center text-slate-500 text-xs mt-6">
                                    © {new Date().getFullYear()} Foodie&apos;s Choice
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
