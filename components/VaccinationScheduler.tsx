"use client";

import React, { useState } from 'react';
import { Calendar, Syringe, AlertCircle, CheckCircle2, Thermometer, ShieldCheck, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <section id="vaccination" className="py-24 px-4 bg-[#FFF7E6] border-t border-[#D97706]/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 mb-4 tracking-wide uppercase">
                            <ShieldCheck className="w-3 h-3" /> Zero-Trust Health
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#431407] mb-4">The Immunity Protocol</h2>
                        <p className="text-[#78350F] text-lg max-w-2xl">
                            We don't believe in "luck" when it comes to bird survival. Our Immunity Protocol is a hardened defense system built to protect your investment from Day 1 to Market.
                        </p>
                    </div>

                    {/* Cold Chain Badge */}
                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-500">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-extrabold text-[#1A1A1A]">Cold-Chain Verified</div>
                            <div className="text-xs text-blue-500 font-medium tracking-wide uppercase">Temp Monitored 24/7</div>
                        </div>
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                    </div>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-3xl border border-[#D97706]/10 shadow-sm">
                        <Syringe className="w-8 h-8 text-[#D97706] mb-4" />
                        <h3 className="font-bold text-[#431407] text-lg mb-2">Vetted Vaccines</h3>
                        <p className="text-gray-600 text-sm">We only use high-grade vaccines, kept at strict temperatures (Cold Chain) until they reach the bird.</p>
                    </div>
                    <div className="bg-[#431407] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                        <Calendar className="w-8 h-8 text-[#FFA64D] mb-4" />
                        <h3 className="font-bold text-white text-lg mb-2">The Success Schedule</h3>
                        <p className="text-gray-300 text-sm">A precision-timed routine that tells you exactly when to protect and when to boost.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-[#D97706]/10 shadow-sm">
                        <FileCheck className="w-8 h-8 text-[#D97706] mb-4" />
                        <h3 className="font-bold text-[#431407] text-lg mb-2">Digital Verification</h3>
                        <p className="text-gray-600 text-sm">Every bird we sell is backed by a verified health log. No guesswork.</p>
                    </div>
                </div>

                {/* Generator */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-[#D97706]/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D97706] to-[#B45309]"></div>

                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-end mb-8">
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-bold text-[#431407] mb-2 uppercase tracking-wide">Arrival Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full p-4 rounded-2xl bg-[#FFF7E6] border-2 border-transparent focus:border-[#D97706] text-[#431407] font-bold outline-none transition"
                                />
                            </div>
                            <button
                                onClick={generateSchedule}
                                disabled={!startDate}
                                className="w-full md:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded-2xl font-bold hover:bg-black transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" /> Generate My Success Schedule
                            </button>
                        </div>

                        <AnimatePresence>
                            {generatedSchedule.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2 text-[#D97706] font-bold">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Protocol Active</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => window.print()}
                                                className="px-4 py-2 bg-[#FFF7E6] text-[#D97706] font-bold rounded-xl hover:bg-[#FFE0B2] transition"
                                            >
                                                Print Protocol
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setStartDate("");
                                                    setGeneratedSchedule([]);
                                                }}
                                                className="px-4 py-2 bg-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-200 transition"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {generatedSchedule.map((item, idx) => (
                                            <div key={idx} className="flex flex-col md:flex-row gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 items-start md:items-center hover:bg-[#FFF7E6] hover:border-[#D97706]/20 transition-colors group">
                                                <div className="flex-shrink-0 w-20">
                                                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">Day</div>
                                                    <div className="text-2xl font-black text-[#431407] leading-none">{item.day}</div>
                                                </div>

                                                <div className="flex-shrink-0 w-36 font-bold text-[#D97706] bg-white border border-gray-200 py-2 px-4 rounded-xl text-center text-sm shadow-sm group-hover:border-[#D97706]/30">
                                                    {item.date}
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                                        <span className="font-semibold text-[#D97706]">{item.type}</span>
                                                        <span>•</span>
                                                        <span>{item.note}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center pt-8">
                                        <p className="text-[#431407] font-bold text-lg">Stop reacting to disease. Start preventing it.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
