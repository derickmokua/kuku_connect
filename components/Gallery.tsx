"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ShieldCheck, TrendingUp, Truck } from "lucide-react";
import Image from "next/image";

type Category = "All" | "Infrastructure" | "Growth Stages" | "Success Stories";

const categories: Category[] = ["All", "Infrastructure", "Growth Stages", "Success Stories"];

const galleryItems = [
    {
        id: 1,
        category: "Infrastructure",
        icon: "/images/brooder.png",
        title: "The Bio-Shield Environment",
        caption: "Controlled Environment. We manage the first 21 days under strict heat and hygiene protocols to eliminate early-stage mortality.",
        tag: "Brooding Facility"
    },
    {
        id: 2,
        category: "Growth Stages",
        icon: "/images/kuroiler_hen.png",
        title: "Phase 3: Hardened",
        caption: "Standardized Growth. A Phase 3 (1-month) Kuroiler. Fully feathered, vaccinated, and ready for any Kenyan climate.",
        tag: "Product Spec"
    },
    {
        id: 3,
        category: "Infrastructure",
        icon: "/images/logistics.png",
        title: "Logistics Integrity",
        caption: "We use specialized, ventilated crates to ensure 100% live arrival at your farm gate. No overcrowding.",
        tag: "Logistics"
    },
    {
        id: 4,
        category: "Success Stories",
        icon: "/images/flock.png",
        title: "Proven Yields",
        caption: "Proven Results. Our males consistently hit 3.5kg+ by month 5 when the KukuConnect Success Routine is followed.",
        tag: "Milestone: Weight"
    },
    {
        id: 5,
        category: "Infrastructure",
        icon: "/images/vaccination.png",
        title: "Verified Immunity",
        caption: "Every batch is logged. We don't guess with health; we verify every vaccine dose. Cold-chain verified.",
        tag: "Health Protocol"
    },
    {
        id: 6,
        category: "Growth Stages",
        icon: "/images/kuroiler_hen.png",
        title: "Mature Stock",
        caption: "The End Goal. Heavy, dual-purpose birds that fetch premium market prices.",
        tag: "Market Ready"
    }
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section id="gallery" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-dark/10 text-[#9A3412] text-xs font-bold uppercase tracking-wide mb-2 border border-brand-dark/20">
                        Visual Proof
                    </span>
                    <h2 className="text-4xl font-extrabold text-surface-dark mb-4">The Evidence</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Visual proof of the KukuConnect system in action. From our facility to your farm.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                ? "bg-brand-dark text-white shadow-lg"
                                : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#1F2937] border border-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <m.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <m.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setSelectedItem(item)}
                                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-dark/10 transition-all duration-300 relative aspect-[4/3]"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/40 to-transparent p-6 flex flex-col justify-end opacity-90 transition-opacity">
                                    <span className="text-brand-dark text-xs font-bold uppercase tracking-wider mb-1">{item.tag}</span>
                                    <h3 className="text-white font-bold text-xl flex items-center gap-2">
                                        {item.title} <ZoomIn className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                </div>
                            </m.div>
                        ))}
                    </AnimatePresence>
                </m.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedItem && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                            onClick={() => setSelectedItem(null)}
                        >
                            <m.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-slate-200"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                                    <Image
                                        src={selectedItem?.icon || ""}
                                        alt={selectedItem?.title || ""}
                                        fill
                                        className="object-contain"
                                    />
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-brand-dark/10 text-[#9A3412] text-xs font-bold uppercase tracking-wide border border-brand-dark/20">
                                            {selectedItem?.tag}
                                        </span>
                                        <div className="h-px bg-slate-200 flex-1"></div>
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-[#1F2937] mb-4">{selectedItem?.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-brand-dark pl-6">
                                        {selectedItem?.caption}
                                    </p>
                                </div>
                            </m.div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
