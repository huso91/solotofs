import Image from "next/image";

export default function PresentationSoloTofs() {
    return (
        <section
            id="presentation"
            className="relative py-24 border-t border-white/10 bg-[#0b0e13]"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image de présentation */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(63,160,255,0.2)]">
                    <Image
                        src="/A_changer_plustard/pres.jpg"
                        alt="Présentation du garage SoloTofs Cars"
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0e13]/60 via-transparent to-transparent" />
                </div>

                {/* Texte de présentation */}
                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        L’expertise <span className="text-[#3fa0ff]">SoloTofs</span>
                    </h2>

                    <p className="text-neutral-300 leading-relaxed">
                        Basé à <span className="font-semibold text-white">Gilly-sur-Isère</span>,
                        <span className="text-[#3fa0ff] font-semibold"> SoloTofs Cars </span>
                        met à votre service son savoir-faire dans la reprogrammation moteur,
                        la préparation automobile et l’entretien de véhicules de toutes marques.
                    </p>

                    <p className="text-neutral-400 leading-relaxed">
                        Notre atelier allie performance et fiabilité grâce à du matériel de dernière
                        génération, une approche sur mesure et une passion authentique pour
                        l’automobile. Chaque intervention est étudiée avec précision afin de garantir
                        le meilleur équilibre entre puissance, fiabilité et consommation.
                    </p>

                    <div className="pt-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-[#3fa0ff] px-6 py-3 text-sm font-semibold text-[#0b0e13] hover:bg-[#5ab4ff] transition-colors"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
