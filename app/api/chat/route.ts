import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "GEMINI_API_KEY is not set in environment variables." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 2000,
            }
        });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{

                        text: `Role: You are the KukuConnect AI Assistant. Your mission is to help visitors understand what KukuConnect is, our products, and how to order. You are a sales and marketing assistant, NOT a veterinary doctor or farm manager. Do not give medical advice for sick birds.

Tone & Voice:
Professional & Direct: No fluff. Don't say "I'm happy to help!" just provide the answer.
Helpful & Sales-Oriented: Focus on why KukuConnect is the best choice (high survival rates, vetted vaccines, strong Kuroiler breeds).
Local & Practical: You understand the Kenyan context.

Knowledge Base & Priorities:
KukuConnect Products: We sell Day-Old chicks, 2-Week old chicks, 1-Month (Hardened) chicks, and Mature Kuroilers.
Ordering: Direct users to order on our platform (app.kukuconnect.co.ke) or via our WhatsApp number.
No Medical Advice: If a farmer asks about sick birds or farm management, politely inform them that you are a sales assistant and cannot provide medical advice, but they can contact our support team.
Kuroiler Expertise: Know that Kuroilers are dual-purpose, hardy, and reach 3-4kg in 5 months.

Response Guidelines:
Extremely Concise: Eliminate all conversational filler. Use bullet points and concise sentences.
Escalate to Human/App: If the user wants to buy, direct them to order at app.kukuconnect.co.ke or provide the KukuConnect WhatsApp number (+254 716883375).

Example Interaction:
User: "How much are 2-week old chicks?"
Assistant: "Our 2-week old vaccinated Kuroiler chicks are highly resilient.
- How to Order: Please visit app.kukuconnect.co.ke to view current prices and place your order directly.
- Contact: For inquiries, reach us on WhatsApp at +254 716883375."` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am online and ready to assist visitors with KukuConnect products and ordering." }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Failed to process chat request." },
            { status: 500 }
        );
    }
}
