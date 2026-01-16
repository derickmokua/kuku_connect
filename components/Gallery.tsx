"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ShieldCheck, TrendingUp, Truck } from "lucide-react";

type Category = "All" | "Infrastructure" | "Growth Stages" | "Success Stories";

const categories: Category[] = ["All", "Infrastructure", "Growth Stages", "Success Stories"];

const galleryItems = [
    {
        id: 1,
        category: "Infrastructure",
        icon: "🏭", // Placeholder for photo
        title: "The Bio-Shield Environment",
        caption: "Controlled Environment. We manage the first 21 days under strict heat and hygiene protocols to eliminate early-stage mortality.",
        tag: "Brooding Facility"
    },
    {
        id: 2,
        category: "Growth Stages",
        icon: "🐣", // Placeholder for photo
        title: "Phase 3: Hardened",
        caption: "Standardized Growth. A Phase 3 (1-month) Kuroiler. Fully feathered, vaccinated, and ready for any Kenyan climate.",
        tag: "Product Spec"
    },
    {
        id: 3,
        category: "Infrastructure",
        icon: "🚛", // Placeholder for photo
        title: "Logistics Integrity",
        caption: "We use specialized, ventilated crates to ensure 100% live arrival at your farm gate. No overcrowding.",
        tag: "Logistics"
    },
    {
        id: 4,
        category: "Success Stories",
        icon: "⚖️", // Placeholder for photo
        title: "Proven Yields",
        caption: "Proven Results. Our males consistently hit 3.5kg+ by month 5 when the KukuConnect Success Routine is followed.",
        tag: "Milestone: Weight"
    },
    {
        id: 5,
        category: "Infrastructure",
        icon: "💉", // Placeholder for photo
        title: "Verified Immunity",
        caption: "Every batch is logged. We don't guess with health; we verify every vaccine dose. Cold-chain verified.",
        tag: "Health Protocol"
    },
    {
        id: 6,
        category: "Growth Stages",
        icon: "🐓", // Placeholder for photo
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
        <section id="gallery" className="py-24 px-4 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
                        Visual Proof
                    </span>
                    <h2 className="text-4xl font-extrabold text-[#431407] mb-4">The Evidence</h2>
                    <p className="text-[#6B4F4F] text-lg max-w-2xl mx-auto">
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
                                    ? "bg-[#431407] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setSelectedItem(item)}
                                className="group cursor-pointer rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative aspect-[4/3]"
                            >
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-6xl group-hover:scale-110 transition duration-500">
                                    {item.icon}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end opacity-90 transition-opacity">
                                    <span className="text-[#D97706] text-xs font-bold uppercase tracking-wider mb-1">{item.tag}</span>
                                    <h3 className="text-white font-bold text-xl flex items-center gap-2">
                                        {item.title} <ZoomIn className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="aspect-video bg-gray-100 flex items-center justify-center text-8xl relative">
                                    {selectedItem.icon}
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-[#FFF7E6] text-[#D97706] text-xs font-bold uppercase tracking-wide">
                                            {selectedItem.tag}
                                        </span>
                                        <div className="h-px bg-gray-100 flex-1"></div>
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-[#431407] mb-4">{selectedItem.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#D97706] pl-6">
                                        {selectedItem.caption}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
