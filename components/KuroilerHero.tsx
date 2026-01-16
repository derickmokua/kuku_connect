"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function KuroilerHero() {
    return (
        <section id="home" className="relative pt-24 pb-20 px-4 overflow-hidden bg-[#FFFBEA] flex flex-col justify-center min-h-[60vh]">
            <div className="max-w-4xl mx-auto relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFA64D]/10 rounded-full text-[#D97706] font-bold text-xs md:text-sm mb-6 border border-[#FFA64D]/20">
                        <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        <span>#1 Dual-Purpose Breed</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#431407] mb-6 leading-[1.1] tracking-tight">
                        Big, Heavy Kuroilers. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#B45309]">
                            Delivered to Your Farm.
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-[#78350F] mb-10 leading-relaxed max-w-2xl mx-auto opacity-90">
                        We provide healthy, vaccinated birds and the daily routine you need to raise them successfully. No guesswork—just growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#products"
                            className="w-full sm:w-auto px-8 py-4 bg-[#D97706] text-white rounded-full font-bold text-lg hover:bg-[#B45309] transition-all shadow-xl hover:shadow-[#D97706]/20 flex items-center justify-center gap-2 group"
                        >
                            Start Your Batch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-[#78350F] border border-[#D97706]/20 rounded-full font-bold text-lg hover:bg-[#FFF7ED] transition-colors flex items-center justify-center shadow-sm"
                        >
                            Speak to an Expert
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Background Elements - kept minimal for premium feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FFA64D]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
    );
}
