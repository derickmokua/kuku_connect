"use client";

import React from "react";
import { Heart, Calendar, Truck, MapPin } from "lucide-react";

export default function TrustLogistics() {
    return (
        <section className="py-20 px-4 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Trust Item 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-[#FFFBEA] rounded-2xl border border-[#FEF3C7]">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-red-500">
                            <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-[#431407] mb-2">100% Live Arrival Guarantee</h3>
                        <p className="text-[#78350F] text-sm">
                            We guarantee your day-old chicks arrive alive and healthy. If not, we replace them immediately.
                        </p>
                    </div>

                    {/* Trust Item 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NEXT HATCH</div>
                        <div className="w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center shadow-sm mb-4 text-[#D97706]">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#431407] mb-2">Batch Tracking</h3>
                        <p className="text-[#78350F] text-sm mb-2">
                            Next incubation batch hatches on:
                        </p>
                        <p className="text-2xl font-bold text-[#D97706]">Friday, 14th Jan</p>
                        <button className="mt-4 text-sm underline text-gray-500 hover:text-[#D97706]">Pre-order to secure yours</button>
                    </div>

                    {/* Trust Item 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-[#FFFBEA] rounded-2xl border border-[#FEF3C7]">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-blue-600">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#431407] mb-2">Delivery & Pickup</h3>
                        <p className="text-[#78350F] text-sm flex flex-col gap-1">
                            <span className="flex items-center justify-center gap-1"><Truck className="w-3 h-3" /> Specialized Crate Shipping</span>
                            <span className="flex items-center justify-center gap-1"><MapPin className="w-3 h-3" /> Farm Pickup Available</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
