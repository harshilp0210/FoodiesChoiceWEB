"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function ReservationsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Reservation request received! We will confirm shortly.");
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <main className="bg-black min-h-screen pt-32 pb-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">Book a Table</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 font-display">
                        Reservations
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Join us for an unforgettable dining experience. For parties larger than 10, please contact us directly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Date */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-orange-500" /> Date
                                </label>
                                <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                            </div>

                            {/* Time */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-orange-500" /> Time
                                </label>
                                <select required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                                    <option value="" className="bg-slate-900">Select Time</option>
                                    <option value="17:00" className="bg-slate-900">5:00 PM</option>
                                    <option value="17:30" className="bg-slate-900">5:30 PM</option>
                                    <option value="18:00" className="bg-slate-900">6:00 PM</option>
                                    <option value="18:30" className="bg-slate-900">6:30 PM</option>
                                    <option value="19:00" className="bg-slate-900">7:00 PM</option>
                                    <option value="19:30" className="bg-slate-900">7:30 PM</option>
                                    <option value="20:00" className="bg-slate-900">8:00 PM</option>
                                    <option value="20:30" className="bg-slate-900">8:30 PM</option>
                                    <option value="21:00" className="bg-slate-900">9:00 PM</option>
                                </select>
                            </div>

                            {/* Guests */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <User className="w-4 h-4 text-orange-500" /> Guests
                                </label>
                                <select required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                                    <option value="2" className="bg-slate-900">2 People</option>
                                    <option value="3" className="bg-slate-900">3 People</option>
                                    <option value="4" className="bg-slate-900">4 People</option>
                                    <option value="5" className="bg-slate-900">5 People</option>
                                    <option value="6" className="bg-slate-900">6 People</option>
                                    <option value="8" className="bg-slate-900">8 People</option>
                                    <option value="10" className="bg-slate-900">10 People</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <User className="w-4 h-4 text-orange-500" /> Name
                                </label>
                                <input type="text" required placeholder="Your Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div className="space-y-2">
                            <label className="text-white font-medium flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-orange-500" /> Special Requests
                            </label>
                            <textarea placeholder="Allergies, special occasions, etc." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors h-32 resize-none"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
