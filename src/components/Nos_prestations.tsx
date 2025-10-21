export default function Nos_prestations() {
    return (
        <section
            id="reprogrammation"
            className="py-24 border-t border-white/10 bg-[#0b0e13]"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Titre principal */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
                    Nos prestations de{" "}
                    <span className="text-[#3fa0ff]">reprogrammation moteur</span>
                </h2>

                {/* Conteneur des deux blocs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bloc — Sur place */}
                    <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <h3 className="text-2xl font-bold text-[#3fa0ff] mb-4">
                            Reprogrammation sur place
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                            Confiez-nous votre véhicule directement dans notre atelier de{" "}
                            <strong>Gilly-sur-Isère</strong>. Nous réalisons une
                            reprogrammation complète sur mesure, du diagnostic initial à la
                            validation finale sur route.
                        </p>

                        <div className="space-y-4 text-neutral-300 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">1.</span>
                                <p>
                                    <strong>Diagnostic & lecture du calculateur</strong> — Nous
                                    identifions la version du calculateur et sauvegardons le
                                    fichier d’origine.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">2.</span>
                                <p>
                                    <strong>Optimisation du fichier</strong> — Ajustement des
                                    cartographies moteur selon vos besoins (Stage 1, E85,
                                    suppression FAP/EGR, etc.).
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">3.</span>
                                <p>
                                    <strong>Réinjection & test</strong> — Nous réécrivons le
                                    fichier dans le calculateur et effectuons un essai routier
                                    pour valider le résultat.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bloc — À distance */}
                    <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <h3 className="text-2xl font-bold text-[#3fa0ff] mb-4">
                            Reprogrammation à distance
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                            Vous êtes un garage ou un particulier équipé d’un outil de lecture
                            ECU ? Profitez de notre service en ligne rapide et professionnel
                            pour obtenir votre fichier optimisé sans vous déplacer.
                        </p>

                        <div className="space-y-4 text-neutral-300 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">1.</span>
                                <p>
                                    <strong>Lecture du fichier ECU</strong> — Lisez le fichier
                                    d’origine de votre véhicule à l’aide de votre interface (Kess,
                                    CMD, etc.).
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">2.</span>
                                <p>
                                    <strong>Envoi via notre formulaire</strong> — Téléversez votre
                                    fichier sur notre site avec les informations du véhicule.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-[#3fa0ff] font-extrabold text-xl">3.</span>
                                <p>
                                    <strong>Modification & retour rapide</strong> — Nous modifions
                                    le fichier et vous le renvoyons sous quelques heures par
                                    email.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
