import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0b0e13] text-[#e6e6e6]">
            <Header />

            <main className="min-h-[75vh] flex items-center justify-center px-6 pt-32 pb-20">
                <section className="max-w-3xl text-center">
                    <p className="text-[#3fa0ff] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                        Erreur 404
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Cette page n'existe pas
                    </h1>

                    <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        Le lien est peut-être incorrect ou la page a été déplacée. Vous pouvez revenir
                        à l'accueil du garage ou nous contacter directement pour une demande mécanique.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-6 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition-colors"
                        >
                            Retour à l'accueil
                        </Link>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                        >
                            Demander un devis
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
