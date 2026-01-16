"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "John Kamau",
        role: "Poultry Farmer, Kitui",
        content: "The mortality rate of chicks from KukuConnect is widely low. I bought 200 chicks and raised 198 to maturity. Their vaccination schedule advice is spot on!",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Ochieng",
        role: "Small Scale Farmer",
        content: "I love the delivery service. They call you to confirm everything. The 3-week old chicks saved me so much brooding stress.",
        rating: 5,
    },
    {
        id: 3,
        name: "David Njoroge",
        role: "Agri-Business Owner",
        content: "Professional team. The profit calculator on the site helped me plan my budget accurately. Highly recommend for serious farmers.",
        rating: 4,
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-20 px-4 bg-[#FFFBEA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Farmer Stories</h2>
                    <p className="text-[#6B4F4F] text-lg">Don't just take our word for it. Hear from our community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-[#FFA64D]/10 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-[#FFA64D]/20 w-10 h-10" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? "text-[#F4B400] fill-[#F4B400]" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-[#6B4F4F] mb-6 italic leading-relaxed">"{review.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#FFA64D] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#8B4513]">{review.name}</h4>
                                    <p className="text-xs text-[#6B4F4F] uppercase tracking-wide">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
