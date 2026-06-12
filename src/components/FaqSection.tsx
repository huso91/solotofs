const faqs = [
    {
        question: "Faut-il prendre rendez-vous ?",
        answer:
            "Oui, c'est préférable pour organiser le diagnostic, commander les bonnes pièces et limiter l'immobilisation du véhicule.",
    },
    {
        question: "Pouvez-vous faire un devis avant réparation ?",
        answer:
            "Oui. Après contrôle du véhicule, nous vous expliquons les travaux nécessaires et le devis avant toute intervention.",
    },
    {
        question: "Intervenez-vous sur toutes les marques ?",
        answer:
            "Nous prenons en charge la majorité des véhicules particuliers et utilitaires légers pour l'entretien courant, le freinage, les pneus et le diagnostic.",
    },
    {
        question: "Puis-je venir pour un voyant allumé ?",
        answer:
            "Oui. Nous pouvons effectuer un diagnostic, lire les défauts et vérifier les éléments mécaniques concernés avant de proposer une réparation.",
    },
    {
        question: "Combien de temps dure une intervention ?",
        answer:
            "Cela dépend du travail à réaliser. Une vidange ou un contrôle est rapide, tandis qu'une distribution, un embrayage ou une recherche de panne demande plus de temps.",
    },
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-24 border-t border-white/10 bg-[#0d1118]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
                    Foire aux <span className="text-[#3fa0ff]">questions</span>
                </h2>
                <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
                    Les réponses utiles avant de confier votre véhicule à l'atelier.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.question}
                            className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40"
                        >
                            <summary className="flex justify-between items-center gap-4 cursor-pointer font-semibold text-white text-lg list-none">
                                {faq.question}
                                <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                                    +
                                </span>
                            </summary>
                            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
