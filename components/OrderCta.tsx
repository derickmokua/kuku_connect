"use client";

import React from "react";
import { ArrowRight, MessageCircle, Phone, CheckCircle, CalendarDays } from "lucide-react";
import { m } from "framer-motion";
import { ORDER_APP_URL, getOrderUrl } from "@/lib/constants";

const WHATSAPP =
    "https://wa.me/254716883375?text=" +
    encodeURIComponent("Habari KukuConnect, ninataka kuorder kuku.");

type PriceCard = {
    id: string;
    label: string;
    price: number;
    unit?: string;
    note: string;
    features: string[];
    popular?: boolean;
    /** Query hint for order form deep-link (optional) */
    orderHint?: string;
};

/** Browse-only prices on marketing site — cart is on app.kukuconnect.co.ke */
const CHICK_PRICES: PriceCard[] = [
    {
        id: "day-old",
        label: "Day Old",
        price: 110,
        note: "Just hatched. Needs heat day and night.",
        features: ["Lowest price", "You need a brooder"],
        orderHint: "day-old-chicks",
    },
    {
        id: "1-week",
        label: "1 Week Old",
        price: 130,
        note: "Past the first hard days.",
        features: ["1st Gumboro done", "Active and alert"],
        orderHint: "1-week-chicks",
    },
    {
        id: "2-weeks",
        label: "2 Weeks Old",
        price: 160,
        note: "Growing fast. Less heat needed.",
        features: ["Gumboro done", "Stronger birds"],
        orderHint: "2-weeks-chicks",
    },
    {
        id: "3-weeks",
        label: "3 Weeks Old",
        price: 190,
        note: "Feathers coming in well.",
        features: ["Newcastle done", "Can start free range"],
        orderHint: "3-weeks-chicks",
    },
    {
        id: "4-weeks",
        label: "4 Weeks Old",
        price: 250,
        note: "Strong and ready for the farm house.",
        features: ["No heat needed", "Ready for free range"],
        popular: true,
        orderHint: "4-weeks-chicks",
    },
];

const MATURE_PRICES: PriceCard[] = [
    {
        id: "hen",
        label: "Mature Hen",
        price: 1000,
        note: "Ready to lay or for meat.",
        features: ["Ready to lay", "Great for meat"],
    },
    {
        id: "cock",
        label: "Mature Cock",
        price: 1500,
        note: "Breeding stock and flock leader.",
        features: ["Breeding stock", "Heavy weight"],
    },
];

const EGG_PRICES: PriceCard[] = [
    {
        id: "table-eggs",
        label: "Table Eggs",
        price: 500,
        unit: " / tray",
        note: "Fresh eggs for the table.",
        features: ["Freshly collected", "Yellow yolk"],
    },
    {
        id: "fertilized",
        label: "Fertilized Eggs",
        price: 1000,
        unit: " / tray",
        note: "Ready for incubation.",
        features: ["High hatch rate", "Kuroiler genetics"],
    },
];




