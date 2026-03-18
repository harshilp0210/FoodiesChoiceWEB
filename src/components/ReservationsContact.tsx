"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ReservationsContact() {
    return (
        <section className="py-24 bg-black border-b border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Book Your Table or <span className="text-orange-500">Contact Us</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        We'd love to hear from you! Reserve a table for an unforgettable dining experience or get in touch with our team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Contact Info Side */}
                    <div className="lg:col-span-2 bg-orange-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl -ml-10 -mb-10" />
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <p className="text-orange-100 mb-10 leading-relaxed">
                                Feel free to reach out to us with any questions or concerns. We are here to help!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold mb-1">Phone</p>
                                        <p className="text-orange-100">224-377-9043</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold mb-1">Email</p>
                                        <p className="text-orange-100">support@foodieschoice.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold mb-1">Address</p>
                                        <p className="text-orange-100">123 Food Street, Culinary District<br/>Wembley, HA0 1AB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links placeholder */}
                        <div className="flex gap-4 mt-12 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 cursor-pointer transition-colors">
                                <span className="font-bold">IG</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 cursor-pointer transition-colors">
                                <span className="font-bold">FB</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 cursor-pointer transition-colors">
                                <span className="font-bold">X</span>
                            </div>
                        </div>
                    </div>

                    {/* Reservation Form Side */}
                    <div className="lg:col-span-3 p-10 lg:p-12">
                        <h3 className="text-2xl font-bold text-white mb-8">Make a Reservation</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                                </div>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Phone</label>
                                    <input type="tel" placeholder="+1 234 567 8900" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Number of Guests</label>
                                    <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none cursor-pointer">
                                        <option>1 Person</option>
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5+ People</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Date</label>
                                    <input type="date" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all [color-scheme:dark]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Time</label>
                                    <input type="time" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all [color-scheme:dark]" />
                                </div>
                            </div>
                            
                            <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20 mt-8">
                                Reserve Now <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
