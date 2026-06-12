import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | SoloTofs Cars",
    description:
        "Découvrez comment SoloTofs Cars collecte, utilise et protège vos données personnelles dans le respect du RGPD.",
    keywords: [
        "politique de confidentialité SoloTofs Cars",
        "protection des données automobile",
        "garage Gilly-sur-Isère confidentialité",
        "données personnelles Savoie",
    ],
    openGraph: {
        title: "Politique de Confidentialité | SoloTofs Cars",
        description:
            "SoloTofs Cars protège vos données personnelles conformément au RGPD.",
        url: "https://solotofs-cars.fr/politique-confidentialite",
        siteName: "SoloTofs Cars",
        images: [
            {
                url: "https://solotofs-cars.fr/shareimage.webp",
                width: 1200,
                height: 630,
                alt: "SoloTofs Cars - Politique de confidentialité",
            },
        ],
    },
    alternates: {
        canonical: "https://solotofs-cars.fr/politique-confidentialite",
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function PolitiqueConfidentialiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
