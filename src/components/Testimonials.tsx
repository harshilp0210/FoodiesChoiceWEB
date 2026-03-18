"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Anita K.",
        role: "Online Customer",
        text: "Foodies Choice makes ordering so easy! Love their fast delivery and fresh food. The user experience is fantastic, and the food arrived hot and delicious.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=a"
    },
    {
        id: 2,
        name: "Rajesh M.",
        role: "Restaurant Partner",
        text: "The POS system helped our restaurant reduce mistakes and improve efficiency. It's incredibly intuitive and the support team is always there when we need them.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=b"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-neutral-900 border-b border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        What Our <span className="text-orange-500">Customers Say</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Hear from our satisfied customers and restaurant partners who love the Foodies Choice experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-black border border-white/10 rounded-3xl p-8 relative group hover:border-orange-500/50 transition-colors shadow-2xl"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-orange-500/10 transition-colors" />
                            
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                ))}
                            </div>

                            <p className="text-neutral-300 text-lg leading-relaxed mb-8 relative z-10 font-light italic text-balance">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/20">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-orange-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
