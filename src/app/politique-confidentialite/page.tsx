import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <Header />
            <main className="px-4 py-16 max-w-4xl mx-auto text-justify space-y-10 mt-12">
                <h1 className="text-3xl font-bold text-center mb-8">Politique de Confidentialité</h1>

                <section>
                    <h2 className="text-xl font-semibold">1. Introduction</h2>
                    <p>
                        La présente politique de confidentialité informe les utilisateurs du site{" "}
                        <a href="https://solotofs-cars.fr" className="text-[#3fa0ff] underline">
                            https://solotofs-cars.fr
                        </a>{" "}
                        sur la manière dont SoloTofs Cars collecte, utilise et protège les données
                        personnelles dans le cadre de ses prestations de mécanique automobile.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">2. Données collectées</h2>
                    <p>
                        Lors de l'utilisation du formulaire de contact, SoloTofs Cars collecte uniquement
                        les informations nécessaires au traitement de votre demande :
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Nom et prénom</li>
                        <li>Adresse e-mail</li>
                        <li>Numéro de téléphone</li>
                        <li>Informations utiles sur le véhicule ou l'intervention souhaitée</li>
                        <li>Remarques ou précisions saisies dans le formulaire</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">3. Finalité du traitement</h2>
                    <p>Les données collectées sont utilisées exclusivement pour :</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Répondre à votre demande de renseignement</li>
                        <li>Établir un devis ou proposer un rendez-vous</li>
                        <li>Assurer le suivi de votre demande atelier</li>
                        <li>Vous contacter si des informations complémentaires sont nécessaires</li>
                    </ul>
                    <p className="mt-3">
                        Aucune donnée n'est utilisée à des fins commerciales, publicitaires ou statistiques
                        sans votre accord explicite.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">4. Stockage et sécurité des données</h2>
                    <p>
                        Les informations transmises sont traitées avec soin et protégées contre tout accès
                        non autorisé, perte ou altération. L'accès au site est protégé par le protocole HTTPS.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">5. Partage des données</h2>
                    <p>
                        Les données personnelles ne sont en aucun cas partagées, cédées ou revendues à des tiers.
                        Elles sont utilisées uniquement par SoloTofs Cars dans le cadre de votre demande.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">6. Durée de conservation</h2>
                    <p>
                        Les données sont conservées pendant une durée maximale de <strong>12 mois</strong> après
                        le dernier échange, sauf obligation légale différente ou demande de suppression de votre part.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">7. Vos droits</h2>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                        Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition,
                        de portabilité et de suppression de vos données personnelles.
                    </p>
                    <p className="mt-3">
                        Vous pouvez exercer ces droits à tout moment en écrivant à :{" "}
                        <a href="mailto:contact@solotofscars.fr" className="underline text-[#3fa0ff]">
                            contact@solotofscars.fr
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">8. Cookies et analyse</h2>
                    <p>
                        Le site n'utilise aucun cookie publicitaire ni traceur de navigation. Des outils techniques
                        ou statistiques anonymes peuvent être utilisés pour améliorer les performances du site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">9. Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des données est <strong>Rahman Özer</strong>, gérant de la
                        société <strong>SoloTofs Cars SARL</strong> - SIRET 980 921 654 00011 - 44 Impasse Ampère,
                        73200 Gilly-sur-Isère, France.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">10. Modification de la politique</h2>
                    <p>
                        Cette politique de confidentialité peut être modifiée à tout moment afin de se conformer
                        à l'évolution de la réglementation ou des services proposés.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
