import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kukuconnect.co.ke"),
  title: {
    default: "KukuConnect | High-Yield Kuroiler Poultry Farming in Kenya",
    template: "%s | KukuConnect"
  },
  description: "KukuConnect provides premium day-old, 2-week, and 1-month hardened Kuroiler chicks. We supply the high-yield poultry system and scientific routine for farmers in Kenya.",
  keywords: ["kuroiler chicks", "poultry farming kenya", "buy chicks in nairobi", "buy chicks in kitui", "kuroiler farming", "poultry vaccines kenya", "kukukienyeji", "day old chicks"],
  authors: [{ name: "KukuConnect Team" }],
  creator: "KukuConnect",
  publisher: "KukuConnect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.kukuconnect.co.ke",
    title: "KukuConnect | High-Yield Poultry System",
    description: "The hardened Kuroilers and scientific routine to ensure your poultry farming success in Kenya.",
    siteName: "KukuConnect",
    images: [
      {
        url: "/og-image.jpg", // We expect an image to be here or we can just provide a fallback
        width: 1200,
        height: 630,
        alt: "KukuConnect - Hardened Kuroiler Chicks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KukuConnect | High-Yield Poultry System",
    description: "Hardened Kuroilers and scientific routine to ensure your poultry farming success in Kenya.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



// layout metadata end
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://apis.google.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#FFFCF8] text-slate-800`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
