"use client";

import React from "react";
import { ArrowRight, MessageCircle, Phone, CalendarDays } from "lucide-react";
import { m } from "framer-motion";
import Image from "next/image";
import { ORDER_APP_URL, getOrderUrl } from "@/lib/constants";

const WHATSAPP =
    "https://wa.me/254716883375?text=" +
    encodeURIComponent("Habari KukuConnect, ninataka kuorder kuku.");

const OFFERINGS = [
    {
        id: "chicks",
        image: "/images/chicks_card.webp",
        title: "CHICKS",
        subtitle: "1 Day → 1 Month",
        price: "From KES 110",
        unit: "per chick",
        link: getOrderUrl("day-old-chicks")
    },
    {
        id: "mature",
        image: "/images/mature_birds_card.webp",
        title: "MATURE BIRDS",
        subtitle: "Hens & Cocks",
        price: "Meat-ready",
        unit: "birds",
        link: getOrderUrl("hen")
    },
    {
        id: "eggs",
        image: "/images/eggs_card.webp",
        title: "EGGS",
        subtitle: "Table & Incubation",
        price: "Freshly",
        unit: "collected",
        link: getOrderUrl("table-eggs")
    }
];

export default function OrderCta() {
    return (
        <section id="products" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">
                        What We Offer
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-surface-dark mb-4">
                        Poultry for every stage of the journey.
                    </h2>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {OFFERINGS.map((offer, idx) => (
                        <m.a
                            key={offer.id}
                            href={offer.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group block relative bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-300/50 hover:shadow-2xl hover:shadow-brand-dark/15 hover:border-brand-dark/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                        >
                            <div className="w-full h-64 relative overflow-hidden bg-slate-100">
                                <Image src={offer.image} alt={offer.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-white font-bold text-sm">
                                    <span>View Options</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-extrabold text-surface-dark tracking-tight mb-1">{offer.title}</h3>
                                <p className="text-slate-500 font-medium mb-6 text-sm">{offer.subtitle}</p>
                                
                                <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-6">
                                    <div className="flex flex-col">
                                        <span className="text-xl font-black text-brand-dark">{offer.price}</span>
                                        <span className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{offer.unit}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-brand-dark text-surface-dark group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </m.a>
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
