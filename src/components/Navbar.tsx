
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { POS_URL } from "@/lib/constants";
import { useCart } from "@/context/CartContext";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/orders" },
        { name: "Our Story", href: "#story" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-display text-white tracking-tighter">
                    Foodie's<span className="text-orange-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/orders"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium transition-colors text-sm"
                    >
                        Order Now <ShoppingBag className="w-4 h-4" />
                    </Link>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 text-white hover:text-orange-500 transition-colors"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-900">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                >
                    <nav className="flex flex-col p-4 gap-4">
                        <Link href="/orders" className="text-white hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
                        <Link href="#story" className="text-white hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                        <Link href="#location" className="text-white hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Location</Link>
                        <Link
                            href={POS_URL}
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 text-white rounded-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Order Now <ShoppingBag className="w-4 h-4" />
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
