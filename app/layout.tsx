import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "KukuConnect",
  description: "Your Kuku Plug.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
