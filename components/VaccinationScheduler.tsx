"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Syringe, AlertCircle, CheckCircle2, Thermometer, ShieldCheck, FileCheck } from 'lucide-react';
import { m, AnimatePresence } from "framer-motion";

const scheduleTemplate = [
    { day: 1, title: "Marek's Disease", type: "Hatchery", note: "Usually given at hatchery. Give multivitamins & glucose on arrival." },
    { day: 7, title: "Newcastle Disease (IB)", type: "Eye Drop / Water", note: "First dose. Crucial for respiratory health." },
    { day: 10, title: "Gumboro (IBD)", type: "Drinking Water", note: "1st Dose. withhold water 2 hours prior." },
    { day: 14, title: "Gumboro (IBD)", type: "Drinking Water", note: "2nd Dose (Booster). Essential for immunity." },
    { day: 21, title: "Newcastle (Lasota)", type: "Drinking Water", note: "Booster dose. Repeat every 3 months." },
    { day: 42, title: "Fowl Pox", type: "Wing Web Stab", note: "Week 6. Check for 'take' (scab) after 7 days." },
    { day: 56, title: "Fowl Typhoid", type: "Injection", note: "Week 8. Intramuscular injection." },
];

export default function VaccinationScheduler() {
    const [startDate, setStartDate] = useState("");
    const [generatedSchedule, setGeneratedSchedule] = useState<any[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const generateSchedule = () => {
        if (!startDate) return;

        const start = new Date(startDate);
        const newSchedule = scheduleTemplate.map(item => {
            const date = new Date(start);
            date.setDate(date.getDate() + (item.day - 1));
            return {
                ...item,
                date: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
            };
        });

        setGeneratedSchedule(newSchedule);
    };

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

                {/* Generator */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-dark to-brand-dark"></div>

                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end mb-8">
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-bold text-slate-600 mb-2 uppercase tracking-wide">Arrival Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full p-4 rounded-2xl bg-surface-light border-2 border-slate-200 focus:border-brand-dark text-surface-dark font-bold outline-none transition placeholder:italic placeholder:text-slate-400"
                                    placeholder={isMobile ? 'dd/mm/yy' : ''}
                                />
                            </div>
                            <button
                                onClick={generateSchedule}
                                disabled={!startDate}
                                className="w-full md:w-auto px-8 py-3 md:py-4 bg-brand-dark text-white rounded-full font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition hover:-translate-y-0.5"
                            >
                                <Calendar className="w-5 h-5" /> Generate My Success Schedule
                            </button>
                        </div>

                        <AnimatePresence>
                            {generatedSchedule.length > 0 && (
                                <m.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                        <div className="flex items-center gap-2 text-brand-dark font-bold">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Protocol Active</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => window.print()}
                                                className="px-4 py-2 bg-white text-brand-dark font-bold rounded-xl hover:bg-slate-50 transition border border-slate-200"
                                            >
                                                Print Protocol
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setStartDate("");
                                                    setGeneratedSchedule([]);
                                                }}
                                                className="px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-xl hover:bg-slate-200 transition"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {generatedSchedule.map((item, idx) => (
                                            <div key={idx} className="flex flex-col md:flex-row gap-4 p-5 rounded-2xl bg-surface-light border border-slate-200 items-start md:items-center hover:border-brand-dark/50 transition-colors group">
                                                <div className="flex-shrink-0 w-20">
                                                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Day</div>
                                                    <div className="text-2xl font-black text-surface-dark leading-none">{item.day}</div>
                                                </div>

                                                <div className="flex-shrink-0 w-36 font-bold text-brand-dark bg-white border border-slate-200 py-2 px-4 rounded-xl text-center text-sm shadow-sm group-hover:border-brand-dark/30 transition-colors">
                                                    {item.date}
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="font-bold text-surface-dark text-lg mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                                        <span className="font-semibold text-brand-dark">{item.type}</span>
                                                        <span>•</span>
                                                        <span>{item.note}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center pt-8">
                                        <p className="text-surface-dark font-bold text-lg">Stop reacting to disease. Start preventing it.</p>
                                    </div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
