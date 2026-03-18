"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import { POS_URL } from "@/lib/constants";

export function Footer() {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="space-y-6 lg:col-span-2">
                        <Link href="/" className="text-3xl font-bold font-display text-white tracking-tighter">
                            Foodies<span className="text-orange-500">Choice</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed max-w-sm">
                            Experience the rich, authentic flavors right here. Reserve your table, order takeaway, or discover our seamless POS system.
                        </p>

                        <div className="pt-4 max-w-md">
                            <h4 className="text-white font-bold mb-3">Subscribe for exclusive deals & menu updates</h4>
                            <form className="flex" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-neutral-900 border border-white/10 rounded-l-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 w-full"
                                />
                                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-r-xl transition-colors shrink-0">
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Menu", href: "/orders" },
                                { name: "POS Features", href: POS_URL },
                                { name: "About", href: "/#about" },
                                { name: "Contact", href: "/#contact" },
                                { name: "FAQ", href: "/#faq" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-orange-500 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>123 Food Street, Culinary District<br />Wembley, HA0 1AB</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>+1 773-541-1711</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>support@foodieschoice.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        &copy; {new Date().getFullYear()} Foodies Choice. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
