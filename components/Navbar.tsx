"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", to: "home" },
        { name: "Products", to: "products" },
        { name: "About us", to: "about" },
        { name: "How it works", to: "how-it-works" },
        { name: "Reviews", to: "reviews" },
        { name: "Gallery", to: "gallery" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-[#FFFBEA]/95 backdrop-blur-md z-50 shadow-sm border-b border-[#FFA64D]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-4xl">🐔</span>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-[#8B4513] leading-none">KukuConnect</span>
                            <span className="text-[10px] text-[#FFA64D] tracking-widest uppercase font-semibold">Your Kuku Plug.</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.to}`}
                                className="text-[#6B4F4F] hover:text-[#FFA64D] text-sm font-medium transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <a href="tel:+254712345678" className="flex px-4 py-2 md:px-5 md:py-2.5 bg-[#8B4513] text-white rounded-full text-xs md:text-sm font-semibold hover:bg-[#6B4F4F] transition shadow-md items-center gap-2 whitespace-nowrap">
                            <Phone className="w-3 h-3 md:w-4 md:h-4" /> Call Us
                        </a>

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#8B4513]">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#FFFBEA] border-t border-[#FFA64D]/20 absolute w-full">
                    <div className="px-4 py-6 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.to}`}
                                onClick={() => setIsOpen(false)}
                                className="block text-[#8B4513] hover:text-[#FFA64D] font-medium text-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
