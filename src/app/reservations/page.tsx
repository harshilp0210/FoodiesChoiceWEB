"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";
import { DatePicker } from "@/components/ui/DatePicker";

export default function ReservationsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [date, setDate] = useState<Date>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // --- VALIDATION START ---

        // 1. Name Validation
        if (!data.name || data.name.toString().length < 2) {
            toast.error("Please enter a valid name (at least 2 characters).");
            return;
        }

        // 2. Phone Validation
        const phoneRegex = /^[\d\+\s()-]{10,15}$/;
        if (!data.phone || !phoneRegex.test(data.phone.toString())) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        // 3. Date Validation (Future Only)
        // Date is now captured from the hidden input via FormData, format is YYYY-MM-DD
        if (!data.date) {
            toast.error("Please select a date.");
            return;
        }
        const selectedDate = new Date(data.date.toString());
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time part for correct date comparison

        if (selectedDate < today) {
            toast.error("Please select a date in the future.");
            return;
        }

        // 4. Time Validation (If Today, must be future time)
        // Check if selected date is today
        if (selectedDate.toDateString() === new Date().toDateString()) {
            const [hours, minutes] = data.time.toString().split(':').map(Number);
            const selectedDateTime = new Date();
            selectedDateTime.setHours(hours, minutes, 0, 0);

            const now = new Date();
            // Add buffer (e.g., 30 mins) if needed, currently checking strict future
            if (selectedDateTime < now) {
                toast.error("Please select a time in the future.");
                return;
            }
        }

        // --- VALIDATION END ---

        setIsSubmitting(true);

        // Construct email
        const subject = `Reservation Request: ${data.name} - ${data.date}`;
        const body = `Name: ${data.name}
Phone: ${data.phone}
Date: ${data.date}
Time: ${data.time}
Guests: ${data.guests}
Special Requests: ${data.requests}

Sent from Foodie's Choice Website`;

        // Simulate wait for UX
        await new Promise(resolve => setTimeout(resolve, 800));

        window.location.href = `mailto:shreekriishnafoods@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        toast.success("Opening email to confirm reservation...");
        setIsSubmitting(false);
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
                                    <Clock className="w-4 h-4 text-orange-500" /> Date
                                </label>
                                <DatePicker
                                    date={date}
                                    setDate={setDate}
                                    required
                                />
                            </div>

                            {/* Time */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-orange-500" /> Time
                                </label>
                                <select
                                    name="time"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors [color-scheme:dark]"
                                >
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
                                <select
                                    name="guests"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors [color-scheme:dark]"
                                >
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
                                <input name="name" type="text" required placeholder="Your Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                            </div>

                            {/* Phone - NEW */}
                            <div className="space-y-2">
                                <label className="text-white font-medium flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-orange-500" /> Phone Number
                                </label>
                                <input name="phone" type="tel" required placeholder="07123 456789" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div className="space-y-2">
                            <label className="text-white font-medium flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-orange-500" /> Special Requests
                            </label>
                            <textarea name="requests" placeholder="Allergies, special occasions, etc." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors h-32 resize-none"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Opening Email..." : "Confirm Reservation"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
