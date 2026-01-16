"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Lock, ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <span className="text-4xl">🐔</span>
                            <span className="font-extrabold text-2xl text-white tracking-tight">Kuku<span className="text-[#FFA64D]">Connect</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            The High-Yield Poultry System. We supply hardened Kuroilers and the scientific routine to ensure your success.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-[#FFA64D]">System Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><Link href="#products" className="hover:text-[#FFA64D] transition">Start Your Batch</Link></li>
                            <li><Link href="#vaccination" className="hover:text-[#FFA64D] transition">Immunity Protocol</Link></li>
                            <li><Link href="#care-guide" className="hover:text-[#FFA64D] transition">Success Routine</Link></li>
                            <li><Link href="#gallery" className="hover:text-[#FFA64D] transition">Evidence Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-[#FFA64D]">Expert Access</h3>
                        <ul className="space-y-4 text-gray-400 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#FFA64D]" /> +254 712 345 678
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#FFA64D]" /> info@kukuconnect.com
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#FFA64D]" /> Kitui, Kenya
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Socials mock */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-[#FFA64D]">Daily Updates</h3>
                        <p className="text-gray-400 text-sm mb-4 font-medium">Join our WhatsApp Channel for verified farming tips.</p>
                        <a
                            href="https://whatsapp.com/channel/placeholder"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:bg-[#128C7E] transition w-full shadow-lg shadow-green-900/20"
                        >
                            Follow Channel
                        </a>

                        <div className="flex gap-4 mt-8">
                            <a href="mailto:info@kukuconnect.com" className="p-2 bg-[#262626] border border-[#333] rounded-full hover:border-[#FFA64D] hover:text-[#FFA64D] transition">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-[#262626] border border-[#333] rounded-full hover:border-[#FFA64D] hover:text-[#FFA64D] transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-[#262626] border border-[#333] rounded-full hover:border-[#FFA64D] hover:text-[#FFA64D] transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-[#262626] border border-[#333] rounded-full hover:border-[#FFA64D] hover:text-[#FFA64D] transition group">
                                {/* X Logo (SVG) */}
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="w-5 h-5 fill-current text-white group-hover:text-[#FFA64D] transition"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#333] pt-8 text-center text-gray-500 text-xs font-medium">
                    <p>© {new Date().getFullYear()} KukuConnect. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}
