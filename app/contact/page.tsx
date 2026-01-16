import React from "react";

export default function ContactPage() {
    return (
        <div className="min-h-screen px-8 py-16 bg-white text-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="mt-4 text-gray-600">Get in touch for orders, questions, or farm support.</p>

                <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-xl border">
                    <p><strong>Phone:</strong> +254 700 000 000</p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/254700000000" className="text-indigo-600 hover:underline">wa.me/254700000000</a></p>
                    <p><strong>Email:</strong> <a href="mailto:support@elonmokspoultry.com" className="text-indigo-600 hover:underline">support@elonmokspoultry.com</a></p>
                    <p><strong>Location:</strong> Kitui, Kenya</p>
                </div>
            </div>
        </div>
    );
}
