"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Package, User } from "lucide-react";
import { useCart } from "./context/CartContext";

const stages = [
    {
        id: "phase-1-day-old",
        label: "Phase 1: Day-Old",
        price: 110,
        desc: "Best price. Needs 24/7 heat and high attention.",
        features: ["Cheapest Entry Point", "Requires Brooder", "Maximum Profit Potential"]
    },
    {
        id: "phase-2-2-weeks",
        label: "Phase 2: Started (2-Weeks)",
        price: 160,
        desc: "Started. They are stronger and past the most fragile stage.",
        features: ["Past Critical Mortality", "Gumboro Vaccinated", "Needs Less Heat"]
    },
    {
        id: "phase-3-1-month",
        label: "Phase 3: Hardened (1-Month)",
        price: 250,
        desc: "Hardened. Fully feathered and ready for the outside coop.",
        features: ["No Heat Needed", "Free-Range Ready", "High Survival Rate"]
    },
    {
        id: "phase-4-mature",
        label: "Phase 4: Mature (Production)",
        price: 450,
        desc: "Ready for meat or near egg-laying age.",
        features: ["Immediate Returns", "Heavy Weight", "Scavenging Expert"]
    }
];

export default function GrowthTimeline() {
    const { addToCart } = useCart();
    const [step, setStep] = useState(1);
    const [selectedStage, setSelectedStage] = useState(stages[0]);
    const [quantity, setQuantity] = useState(50);
    const [protocols, setProtocols] = useState({
        starterPack: false,
        bioShield: false
    });

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        // Add Birds to Cart
        addToCart({
            id: selectedStage.id,
            title: `[BATCH] ${selectedStage.label}`,
            price: selectedStage.price,
            image: "🐔",
            quantity: quantity
        });

        // Add Success Kits
        if (protocols.starterPack) {
            addToCart({
                id: `kit-feed-${selectedStage.id}`,
                title: `[KIT] Starter Feed Pack`,
                price: 850,
                image: "📦",
                quantity: 1
            });
        }
        if (protocols.bioShield) {
            addToCart({
                id: `kit-bio-${selectedStage.id}`,
                title: `[KIT] Bio-Shield Vaccine Kit`,
                price: 1500,
                image: "💉",
                quantity: 1
            });
        }
    };

    return (
        <section id="products" className="py-24 px-4 bg-[#FFFBEA]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#431407] mb-2">Start Your Batch</h2>
                    <p className="text-[#78350F] text-lg">Build a profitable system in 3 simple steps.</p>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mb-8 md:mb-12">
                    {/* Desktop Steps */}
                    <div className="hidden md:flex items-center gap-4">
                        {["Choose Age", "Quantity", "Success Kit", "Summary"].map((label, idx) => (
                            <div key={idx} className={`items-center gap-2 flex ${step > idx ? "text-[#D97706]" : "text-gray-400"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 
                                    ${step > idx ? "bg-[#D97706] text-white border-[#D97706]" :
                                        step === idx + 1 ? "border-[#D97706] text-[#D97706]" : "border-gray-300"}`}>
                                    {idx + 1}
                                </div>
                                <span className="font-semibold text-sm">{label}</span>
                                {idx < 3 && <div className="w-8 h-0.5 bg-gray-200" />}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Step Counter */}
                    <div className="md:hidden bg-[#FFF7E6] px-4 py-2 rounded-full border border-[#D97706]/20">
                        <span className="text-[#D97706] font-bold text-sm">Step {step} of 4: {["Choose Age", "Quantity", "Success Kit", "Summary"][step - 1]}</span>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-[#D97706]/10 overflow-hidden min-h-[500px] flex flex-col">
                    <div className="p-6 md:p-12 flex-1">
                        <AnimatePresence mode="wait">

                            {/* STEP 1: CHOSE AGE */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-[#431407]">Step 1: Choose Age</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {stages.map((stage) => (
                                            <button
                                                key={stage.id}
                                                onClick={() => setSelectedStage(stage)}
                                                className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg relative overflow-hidden
                                                ${selectedStage.id === stage.id
                                                        ? "border-[#D97706] bg-[#FFA64D]/5"
                                                        : "border-gray-100 hover:border-[#D97706]/30"
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-[#431407] text-lg">{stage.label}</span>
                                                    <span className="font-bold text-[#D97706]">KES {stage.price}</span>
                                                </div>
                                                <p className="text-gray-600 mb-4 font-medium">{stage.desc}</p>
                                                <div className="space-y-1">
                                                    {stage.features.map(f => (
                                                        <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                                                            <Check className="w-4 h-4 text-green-600" /> {f}
                                                        </div>
                                                    ))}
                                                </div>
                                                {selectedStage.id === stage.id && (
                                                    <div className="absolute top-0 right-0 p-2 bg-[#D97706] text-white rounded-bl-xl">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: QUANTITY */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-2xl font-bold text-[#431407]">Step 2: How many birds?</h3>
                                    <div className="bg-[#FFA64D]/5 p-10 rounded-3xl border border-[#D97706]/20 text-center">
                                        <div className="text-7xl font-extrabold text-[#D97706] mb-6">{quantity}</div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            step="10"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                            className="w-full max-w-lg h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
                                        />
                                        <p className="text-gray-500 mt-6 font-medium">Slide to adjust quantity (Minimum 10)</p>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Total Bird Cost</p>
                                        <p className="text-3xl font-extrabold text-[#431407]">KES {(selectedStage.price * quantity).toLocaleString()}</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: SUCCESS KITS */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-[#431407]">Step 3: Add Success Kit</h3>
                                    <p className="text-gray-600">Optional add-ons to ensure your batch survives and grows.</p>

                                    <div
                                        onClick={() => setProtocols(p => ({ ...p, starterPack: !p.starterPack }))}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-6 
                                        ${protocols.starterPack ? "border-[#D97706] bg-[#FFA64D]/5" : "border-gray-100 hover:border-[#D97706]/30"}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0
                                            ${protocols.starterPack ? "border-[#D97706] bg-[#D97706]" : "border-gray-300"}`}>
                                            {protocols.starterPack && <Check className="w-5 h-5 text-white" />}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-[#431407] text-lg">Starter Feed Pack</h4>
                                            <p className="text-gray-600">Includes enough high-protein Chick Start feed for Week 1.</p>
                                        </div>
                                        <div className="font-bold text-[#D97706] text-lg whitespace-nowrap">+ 850 KES</div>
                                    </div>

                                    <div
                                        onClick={() => setProtocols(p => ({ ...p, bioShield: !p.bioShield }))}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-6 
                                        ${protocols.bioShield ? "border-[#D97706] bg-[#FFA64D]/5" : "border-gray-100 hover:border-[#D97706]/30"}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0
                                            ${protocols.bioShield ? "border-[#D97706] bg-[#D97706]" : "border-gray-300"}`}>
                                            {protocols.bioShield && <Check className="w-5 h-5 text-white" />}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-[#431407] text-lg">Bio-Shield Vaccine Kit</h4>
                                            <p className="text-gray-600">Required Gumboro and Newcastle vaccines for this batch.</p>
                                        </div>
                                        <div className="font-bold text-[#D97706] text-lg whitespace-nowrap">+ 1,500 KES</div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4: SUMMARY */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-[#431407]">Step 4: Confirm Batch Details</h3>

                                    <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 space-y-4 font-mono text-sm relative overflow-hidden">
                                        {/* Decorative stripe */}
                                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#D97706] to-[#B45309]"></div>

                                        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                                            <span className="text-gray-400">BATCH PROFILE</span>
                                            <span className="font-bold text-[#F57C00]">{selectedStage.label.toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                                            <span className="text-gray-400">QUANTITY</span>
                                            <span className="font-bold">{quantity} BIRDS</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                                            <span className="text-gray-400">SUCCESS KIT</span>
                                            <span className="text-right">
                                                {protocols.starterPack ? "FEED LOADED" : "NO FEED"}<br />
                                                {protocols.bioShield ? "VACCINES LOADED" : "NO VACCINES"}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-gray-400 text-lg">TOTAL INVESTMENT</span>
                                            <span className="font-bold text-2xl text-[#FFA64D]">KES {((selectedStage.price * quantity) + (protocols.starterPack ? 850 : 0) + (protocols.bioShield ? 1500 : 0)).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 text-sm">
                                        <User className="w-5 h-5 shrink-0 mt-0.5" />
                                        <p>
                                            <strong>Why book on WhatsApp?</strong><br />
                                            We need to confirm delivery logistics to your specific farm location before payment.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer / Nav */}
                    <div className="bg-gray-50 border-t border-gray-100 p-6 flex justify-between items-center">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition ${step === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-200"}`}
                        >
                            <ArrowLeft className="w-5 h-5" /> Back
                        </button>

                        {step < 4 ? (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition shadow-lg"
                            >
                                Continue <ArrowRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition shadow-lg shadow-green-200"
                            >
                                <Package className="w-5 h-5" /> Book on WhatsApp
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
