"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0b0e13] text-[#e6e6e6] border-t border-white/10 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                    <img
                        src="/LOGO-BLANC-SOLOTOFS-CARS-PNG-SANS-FOND--e1727252949573.png"
                        alt="SoloTofs Cars"
                        className="h-20 w-auto mb-6"
                    />

                    <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[#3fa0ff]" />
                            <span>
                                <strong>Téléphone :</strong>{" "}
                                <a href="tel:+33423324104" className="text-[#3fa0ff] hover:underline">
                                    +33 4 23 32 41 04
                                </a>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-[#3fa0ff]" />
                            <span>
                                <strong>Email :</strong>{" "}
                                <a href="mailto:solotofs.cars@gmail.com" className="hover:underline">
                                    solotofs.cars@gmail.com
                                </a>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} className="text-[#3fa0ff]" />
                            <span>
                                <strong>Adresse :</strong> 44 Impasse Ampère, 73200 Gilly-sur-Isère
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-[#3fa0ff] uppercase text-sm font-semibold mb-2 tracking-wide">
                        Informations
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 font-semibold mb-2">
                        <Clock size={18} className="text-[#3fa0ff]" />
                        <span>Horaires d'ouverture</span>
                    </div>
                    <p className="text-neutral-300 text-sm">
                        Du lundi au vendredi de <strong>09h à 12h</strong> et de{" "}
                        <strong>13h30 à 18h30</strong>.
                    </p>
                    <p className="text-neutral-300 text-sm">
                        Le samedi de <strong>9h à 12h30</strong>{" "}
                        <em>(uniquement en période hivernale)</em>. <br />
                        Fermé le dimanche.
                    </p>

                    <p className="mt-6 text-lg font-bold text-white">
                        SoloTofs-Cars, votre garage de confiance pour la{" "}
                        <span className="text-[#3fa0ff]">
                            mécanique, l'entretien et le diagnostic automobile
                        </span>.
                    </p>
                </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 text-center text-neutral-400 text-sm">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-3">
                    <Link href="/mentions-legales" className="hover:text-[#3fa0ff] transition-colors">
                        Mentions légales
                    </Link>
                    <Link href="/politique-confidentialite" className="hover:text-[#3fa0ff] transition-colors">
                        Politique de confidentialité
                    </Link>
                </div>
                <p>
                    © {new Date().getFullYear()} SoloTofs Cars - Tous droits réservés. <br />
                    Site web & référencement réalisés par{" "}
                    <a
                        href="https://mon-site-two.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3fa0ff] hover:underline font-semibold"
                    >
                        WebHuservices
                    </a>
                </p>
            </div>
        </footer>
    );
}
