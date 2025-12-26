"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold font-display text-white tracking-tighter">
                            Foodie's<span className="text-orange-500">.</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Elevating the dining experience with every dish.
                            Join us for a journey of flavors.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Home", "Menu", "Our Story", "Reservations", "Order Online"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>18 Watford Rd,<br />Wembley HA0 3EP, UK</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>+44 7586 558414</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>info@foodieschoice.co.uk</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Opening Hours</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Mon - Sun</span>
                                <span>12:00 PM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Foodie's Choice. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
