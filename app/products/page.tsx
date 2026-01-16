"use client";

import React from "react";
import { motion } from "framer-motion";

import { useCart } from "@/components/context/CartContext";
import { ShoppingCart, CheckCircle } from "lucide-react";

export default function ProductsPage() {
    const { addToCart, setIsCartOpen } = useCart();
    const products = [
        { title: "Day-old Chicks", price: "KES 150 - 400" },
        { title: "Pullets", price: "KES 600 - 900" },
        { title: "Growers", price: "KES 900 - 1400" },
        { title: "Broilers", price: "KES 1200 - 2500" },
    ];

    return (
        <div className="min-h-screen px-8 py-16 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Products</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-xl border shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <h2 className="font-semibold text-lg">{p.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">{p.price}</p>
                            <button
                                onClick={() => addToCart({ id: i, title: p.title, price: 0, image: '🐔' })} // Mocking product structure for simple list
                                className="mt-4 w-full py-2 bg-[#F57C00] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#E65100]"
                            >
                                <ShoppingCart className="w-4 h-4" /> Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
