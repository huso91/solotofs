import Image from "next/image";
import { ClipboardCheck, Clock, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";

const engagements = [
    {
        icon: ClipboardCheck,
        title: "Diagnostic sérieux",
        text: "Chaque intervention commence par un contrôle adapté pour comprendre la panne avant d'agir.",
    },
    {
        icon: Wrench,
        title: "Travail soigné",
        text: "Entretien, freinage, pneus ou réparation : l'atelier suit une méthode propre et rigoureuse.",
    },
    {
        icon: Star,
        title: "Expérience",
        text: "Une vraie connaissance terrain pour accompagner les véhicules du quotidien comme les modèles plus exigeants.",
    },
    {
        icon: Clock,
        title: "Délais annoncés",
        text: "Vous savez quand déposer le véhicule, combien de temps prévoir et quand le récupérer.",
    },
    {
        icon: Sparkles,
        title: "Restitution claire",
        text: "Les travaux réalisés et les points à surveiller vous sont expliqués simplement.",
    },
    {
        icon: ShieldCheck,
        title: "Sécurité",
        text: "Les organes essentiels sont contrôlés avec attention pour rouler plus sereinement.",
    },
];

export default function Nos_engagements() {
    return (
        <section id="engagements" className="relative py-24 border-t border-white/10 text-white">
            <Image
                src="/bmw_engagement.webp"
                alt="Atelier mécanique SoloTofs Cars"
                fill
                className="object-cover brightness-[0.35]"
                priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/70 via-[#0b0e13]/80 to-[#0b0e13]/95" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Nos <span className="text-[#3fa0ff]">engagements</span>
                </h2>
                <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                    Un garage de proximité, une prise en charge claire et des interventions pensées
                    pour la fiabilité de votre véhicule.
                </p>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {engagements.map((engagement) => {
                        const Icon = engagement.icon;
                        return (
                            <div
                                key={engagement.title}
                                className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition"
                            >
                                <Icon className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2">{engagement.title}</h3>
                                <p className="text-neutral-400 text-sm">{engagement.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