function PriceCardView({ card, index = 0 }: { card: PriceCard; index?: number }) {
    return (
        <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative flex flex-col p-6 md:p-8 rounded-[2.5rem] bg-white transition-all duration-500 overflow-hidden group ${
                card.popular
                    ? "border-2 border-brand-dark ring-4 ring-brand-dark/10 shadow-glow-primary md:scale-105 z-10 hover:-translate-y-2 hover:shadow-glow-primary-hover"
                    : "border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:border-brand-dark/30 hover:shadow-glow-primary"
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {card.popular && (
                <div className="absolute -top-1 right-6 bg-gradient-to-b from-brand-dark to-brand-hover text-white text-[10px] font-extrabold px-3 pt-3 pb-2 text-center uppercase tracking-widest rounded-b-xl shadow-md">
                    Most Popular
                </div>
            )}
            
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-extrabold text-surface-dark tracking-tight">{card.label}</h3>
                <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed min-h-[40px]">
                    {card.note}
                </p>
                
                <div className="mt-5 flex items-baseline gap-1 border-t border-slate-100 pt-5 mb-6">
                    <span className="text-sm font-bold text-slate-400">KES</span>
                    <span className="text-5xl font-extrabold text-surface-dark tracking-tighter">
                        {card.price}
                    </span>
                    <span className="text-sm font-semibold text-slate-400 ml-1">
                        {card.unit ? card.unit : "/ bird"}
                    </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                    {card.features.map((f) => (
                        <li
                            key={f}
                            className="flex items-start gap-3 text-sm text-slate-600 font-medium"
                        >
                            <div className="bg-emerald-50 p-1 rounded-full text-emerald-500 shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5" />
                            </div>
                            {f}
                        </li>
                    ))}
                </ul>
                
                <a
                    href={getOrderUrl(card.orderHint)}
                    aria-label={`Order ${card.label} on app`}
                    className="mt-auto w-full relative inline-flex items-center justify-center gap-2 py-4 rounded-full font-bold text-white bg-surface-dark overflow-hidden group/btn shadow-md hover:shadow-lg transition-all"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-hover opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2 group-hover/btn:-translate-y-0.5 transition-transform">
                        Order on app
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </a>
            </div>
        </m.div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1" />
            <h3 className="text-sm md:text-base font-bold text-brand-dark uppercase tracking-widest text-center">
                {children}
            </h3>
            <div className="h-px bg-slate-200 flex-1" />
        </div>
    );
}

/**
 * Marketing browse-only price cards.
 * Quantity, cart, and payment live on app.kukuconnect.co.ke/order.
 */
export default function OrderCta() {
    return (
        <section id="products" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">
                        Prices
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-surface-dark mb-4">
                        Clear prices. Order on the app.
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
                        See ages and prices here. Choose quantity, pay with M-Pesa, and get
                        confirmation on{" "}
                        <span className="font-bold text-surface-dark">app.kukuconnect.co.ke</span>.
                    </p>
                </div>

                {/* Next Batch Urgency Banner */}
                <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 bg-white border-2 border-brand-dark/10 rounded-3xl p-6 md:p-8 shadow-lg shadow-brand-dark/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-dark to-brand-yellow" />
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-1 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-brand-dark/10 text-brand-dark p-3 rounded-2xl">
                                <CalendarDays className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold text-surface-dark mb-1">Next Hatching Batch</h3>
                                <p className="text-slate-500 font-medium text-sm">Reserving now for upcoming delivery</p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex-1">
                            <div className="flex justify-between text-sm font-bold mb-2.5">
                                <span className="text-brand-dark">85% Reserved</span>
                                <span className="text-slate-400">Only 15% Left</span>
                            </div>
                            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                                <m.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-brand-dark to-brand-yellow rounded-full relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </m.div>
                            </div>
                        </div>
                    </div>
                </m.div>

                <SectionTitle>Chicks (day old – 1 month)</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
                    {CHICK_PRICES.map((card, idx) => (
                        <PriceCardView key={card.id} card={card} index={idx} />
                    ))}
                </div>

                <SectionTitle>Mature birds</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
                    {MATURE_PRICES.map((card, idx) => (
                        <PriceCardView key={card.id} card={card} index={idx} />
                    ))}
                </div>

                <SectionTitle>Eggs</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
                    {EGG_PRICES.map((card, idx) => (
                        <PriceCardView key={card.id} card={card} index={idx} />
                    ))}
                </div>

                <div className="rounded-[2rem] bg-surface-dark text-white p-8 md:p-10 text-center shadow-xl max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                        Ready to order &amp; pay?
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base mb-8 max-w-lg mx-auto">
                        Open the order form, pick age and quantity, enter your phone, then pay
                        with M-Pesa. No cart on this website.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                        <a
                            href={ORDER_APP_URL}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark hover:bg-brand-hover text-white rounded-full font-bold text-lg shadow-lg shadow-brand-dark/30 transition-all hover:-translate-y-0.5"
                        >
                            Go to order form
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold transition-all"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                        <a
                            href="tel:+254716883375"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            Call
                        </a>
                    </div>
                    <p className="mt-6 text-xs text-slate-400">
                        Orders &amp; payments · app.kukuconnect.co.ke
                    </p>
                </div>
            </div>
        </section>
    );
}
