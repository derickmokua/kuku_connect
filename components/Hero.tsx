"use client";

import React from "react";
import { m } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 overflow-hidden text-center bg-surface-dark">
            <div className="max-w-5xl mx-auto z-10 relative">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-brand-light/10 text-brand-light text-sm font-semibold mb-8 border border-brand-light/20 shadow-sm shadow-brand-light/5">
                        Welcome to KukuConnect
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                        Your Trusted <br />
                        <span className="bg-gradient-to-r from-brand-light to-brand-yellow bg-clip-text text-transparent">Poultry Partner</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        Empowering farmers with healthy, high-performing chicks, reliable support, and honest business. Start your profitable poultry journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#products"
                            className="px-10 py-4 bg-gradient-to-r from-brand-light to-brand-yellow text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand-light/20 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                        >
                            Order Now
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-10 py-4 bg-[#1E293B] text-slate-300 border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-sm"
                        >
                            Learn More
                        </Link>
                    </div>
                </m.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 mix-blend-screen opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[100px] translate-y-1/2 -z-10 mix-blend-screen opacity-30"></div>
        </section>
    );
}
