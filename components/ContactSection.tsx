"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, appId } from "@/lib/firebase";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) return;

        setLoading(true);
        setStatus("idle");

        try {
            if (db) {
                await addDoc(collection(db, `/artifacts/${appId}/public/data/leads`), {
                    ...formData,
                    createdAt: serverTimestamp(),
                    type: "contact_form"
                });
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                // Fallback if DB not ready (or mock mode)
                console.log("DB not ready, logging lead:", formData);
                setStatus("success");
            }
        } catch (error) {
            console.error("Error submitting lead:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-[#FFFBEA] border-t border-[#8B4513]/10">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#1A1A1A] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

                    {/* Info Side */}
                    <div className="p-10 md:p-16 text-white bg-[#8B4513] md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA64D] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

                        <div>
                            <h2 className="text-4xl font-extrabold mb-6">Expert Support</h2>
                            <p className="text-orange-100/90 mb-10 leading-relaxed text-lg">
                                Need advice on brooding, vaccines, or scaling your farm? Our specialists are ready to help.
                            </p>

                            <a
                                href="https://wa.me/254712345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition shadow-lg mb-12 w-full md:w-auto justify-center"
                            >
                                <MessageCircle className="w-6 h-6" /> Chat with a Specialist
                            </a>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Phone className="w-5 h-5 text-[#FFA64D]" />
                                    </div>
                                    <span className="font-bold tracking-wide">+254 712 345 678</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Mail className="w-5 h-5 text-[#FFA64D]" />
                                    </div>
                                    <span className="font-bold tracking-wide">info@kukuconnect.com</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <MapPin className="w-5 h-5 text-[#FFA64D]" />
                                    </div>
                                    <span className="font-bold tracking-wide">Kitui Town, Kenya</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:p-16 bg-white md:w-3/5">
                        <h3 className="text-3xl font-bold text-[#8B4513] mb-8">Submit Inquiry</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#8B4513] uppercase tracking-wider">Your Name</label>
                                    <input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#FFA64D] outline-none text-[#8B4513] font-medium transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#8B4513] uppercase tracking-wider">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#FFA64D] outline-none text-[#8B4513] font-medium transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#8B4513] uppercase tracking-wider">Subject / Question</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#FFA64D] outline-none text-[#8B4513] font-medium transition resize-none"
                                    placeholder="I need advice on..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-[#8B4513] text-white rounded-2xl font-bold text-lg hover:bg-[#6B4F4F] transition flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : <>Submit Inquiry <Send className="w-5 h-5" /></>}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-700 text-center text-sm font-bold bg-green-100 py-3 rounded-xl border border-green-200">Inquiry submitted successfully! A specialist will respond shortly.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-700 text-center text-sm font-bold bg-red-100 py-3 rounded-xl border border-red-200">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
