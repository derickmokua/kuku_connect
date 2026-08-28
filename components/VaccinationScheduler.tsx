"use client";

import React from 'react';
import { Calendar, Syringe, Thermometer, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';
import { ORDER_APP_URL } from "@/lib/constants";

export default function VaccinationScheduler() {
    return (
        <section id="vaccination" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold border border-blue-500/20 mb-4 tracking-wide uppercase">
                            <ShieldCheck className="w-3 h-3" /> Zero-Trust Health
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark mb-4">The Immunity Protocol</h2>
                        <p className="text-slate-600 text-lg max-w-2xl">
                            We don't believe in "luck" when it comes to bird survival. Our Immunity Protocol is a hardened defense system built to protect your investment from Day 1 to Market.
                        </p>
                    </div>

                    {/* Cold Chain Badge */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-[#F1F5F9] p-3 rounded-xl text-blue-500">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-extrabold text-surface-dark">Cold-Chain Verified</div>
                            <div className="text-xs text-blue-700 font-medium tracking-wide uppercase">Temp Monitored 24/7</div>
                        </div>
                        <div className="h-2 w-2 bg-[#10B981] rounded-full animate-pulse ml-2"></div>
                    </div>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <Syringe className="w-8 h-8 text-brand-dark mb-4" />
                        <h3 className="font-bold text-surface-dark text-lg mb-2">Vetted Vaccines</h3>
                        <p className="text-slate-600 text-sm">We only use high-grade vaccines, kept at strict temperatures (Cold Chain) until they reach the bird.</p>
                    </div>
                    <div className="bg-surface-dark text-white p-6 rounded-3xl shadow-lg relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-dark/20 rounded-bl-full"></div>
                        <Calendar className="w-8 h-8 text-brand-dark mb-4" />
                        <h3 className="font-bold text-white text-lg mb-2">The Success Schedule</h3>
                        <p className="text-slate-400 text-sm">A precision-timed routine that tells you exactly when to protect and when to boost.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <FileCheck className="w-8 h-8 text-brand-dark mb-4" />
                        <h3 className="font-bold text-surface-dark text-lg mb-2">Digital Verification</h3>
                        <p className="text-slate-600 text-sm">Every bird we sell is backed by a verified health log. No guesswork.</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto font-medium">
                        Ready to access your flock's schedule and ensure maximum survival?
                    </p>
                    <a
                        href={ORDER_APP_URL}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full font-bold shadow-md hover:shadow-lg hover:bg-brand-hover transition-all hover:-translate-y-0.5"
                    >
                        Manage your flock <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
