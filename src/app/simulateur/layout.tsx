import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Simulateur de gains moteur | SoloTofs Cars",
    description:
        "Simulez gratuitement les gains de puissance et de couple possibles sur votre véhicule. Reprogrammation moteur Stage 1, 2 ou 3 à Gilly-sur-Isère par SoloTofs Cars.",
    keywords: [
        "simulateur reprogrammation moteur",
        "gain puissance voiture",
        "gain couple moteur",
        "stage 1",
        "stage 2",
        "stage 3",
        "flexfuel e85",
        "soloTofs Cars simulateur",
        "reprog moteur savoie",
        "garage gilly sur isère",
    ],
    openGraph: {
        title: "Simulateur de gains moteur – SoloTofs Cars",
        description:
            "Découvrez les gains de puissance et de couple offerts par la reprogrammation moteur SoloTofs Cars. Simulation gratuite et rapide en ligne.",
        url: "https://solotofs-cars.fr/simulateur",
        siteName: "SoloTofs Cars",
        images: [
            {
                url: "https://solotofs-cars.fr/shareimage.webp",
                width: 1200,
                height: 630,
                alt: "Simulateur de gains moteur – SoloTofs Cars",
            },
        ],
    },
    alternates: {
        canonical: "https://solotofs-cars.fr/simulateur",
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function SimulateurLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
