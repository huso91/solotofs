import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://solotofs-cars.fr"),
    title:
        "SoloTofs Cars | Garage auto & Reprogrammation moteur à Gilly-sur-Isère (Savoie)",
    description:
        "Garage automobile multi-service à Gilly-sur-Isère : reprogrammation moteur, mécanique générale, entretien, pneus, diagnostics et doubles de clés.",
    keywords: [
        "garage automobile savoie",
        "garage gilly-sur-isère",
        "garage albertville",
        "reprogrammation moteur savoie",
        "mécanique générale",
        "entretien auto",
        "vidange freins distribution embrayage",
        "diagnostic automobile",
        "double de clés voiture",
        "flexfuel e85",
        "stage 1 stage 2 stage 3",
    ],
    robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        title:
            "SoloTofs Cars – Garage automobile & Reprogrammation moteur à Gilly-sur-Isère",
        description:
            "SoloTofs Cars, garage auto en Savoie : reprogrammation moteur, entretien, mécanique, pneus, diagnostics, clés et plus encore à Gilly-sur-Isère.",
        url: "https://solotofs-cars.fr",
        siteName: "SoloTofs Cars",
        images: [
            {
                url: "https://solotofs-cars.fr/shareimage.webp",
                width: 1200,
                height: 630,
                alt: "SoloTofs Cars – Garage automobile à Gilly-sur-Isère",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="scroll-smooth">
        <head>
            <meta charSet="UTF-8" />
            <meta
                property="og:image"
                content="https://solotofs-cars.fr/shareimage.webp"
            />
            <meta property="og:site_name" content="SoloTofs Cars" />
            <meta name="theme-color" content="#0b0e13" />

            {/* Données structurées principales (AutoRepair) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AutoRepair",
                    name: "SoloTofs Cars",
                    url: "https://solotofs-cars.fr",
                    logo: "https://solotofs-cars.fr/shareimage.webp",
                    image: "https://solotofs-cars.fr/shareimage.webp",
                    description:
                        "Garage automobile multi-service à Gilly-sur-Isère : reprogrammation moteur, mécanique générale, entretien, pneus, diagnostics, et doubles de clés.",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "44 Impasse Ampère",
                        addressLocality: "Gilly-sur-Isère",
                        postalCode: "73200",
                        addressRegion: "Auvergne-Rhône-Alpes",
                        addressCountry: "FR",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: 45.6652,
                        longitude: 6.3525,
                    },
                    telephone: "+33 4 23 32 41 04",
                    openingHours: "Mo-Fr 09:00-12:00,14:00-18:00",
                    priceRange: "€€",
                    sameAs: [
                        "https://www.instagram.com/solotofs_cars/",
                        "https://www.facebook.com/p/Solotofs-Cars-100095063024543/",
                    ],
                    areaServed: [
                        "Gilly-sur-Isère",
                        "Albertville",
                        "Savoie",
                        "Haute-Savoie",
                        "France",
                    ],
                    makesOffer: [
                        {
                            "@type": "Service",
                            name: "Reprogrammation moteur sur mesure",
                            description:
                                "Stage 1, Stage 2, Stage 3, FlexFuel E85, suppression EGR, DPF, AdBlue.",
                            areaServed: "Savoie",
                            serviceType: "Reprogrammation moteur",
                        },
                        {
                            "@type": "Service",
                            name: "Mécanique générale",
                            description:
                                "Vidange, freins, amortisseurs, distribution, embrayage, climatisation.",
                            serviceType: "Mécanique et entretien auto",
                        },
                        {
                            "@type": "Service",
                            name: "Pneumatiques",
                            description:
                                "Montage, équilibrage et remplacement de pneus toutes marques.",
                            serviceType: "Service pneus",
                        },
                        {
                            "@type": "Service",
                            name: "Diagnostic électronique",
                            description:
                                "Analyse complète des calculateurs et lecture des codes défauts.",
                            serviceType: "Diagnostic automobile",
                        },
                        {
                            "@type": "Service",
                            name: "Double de clés automobile",
                            description:
                                "Duplication, programmation et réparation de clés auto toutes marques.",
                            serviceType: "Serrurerie automobile",
                        },
                    ],
                })}
            </script>



            {/* Favicon & ressources */}
            <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
            <link rel="manifest" href="/images/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            {/* Fonts & préloads */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Lora&display=swap"
                rel="stylesheet"
            />
            <link
                rel="preload"
                as="image"
                href="/A_changer_plustard/banniere.webp"
                type="image/webp"
            />
            <link rel="preload" as="image" href="/shareimage.webp" type="image/webp" />
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0e13] text-[#e6e6e6]`}
        >
        {children}

        {/* Script Tuning-Shop (iframe loader) */}
        <Script
            src="https://tuning-shop.com/media/js/iframe-loader.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}
