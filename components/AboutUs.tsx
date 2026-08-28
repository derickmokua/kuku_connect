"use client";

import React from "react";
import { m } from "framer-motion";
import { ShieldCheck, Anchor, TrendingUp, Eye } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 px-4 bg-surface-light relative overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image/Visual Side */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-yellow rounded-[3rem] rotate-3 opacity-5 transform translate-x-4 translate-y-4"></div>
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl relative z-10 border border-slate-100 text-center space-y-4 hover:shadow-2xl transition-all duration-300">
                            <span className="text-8xl block transform hover:scale-110 transition-transform duration-300">👨‍🌾</span>
                            <div>
                                <h3 className="text-2xl font-extrabold text-surface-dark tracking-tight">Kitui-Raised & Resilient</h3>
                                <p className="text-slate-600 font-medium mt-3 leading-relaxed">
                                    Locally raised and fully adapted to thrive in Kenyan farm conditions.
                                </p>
                            </div>
                        </div>

                        {/* Transparency Rule Card */}
                        <div className="mt-8 bg-white text-surface-dark p-6 md:p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-bl-[4rem] group-hover:scale-110 transition-transform"></div>
                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                <div className="bg-brand-yellow/10 p-3 rounded-2xl shrink-0">
                                    <Eye className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-lg tracking-tight">100% Transparency</h4>
                                    <span className="text-xs text-brand-dark uppercase tracking-widest font-bold">Open Door Policy</span>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium relative z-10">
                                We are proud of our farm. Farmers are always welcome to visit our Kitui facility to see exactly how their birds are raised, fed, and cared for.
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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-dark/10 text-brand-dark text-sm font-bold tracking-wide uppercase border border-brand-dark/20 mb-4 shadow-sm">
                                The KukuConnect Hatch Plan
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark leading-tight mb-6 tracking-tight">
                                Making poultry farming <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-yellow">simple & profitable.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                                The hardest part of farming is the first 21 days because chicks easily fall sick. We take this risk for you. We raise the chicks in safe brooders until they are strong and ready for your farm.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-surface-dark text-lg mb-1">Fully Vaccinated</h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                        Every bird receives all necessary vaccines under strict veterinary care before leaving our farm. No exceptions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="p-3 bg-brand-dark/10 rounded-xl text-brand-dark shrink-0 group-hover:scale-110 transition-transform">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-surface-dark text-lg mb-1">Strong, Ready-to-Grow Birds</h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                        Our 4-week-old chicks have passed the difficult brooding stage. They are fully feathered and ready for your coop, saving you heating costs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-surface-dark text-lg mb-1">Better Profits for Farmers</h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                        By skipping the risky day-old stage, our farmers enjoy higher survival rates, faster returns on investment, and a lot less stress.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 relative p-6 md:p-8 rounded-[2rem] bg-surface-dark text-white shadow-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-dark/20 rounded-full blur-3xl group-hover:bg-brand-dark/40 transition-colors duration-500"></div>
                            <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed italic">
                                "Our success isn't measured in how many birds we sell; it's measured by the survival rate and profit on your farm."
                            </p>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
