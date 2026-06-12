import { BatteryCharging, Car, CircleGauge, Disc3, Fan, Wrench } from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "Entretien courant",
        text: "Vidange, filtres, niveaux, contrôle visuel et suivi des périodicités constructeur.",
    },
    {
        icon: Disc3,
        title: "Freinage",
        text: "Plaquettes, disques, liquide de frein et contrôle complet du système de sécurité.",
    },
    {
        icon: Car,
        title: "Pneumatiques",
        text: "Montage, équilibrage, permutation, réparation et remplacement de pneus toutes marques.",
    },
    {
        icon: CircleGauge,
        title: "Diagnostic auto",
        text: "Lecture défauts, recherche de panne, contrôle des organes mécaniques et électriques.",
    },
    {
        icon: BatteryCharging,
        title: "Batterie & démarrage",
        text: "Contrôle batterie, alternateur, démarreur et remplacement si nécessaire.",
    },
    {
        icon: Fan,
        title: "Climatisation",
        text: "Contrôle, recharge, désinfection et diagnostic du circuit de climatisation.",
    },
];

export default function Nos_prestations() {
    return (
        <section id="prestations" className="py-24 border-t border-white/10 bg-[#0b0e13]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Nos prestations de <span className="text-[#3fa0ff]">mécanique automobile</span>
                    </h2>
                    <p className="text-neutral-400 leading-relaxed">
                        SoloTofs Cars prend en charge l'entretien et les réparations de votre véhicule
                        avec une approche claire : diagnostic sérieux, devis expliqué et intervention soignée.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-7 hover:border-[#3fa0ff]/40 transition-all"
                            >
                                <Icon className="w-9 h-9 text-[#3fa0ff] mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{service.text}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-14 bg-[#0d1118] border border-[#3fa0ff]/20 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-[#3fa0ff] text-3xl font-extrabold">01</p>
                        <h3 className="text-white font-semibold mt-2">Contrôle avant travaux</h3>
                        <p className="text-neutral-400 text-sm mt-2">On identifie le besoin réel avant de remplacer.</p>
                    </div>
                    <div>
                        <p className="text-[#3fa0ff] text-3xl font-extrabold">02</p>
                        <h3 className="text-white font-semibold mt-2">Devis clair</h3>
                        <p className="text-neutral-400 text-sm mt-2">Vous validez le prix et les pièces avant intervention.</p>
                    </div>
                    <div>
                        <p className="text-[#3fa0ff] text-3xl font-extrabold">03</p>
                        <h3 className="text-white font-semibold mt-2">Restitution expliquée</h3>
                        <p className="text-neutral-400 text-sm mt-2">On vous indique ce qui a été fait et les points à surveiller.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
