"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const phone = "+33423324104";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handle);
        return () => window.removeEventListener("scroll", handle);
    }, []);

    const links = [
        { href: "/", label: "ACCUEIL" },
        { href: "/#prestations", label: "PRESTATIONS" },
        { href: "/#etapes", label: "PRISE EN CHARGE" },
        { href: "/#engagements", label: "ENGAGEMENTS" },
        { href: "/#contact", label: "CONTACT" },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0b0e13]/90 backdrop-blur border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="hidden md:flex items-center justify-end px-6 h-10 border-b border-white/10 text-sm font-semibold tracking-wide text-neutral-300">
                <div className="flex items-center gap-3">
                    <a
                        href="https://maps.google.com/?q=44+Impasse+Ampere,+73200+Gilly-sur-Isere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3fa0ff] transition-colors"
                    >
                        44 Impasse Ampere, 73200 Gilly-sur-Isere
                    </a>
                    <span className="text-neutral-500">-</span>
                    <a href={`tel:${phone}`} className="hover:text-[#3fa0ff] transition-colors">
                        +33 4 23 32 41 04
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img
                        src="/LOGO-BLANC-SOLOTOFS-CARS-PNG-SANS-FOND--e1727252949573.png"
                        alt="SoloTofs Cars"
                        className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                    />
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide items-center">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={link.href === "/" ? "text-[#3fa0ff] hover:text-[#5ab4ff]" : "hover:text-[#3fa0ff]"}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="/#contact"
                    className="hidden sm:inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-5 py-2.5 font-semibold hover:bg-[#5ab4ff] transition-colors"
                >
                    Demander un devis
                </a>

                <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#0b0e13]/95 border-t border-white/10 backdrop-blur-sm">
                    <nav className="flex flex-col items-center gap-4 py-6 text-sm font-semibold tracking-wide">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={link.href === "/" ? "text-[#3fa0ff]" : "hover:text-[#3fa0ff]"}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="pt-4 border-t border-white/10 w-2/3 text-center text-neutral-400 text-sm">
                            <p>44 Impasse Ampere, 73200 Gilly-sur-Isere</p>
                            <a
                                href={`tel:${phone}`}
                                className="block mt-2 text-[#3fa0ff] hover:text-[#5ab4ff]"
                            >
                                +33 4 23 32 41 04
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
