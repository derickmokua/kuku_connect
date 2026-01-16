"use client";

import React from "react";
import Navbar from "./Navbar";
import Hero from "./KuroilerHero";
import KuroilerAdvantages from "./KuroilerAdvantages";
import GrowthTimeline from "./GrowthTimeline";
import TrustLogistics from "./TrustLogistics";
import VaccinationScheduler from "./VaccinationScheduler";
import ChatBubble from "./ChatBubble";
import Footer from "./Footer";
import CareTimeline from "./CareTimeline";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import ContactSection from "./ContactSection";

export default function KukuApp() {
    return (
        <div className="min-h-screen bg-[#FFFBEA]">
            <Navbar />
            <main>
                <Hero />
                <KuroilerAdvantages />
                <GrowthTimeline />
                <TrustLogistics />
                <AboutUs />
                <Reviews />
                <VaccinationScheduler />

                <section id="how-it-works" className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#8B4513] mb-10">Maximum Growth</h2>
                        <CareTimeline />
                    </div>
                </section>

                <Gallery />
                <ContactSection />
            </main>
            <Footer />
            <ChatBubble />
        </div>
    );
}
