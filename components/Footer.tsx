"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useChat } from "./context/ChatContext";

const SOCIAL_ICON_CLASS =
    "w-12 h-12 bg-white/5 border border-white/10 rounded-2xl hover:bg-gradient-to-r hover:from-[#C2410C] hover:to-[#ea580c] hover:border-transparent hover:text-white text-slate-300 transition-all duration-300 hover:-translate-y-1 shadow-sm flex items-center justify-center shrink-0";

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-slate-300 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
            {/* Subtle premium background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[#C2410C]/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <span className="font-extrabold text-3xl text-white tracking-tight">Kuku<span className="text-[#C2410C]">Connect.</span></span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-medium">
                            The High-Yield Poultry System. We supply hardened Kuroilers and the scientific routine to ensure your success.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-white text-lg mb-6">System Links</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <a
                                    href={
                                        process.env.NEXT_PUBLIC_ORDER_URL ||
                                        "https://app.kukuconnect.co.ke/order"
                                    }
                                    className="hover:text-[#C2410C] transition-colors"
                                >
                                    Order chicks
                                </a>
                            </li>
                            <li><Link href="/#products" className="hover:text-[#C2410C] transition-colors">Prices</Link></li>
                            <li><Link href="/#reviews" className="hover:text-[#C2410C] transition-colors">Reviews</Link></li>
                            <li><Link href="/#vaccination" className="hover:text-[#C2410C] transition-colors">Immunity Protocol</Link></li>
                            <li><Link href="/#care-guide" className="hover:text-[#C2410C] transition-colors">Success Routine</Link></li>
                            <li><Link href="/#contact" className="hover:text-[#C2410C] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white text-lg mb-6">Expert Access</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-center hover:text-white transition-colors">
                                <Link href="/assistant" className="flex items-center gap-3 w-full">
                                    <MessageCircle className="w-5 h-5 text-[#C2410C]" /> AI Assistant
                                </Link>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-[#C2410C]" /> +254 716883375
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-[#C2410C]" /> kukuconnect@outlook.com
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-[#C2410C]" /> Kitui, Kenya
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-bold text-white text-lg mb-6">Daily Updates</h3>
                        <p className="text-slate-400 text-sm mb-6 font-medium">Join our WhatsApp Channel for verified farming tips.</p>
                        <a
                            href="https://whatsapp.com/channel/0029Vb7SHEpATRSeRbs3AK0X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#C2410C] to-[#ea580c] text-white rounded-2xl font-bold text-sm hover:shadow-lg hover:shadow-[#C2410C]/30 transition-all duration-300 w-full hover:-translate-y-1 group"
                        >
                            Follow Channel
                        </a>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">

                            {/* Email */}
                            <a href="mailto:kukuconnect@outlook.com" aria-label="Email Us" className={SOCIAL_ICON_CLASS}>
                                <Mail className="w-5 h-5" />
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61579134113044" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className={SOCIAL_ICON_CLASS}>
                                <Facebook className="w-5 h-5" />
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/kukuconnet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className={SOCIAL_ICON_CLASS}>
                                <Instagram className="w-5 h-5" />
                            </a>

                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@kuku_connect" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile" className={SOCIAL_ICON_CLASS}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
                                </svg>
                            </a>

                            {/* X (Twitter) */}
                            <a href="https://x.com/Kuku_Connect" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile" className={SOCIAL_ICON_CLASS}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-12 flex justify-center items-center gap-4 text-xs font-bold text-slate-400">
                    <p>© {new Date().getFullYear()} KukuConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
