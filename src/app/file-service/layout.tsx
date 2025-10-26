import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "File Service | Reprogrammation moteur à distance – SoloTofs Cars",
    description:
        "Envoyez votre fichier d'origine (ECU/TCU) pour une reprogrammation moteur à distance. Service rapide et sécurisé par les techniciens SoloTofs Cars à Gilly-sur-Isère.",
    keywords: [
        "file service",
        "reprogrammation moteur à distance",
        "cartographie en ligne",
        "tuning fichier ECU",
        "stage 1",
        "stage 2",
        "stage 3",
        "E85 flexfuel",
        "DPF OFF",
        "EGR OFF",
        "SoloTofs Cars",
        "garage Savoie",
    ],
    openGraph: {
        title: "File Service | Reprogrammation moteur à distance – SoloTofs Cars",
        description:
            "Service de reprogrammation moteur à distance : envoyez votre fichier ECU ou TCU et recevez un mapping sur mesure (Stage 1, 2, 3, E85...).",
        url: "https://solotofs-cars.fr/fileservice",
        siteName: "SoloTofs Cars",
        images: [
            {
                url: "https://solotofs-cars.fr/shareimage.webp",
                width: 1200,
                height: 630,
                alt: "SoloTofs Cars – File Service reprogrammation à distance",
            },
        ],
    },
    alternates: {
        canonical: "https://solotofs-cars.fr/fileservice",
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function FileServiceLayout({
                                              children,
                                          }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
