"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Anchor, TrendingUp, Eye } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-[#FFA64D] rounded-[3rem] rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
                        <div className="bg-[#FFFBEA] rounded-[3rem] p-6 md:p-10 shadow-xl relative z-10 border border-[#8B4513]/10 text-center space-y-4">
                            <span className="text-8xl block">👨‍🌾</span>
                            <div>
                                <h3 className="text-2xl font-bold text-[#8B4513]">Kitui Hardened</h3>
                                <p className="text-[#6B4F4F] font-medium">Locally raised and climate-adapted for specific Kenyan farm conditions.</p>
                            </div>
                        </div>

                        {/* Transparency Rule Card */}
                        <div className="mt-8 bg-[#1A1A1A] text-white p-6 md:p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#D97706]/20 rounded-bl-[4rem]"></div>
                            <div className="flex items-start gap-4 mb-4">
                                <Eye className="w-8 h-8 text-[#D97706]" />
                                <div>
                                    <h4 className="font-bold text-lg">The 100% Transparency Rule</h4>
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">Open Door Policy</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                "See the System." We believe in the quality of our infrastructure. Farmers are welcome to visit our Kitui facility to see exactly how their birds are raised and vaccinated.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-[#FFFBEA] text-[#D97706] text-sm font-bold tracking-wide uppercase border border-[#D97706]/20 mb-4">
                                The KukuConnect Mission
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#431407] leading-tight mb-6">
                                Standardizing Poultry <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#B45309]">Success.</span>
                            </h2>
                            <p className="text-lg text-[#78350F] leading-relaxed">
                                KukuConnect was built to solve the biggest failure in local farming: the <strong>"Danger Zone"</strong> of the first 21 days. We use professional brooding systems and strict bio-security to raise chicks through their most fragile stage.
                            </p>
                            <p className="text-lg text-[#78350F] leading-relaxed mt-4 font-semibold">
                                We don't just sell birds; we deploy a Success System to your farm.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#431407] text-lg">Zero-Trust Health</h4>
                                    <p className="text-[#6B4F4F]">Every bird is vaccinated under strict supervision. No exceptions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-50 rounded-xl text-orange-600 shrink-0">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#431407] text-lg">Hardened Assets</h4>
                                    <p className="text-[#6B4F4F]">Our 4-week-old birds are ready for the coop, not the brooder.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-50 rounded-xl text-green-600 shrink-0">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#431407] text-lg">Economic Impact</h4>
                                    <p className="text-[#6B4F4F]">Empowering 500+ farmers to turn poultry into a predictable business.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-l-4 border-[#D97706] pl-6">
                            <p className="italic text-[#78350F] text-lg font-medium">
                                "Success isn't measured in sales; it's measured by the survival rate on your farm."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
