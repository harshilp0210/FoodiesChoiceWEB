"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function StorySection() {
    return (
        <section id="story" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?q=80&w=2800&auto=format&fit=crop"
                                alt="Chef plating food"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-xs">
                            <div className="text-4xl font-bold text-orange-500 mb-1">15+</div>
                            <div className="text-white font-medium">Years of Culinary Excellence</div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                                Crafted with Passion, <br />
                                Served with Love
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            Foodie's Choice began with a simple mission: to bring the vibrant flavors of India to Wembley.
                            What started as a passion for authentic spices has grown into a beloved culinary destination,
                            serving traditional dishes with a modern twist.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Locally sourced, organic ingredients",
                                "Master chefs with global experience",
                                "Sustainable and eco-friendly practices"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="text-orange-500 font-bold hover:text-orange-400 transition-colors inline-flex items-center gap-2 border-b-2 border-orange-500/30 hover:border-orange-500 pb-1">
                                Read Full Story
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
