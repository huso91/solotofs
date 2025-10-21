export default function FaqSection() {
    return (
        <section id="faq" className="py-24 border-t border-white/10 bg-[#0d1118]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Titre principal */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
                    Foire aux <span className="text-[#3fa0ff]">questions</span>
                </h2>
                <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
                    Voici les réponses aux questions les plus fréquentes sur nos prestations de
                    reprogrammation moteur et nos services.
                </p>

                {/* FAQ */}
                <div className="space-y-4">
                    {/* Question 1 */}
                    <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                            La reprogrammation moteur est-elle risquée ?
                            <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
                        </summary>
                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                            Non, lorsqu’elle est réalisée par un professionnel qualifié avec les bons outils,
                            elle ne présente aucun risque. Chez <strong>SoloTofs Cars</strong>, nous
                            conservons toujours le fichier d’origine afin de pouvoir revenir en arrière à tout moment.
                        </p>
                    </details>

                    {/* Question 2 */}
                    <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                            Combien de temps dure une reprogrammation sur place ?
                            <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
                        </summary>
                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                            En moyenne entre <strong>1h30 et 2h</strong> selon le véhicule et le type de
                            calculateur. Nos techniciens effectuent un diagnostic complet avant et après la
                            modification pour garantir un résultat optimal.
                        </p>
                    </details>

                    {/* Question 3 */}
                    <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                            Puis-je revenir à la configuration d’origine ?
                            <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
                        </summary>
                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                            Oui, absolument. Nous sauvegardons systématiquement votre fichier d’origine avant
                            toute intervention. Vous pouvez le faire remettre à tout moment sur simple demande.
                        </p>
                    </details>

                    {/* Question 4 */}
                    <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                            Quels sont les délais pour les fichiers envoyés à distance ?
                            <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
                        </summary>
                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                            Les fichiers envoyés via le formulaire en ligne sont traités dans un délai moyen
                            de <strong>1 à 3 heures</strong> selon la charge du jour. Vous recevez votre
                            fichier modifié directement par e-mail.
                        </p>
                    </details>

                    {/* Question 5 */}
                    <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                            La reprogrammation annule-t-elle la garantie constructeur ?
                            <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
                        </summary>
                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                            Techniquement, une reprogrammation peut être détectée par le constructeur.
                            Cependant, nos réglages sont <strong>réversibles</strong> et réalisés dans le
                            respect des tolérances mécaniques pour préserver la fiabilité du moteur.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}
