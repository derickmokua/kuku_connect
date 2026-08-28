"use client";

import React from "react";
import { m } from "framer-motion";
import { ShieldCheck, Scale, Coins } from "lucide-react";

const advantages = [
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Trusted Quality",
        subtitle: "Healthy, Sprightly Peepers",
        desc: "Our chicks are carefully selected, vaccinated, and raised for maximum health and survival, giving you peace of mind from day one.",
    },
    {
        icon: <Scale className="w-10 h-10" />,
        title: "Expert Support",
        subtitle: "Guidance That Grows",
        desc: "We don't just supply the flock; we kuku with you. Get real-time squawks, proven tips, and ongoing support from our mother hens.",
    },
    {
        icon: <Coins className="w-10 h-10" />,
        title: "Profitable Partnership",
        subtitle: "Your Success, Our Goal",
        desc: "We're committed to your kuku's growth. Fair prices, honest dealings, and a focus on your golden eggs set us apart.",
    }
];

export default function KuroilerAdvantages() {
    return (
        <section id="why-kukuconnect" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-dark font-bold tracking-wider uppercase text-sm">Why Choose KukuConnect?</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark mt-3 mb-6">Flocks Flourish With Us</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                        Discover why more farmers trust KukuConnect for sprightly chicks, expert clucks, and real eggs. We're more than a supplier, we're the rooster to your flock.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((adv, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-dark/20 transition-all duration-300 group bg-white relative overflow-hidden hover:-translate-y-2 hover:border-brand-dark/30`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className={`bg-brand-dark/5 text-brand-dark w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {adv.icon}
                            </div>
                            <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-1">{adv.subtitle}</p>
                            <h3 className="text-2xl font-bold text-surface-dark mb-4">{adv.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {adv.desc}
                            </p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
