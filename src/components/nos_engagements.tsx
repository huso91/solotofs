import Image from "next/image";
import { Wrench, Star, Cpu, ShieldCheck, Gauge, RefreshCw } from "lucide-react";

export default function Nos_engagements() {
    return (
        <section
            id="engagements"
            className="relative py-24 border-t border-white/10 text-white"
        >
            {/* Image de fond */}
            <Image
                src="/bmw_engagement.webp"
                alt="BMW Performance - Nos engagements SoloTofs Cars"
                fill
                className="object-cover brightness-[0.35]"
                priority
            />

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/70 via-[#0b0e13]/80 to-[#0b0e13]/95" />

            {/* Contenu principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Nos <span className="text-[#3fa0ff]">engagements</span>
                </h2>
                <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                    Nous offrons un service de qualité pour chaque niveau de préparation :
                    Stage 1, Stage 2, Stage 3 et conversion éthanol.
                </p>

                {/* Cartes des engagements */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* 1 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <Cpu className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Technologie</h3>
                        <p className="text-neutral-400 text-sm">
                            Nos optimisations moteur reposent sur des outils de reprogrammation
                            de dernière génération, validés sur banc de puissance pour un
                            réglage précis et optimal.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <Wrench className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Professionnalisme</h3>
                        <p className="text-neutral-400 text-sm">
                            Avec une approche rigoureuse et attentive aux détails,
                            nous garantissons un service client exemplaire et une satisfaction totale.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <Star className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                        <p className="text-neutral-400 text-sm">
                            Forts de plus de 15 ans d’expérience, nos techniciens maîtrisent
                            la mécanique et l’électronique automobile pour assurer des résultats fiables.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <RefreshCw className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Mise à jour</h3>
                        <p className="text-neutral-400 text-sm">
                            Nous assurons gratuitement la remise à l’état d’origine et la mise à jour
                            de votre cartographie pour garantir un fonctionnement optimal dans le temps.
                        </p>
                    </div>

                    {/* 5 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <Gauge className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Performance</h3>
                        <p className="text-neutral-400 text-sm">
                            Nous visons à exploiter tout le potentiel de votre moteur tout en
                            respectant ses tolérances mécaniques. Performance et fiabilité réunies.
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="p-6 bg-[#0b0e13]/70 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#3fa0ff]/40 transition">
                        <ShieldCheck className="w-8 h-8 text-[#3fa0ff] mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
                        <p className="text-neutral-400 text-sm">
                            Chaque cartographie est testée et validée afin de garantir une
                            fiabilité exemplaire. Votre moteur reste performant et durable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
