"use client";

import React from "react";
import { useCart } from "./context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                                    <span className="text-6xl">🛒</span>
                                    <p className="text-lg">Your cart is empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="px-6 py-2 bg-[#F4B400] text-white rounded-full font-semibold"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border">
                                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
                                            {item.image}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                                            <p className="text-[#F57C00] font-bold">
                                                KES {item.price.toLocaleString("en-KE")}
                                            </p>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center space-x-2 bg-white rounded-lg border px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-[#F57C00]"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-4 text-center text-sm font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-[#F57C00]"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Total</span>
                                    <span className="text-2xl font-bold text-[#1A1A1A]">
                                        KES {cartTotal.toLocaleString("en-KE")}
                                    </span>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full py-4 bg-[#F57C00] text-white text-center rounded-xl font-bold text-lg hover:bg-[#E65100] transition shadow-lg"
                                >
                                    Proceed to Checkout
                                </Link>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full mt-3 py-3 text-gray-500 font-semibold text-center hover:text-gray-800"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
