"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Coins } from "lucide-react";

const advantages = [
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "They Don't Die Easily",
        subtitle: "Max Hardiness",
        desc: "Bred with indigenous bloodlines to survive typical farm conditions. High disease resistance means more birds make it to market.",
        color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        icon: <Scale className="w-10 h-10" />,
        title: "They Get Heavy Fast",
        subtitle: "Rapid Weight Gain",
        desc: "Males reach 3-4kgs in 5 months. Double the weight of a local chicken in the same time, giving you a faster turnover.",
        color: "bg-green-50 text-green-600 border-green-100"
    },
    {
        icon: <Coins className="w-10 h-10" />,
        title: "Low Feeding Cost",
        subtitle: "Scavenging Experts",
        desc: "After Phase 3, they forage for most of their food. You spend less on commercial sacks while they still gain weight.",
        color: "bg-amber-50 text-amber-600 border-amber-100"
    }
];

export default function KuroilerAdvantages() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold tracking-wider uppercase text-sm">Real Farm Logic</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#431407] mt-3 mb-6">Why Farmers Switch to Kuroiler</h2>
                    <p className="text-[#78350F] text-lg max-w-2xl mx-auto">
                        It comes down to simple math: Survival + Weight = Profit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((adv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2rem] border hover:shadow-xl transition-all duration-300 group bg-white ${adv.color.split(' ')[2]}`} // Use border color class
                        >
                            <div className={`${adv.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {adv.icon}
                            </div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">{adv.subtitle}</p>
                            <h3 className="text-2xl font-bold text-[#431407] mb-4">{adv.title}</h3>
                            <p className="text-[#78350F]/80 text-lg leading-relaxed">
                                {adv.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
