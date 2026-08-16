"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChat } from "./context/ChatContext";

export function Chatbot() {
    const { isOpen, setIsOpen, messages, addMessage } = useChat();
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get("assistant") === "true") {
                setIsOpen(true);
            }
        }
    }, [setIsOpen]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        addMessage("user", userMessage);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            addMessage("model", data.reply);
        } catch (error: any) {
            console.error("Chat Error:", error);
            addMessage("model", error.message || "Sorry, I'm having trouble connecting right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>

            <div className={`fixed bottom-6 right-6 z-40 ${isOpen ? "hidden" : "flex"} flex-col items-end`}>
                <button
                    aria-label="Contact Support"
                    onClick={() => setIsOpen(true)}
                    className="relative group p-4 rounded-[1.5rem] bg-gradient-to-r from-[#C2410C] to-[#ea580c] text-white shadow-lg shadow-[#C2410C]/30 hover:shadow-2xl hover:shadow-[#C2410C]/50 hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-white/20 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <MessageCircle size={28} className="relative z-10" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[95vw] max-w-sm bg-white rounded-[2rem] shadow-2xl shadow-slate-300/50 border border-slate-100 overflow-hidden z-50 flex flex-col h-[550px] sm:bottom-6 sm:left-auto sm:right-6 sm:transform-none sm:translate-y-0 sm:-translate-x-0"
                    >
                        {/* Header */}
                        <div className="bg-white/80 backdrop-blur-md p-5 flex justify-between items-center text-[#0F172A] border-b border-slate-100 shadow-sm z-10 relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C2410C] to-[#ea580c]"></div>
                            <h3 className="font-extrabold flex items-center gap-3 text-lg">
                                <div className="bg-[#C2410C]/10 p-2 rounded-xl text-[#C2410C]">
                                    <MessageCircle size={20} />
                                </div>
                                Kuku Assistant
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-[#0F172A]"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA]">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 text-[15px] leading-relaxed ${msg.role === "user"
                                            ? "bg-gradient-to-r from-[#C2410C] to-[#ea580c] text-white rounded-[1.5rem] rounded-br-sm shadow-md"
                                            : "bg-white border border-slate-100 text-[#0F172A] rounded-[1.5rem] rounded-bl-sm shadow-sm"
                                            } whitespace-pre-wrap break-words`}
                                    >
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                ul: (props) => <ul className="list-disc ml-4 my-2" {...props} />,
                                                ol: (props) => <ol className="list-decimal ml-4 my-2" {...props} />,
                                                li: (props) => <li className="my-1" {...props} />,
                                                p: (props) => <p className="mb-2 last:mb-0" {...props} />,
                                                strong: (props) => <strong className="font-bold text-[#0F172A]" {...props} />,
                                                a: (props) => <a className="text-[#FF8A00] hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-[1.5rem] rounded-bl-sm border border-slate-100 shadow-sm">
                                        <Loader2 className="w-5 h-5 animate-spin text-[#C2410C]" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                }}
                                className="flex items-center gap-2 relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask Kuku Assistant..."
                                    className="flex-1 py-3 pl-5 pr-12 bg-[#FAFAFA] border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20 focus:border-[#C2410C]/50 text-[15px] text-[#0F172A] placeholder-slate-400 transition-all shadow-inner"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-1.5 p-2 bg-gradient-to-r from-[#C2410C] to-[#ea580c] text-white rounded-full hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-300"
                                >
                                    <Send size={18} className="relative z-10 -ml-0.5" />
                                </button>
                            </form>
                        </div>

                        {/* Safety Disclaimer */}
                        <div className="bg-white p-2 text-[10px] text-slate-400 text-center border-t border-slate-100">
                            I am an AI assistant. For serious veterinary emergencies, contact a local professional immediately.
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
