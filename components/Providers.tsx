"use client";

import React from "react";
import { ChatProvider } from "./context/ChatContext";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features").then(res => res.default);

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={loadFeatures} strict>
            <ChatProvider>{children}</ChatProvider>
        </LazyMotion>
    );
}
