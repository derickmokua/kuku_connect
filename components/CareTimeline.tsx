"use client";

import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from "framer-motion";
import { Thermometer, Syringe, Wheat, ChevronRight } from 'lucide-react';

const milestones = [
    {
        period: 'Week 1',
        title: 'Survival Phase',
        icon: <Thermometer className="w-6 h-6 text-red-500" />,
        color: 'border-red-400',
        goal: '100% Survival',
        focus: ["Heat Source (24/7)", "Chick Starter Feed", "Gumboro Vaccine"],
        desc: "The most critical week. Keep them warm (32°C) and eating instantly to ensure 0% mortality. Cold chicks don't grow."
    },
    {
        period: 'Month 1',
        title: 'Foundation Phase',
        icon: <Syringe className="w-6 h-6 text-purple-500" />,
        color: 'border-purple-400',
        goal: 'Strong Frame',
        focus: ["Newcastle Vaccine", "Grower Pellets Intro", "Expand Space"],
        desc: "Immunity is building. They need structural support (protein) to grow their frame before they pack on meat."
    },
    {
        period: 'Month 3',
        title: 'Production Phase',
        icon: <Wheat className="w-6 h-6 text-yellow-500" />,
        color: 'border-yellow-400',
        goal: 'Heavy Weight',
        focus: ["Scavenging / Greens", "Finisher Feed", "Deworming"],
        desc: "Hardened and Heavy. They can now roam freely and convert low-cost food into profit. Weigh them weekly."
    }
];

export default function CareTimeline() {
    const [activeStep, setActiveStep] = useState(0);
    const isFirstMount = useRef(true);
    const detailsRef = useRef<HTMLDivElement>(null);

    // Scroll details into view on mobile when activeStep changes
    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }
        if (typeof window !== 'undefined' && detailsRef.current) {
            if (window.innerWidth < 768) { // Tailwind's md breakpoint
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [activeStep]);

    return (
        <section className="py-12 px-4 bg-surface-light">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-dark/10 text-[#9A3412] text-xs font-bold uppercase tracking-wide mb-2 border border-brand-dark/20">
                        Optimized for Kuroiler Genetics
                    </span>
                    <h2 className="text-4xl font-extrabold text-surface-dark mb-4">The Success Routine</h2>
                    <p className="text-[#6B7280] text-lg font-medium">A simple 3-step calendar to ensure your flock reaches its full weight.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Steps Selection */}
                    <div className="space-y-6 relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-800 -z-10 rounded-full"></div>

                        {milestones.map((m, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${activeStep === idx
                                    ? `bg-white shadow-2xl ${m.color.replace('border-', 'border-')} scale-105 relative z-10 translate-x-2`
                                    : 'bg-surface-light border-transparent hover:bg-slate-100 hover:translate-x-1'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border ${m.color} z-10 shrink-0`}>
                                    {m.icon}
                                </div>
                                <div className="ml-6 flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-surface-dark text-xl">{m.period}</h3>
                                        <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Goal: {m.goal}</span>
                                    </div>
                                    <p className="text-[#6B7280] font-medium">{m.title}</p>
                                </div>
                                {activeStep === idx && (
                                    <ChevronRight className="w-6 h-6 text-brand-yellow animate-pulse" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Details Card */}
                    <div className="h-auto md:h-[400px] relative" ref={detailsRef}>
                        <AnimatePresence mode='wait'>
                            <m.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/60 backdrop-blur-md h-full flex flex-col justify-center relative overflow-hidden"
                            >
                                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${milestones[activeStep].color.replace('border-', 'from-')} to-transparent opacity-10 rounded-full blur-2xl`}></div>
                                <div className="mb-8 relative z-10">
                                    <div className="inline-block px-4 py-1.5 bg-surface-light text-brand-dark font-bold rounded-full mb-4 text-sm uppercase tracking-wide border border-brand-dark/20 shadow-sm">
                                        Goal: {milestones[activeStep].goal}
                                    </div>
                                    <h3 className="text-3xl font-black text-surface-dark mb-4">{milestones[activeStep].title}</h3>
                                    <p className="text-[#6B7280] text-lg leading-relaxed">
                                        {milestones[activeStep].desc}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-surface-dark border-b border-slate-200 pb-2 mb-3">Critical Actions:</h4>
                                    {milestones[activeStep].focus.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                                            <span className="text-[#6B7280] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </m.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
