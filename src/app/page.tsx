import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nos_engagements from "@/components/nos_engagements";
import Pret_a_liberer from "@/components/Pret_a_liberer";
import PresentationSoloTofs from "@/components/presentationsolotofs";
import Nos_prestations from "@/components/Nos_prestations";
import EtapesSection from "@/components/EtapesSection";
import FaqSection from "@/components/FaqSection";

const quickServices = [
    {
        title: "Mécanique générale",
        text: "Entretien, vidange, filtres, courroie, embrayage et réparations courantes.",
    },
    {
        title: "Freins & sécurité",
        text: "Contrôle et remplacement des disques, plaquettes, liquide de frein et organes de sécurité.",
    },
    {
        title: "Pneus & équilibrage",
        text: "Montage, équilibrage, permutation, réparation et remplacement de pneus toutes marques.",
    },
    {
        title: "Diagnostic",
        text: "Recherche de panne, lecture défauts, contrôle batterie, démarrage et électronique de bord.",
    },
];

const atelierPoints = [
    "Vidange et filtres",
    "Freinage complet",
    "Distribution",
    "Embrayage",
    "Amortisseurs",
    "Pneumatiques",
    "Batterie",
    "Climatisation",
    "Diagnostic panne",
    "Contrôle avant départ",
    "Révision constructeur",
    "Pré-contrôle technique",
];

export default function Home() {
    return (
        <div id="accueil" className="bg-[#0b0e13] text-[#e6e6e6]">
            <Header />

            <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/A_changer_plustard/banniere.webp"
                    alt="Garage automobile SoloTofs Cars"
                    fill
                    priority
                    className="object-cover brightness-[0.72]"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/40 via-[#0b0e13]/65 to-[#0b0e13]/95" />

                <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl">
                    <p className="uppercase tracking-widest text-neutral-300 text-xs sm:text-sm md:text-base mb-3">
                        SOLOTOFS-CARS
                    </p>

                    <h1 className="font-extrabold uppercase leading-[1.05] md:leading-[1.1] lg:leading-[1.15] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] text-balance">
                        Garage auto à <br />
                        <span className="text-[#3fa0ff]">Gilly-sur-Isère</span>
                    </h1>

                    <p className="mt-5 text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide">
                        Mécanique générale - Entretien - Diagnostic - Pneumatiques
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/#prestations"
                            className="inline-flex items-center rounded-full border border-[#3fa0ff]/50 px-6 py-3 text-sm font-semibold text-[#3fa0ff] hover:bg-[#3fa0ff]/10 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="/#contact"
                            className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-6 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition-colors"
                        >
                            Voir les coordonnées
                        </a>
                        <a
                            href="tel:+33423324104"
                            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                        >
                            Appeler le garage
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#0b0e13]/70 to-[#0b0e13]" />
            </section>

            <Pret_a_liberer />

            <PresentationSoloTofs />

            <section id="atelier" className="py-24 border-t border-white/10 bg-[#0d1118]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Un atelier dédié à la <span className="text-[#3fa0ff]">mécanique du quotidien</span>
                    </h2>

                    <p className="text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                        SoloTofs Cars intervient sur vos besoins essentiels : entretenir, réparer,
                        diagnostiquer et sécuriser votre véhicule. L'objectif est simple :
                        vous remettre sur la route avec une voiture fiable et un devis compris.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {quickServices.map((service) => (
                            <div
                                key={service.title}
                                className="flex flex-col items-center text-center bg-[#0b0e13]/80 border border-white/10 rounded-2xl p-6 hover:border-[#3fa0ff]/40 transition-all"
                            >
                                <div className="h-11 w-11 rounded-full bg-[#3fa0ff]/10 border border-[#3fa0ff]/30 flex items-center justify-center text-[#3fa0ff] font-extrabold mb-4">
                                    +
                                </div>
                                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                <p className="text-neutral-400 text-sm mt-2">{service.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
                        {atelierPoints.map((point) => (
                            <div
                                key={point}
                                className="border border-white/10 bg-[#0b0e13]/70 rounded-xl px-4 py-3 text-neutral-300"
                            >
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Nos_prestations />

            <EtapesSection />

            <Nos_engagements />

            <FaqSection />

            <section id="contact" className="py-24 border-t border-white/10 bg-[#0b0e13]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
                        Nous <span className="text-[#3fa0ff]">contacter</span>
                    </h2>
                    <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
                        Une panne, un entretien à prévoir ou un devis mécanique ?
                        Contactez directement le garage par téléphone, email ou sur place.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Téléphone</h3>
                            <a href="tel:+33423324104" className="text-[#3fa0ff] text-lg font-semibold hover:underline">
                                +33 4 23 32 41 04
                            </a>
                            <p className="text-neutral-400 text-sm mt-3">
                                Pour un rendez-vous, un devis ou une question sur votre véhicule.
                            </p>
                        </div>

                        <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                            <a
                                href="mailto:solotofs.cars@gmail.com"
                                className="text-[#3fa0ff] text-lg font-semibold hover:underline break-all"
                            >
                                solotofs.cars@gmail.com
                            </a>
                            <p className="text-neutral-400 text-sm mt-3">
                                Envoyez vos informations véhicule et votre demande.
                            </p>
                        </div>

                        <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Adresse</h3>
                            <p className="text-neutral-300">
                                <strong>44 Impasse Ampère</strong>
                                <br />
                                73200 Gilly-sur-Isère
                            </p>
                            <a
                                href="https://maps.google.com/?q=SoloTofs+Cars,+44+Impasse+Amp%C3%A8re,+73200+Gilly-sur-Is%C3%A8re"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex mt-4 rounded-full border border-[#3fa0ff]/40 px-5 py-2.5 text-sm font-semibold text-[#3fa0ff] hover:bg-[#3fa0ff]/10 transition-colors"
                            >
                                Voir sur Google Maps
                            </a>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-neutral-400 text-sm">
                        Ouvert du lundi au vendredi : 9h00 - 12h00 / 14h00 - 18h00
                    </p>
                </div>
            </section>

            <section className="px-6 sm:px-10 py-16 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                        Retrouvez <span className="text-[#3fa0ff]">SoloTofs Cars</span> à Gilly-sur-Isère
                    </h2>
                    <div id="contact-map" className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps?q=SoloTofs%20Cars%2044%20Impasse%20Amp%C3%A8re%2073200%20Gilly-sur-Is%C3%A8re&output=embed"
                            width="100%"
                            height="570"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
