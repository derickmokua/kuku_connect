import React from "react";
import Navbar from "./Navbar";
import Hero from "./KuroilerHero";
import KuroilerAdvantages from "./KuroilerAdvantages";

import dynamic from "next/dynamic";

const OrderCta = dynamic(() => import("./OrderCta"));
const VaccinationScheduler = dynamic(() => import("./VaccinationScheduler"));
const CareTimeline = dynamic(() => import("./CareTimeline"));
const Reviews = dynamic(() => import("./Reviews"));
const ContactSection = dynamic(() => import("./ContactSection"));
const AboutUs = dynamic(() => import("./AboutUs"));
const Footer = dynamic(() => import("./Footer"));
const Chatbot = dynamic(() => import("./Chatbot").then(mod => mod.Chatbot));

export default function KukuApp() {
    return (
        <div className="min-h-screen bg-surface-dark">
            <Navbar />
            <main>
                <Hero />
                <KuroilerAdvantages />
                {/* Price cards only — cart & payment on app.kukuconnect.co.ke */}
                <OrderCta />
                <AboutUs />
                <Reviews />
                <VaccinationScheduler />

                <section id="how-it-works" className="py-24 px-4 bg-surface-dark relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Maximum Growth</h2>
                        <CareTimeline />
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
}
