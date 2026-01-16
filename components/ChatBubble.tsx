"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! Need help choosing the right chicks for your farm?' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add User Message
        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput("");

        // Simulate response delay
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', content: "That's a great question! For specific farming advice, please call our expert line at +254712345678." }]);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-[#FFA64D] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#FF9533] hover:scale-105 transition z-50"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-[#FFA64D]/30"
                    >
                        <div className="bg-[#FFA64D] p-4 flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Kuku Assistant</h3>
                                <p className="text-xs text-white/80">Online</p>
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto bg-[#FFFBEA] space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user'
                                            ? 'bg-[#8B4513] text-white rounded-br-none'
                                            : 'bg-white text-[#6B4F4F] shadow-sm rounded-tl-none border border-[#FFA64D]/10'
                                        }`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSend} className="p-3 bg-white border-t flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about prices..."
                                className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFA64D]"
                            />
                            <button type="submit" className="p-2 bg-[#FFA64D] text-white rounded-full hover:bg-[#FF9533]">
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
