"use client";

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

const chickPrices = {
    "Day-Old": 110,
    "1 Week": 130,
    "2 Weeks": 160,
    "3 Weeks": 190,
    "4 Weeks": 250
};

export default function ProfitCalculator() {
    const [chickAge, setChickAge] = useState("Day-Old");
    const [quantity, setQuantity] = useState(100);
    const [sellingPrice, setSellingPrice] = useState(500); // Estimated selling price per bird

    // @ts-ignore
    const costPrice = chickPrices[chickAge] || 110;
    const totalCost = costPrice * quantity;

    // Rough estimate: Feed cost approx 250 KES per bird to maturity (simplified)
    const feedCostPerBird = 250;
    const totalFeedCost = feedCostPerBird * quantity;
    const totalExpenses = totalCost + totalFeedCost;

    const totalRevenue = sellingPrice * quantity;
    const estimatedProfit = totalRevenue - totalExpenses;

    return (
        <section id="calculator" className="py-20 px-4 bg-[#FFA64D]/5">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#FFA64D]/20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#8B4513] mb-2">Profitability Calculator</h2>
                    <p className="text-[#6B4F4F]">Estimate your returns based on our competitive chick prices.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Inputs */}
                    <div className="space-y-6 md:col-span-1">
                        <div>
                            <label className="block text-sm font-bold text-[#8B4513] mb-2">Chick Age</label>
                            <select
                                value={chickAge}
                                onChange={(e) => setChickAge(e.target.value)}
                                className="w-full p-3 rounded-xl bg-[#FFFBEA] border border-[#FFA64D]/30 text-[#8B4513] focus:outline-none focus:border-[#FFA64D]"
                            >
                                {Object.keys(chickPrices).map(age => (
                                    <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-[#8B4513] mb-2">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-full p-3 rounded-xl bg-[#FFFBEA] border border-[#FFA64D]/30 text-[#8B4513] focus:outline-none focus:border-[#FFA64D]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-[#8B4513] mb-2">Exp. Selling Price</label>
                            <input
                                type="number"
                                value={sellingPrice}
                                onChange={(e) => setSellingPrice(Number(e.target.value))}
                                className="w-full p-3 rounded-xl bg-[#FFFBEA] border border-[#FFA64D]/30 text-[#8B4513] focus:outline-none focus:border-[#FFA64D]"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="md:col-span-2 bg-[#FFFBEA] rounded-2xl p-6 flex flex-col justify-center space-y-4">
                        <div className="flex justify-between items-center text-[#6B4F4F]">
                            <span>Cost of Chicks:</span>
                            <span className="font-bold">KES {totalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-[#6B4F4F]">
                            <span>Est. Feed Cost (to maturity):</span>
                            <span className="font-bold">KES {totalFeedCost.toLocaleString()}</span>
                        </div>
                        <div className="h-px bg-[#FFA64D]/20 my-2"></div>
                        <div className="flex justify-between items-center text-xl text-[#8B4513] font-bold">
                            <span>Total Investment:</span>
                            <span>KES {totalExpenses.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-xl text-[#FFA64D] font-bold">
                            <span>Est. Revenue:</span>
                            <span>KES {totalRevenue.toLocaleString()}</span>
                        </div>
                        <div className={`p-4 rounded-xl mt-4 text-center ${estimatedProfit >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            <span className="text-sm uppercase tracking-wide font-bold">Estimated Net Profit</span>
                            <div className="text-4xl font-extrabold mt-1">KES {estimatedProfit.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
