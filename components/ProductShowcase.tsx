"use client";

import React from "react";
import { m } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ORDER_APP_URL, getOrderUrl } from "@/lib/constants";

const products = {
    chicks: [
        {
            id: "c1",
            title: "Day Old",
            price: 110,
            features: ["Cheapest entry", "Requires brooder", "High potential"],
            desc: "Freshly hatched. Needs 24/7 heat and care.",
            recommended: false,
        },
        {
            id: "c2",
            title: "1 Week Old",
            price: 130,
            features: ["1st Gumboro done", "Active & alert", "Starter feed"],
            desc: "Past the critical first few days.",
            recommended: false,
        },
        {
            id: "c3",
            title: "2 Weeks Old",
            price: 160,
            features: ["Strong immunity", "Gumboro vaccinated", "Needs less heat"],
            desc: "Growing fast and past high mortality risk.",
            recommended: false,
        },
        {
            id: "c4",
            title: "3 Weeks Old",
            price: 190,
            features: ["Newcastle vaccinated", "Feathering well", "Active foraging"],
            desc: "Robust and almost ready for hardening.",
            recommended: false,
        },
        {
            id: "c5",
            title: "4 Weeks Old",
            price: 250,
            features: ["No heat needed", "Free-range ready", "High survival rate"],
            desc: "Hardened. Ready for the outside coop.",
            recommended: true,
        },
    ],
    mature: [
        {
            id: "m1",
            title: "Mature Hen",
            price: 1000,
            features: ["Ready to lay", "Great for meat", "Fully grown"],
            desc: "Perfect for immediate egg production or meat.",
            recommended: false,
        },
        {
            id: "m2",
            title: "Mature Cock",
            price: 1500,
            features: ["Breeding stock", "Heavy weight", "Flock leader"],
            desc: "Superior genetics for breeding your flock.",
            recommended: true,
        },
    ],
    eggs: [
        {
            id: "e1",
            title: "Table Eggs",
            price: 500,
            features: ["Freshly collected", "Yellow yolk", "Organic"],
            desc: "Delicious, nutritious eggs for your table.",
            recommended: false,
            unit: " / tray",
        },
        {
            id: "e2",
            title: "Fertilized Eggs",
            price: 1000,
            features: ["High hatch rate", "Kuroiler genetics", "Selected daily"],
            desc: "Ready for incubation. Start your own flock.",
            recommended: true,
            unit: " / tray",
        },
    ],
};

/** Full catalogue of price cards — no cart; order on FMS. */
export default function ProductShowcase() {
    return (
        <section id="products" className="py-20 px-4 bg-surface-light">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-4xl font-extrabold text-surface-dark mb-4">Our flock &amp; hatch</h2>
                <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
                    Prices only on this site. Quantity, cart, and M-Pesa payment are on the order
                    app.
                </p>
            </div>

            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h3 className="text-2xl font-bold text-brand-yellow uppercase tracking-widest">
                        Chicks (day old – 1 month)
                    </h3>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {products.chicks.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h3 className="text-2xl font-bold text-brand-yellow uppercase tracking-widest">
                        Mature chicken
                    </h3>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {products.mature.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h3 className="text-2xl font-bold text-brand-yellow uppercase tracking-widest">
                        Fresh eggs
                    </h3>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {products.eggs.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({
    product,
}: {
    product: {
        id: string;
        title: string;
        price: number;
        features: string[];
        desc: string;
        recommended?: boolean;
        unit?: string;
    };
}) {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col p-8 transition-all duration-300 bg-white rounded-[2.5rem] shadow-lg shadow-slate-200/50 group overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${
                product.recommended
                    ? "border-2 border-brand-yellow ring-4 ring-brand-yellow/10"
                    : "border border-slate-200 hover:border-brand-yellow/30 hover:shadow-brand-yellow/10"
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {product.recommended && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-brand-yellow to-[#FF6B00] text-white text-xs font-bold px-4 py-2 text-center uppercase tracking-widest shadow-sm">
                    Most popular
                </div>
            )}

            <h3 className={`text-xl font-extrabold text-surface-dark text-center mb-2 ${product.recommended ? "mt-8" : "mt-2"}`}>
                {product.title}
            </h3>

            <p className="text-center text-[#64748B] text-sm mb-6 px-2 min-h-[40px] leading-relaxed">
                {product.desc}
            </p>

            <div className="flex justify-center items-baseline mb-6 space-x-1 border-t border-slate-200/60 pt-6 w-full">
                <span className="text-lg font-bold text-surface-dark self-start mt-2">KES</span>
                <span className="text-5xl font-extrabold text-surface-dark tracking-tight">
                    {product.price}
                </span>
                {product.unit && (
                    <span className="text-sm font-bold text-slate-500 self-end mb-2">
                        {product.unit}
                    </span>
                )}
            </div>

            <ul className="space-y-3 mb-8">
                {product.features.map((feat) => (
                    <li key={feat} className="flex items-start text-sm text-[#64748B] font-medium">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] mr-3 shrink-0" />
                        {feat}
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                <a
                    href={getOrderUrl(product.id)}
                    aria-label={`Order ${product.title} on app`}
                    className="w-full py-4 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 bg-gradient-to-r from-brand-yellow to-[#FF6B00]"
                >
                    Order on app <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </m.div>
    );
}
