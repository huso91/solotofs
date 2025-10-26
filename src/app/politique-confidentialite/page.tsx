import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <Header />
            <main className="px-4 py-16 max-w-4xl mx-auto text-justify space-y-10 mt-12">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Politique de Confidentialité
                </h1>

                <section>
                    <h2 className="text-xl font-semibold">1. Introduction</h2>
                    <p>
                        La présente politique de confidentialité a pour objectif d’informer
                        les utilisateurs du site{" "}
                        <a
                            href="https://solotofs-cars.fr"
                            className="text-[#3fa0ff] underline"
                        >
                            https://solotofs-cars.fr
                        </a>{" "}
                        sur la manière dont SoloTofs Cars collecte, utilise et protège les
                        données personnelles dans le cadre de ses prestations de
                        reprogrammation moteur, d’entretien automobile et de services en
                        ligne.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">2. Données collectées</h2>
                    <p>
                        Lors de l’utilisation du site et des formulaires (contact, simulateur
                        ou service de reprogrammation à distance), SoloTofs Cars collecte
                        uniquement les informations nécessaires au traitement de votre
                        demande :
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Nom et prénom</li>
                        <li>Adresse e-mail</li>
                        <li>Numéro de téléphone</li>
                        <li>Données sur le véhicule (marque, modèle, année, motorisation…)</li>
                        <li>Fichier d’origine du calculateur (fichier .bin, .ori, .zip)</li>
                        <li>Remarques ou précisions saisies dans le formulaire</li>
                    </ul>
                    <p className="mt-3">
                        Ces informations sont strictement limitées au cadre de la prestation
                        demandée.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">3. Finalité du traitement</h2>
                    <p>
                        Les données collectées sont utilisées exclusivement pour :
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Établir un devis ou une réponse à votre demande technique</li>
                        <li>Analyser le fichier ECU d’origine fourni</li>
                        <li>Assurer le suivi et la livraison du fichier reprogrammé</li>
                        <li>Vous contacter en cas d’informations complémentaires nécessaires</li>
                    </ul>
                    <p className="mt-3">
                        Aucune donnée n’est utilisée à des fins commerciales, publicitaires
                        ou statistiques sans votre accord explicite.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">4. Stockage et sécurité des données</h2>
                    <p>
                        Toutes les informations transmises sont hébergées de manière
                        sécurisée sur des serveurs conformes aux standards RGPD, situés au
                        sein de l’Union Européenne. Les fichiers transmis (fichiers ECU) sont
                        stockés temporairement le temps de leur traitement, puis supprimés
                        automatiquement après livraison.
                    </p>
                    <p className="mt-3">
                        SoloTofs Cars met en œuvre des mesures techniques et
                        organisationnelles (connexion HTTPS, accès restreint, stockage
                        chiffré) afin d’assurer la protection maximale de vos données contre
                        tout accès non autorisé, perte ou altération.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">5. Partage des données</h2>
                    <p>
                        Les données personnelles ne sont en aucun cas partagées, cédées ou
                        revendues à des tiers. Seuls les techniciens agréés de SoloTofs Cars
                        peuvent y accéder dans le cadre strict du service demandé.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">6. Durée de conservation</h2>
                    <p>
                        Les données sont conservées pendant une durée maximale de{" "}
                        <strong>12 mois</strong> après la fin de la prestation, sauf demande
                        expresse de suppression de votre part. Les fichiers ECU sont supprimés
                        dès la fin du traitement technique.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">7. Vos droits</h2>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données
                        (RGPD – Règlement UE 2016/679) et à la loi Informatique et Libertés,
                        vous disposez d’un droit d’accès, de rectification, d’opposition, de
                        portabilité et de suppression de vos données personnelles.
                    </p>
                    <p className="mt-3">
                        Vous pouvez exercer ces droits à tout moment en écrivant à :{" "}
                        <a
                            href="mailto:contact@solotofscars.fr"
                            className="underline text-[#3fa0ff]"
                        >
                            contact@solotofscars.fr
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">8. Cookies et analyse</h2>
                    <p>
                        Le site{" "}
                        <a
                            href="https://solotofs-cars.fr"
                            className="underline text-[#3fa0ff]"
                        >
                            solotofs-cars.fr
                        </a>{" "}
                        n’utilise aucun cookie publicitaire ni traceur de navigation. Seuls
                        des outils internes (ex. Google Search Console) peuvent être utilisés
                        pour des analyses purement techniques et anonymes afin d’améliorer
                        les performances du site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">9. Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des données est{" "}
                        <strong>Rahman Özer</strong>, gérant de la société{" "}
                        <strong>SoloTofs Cars SARL</strong> – SIRET 980 921 654 00011 –
                        44 Impasse Ampère, 73200 Gilly-sur-Isère, France.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">10. Sécurité et conformité</h2>
                    <p>
                        L’accès au site et aux formulaires est protégé par le protocole
                        HTTPS. Les échanges avec nos serveurs sont chiffrés. L’ensemble des
                        prestataires techniques respectent la législation européenne sur la
                        protection des données (RGPD).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">11. Modification de la politique</h2>
                    <p>
                        Cette politique de confidentialité peut être modifiée à tout moment,
                        notamment pour se conformer à l’évolution de la réglementation ou des
                        services proposés. La version la plus récente est toujours disponible
                        sur cette page.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
