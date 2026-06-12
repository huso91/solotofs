export default function Pret_a_liberer() {
    return (
        <section className="py-24 bg-[#0b0e13] relative border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-b from-[#0d1118] to-[#0b0e13] border border-[#3fa0ff]/20 rounded-2xl shadow-[0_0_40px_rgba(63,160,255,0.15)] p-10 md:p-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Besoin d'un <span className="text-[#3fa0ff]">garage fiable</span> pour votre véhicule ?
                </h2>

                <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
                    Entretien, panne, voyant allumé, freins, pneus ou contrôle avant trajet :
                    SoloTofs Cars vous accueille à Gilly-sur-Isère avec un service clair et soigné.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 rounded-xl font-semibold hover:bg-[#5ab4ff] transition-all shadow-md hover:shadow-[#3fa0ff]/30"
                    >
                        Demander un devis
                    </a>

                    <a
                        href="tel:+33423324104"
                        className="inline-flex items-center gap-2 border border-[#3fa0ff]/50 text-[#3fa0ff] px-8 py-3 rounded-xl font-semibold hover:bg-[#3fa0ff]/10 transition-all"
                    >
                        Appeler le garage
                    </a>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-neutral-400 text-sm flex flex-col md:flex-row justify-center gap-4">
                    <p>Entretien toutes marques</p>
                    <span className="hidden md:inline text-neutral-600">-</span>
                    <p>Diagnostic et réparation</p>
                    <span className="hidden md:inline text-neutral-600">-</span>
                    <p>Devis avant travaux</p>
                </div>
            </div>
        </section>
    );
}
