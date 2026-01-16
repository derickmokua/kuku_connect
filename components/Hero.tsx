"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative pt-24 md:pt-32 pb-20 px-4 overflow-hidden text-center">
            <div className="max-w-4xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA64D]/20 text-[#8B4513] text-sm font-semibold mb-6">
                        Premium Poultry Farm
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-[#8B4513] mb-6 leading-tight tracking-tight">
                        Healthy Chicks,<br />
                        <span className="text-[#FFA64D]">Happy Farmers</span>
                    </h1>
                    <p className="text-base md:text-xl text-[#6B4F4F] mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                        We provide top-quality vaccinated chicks, expert guidance, and fair pricing to help your poultry business thrive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#products"
                            className="px-8 py-4 bg-[#FFA64D] text-white rounded-full font-bold text-lg hover:bg-[#FF9533] transform hover:scale-105 transition shadow-lg w-full sm:w-auto"
                        >
                            Order Now
                        </Link>

                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFA64D]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B4513]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
