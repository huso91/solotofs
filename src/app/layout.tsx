import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SoloTofs Cars – Reprogrammation moteur",
    description:
        "La passion haute performance. Garage multi-service spécialisé en reprogrammation moteur à Gilly-sur-Isère.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0e13] text-[#e6e6e6]`}
        >
        {children}
        {/* Script Tuning-Shop (iframe loader) */}
        <Script
            src="https://tuning-shop.com/media/js/iframe-loader.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}
