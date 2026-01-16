import React from "react";

export default function ReviewsPage() {
    const reviews = [
        "Very healthy chicks, no losses!",
        "Fast delivery and great customer support.",
        "Affordable and reliable — highly recommended.",
    ];

    return (
        <div className="min-h-screen px-8 py-16 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">What Our Farmers Say</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="p-6 bg-gray-50 border rounded-lg shadow-sm text-gray-700 italic">
                            {`"${r}"`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
