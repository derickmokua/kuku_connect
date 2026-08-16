import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
    title: "Customer Reviews",
    description:
        "Read real farmer reviews of KukuConnect Kuroiler chicks — or leave your own review with photos of your flock.",
};

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-surface-light">
            <Navbar />
            <main className="pt-20">
                <Reviews />
            </main>
            <Footer />
        </div>
    );
}
