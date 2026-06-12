import Image from "next/image";

export default function PresentationSoloTofs() {
    return (
        <section id="presentation" className="relative py-24 border-t border-white/10 bg-[#0b0e13]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(63,160,255,0.2)]">
                    <Image
                        src="/A_changer_plustard/pres.jpg"
                        alt="Garage SoloTofs Cars à Gilly-sur-Isère"
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0e13]/60 via-transparent to-transparent" />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        L'expertise <span className="text-[#3fa0ff]">SoloTofs Cars</span>
                    </h2>

                    <p className="text-neutral-300 leading-relaxed">
                        Basé à <span className="font-semibold text-white">Gilly-sur-Isère</span>,
                        <span className="text-[#3fa0ff] font-semibold"> SoloTofs Cars </span>
                        accompagne les automobilistes pour l'entretien, le diagnostic et la réparation
                        de véhicules de toutes marques.
                    </p>

                    <p className="text-neutral-400 leading-relaxed">
                        L'atelier privilégie une approche simple : écouter votre besoin, contrôler le
                        véhicule, expliquer les travaux nécessaires et intervenir avec soin. Vidange,
                        freinage, pneus, distribution, climatisation ou recherche de panne, vous gardez
                        une vision claire de ce qui est fait sur votre voiture.
                    </p>

                    <div className="pt-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-[#3fa0ff] px-6 py-3 text-sm font-semibold text-[#0b0e13] hover:bg-[#5ab4ff] transition-colors"
                        >
                            Demander un devis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
