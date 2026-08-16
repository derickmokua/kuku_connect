"use client";

import React from "react";
import { ArrowRight, MessageCircle, Phone, CheckCircle, CalendarDays } from "lucide-react";
import { m } from "framer-motion";

/** Public order app — cart, qty, and payment live on the FMS. */
export const ORDER_APP_URL =
    process.env.NEXT_PUBLIC_ORDER_URL || "https://app.kukuconnect.co.ke/order";

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



function orderUrl(productId?: string) {
    if (!productId) return ORDER_APP_URL;
    return `${ORDER_APP_URL}?product=${encodeURIComponent(productId)}`;
}

function PriceCardView({ card }: { card: PriceCard }) {
    return (
        <div
            className={`relative flex flex-col p-6 md:p-7 rounded-[2.5rem] bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl overflow-hidden group ${
                card.popular
                    ? "border-2 border-[#C2410C] ring-4 ring-[#C2410C]/10 md:scale-105 z-10 hover:-translate-y-2"
                    : "border border-slate-200 hover:-translate-y-2 hover:border-[#C2410C]/30 hover:shadow-[#C2410C]/10"
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {card.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C2410C] to-[#ea580c] text-white text-[10px] font-bold px-3 py-1.5 text-center uppercase tracking-widest rounded-t-[1.6rem]">
                    Most popular
                </div>
            )}
            <div className={card.popular ? "mt-6" : ""}>
                <h3 className="text-xl font-extrabold text-[#0F172A]">{card.label}</h3>
                <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed min-h-[40px]">
                    {card.note}
                </p>
                <p className="mt-4 flex items-baseline gap-1 border-t border-slate-100 pt-4">
                    <span className="text-sm font-bold text-[#0F172A]">KES</span>
                    <span className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
                        {card.price}
                    </span>
                    {card.unit && (
                        <span className="text-sm font-semibold text-slate-500">{card.unit}</span>
                    )}
                    {!card.unit && (
                        <span className="text-sm font-semibold text-slate-500"> / bird</span>
                    )}
                </p>
                <ul className="mt-4 space-y-2 mb-6">
                    {card.features.map((f) => (
                        <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-slate-600 font-medium"
                        >
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {f}
                        </li>
                    ))}
                </ul>
                <a
                    href={orderUrl(card.orderHint)}
                    aria-label={`Order ${card.label} on app`}
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#C2410C] to-[#ea580c] shadow-md shadow-[#C2410C]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                    Order on app
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1" />
            <h3 className="text-sm md:text-base font-bold text-[#C2410C] uppercase tracking-widest text-center">
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
        <section id="products" className="py-24 px-4 bg-[#FAFAFA] border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-[#C2410C] text-sm font-bold uppercase tracking-widest mb-3">
                        Prices
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
                        Clear prices. Order on the app.
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
                        See ages and prices here. Choose quantity, pay with M-Pesa, and get
                        confirmation on{" "}
                        <span className="font-bold text-[#0F172A]">app.kukuconnect.co.ke</span>.
                    </p>
                </div>

                {/* Next Batch Urgency Banner */}
                <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 bg-white border-2 border-[#C2410C]/10 rounded-3xl p-6 md:p-8 shadow-lg shadow-[#C2410C]/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#C2410C] to-[#FF8A00]" />
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-1 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-[#C2410C]/10 text-[#C2410C] p-3 rounded-2xl">
                                <CalendarDays className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold text-[#0F172A] mb-1">Next Hatching Batch</h3>
                                <p className="text-slate-500 font-medium text-sm">Reserving now for upcoming delivery</p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex-1">
                            <div className="flex justify-between text-sm font-bold mb-2.5">
                                <span className="text-[#C2410C]">85% Reserved</span>
                                <span className="text-slate-400">Only 15% Left</span>
                            </div>
                            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                                <m.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-[#C2410C] to-[#FF8A00] rounded-full relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </m.div>
                            </div>
                        </div>
                    </div>
                </m.div>

                <SectionTitle>Chicks (day old – 1 month)</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
                    {CHICK_PRICES.map((card) => (
                        <PriceCardView key={card.id} card={card} />
                    ))}
                </div>

                <SectionTitle>Mature birds</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
                    {MATURE_PRICES.map((card) => (
                        <PriceCardView key={card.id} card={card} />
                    ))}
                </div>

                <SectionTitle>Eggs</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
                    {EGG_PRICES.map((card) => (
                        <PriceCardView key={card.id} card={card} />
                    ))}
                </div>

                <div className="rounded-[2rem] bg-[#0F172A] text-white p-8 md:p-10 text-center shadow-xl max-w-4xl mx-auto">
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
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C2410C] hover:bg-[#ea580c] text-white rounded-full font-bold text-lg shadow-lg shadow-[#C2410C]/30 transition-all hover:-translate-y-0.5"
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
