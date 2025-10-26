import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
    return (
        <>
            <Header />
            <main className="px-4 pt-28 pb-12 max-w-4xl mx-auto text-justify space-y-10">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Mentions Légales
                </h1>

                <section>
                    <h2 className="text-xl font-semibold">1. Informations générales</h2>
                    <p>
                        Conformément aux dispositions des articles 6-III et 19 de la Loi
                        n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
                        numérique (LCEN), il est porté à la connaissance des utilisateurs
                        et visiteurs du site{" "}
                        <strong>https://solotofs-cars.fr</strong> les informations suivantes.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">2. Éditeur du site</h2>
                    <p>
                        Le présent site internet est édité par :<br />
                        <strong>SoloTofs Cars SARL</strong><br />
                        SIRET : 980 921 654 00011<br />
                        Siège social : 44 Impasse Ampère, 73200 Gilly-sur-Isère, France.<br />
                        Directeur de la publication : <strong>Rahman Özer</strong><br />
                        Téléphone : +33 4 23 32 41 04<br />
                        Email : contact@solotofscars.fr
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">3. Hébergeur du site</h2>
                    <p>
                        Le site <strong>SoloTofs Cars</strong> est hébergé par :<br />
                        <strong>Vercel Inc.</strong><br />
                        Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.<br />
                        Site web :{" "}
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3fa0ff] hover:underline"
                        >
                            https://vercel.com
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">4. Activité de l’entreprise</h2>
                    <p>
                        <strong>SoloTofs Cars</strong> est un garage automobile
                        multi-service spécialisé en :
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Reprogrammation moteur (Stage 1, 2, 3, FlexFuel E85)</li>
                        <li>Mécanique générale : vidange, freins, embrayage, distribution</li>
                        <li>Diagnostic électronique automobile</li>
                        <li>Montage et équilibrage de pneumatiques</li>
                        <li>Programmation et duplication de clés automobiles</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">5. Données personnelles</h2>
                    <p>
                        Conformément à la loi n°78-17 du 6 janvier 1978 relative à
                        l&apos;informatique, aux fichiers et aux libertés, ainsi qu&apos;au
                        Règlement Général sur la Protection des Données (RGPD), toute
                        personne dispose d&apos;un droit d&apos;accès, de rectification et
                        de suppression des données la concernant.
                        <br />
                        Vous pouvez exercer ce droit à tout moment en nous contactant à
                        l&apos;adresse suivante :{" "}
                        <a
                            href="mailto:contact@solotofscars.fr"
                            className="text-[#3fa0ff] hover:underline"
                        >
                            contact@solotofscars.fr
                        </a>
                        .
                    </p>
                    <p className="mt-3">
                        Les données collectées via les formulaires présents sur ce site
                        (contact ou reprogrammation) sont exclusivement utilisées dans le
                        cadre du traitement de la demande de l&apos;utilisateur et ne sont
                        jamais revendues à des tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">6. Cookies</h2>
                    <p>
                        Le site <strong>solotofs-cars.fr</strong> n&apos;utilise pas de
                        cookies de suivi publicitaire. Seules des mesures d&apos;audience
                        anonymisées peuvent être effectuées à des fins statistiques via des
                        outils tels que Google Search Console.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">7. Propriété intellectuelle</h2>
                    <p>
                        L&apos;ensemble du contenu du site (textes, images, graphismes,
                        logo, vidéos, etc.) est la propriété exclusive de{" "}
                        <strong>SoloTofs Cars</strong> ou fait l&apos;objet d&apos;une
                        autorisation d&apos;utilisation. Toute reproduction ou utilisation
                        non autorisée est strictement interdite.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">8. Limitations de responsabilité</h2>
                    <p>
                        <strong>SoloTofs Cars</strong> s&apos;efforce d&apos;assurer
                        l&apos;exactitude et la mise à jour des informations diffusées sur
                        son site. Cependant, elle ne saurait être tenue responsable de toute
                        erreur, omission ou interruption du service.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">9. Modification des mentions légales</h2>
                    <p>
                        <strong>SoloTofs Cars</strong> se réserve le droit de modifier à
                        tout moment les présentes mentions légales. L&apos;utilisateur est
                        invité à les consulter régulièrement.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">10. Loi applicable</h2>
                    <p>
                        Les présentes mentions légales sont régies par la loi française. En
                        cas de litige, et à défaut de résolution amiable, les tribunaux
                        français seront seuls compétents.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
