import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales | SoloTofs Cars",
    description:
        "Mentions légales du site SoloTofs Cars, garage automobile à Gilly-sur-Isère en Savoie.",
    keywords: [
        "mentions légales solotofs cars",
        "solotofs cars",
        "garage automobile savoie",
        "mécanique gilly sur isère",
        "garage albertville",
        "garage gilly-sur-isère",
    ],
    openGraph: {
        title: "Mentions légales | SoloTofs Cars",
        description:
            "Consultez les mentions légales du site SoloTofs Cars, garage automobile à Gilly-sur-Isère.",
        url: "https://solotofs-cars.fr/mentions-legales",
        siteName: "SoloTofs Cars",
        images: [
            {
                url: "https://solotofs-cars.fr/shareimage.webp",
                width: 1200,
                height: 630,
                alt: "SoloTofs Cars - Mentions légales",
            },
        ],
    },
    alternates: {
        canonical: "https://solotofs-cars.fr/mentions-legales",
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function MentionsLegalesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
