# 🐔 KukuConnect: The High-Yield Poultry System

> **"We don't just sell chicks; we deploy a Success System to your farm."**

**KukuConnect** is a specialized e-commerce and farm management platform designed for the modern African poultry farmer. It simplifies the complex process of starting a standardized Improved Kienyeji (Kuroiler) flock by focusing on **Logistics, Bio-Security, and Profitability**.

---

## 🚀 The Mission

Most small-scale farmers fail because of the "Danger Zone" (the first 21 days). KukuConnect solves this by:
1.  **Selling Hardened 4-Week-Old Birds**: We take the risk of brooding so the farmer doesn't have to.
2.  **Digitizing the Care Routine**: A built-in "Success Timeline" guides the farmer on exactly what to feed and vaccinate.
3.  **WhatsApp First**: We recognize that real business in Kenya happens on WhatsApp. The entire checkout flow is designed to build a cart and finalize the details via a direct WhatsApp chat.

## ✨ Key Features

### 🛒 The "Start Your Batch" Engine
A step-by-step wizard that treats poultry farming like a business plan.
- **Stage Selector**: Choose between Day-Olds (Cheap) vs. 4-Week-Olds (Safe).
- **Profit Calculator**: Real-time estimates of total investment.
- **Success Kits**: One-click add-ons for Vaccines and Feed.

### 🤖 Kuku Assistant (AI Chatbot)
An intelligent, context-aware assistant trained on veterinary best practices.
- **Farmer-First Language**: It speaks simply and directly.
- **Guardrails**: It knows when to advise a vet visit vs. simple home remedies.
- It helps new farmers troubleshoot simple issues like "Why are my chicks huddling?"

### 📅 The Immunity Protocol
A visual vaccination schedule that demystifies bio-security. It shows exactly what vaccines (Gumboro, Newcastle) have been administered before the birds arrive.

---

## 🛠️ The Tech Stack

Built for **Speed, SEO, and Reliability**.

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design System (`#8B4513` Primary, `#FFA64D` Accent)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Firebase](https://firebase.google.com/) (Firestore for Leads/Orders)
- **AI**: [Google Gemini](https://deepmind.google/technologies/gemini/) (via Vercel AI SDK)

---

## 📦 Quick Start

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/derickmokua/connect.git
    cd connect
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Visit `http://localhost:3000` to see the app in action.

---

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Environment Variables

For the application to function correctly in production (specifically the AI Assistant and Firebase connection), you must set the following environment variables in your Vercel Project Settings:

| Variable | Description |
| :--- | :--- |
| `GEMINI_API_KEY` | Required for Kuku Assistant. Get it from [Google AI Studio](https://aistudio.google.com/). |
| `NEXT_PUBLIC_APP_ID` | Your Firebase App ID (optional, defaults to mock if missing). |
| `NEXT_PUBLIC_FIREBASE_CONFIG` | Full Firebase config JSON string (for Order persistence). |

1.  Push your code to GitHub.
2.  Import the repository into Vercel.
3.  Add the Environment Variables.
4.  Click **Deploy**.

---

## 🤝 Contributing

This project is built directly for farmers. If you want to contribute, focus on features that **reduce risk** or **increase clarity** for the end-user.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

**© 2026 KukuConnect. Built for the future of farming.**
