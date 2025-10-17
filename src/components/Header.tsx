"use client";
import { useEffect, useState } from "react";
import { Menu, X, Server } from "lucide-react"; // ✅ icône File Service

const phone = "+33423324104";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handle);
        return () => window.removeEventListener("scroll", handle);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0b0e13]/90 backdrop-blur border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            {/* ─── Barre supérieure : adresse + téléphone ─── */}
            <div className="hidden md:flex items-center justify-end px-6 h-10 border-b border-white/10 text-sm font-semibold tracking-wide text-neutral-300">
                <div className="flex items-center gap-3">
                    <a
                        href="https://maps.google.com/?q=44+Impasse+Ampère,+73200+Gilly-sur-Isère"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3fa0ff] transition-colors"
                    >
                        📍 44 Impasse Ampère, 73200 Gilly-sur-Isère
                    </a>
                    <span className="text-neutral-500">•</span>
                    <a href={`tel:${phone}`} className="hover:text-[#3fa0ff] transition-colors">
                        📞 +33 4 23 32 41 04
                    </a>
                </div>
            </div>

            {/* ─── Barre principale ─── */}
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/LOGO-BLANC-SOLOTOFS-CARS-PNG-SANS-FOND--e1727252949573.png"
                        alt="SoloTofs Cars"
                        className="h-14 w-auto"
                    />
                </div>

                {/* Navigation desktop */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide items-center">
                    <a href="#accueil" className="text-[#3fa0ff] hover:text-[#5ab4ff]">
                        ACCUEIL
                    </a>
                    <a href="#simulateur" className="hover:text-[#3fa0ff]">
                        SIMULER MES GAINS
                    </a>
                    <a href="#simulateur" className="hover:text-[#3fa0ff]">
                        REPROGRAMMATION MOTEUR
                    </a>
                    <a href="#clef" className="hover:text-[#3fa0ff]">
                        CLEF
                    </a>

                    {/* ✅ Nouveau bouton File Service */}
                    <a
                        href="#upload"
                        className="flex items-center gap-1 hover:text-[#3fa0ff] transition-colors"
                    >
                        <Server size={16} className="text-[#3fa0ff]" />
                        FILE SERVICE
                    </a>

                    <a href="#contact" className="hover:text-[#3fa0ff]">
                        CONTACT
                    </a>
                </nav>

                {/* Bouton principal */}
                <a
                    href="#contact"
                    className="hidden sm:inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-5 py-2.5 font-semibold hover:bg-[#5ab4ff] transition-colors"
                >
                    Nous contacter
                </a>

                {/* Menu mobile */}
                <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* ─── Menu mobile déroulant ─── */}
            {open && (
                <div className="md:hidden bg-[#0b0e13]/95 border-t border-white/10 backdrop-blur-sm">
                    <nav className="flex flex-col items-center gap-4 py-6 text-sm font-semibold tracking-wide">
                        <a href="#accueil" onClick={() => setOpen(false)} className="text-[#3fa0ff]">
                            ACCUEIL
                        </a>
                        <a href="#simulateur" onClick={() => setOpen(false)} className="hover:text-[#3fa0ff]">
                            SIMULER MES GAINS
                        </a>
                        <a href="#simulateur" onClick={() => setOpen(false)} className="hover:text-[#3fa0ff]">
                            REPROGRAMMATION MOTEUR
                        </a>
                        <a href="#clef" onClick={() => setOpen(false)} className="hover:text-[#3fa0ff]">
                            CLEF
                        </a>
                        {/* File Service mobile */}
                        <a href="#upload" onClick={() => setOpen(false)} className="hover:text-[#3fa0ff] flex items-center gap-1">
                            <Server size={16} className="text-[#3fa0ff]" />
                            FILE SERVICE
                        </a>
                        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#3fa0ff]">
                            CONTACT
                        </a>

                        <div className="pt-4 border-t border-white/10 w-2/3 text-center text-neutral-400 text-sm">
                            <p>📍 44 Impasse Ampère, 73200 Gilly-sur-Isère</p>
                            <a
                                href={`tel:${phone}`}
                                className="block mt-2 text-[#3fa0ff] hover:text-[#5ab4ff]"
                            >
                                📞 +33 4 23 32 41 04
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
