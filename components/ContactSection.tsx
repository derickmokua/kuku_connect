"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
    );
}

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-slate-200">

                    {/* Info Side */}
                    <div className="p-6 sm:p-10 md:p-16 text-surface-dark bg-[#F1F5F9] md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

                        <div>
                            <h2 className="text-4xl font-extrabold mb-6 text-surface-dark">Mother Hen Support</h2>
                            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                                Need advice on brooding, vaccines, or scaling your kuku? Our mother hens are ready to help.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                                        <Phone className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <span className="font-bold tracking-wide text-surface-dark">+254 716883375</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                                        <Mail className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <span className="font-bold tracking-wide text-surface-dark">kukuconnect@outlook.com</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                                        <MapPin className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <span className="font-bold tracking-wide text-surface-dark">Kitui Town, Kenya</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Side (Replaced with WhatsApp CTA) */}
                    <div className="p-6 sm:p-10 md:p-16 bg-white md:w-3/5 flex flex-col justify-center items-center text-center relative">
                        <div className="w-24 h-24 bg-gradient-to-tr from-brand-dark/10 to-brand-yellow/10 rounded-[2rem] flex items-center justify-center mb-8 border border-brand-dark/20 shadow-sm relative group">
                            <div className="absolute inset-0 bg-brand-dark/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                            <WhatsAppIcon className="w-11 h-11 text-brand-dark relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        <p className="text-surface-dark text-2xl md:text-3xl font-extrabold mb-12 max-w-md leading-snug">
                            Message our team directly on WhatsApp for immediate assistance, orders, and inquiries.
                        </p>

                        <a
                            href="https://wa.me/254716883375?text=Habari%20KukuConnect"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-dark to-brand-hover text-white rounded-full font-bold text-lg shadow-lg shadow-brand-dark/30 hover:shadow-2xl hover:shadow-brand-dark/40 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
