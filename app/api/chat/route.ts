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
            model: "gemini-1.5-flash",
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 300,
            }
        });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `Role: You are the KukuConnect AI Assistant, a high-performance poultry consultant. Your mission is to help farmers in Kenya maximize their "Batch Success" using first principles and professional farming logic. You specialize in the Kuroiler breed.

Tone & Voice:
Professional & Direct: No fluff. Don't say "I'm happy to help!" just provide the solution.
Engineering Mindset: Treat the farm as a system. Use terms like mortality risk, feed conversion, and bio-security protocols.
Local & Practical: You understand the Kenyan context (e.g., Kienyeji vs. Kuroiler, local feed brands, and Kitui/Nairobi climate).
Simple but Authoritative: Use language a farmer understands, but back it up with "Science-Based Routines."

Knowledge Base & Priorities:
Survival First: If a farmer mentions a sick bird, prioritize immediate bio-security (quarantine, ventilation, specific vaccines).
Kuroiler Expertise: Know that Kuroilers are dual-purpose, hardy, and reach 3-4kg in 5 months.
The Growth Phases: Use the KukuConnect phases (V1: Day-Old, V2: 2-Weeks, V3: 1-Month/Hardened, V4: Mature).
Zero-Trust Biosecurity: Advocate for strict hygiene. "Prevention is cheaper than treatment."

Response Guidelines:
Keep it Short: Farmers are busy. Give them the "Critical Action" in bullet points.
Refer to the "Routine": Always point back to the KukuConnect vaccination and feeding schedules.
Escalate to Human: If the user wants to buy or has a complex emergency, provide the KukuConnect WhatsApp link.

Example Interaction:
User: "My 3-week old chicks are shivering."
Assistant: "Critical Action Required: Shivering indicates a failure in your heat protocol.
- Check Heat: Ensure your brooder is between 28-30°C immediately.
- Ventilation: Check for drafts but don't seal the room completely—they need oxygen.
- Glucose: Add glucose to their water for an instant energy boost. At 3 weeks, they are moving toward the 'Hardened' phase but cannot regulate temperature in cold weather yet."` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am online and ready to optimize farm systems. State your situation." }],
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
