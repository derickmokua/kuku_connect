"use client";

import React from "react";
import { Heart, Calendar, Truck, MapPin } from "lucide-react";

export default function TrustLogistics() {
    return (
        <section className="py-20 px-4 bg-surface-light border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Trust Item 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-dark">
                            <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-surface-dark mb-2">100% Peeping Arrival Guarantee</h3>
                        <p className="text-slate-600 text-sm">
                            We guarantee your day-old chicks arrive alive and healthy. If not, we replace them immediately.
                        </p>
                    </div>

                    {/* Trust Item 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NEXT HATCH</div>
                        <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-dark">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-surface-dark mb-2">Batch Tracking</h3>
                        <p className="text-slate-600 text-sm mb-2">
                            Next incubation batch hatches on:
                        </p>
                        <p className="text-2xl font-bold text-brand-dark">Friday, 14th Jan</p>
                        <button
                            className="mt-4 px-8 py-3 bg-brand-dark text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-brand-hover transition-all text-base tracking-wide"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Secure Your Brood
                        </button>
                    </div>

                    {/* Trust Item 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 bg-surface-light rounded-full flex items-center justify-center shadow-sm mb-4 text-[#3B82F6]">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-surface-dark mb-2">Delivery & Pickup</h3>
                        <p className="text-slate-600 text-sm flex flex-col gap-1">
                            <span className="flex items-center justify-center gap-1"><Truck className="w-3 h-3" /> Specialized Crate Shipping</span>
                            <span className="flex items-center justify-center gap-1"><MapPin className="w-3 h-3" /> Farm Pickup Available</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
