import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nos_prestations from "@/components/Nos_prestations";
import EtapesSection from "@/components/EtapesSection";
import Nos_engagements from "@/components/nos_engagements";
import FaqSection from "@/components/FaqSection";

export default function Simulateur() {
    return (
        <div className="bg-[#0b0e13] text-[#e6e6e6] min-h-screen">
            <Header />

            {/* Bannière simple */}
            <section className="relative h-[40vh] flex items-center justify-center">
                <Image
                    src="/A_changer_plustard/banniere.webp"
                    alt="Simulation SoloTofs Cars"
                    fill
                    className="object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/40 via-[#0b0e13]/60 to-[#0b0e13]/90" />
                <h1 className="relative z-10 text-4xl sm:text-6xl font-extrabold text-white text-center">
                    Simulez vos <span className="text-[#3fa0ff]">performances</span>
                </h1>
            </section>

            {/* Contenu principal : simulateur */}
            <section className="py-24 px-6 sm:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                        Découvrez le potentiel de votre véhicule
                    </h2>
                    <p className="text-neutral-300 mb-10">
                        Sélectionnez votre véhicule et visualisez les gains de puissance et
                        de couple avec notre simulateur partenaire{" "}
                        <span className="text-[#3fa0ff] font-semibold">Tuning-Shop</span>.
                    </p>

                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1118]/95 backdrop-blur-md shadow-[0_0_35px_rgba(63,160,255,0.25)] transition-transform duration-500 hover:scale-[1.01]">
                        <iframe
                            src="https://tuning-shop.com/iframe/iframe.php?user=7194"
                            title="Simulateur de gains SoloTofs"
                            width="100%"
                            height="900"
                            scrolling="no"
                            frameBorder="0"
                            style={{ border: 0 }}
                        />
                    </div>
                </div>
            </section>

            {/* === SECTIONS AJOUTÉES === */}
            <Nos_prestations />

            <EtapesSection />

            <Nos_engagements />

            <FaqSection />

            <Footer />
        </div>
    );
}
