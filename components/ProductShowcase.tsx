"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const products = [
    { id: 'p1', title: 'Day-Old Chicks', price: 110, age: '1 Day', image: '🐣', features: ['Vaccinated', 'High Quality'] },
    { id: 'p2', title: '1 Week Old', price: 130, age: '1 Week', image: '🐥', features: ['Brooded 7 Days', 'Stronger'] },
    { id: 'p3', title: '2 Weeks Old', price: 160, age: '2 Weeks', image: '🐥', features: ['Gumboro Vaccinated', 'Low Mortality'] },
    { id: 'p4', title: '3 Weeks Old', price: 190, age: '3 Weeks', image: '🐤', features: ['Active & Healthy', 'Fast Growth'] },
    { id: 'p5', title: '4 Weeks Old', price: 250, age: '4 Weeks', image: '🐓', features: ['Off Heat', 'Ready for Range'] },
    { id: 'p6', title: 'Grown Chicken', price: 400, unit: '/kg', age: 'Mature', image: '🍗', features: ['Premium Meat', 'Organic Fed'] },
];

export default function ProductShowcase() {
    return (
        <section id="products" className="py-20 px-4 bg-white rounded-t-[3rem] shadow-inner">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Our Flock</h2>
                    <p className="text-[#6B4F4F] text-lg">Choose the perfect age for your farm starting needs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#FFFBEA] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-[#FFA64D]/20 flex flex-col"
                        >
                            <div className="text-6xl mb-6 text-center bg-white w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-sm">
                                {product.image}
                            </div>

                            <h3 className="text-xl font-bold text-[#8B4513] text-center mb-1">{product.title}</h3>
                            <p className="text-center text-[#6B4F4F] text-sm mb-4">{product.age}</p>

                            <div className="flex justify-center items-baseline mb-6 space-x-1">
                                <span className="text-sm font-medium text-[#8B4513]">KES</span>
                                <span className="text-3xl font-bold text-[#FFA64D]">{product.price}</span>
                                {product.unit && <span className="text-sm text-[#6B4F4F]">{product.unit}</span>}
                            </div>

                            <ul className="space-y-2 mb-6 px-4">
                                {product.features.map((feat, i) => (
                                    <li key={i} className="flex items-center text-sm text-[#6B4F4F]">
                                        <CheckCircle className="w-4 h-4 text-[#FFA64D] mr-2" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto grid grid-cols-2 gap-3">
                                <a
                                    href="tel:+254712345678"
                                    className="py-3 bg-[#8B4513] text-white rounded-xl font-semibold hover:bg-[#6B4F4F] transition flex items-center justify-center gap-2 text-sm"
                                >
                                    <Phone className="w-4 h-4" /> Call
                                </a>
                                <a
                                    href={`https://wa.me/254712345678?text=I'm interested in ${product.title}`}
                                    className="py-3 border-2 border-[#25D366] text-[#25D366] rounded-xl font-semibold hover:bg-[#25D366] hover:text-white transition flex items-center justify-center gap-2 text-sm"
                                >
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
