"use client";

import React from "react";
import { m } from "framer-motion";
import { ShieldCheck, Anchor, TrendingUp, Eye } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 px-4 bg-surface-light relative overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image/Visual Side */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-yellow rounded-[3rem] rotate-3 opacity-5 transform translate-x-4 translate-y-4"></div>
                        <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-xl relative z-10 border border-slate-100 text-center space-y-4 hover:shadow-2xl transition-all duration-300">
                            <span className="text-8xl block">👨‍🌾</span>
                            <div>
                                <h3 className="text-2xl font-bold text-surface-dark">Kitui Hardened</h3>
                                <p className="text-slate-600 font-medium">Locally raised and climate-adapted for specific Kenyan farm conditions.</p>
                            </div>
                        </div>

                        {/* Transparency Rule Card */}
                        <div className="mt-8 bg-white text-surface-dark p-6 md:p-8 rounded-3xl border border-slate-200 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-yellow/10 rounded-bl-[4rem]"></div>
                            <div className="flex items-start gap-4 mb-4">
                                <Eye className="w-8 h-8 text-brand-yellow" />
                                <div>
                                    <h4 className="font-bold text-lg">The 100% Transparency Rule</h4>
                                    <span className="text-xs text-slate-600 uppercase tracking-widest font-bold">Open Door Policy</span>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                "See the System." We believe in the quality of our infrastructure. Farmers are welcome to visit our Kitui facility to see exactly how their birds are raised and vaccinated.
                            </p>
                        </div>
                    </m.div>

                    {/* Content Side */}
                    <m.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-wide uppercase border border-brand-yellow/20 mb-4">
                                The KukuConnect Hatch Plan
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark leading-tight mb-6">
                                Standardizing Poultry <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-dark">Success.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                KukuConnect was built to solve the biggest failure in local farming: the <strong>"Danger Zone"</strong> of the first 21 days. We use professional brooding systems and strict bio-security to raise chicks through their most fragile stage.
                            </p>
                            <p className="text-lg text-surface-dark leading-relaxed mt-4 font-bold border-l-4 border-brand-dark pl-4">
                                We don't just sell birds; we deploy a Golden Egg System to your coop.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 border border-blue-500/20">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-surface-dark text-lg">Zero-Trust Health</h3>
                                    <p className="text-slate-600">Every bird is vaccinated under strict supervision. No exceptions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-dark shrink-0 border border-brand-yellow/20">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-surface-dark text-lg">Hardened Assets</h3>
                                    <p className="text-slate-600">Our 4-week-old birds are ready for the coop, not the brooder.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-400 shrink-0 border border-green-500/20">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-surface-dark text-lg">Economic Impact</h3>
                                    <p className="text-slate-600">Empowering 500+ farmers to turn poultry into a predictable business.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-l-4 border-brand-dark pl-6 bg-white p-6 rounded-r-2xl shadow-sm border-t border-r border-b border-slate-100">
                            <p className="italic text-surface-dark text-lg font-bold">
                                "Success isn't measured in sales; it's measured by the survival rate on your farm."
                            </p>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
