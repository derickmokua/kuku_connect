"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7E6] text-[#D97706] text-xs font-bold uppercase tracking-wide mb-2">
                        Optimized for Kuroiler Genetics
                    </span>
                    <h2 className="text-4xl font-extrabold text-[#8B4513] mb-4">The Success Routine</h2>
                    <p className="text-[#6B4F4F] text-lg font-medium">A simple 3-step calendar to ensure your flock reaches its full weight.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Steps Selection */}
                    <div className="space-y-6 relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 -z-10 rounded-full"></div>

                        {milestones.map((m, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${activeStep === idx
                                    ? `bg-white shadow-xl ${m.color} scale-105 relative z-10`
                                    : 'bg-white border-transparent hover:bg-gray-50'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border ${m.color} z-10 shrink-0`}>
                                    {m.icon}
                                </div>
                                <div className="ml-6 flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-[#8B4513] text-xl">{m.period}</h3>
                                        <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Goal: {m.goal}</span>
                                    </div>
                                    <p className="text-gray-600 font-medium">{m.title}</p>
                                </div>
                                {activeStep === idx && (
                                    <ChevronRight className="w-6 h-6 text-[#D97706] animate-pulse" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Details Card */}
                    <div className="h-auto md:h-[400px] relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#FFFBEA] rounded-[2.5rem] p-6 md:p-10 shadow-lg h-full border border-[#D97706]/20 flex flex-col justify-center"
                            >
                                <div className="mb-8">
                                    <div className="inline-block px-4 py-1.5 bg-white text-[#D97706] font-bold rounded-full mb-4 text-sm uppercase tracking-wide border border-[#D97706]/10">
                                        Goal: {milestones[activeStep].goal}
                                    </div>
                                    <h3 className="text-3xl font-black text-[#8B4513] mb-4">{milestones[activeStep].title}</h3>
                                    <p className="text-[#6B4F4F] text-lg leading-relaxed">
                                        {milestones[activeStep].desc}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-[#8B4513] border-b border-[#D97706]/10 pb-2 mb-3">Critical Actions:</h4>
                                    {milestones[activeStep].focus.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#D97706]"></div>
                                            <span className="text-[#8B4513] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
