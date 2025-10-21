export default function EtapesSection() {
    return (
        <section
            id="etapes"
            className="py-24 border-t border-white/10 bg-[#0d1118]"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                {/* Titre principal */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Comment fonctionne notre service{" "}
                    <span className="text-[#3fa0ff]">en ligne</span> ?
                </h2>
                <p className="text-neutral-400 max-w-3xl mx-auto mb-16">
                    Vous possédez déjà le fichier d’origine de votre véhicule ? Envoyez-le nous,
                    nos ingénieurs s’occupent du reste.
                    Simple, rapide et 100 % sécurisé.
                </p>

                {/* Étapes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Étape 1 */}
                    <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">1</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Lisez votre fichier ECU d’origine
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            À l’aide de votre outil de lecture (Kess, Autotuner, CMD, etc.),
                            récupérez le fichier d’origine de votre véhicule.
                        </p>
                    </div>

                    {/* Étape 2 */}
                    <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">2</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Envoyez-le via notre formulaire
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Joignez votre fichier ECU avec vos coordonnées et les détails du véhicule.
                            Notre équipe reçoit instantanément votre demande.
                        </p>
                    </div>

                    {/* Étape 3 */}
                    <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">3</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Reprogrammation sur mesure
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Nous analysons et optimisons le fichier selon vos besoins (Stage 1, E85,
                            suppression FAP/EGR, etc.) dans un délai très court.
                        </p>
                    </div>

                    {/* Étape 4 */}
                    <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                        <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">4</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Réception du fichier modifié
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Vous recevez par mail votre fichier optimisé, prêt à être réinjecté dans
                            votre véhicule. Une assistance reste disponible en cas de besoin.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
