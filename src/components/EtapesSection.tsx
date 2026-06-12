export default function EtapesSection() {
    const steps = [
        {
            title: "Premier échange",
            text: "Vous nous expliquez le symptôme, l'entretien à prévoir ou la réparation souhaitée.",
        },
        {
            title: "Diagnostic atelier",
            text: "Nous contrôlons le véhicule pour confirmer la cause et éviter les remplacements inutiles.",
        },
        {
            title: "Devis et validation",
            text: "Vous recevez une proposition claire avec les pièces, la main-d'oeuvre et les délais.",
        },
        {
            title: "Intervention",
            text: "Les travaux sont réalisés proprement, puis le véhicule est contrôlé avant restitution.",
        },
    ];

    return (
        <section id="etapes" className="py-24 border-t border-white/10 bg-[#0d1118]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Une prise en charge <span className="text-[#3fa0ff]">simple et transparente</span>
                </h2>
                <p className="text-neutral-400 max-w-3xl mx-auto mb-16">
                    De la prise de contact à la restitution, l'objectif est de vous donner une réponse claire,
                    un véhicule fiable et aucune mauvaise surprise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]"
                        >
                            <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">{index + 1}</div>
                            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
