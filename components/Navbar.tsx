"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useChat } from "./context/ChatContext";
import { ORDER_APP_URL } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { openChat } = useChat();

    const links = [
        { name: "Home", to: "/#home" },
        { name: "Products", to: "/#products" },
        { name: "Why Us", to: "/#why-kukuconnect" },
        { name: "Guide", to: "/#how-it-works" },
        { name: "Care", to: "/#vaccination" },
        { name: "About", to: "/#about" },
        { name: "Contact", to: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-surface-light/90 backdrop-blur-xl z-50 border-b border-slate-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo - Text Only */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl md:text-3xl tracking-tight flex flex-col justify-center h-full pt-1 transition-transform duration-300 group-hover:scale-105">
                            <span className="text-brand-yellow">Kuku<span className="text-surface-dark">Connect.</span></span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.to}
                                className="text-surface-dark hover:text-brand-yellow text-sm font-bold px-3 py-2 rounded-full transition-all cursor-pointer hover:bg-slate-100"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Order (Desktop) */}
                    <div className="hidden lg:flex items-center ml-4 gap-3">
                        <a
                            href={ORDER_APP_URL}
                            className="flex items-center gap-2 bg-brand-dark hover:bg-brand-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <span>Place Order</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden gap-3">
                        <a
                            href={ORDER_APP_URL}
                            className="px-3 py-2 bg-brand-dark text-white text-xs font-bold rounded-full"
                        >
                            Order
                        </a>
                        <button aria-label="Menu" onClick={() => setIsOpen(!isOpen)} className="p-2 text-surface-dark hover:bg-slate-200 rounded-full transition">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-slate-200 absolute w-full shadow-xl">
                    <div className="px-4 py-6 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.to}
                                onClick={() => setIsOpen(false)}
                                className="block text-surface-dark hover:text-brand-yellow font-bold text-lg px-4 py-3 hover:bg-slate-50 rounded-xl transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/assistant"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-slate-50 text-surface-dark border border-slate-200 font-bold text-lg px-4 py-3 rounded-full hover:bg-slate-100 transition shadow-sm mt-4"
                        >
                            <MessageCircle size={20} className="text-brand-yellow" />
                            <span>AI Assistant</span>
                        </Link>
                        <a
                            href={ORDER_APP_URL}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-brand-dark text-white font-bold text-lg px-4 py-3 rounded-full hover:bg-brand-hover transition mt-2 shadow-lg"
                        >
                            Place Order
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
