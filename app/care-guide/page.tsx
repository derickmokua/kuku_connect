"use client";

import React from "react";
import { ChevronRight, Thermometer, Syringe, Wheat, Home } from "lucide-react";
import Link from "next/link";

export default function CareGuidePage() {
    const sections = [
        {
            title: "Brooding (Week 1-3)",
            icon: <Thermometer className="w-8 h-8 text-orange-500" />,
            content: "Chicks need warmth! Maintain temperature at 32-35°C for the first week. Reduce by 2°C each week. Use a heat source like a bulb or jiko (carefully). Ensure fresh air but no drafts.",
            tips: ["Check chick behavior: huddled = cold, panting = hot.", "Provide warm water with glucose/vitamins on day 1."]
        },
        {
            title: "Vaccination Schedule",
            icon: <Syringe className="w-8 h-8 text-blue-500" />,
            content: "Strict vaccination prevents diseases like Newcastle and Gumboro.",
            tips: [
                "Day 1: Mareks (Hatchery)",
                "Day 7: NewCastle (Eye drop)",
                "Day 10: Gumboro (Water)",
                "Day 14: Gumboro (Booster)",
                "Day 21: NewCastle (Water)"
            ]
        },
        {
            title: "Feeding & Nutrition",
            icon: <Wheat className="w-8 h-8 text-yellow-500" />,
            content: "Quality feed ensures fast growth and health.",
            tips: [
                "Week 1-8: Chick Mash (High protein)",
                "Week 9-18: Growers Mash",
                "Week 19+: Layers Mash / Kienyeji Mix",
                "Always provide clean water nearby."
            ]
        },
        {
            title: "Housing & Hygiene",
            icon: <Home className="w-8 h-8 text-green-500" />,
            content: "A clean coop means healthy birds.",
            tips: [
                "Use dry wood shavings for bedding.",
                "Disinfect coop before bringing in new chicks.",
                "Ensure 1 sq.ft per bird for broilers, 2 sq.ft for layers."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
            <div className="bg-[#1A1A1A] text-white py-16 px-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Standard Operating Procedures (SOP)</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    The Blueprint for 0% Mortality. Master the technical benchmarks for brooding, nutrition, and biosecurity.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row gap-6 border-l-4 border-[#F4B400]">
                        <div className="flex-shrink-0 bg-gray-100 p-4 rounded-full h-16 w-16 flex items-center justify-center">
                            {section.icon}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-3 text-gray-800">{section.title}</h2>
                            <p className="text-gray-600 mb-4">{section.content}</p>
                            <div className="bg-orange-50 p-4 rounded-xl">
                                <h3 className="font-semibold text-orange-800 mb-2">Key Tips:</h3>
                                <ul className="space-y-1">
                                    {section.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <ChevronRight className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
                        <p className="text-gray-400 mb-8">Get high-quality vaccinated chicks today and apply what you've learned.</p>
                        <Link href="/#products" className="inline-block px-8 py-4 bg-[#F57C00] text-white rounded-full font-bold hover:bg-[#E65100] transition">
                            Order Chicks Now
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-12">
                        <Wheat className="w-64 h-64" />
                    </div>
                </div>
            </div>
        </div>
    );
}
