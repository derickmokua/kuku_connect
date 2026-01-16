"use client";

import React, { useState } from "react";
import { useCart } from "@/components/context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, appId } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Phone, MapPin, Loader2, CheckCircle, TrendingUp, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";

const getOrdersCollectionPath = () => `/artifacts/${appId}/public/data/orders`;

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneMain: "",
        phoneAlt: "",
        city: "",
        village: "",
        landmark: "",
    });

    // Helpers
    const getMarketReadyDate = () => {
        const batchItem = cart.find(i => i.title.includes('[BATCH]'));
        let monthsToAdd = 5;
        if (batchItem) {
            if (batchItem.title.includes('2-Weeks')) monthsToAdd = 4.5;
            if (batchItem.title.includes('1-Month')) monthsToAdd = 4;
            if (batchItem.title.includes('Mature')) monthsToAdd = 1;
        }
        const date = new Date();
        date.setMonth(date.getMonth() + Math.floor(monthsToAdd));
        return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    };

    const hasSuccessKit = cart.some(i => i.title === 'The Success Kit');
    const batchItem = cart.find(i => i.title.includes('[BATCH]'));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cart.length === 0) {
            setError("Your cart is empty.");
            return;
        }

        setLoading(true);
        setError(null);

        if (!db) {
            setError("System offline. Please call to place order.");
            setLoading(false);
            return;
        }

        try {
            const orderData = {
                customer: {
                    name: formData.name,
                    email: formData.email,
                    phoneMain: formData.phoneMain,
                    phoneAlt: formData.phoneAlt,
                    city: formData.city,
                    village: formData.village,
                    landmark: formData.landmark,
                },
                items: cart,
                total: cartTotal,
                paymentStatus: "Pending (Pay Later)",
                orderStatus: "New",
                createdAt: serverTimestamp(),
            };

            await addDoc(collection(db, getOrdersCollectionPath()), orderData);

            setSuccess(true);
            clearCart();
        } catch (err: any) {
            console.error("Order Error:", err);
            setError("Failed to place order. Please try again or call us.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full rounded-3xl shadow-xl p-8 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Order Placed!</h1>
                    <p className="text-gray-600 text-lg">
                        Thank you, <span className="font-semibold">{formData.name}</span>. We have received your order.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                        <p className="font-bold text-yellow-800 mb-2">Manifest Generated</p>
                        <p className="text-yellow-700 mb-4">
                            Click below to transmit manifest to logistics team via WhatsApp.
                        </p>
                        <a
                            href={`https://wa.me/254712345678?text=${encodeURIComponent(
                                `[ ORDER MANIFEST ]\n` +
                                `--------------------------------\n` +
                                `CUSTOMER: ${formData.name.toUpperCase()}\n` +
                                `PHONE: ${formData.phoneMain}\n\n` +
                                `> BATCH DETAILS:\n` +
                                `${cart.filter(i => i.title.includes('[BATCH]')).map(i => `- AGE: ${i.title.replace('[BATCH] ', '')}\n- BATCH SIZE: ${i.quantity} Birds`).join('\n')}\n\n` +
                                `> VACCINATION / HEALTH:\n` +
                                `${hasSuccessKit ? "- STATUS: VACCINE KIT INCLUDED" : "- STATUS: STANDARD HATCHERY VACCINES"}\n` +
                                `${hasSuccessKit ? "- FEED: STARTER PACK INCLUDED" : ""}\n\n` +
                                `> DELIVERY LOCATION:\n` +
                                `${formData.village.toUpperCase()}, ${formData.city.toUpperCase()}\n` +
                                `(${formData.landmark})\n\n` +
                                `TOTAL VALUE: KES ${cartTotal.toLocaleString()}\n` +
                                `--------------------------------\n` +
                                `Ready for deployment confirmation.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#128C7E] transition shadow-lg flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" /> Book Batch on WhatsApp
                        </a>
                    </div>
                    <Link
                        href="/"
                        className="block w-full py-4 bg-[#1A1A1A] text-white rounded-xl font-bold hover:bg-gray-800 transition"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Batch Business Plan (Left Column) */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#431407]">Your Batch Summary</h2>
                        <p className="text-[#6B4F4F]">Review your configuration before booking.</p>
                    </div>

                    {/* The Birds */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-[#431407] mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#FFF7E6] text-[#D97706] rounded-full flex items-center justify-center text-sm">1</span>
                            The Birds
                        </h3>
                        <div className="space-y-4 pl-10">
                            {batchItem ? (
                                <>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-gray-500 font-medium">Phase</span>
                                        <span className="font-bold text-[#431407]">{batchItem.title.replace('[BATCH] ', '')}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-gray-500 font-medium">Quantity</span>
                                        <span className="font-bold text-[#431407]">{batchItem.quantity} Birds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">Condition</span>
                                        <span className="font-bold text-green-600 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Vaccinated & Hardened</span>
                                    </div>
                                </>
                            ) : (
                                <p className="text-gray-400 italic">No birds selected.</p>
                            )}
                        </div>
                    </div>

                    {/* Success Kit */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-[#431407] mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#FFF7E6] text-[#D97706] rounded-full flex items-center justify-center text-sm">2</span>
                            Success Kit (Add-ons)
                        </h3>
                        <div className="space-y-4 pl-10">
                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                <span className="text-gray-500 font-medium">Feed</span>
                                <span className={`font-bold ${hasSuccessKit ? 'text-[#431407]' : 'text-gray-400'}`}>{hasSuccessKit ? 'Yes' : 'No'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 font-medium">Routine Meds</span>
                                <span className={`font-bold ${hasSuccessKit ? 'text-[#431407]' : 'text-gray-400'}`}>{hasSuccessKit ? 'Yes' : 'No'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Projected Performance */}
                    <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/20 rounded-bl-full"></div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#D97706] text-white rounded-full flex items-center justify-center text-sm">3</span>
                            Projected Performance
                        </h3>
                        <div className="space-y-4 pl-10 relative z-10">
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-400 font-medium">Target Weight</span>
                                <span className="font-bold text-white">3.5kg in 5 months</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-400 font-medium">Target Survival</span>
                                <span className="font-bold text-green-400">98% (With KukuConnect Routine)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400 font-medium">Est. Market Date</span>
                                <span className="font-bold text-[#D97706]">{getMarketReadyDate()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Total Investment */}
                    <div className="bg-[#FFFBEA] rounded-3xl p-8 border border-[#D97706]/20">
                        <div className="flex justify-between items-center">
                            <span className="text-[#431407] font-bold text-lg">Total Investment</span>
                            <span className="text-3xl font-black text-[#D97706]">KES {cartTotal.toLocaleString()}</span>
                        </div>
                    </div>

                </div>

                {/* Logistics Uplink Form (Right Column) */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Logistics Uplink</h2>
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-6">
                        {error && (
                            <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                <Truck className="w-5 h-5 text-[#F57C00]" /> Personal Info
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Phone Number (Main) *</label>
                                    <input required type="tel" name="phoneMain" value={formData.phoneMain} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="07..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Alternative Phone</label>
                                    <input type="tel" name="phoneAlt" value={formData.phoneAlt} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="07..." />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#F57C00]" /> Location Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">City / Town *</label>
                                    <input required name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="e.g. Nairobi" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Village / Estate *</label>
                                    <input required name="village" value={formData.village} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="e.g. Karen" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">Closest Landmark *</label>
                                <input required name="landmark" value={formData.landmark} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:border-[#F57C00] outline-none transition bg-gray-50 focus:bg-white" placeholder="e.g. Near The Chief's Office" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || cart.length === 0}
                            className="w-full py-4 bg-[#F57C00] text-white rounded-full font-bold text-xl hover:bg-[#E65100] transform transition shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "BOOK BATCH ON WHATSAPP"}
                        </button>
                        <p className="text-center text-xs text-gray-500">
                            Clicking this sends your manifest to our team for delivery scheduling.
                        </p>
                    </form>

                    {/* Security Badge */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-500 border border-gray-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Secure Logistics Uplink Active
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
