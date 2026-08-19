"use client";

import React from "react";
import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ORDER_APP_URL } from "@/lib/constants";

export default function KuroilerHero() {
    const ImageContent = () => (
        <div className="relative w-full aspect-square max-w-[340px] md:max-w-[420px] lg:max-w-[480px] mx-auto mt-4 lg:mt-0">
            {/* Ambient Base Glow */}
            <div className="absolute inset-0 bg-brand-light/20 rounded-full blur-[70px] md:blur-[100px] -z-10"></div>

            {/* Organic Background Floating Bokeh / Sunlight Orbs (Out of focus) */}
            <m.div
                animate={{ y: [-15, 15, -15], x: [-10, 10, -10], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-[5%] left-[5%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-brand-light to-brand-yellow rounded-full blur-xl opacity-40 -z-10"
            />
            <m.div
                animate={{ y: [15, -20, 15], x: [20, -5, 20], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] right-[5%] w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-brand-yellow to-yellow-300 rounded-full blur-2xl opacity-30 -z-10"
            />
            <m.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] right-[20%] w-16 h-16 bg-white rounded-full blur-md opacity-30 -z-10"
            />

            {/* Floating Image Container */}
            <m.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-full h-full z-10 mx-auto flex items-center justify-center scale-[1.15]"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/chicks_enhanced_nobg.png"
                        alt="Vector KukuConnect Chick Illustration"
                        priority
                        fetchPriority="high"
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-contain transition-transform hover:scale-105 duration-700 drop-shadow-2xl"
                    />
                </div>
            </m.div>

            {/* Foreground Orbs (Creates photographic macro depth of field) */}
            <m.div
                animate={{ y: [20, -10, 20], x: [-10, 20, -10] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[5%] left-[15%] w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-white to-brand-yellow/40 rounded-full blur-[14px] opacity-50 z-20 pointer-events-none"
            />
            <m.div
                animate={{ y: [-20, 10, -20], x: [10, -15, 10] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[15%] right-[10%] w-12 h-12 md:w-16 md:h-16 bg-white rounded-full blur-lg opacity-60 z-20 pointer-events-none"
            />
        </div>
    );

    return (
        <section id="home" className="relative pt-28 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden bg-surface-light min-h-[90vh] flex items-center">
            {/* Elegant Corporate Background with subtle glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

                <m.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-dark/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"
                />
                <m.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-brand-yellow/10 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-16 relative z-10">
                {/* Text Content */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-dark/10 text-brand-dark text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] mb-6 border border-brand-dark/20 backdrop-blur-sm shadow-sm">
                        KENYAN POULTRY &bull; QUALITY &bull; SUPPORT
                    </span>

                    <h1 className="text-[2.75rem] leading-tight md:text-6xl lg:text-[5rem] font-extrabold text-surface-dark mb-6 tracking-tighter">
                        Your <span className="text-brand-dark">Kuku</span>. <br className="hidden md:block" />
                        Our <span className="text-brand-dark">Commitment</span>.
                    </h1>

                    {/* Mobile Image - Captivating middle placement */}
                    <div className="block lg:hidden w-full my-10">
                        <ImageContent />
                    </div>

                    <p className="text-base md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                        Healthy chicks, practical poultry support, and everything you need to start strong and grow a thriving poultry business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                        <a
                            href={ORDER_APP_URL}
                            className="px-8 py-4 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full font-bold text-lg shadow-glow-primary hover:shadow-glow-primary-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                        >
                            Order Chicks
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#products"
                            className="px-8 py-4 bg-white text-surface-dark border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center w-full sm:w-auto"
                        >
                            See Prices
                        </a>
                    </div>

                    {/* Corporate Trust Indicators */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 border-t border-slate-200 w-full justify-center lg:justify-start">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-emerald-500 shrink-0 shadow-sm">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base text-left">Quality Chicks</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-brand-dark shrink-0 shadow-sm">
                                <HeartHandshake className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base text-left">Farmer Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-blue-500 shrink-0 shadow-sm">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base text-left">Trusted Poultry Expertise</span>
                        </div>
                    </div>
                </m.div>

                {/* Desktop Image */}
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block w-full lg:w-1/2 relative"
                >
                    <ImageContent />
                </m.div>
            </div>
        </section>
    );
}

