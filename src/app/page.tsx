import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nos_engagements from "@/components/nos_engagements";
import Pret_a_liberer from "@/components/Pret_a_liberer";
import PresentationSoloTofs from "@/components/presentationsolotofs";
import Nos_prestations from "@/components/Nos_prestations";
import EtapesSection from "@/components/EtapesSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
      <div id="accueil" className="bg-[#0b0e13] text-[#e6e6e6]">


        <Header/>

        {/* HERO / BANNIÈRE */}
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Image de fond */}
          <Image
              src="/A_changer_plustard/banniere.webp"
              alt="BMW performance – SoloTofs Cars"
              fill
              priority
              className="object-cover brightness-[0.75]"
          />

          {/* Overlay pour contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/40 via-[#0b0e13]/60 to-[#0b0e13]/90" />

          {/* Contenu principal */}
          <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl">
            <p className="uppercase tracking-widest text-neutral-300 text-xs sm:text-sm md:text-base mb-3">
              SOLOTOFS-CARS
            </p>

            <h1
                className="
    font-extrabold uppercase
    leading-[1.05] md:leading-[1.1] lg:leading-[1.15]
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
    tracking-tight
    drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
    text-balance
  "
            >
              La passion haute <br/>
              <span className="text-[#3fa0ff]">performance</span>
            </h1>


            <p
                className="
        mt-5 text-neutral-300
        text-sm sm:text-base md:text-lg lg:text-xl
        uppercase tracking-wide
      "
            >
              Garage multi-service • Reprogrammation moteur sur mesure
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                  href="/simulateur"
                  className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-6 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition-colors"
              >
                Simuler mes gains
              </a>
              <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Dégradé bas pour la continuité */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#0b0e13]/70 to-[#0b0e13]" />
        </section>







        <Pret_a_liberer />


        <PresentationSoloTofs />




        {/* SECTION PRÉSENTATION SOLOTOFS */}
        <section
            id="presentation"
            className="py-24 border-t border-white/10 bg-[#0d1118]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              SoloTofs Cars : <span className="text-[#3fa0ff]">Performance & Expertise</span>
            </h2>

            <p className="text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              Garage automobile situé à <strong>Gilly-sur-Isère</strong>, SoloTofs Cars allie passion, savoir-faire et technologie.
              Notre équipe intervient sur tous types de véhicules, avec une spécialisation dans la <span className="text-[#3fa0ff] font-semibold">reprogrammation moteur</span> et l’entretien complet.
            </p>

            {/* ✅ Points clés avec icônes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* 1. Mécanique générale */}
              <div className="flex flex-col items-center text-center bg-[#0b0e13]/80 border border-white/10 rounded-2xl p-6 hover:border-[#3fa0ff]/40 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3fa0ff] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 012 2v5H5v-5a2 2 0 012-2m10 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m10 0H6" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Mécanique générale</h3>
                <p className="text-neutral-400 text-sm mt-2">Entretien, vidange, freins, distribution, climatisation… tout pour la fiabilité.</p>
              </div>

              {/* 2. Pneus & équilibrage */}
              <div className="flex flex-col items-center text-center bg-[#0b0e13]/80 border border-white/10 rounded-2xl p-6 hover:border-[#3fa0ff]/40 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3fa0ff] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4V4H8v4c0 2.21 1.79 4 4 4zM4 20h16v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Pneus & équilibrage</h3>
                <p className="text-neutral-400 text-sm mt-2">Montage, équilibrage et remplacement de vos pneus toutes marques.</p>
              </div>

              {/* 3. Reprogrammation moteur */}
              <div className="flex flex-col items-center text-center bg-[#0b0e13]/80 border border-white/10 rounded-2xl p-6 hover:border-[#3fa0ff]/40 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3fa0ff] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Reprogrammation moteur</h3>
                <p className="text-neutral-400 text-sm mt-2">Optimisation sur mesure, sur place ou à distance, pour plus de puissance et d’efficacité.</p>
              </div>

              {/* 4. Double de clés & codage */}
              <div className="flex flex-col items-center text-center bg-[#0b0e13]/80 border border-white/10 rounded-2xl p-6 hover:border-[#3fa0ff]/40 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3fa0ff] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21l-2-2m0 0l-2 2m2-2V7a2 2 0 012-2h6a2 2 0 012 2v12m-2 2l-2-2m0 0l-2 2" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Double de clés</h3>
                <p className="text-neutral-400 text-sm mt-2">Duplication, programmation et réparation de clés électroniques auto.</p>
              </div>
            </div>

            {/* Image du garage
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_35px_rgba(63,160,255,0.15)]">
              <Image
                  src="/A_changer_plustard/pres.jpg"
                  alt="Garage SoloTofs Cars à Gilly-sur-Isère"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
              />
            </div> */}
          </div>
        </section>



        <Nos_prestations />




        <EtapesSection />




        {/* SECTION DOUBLES DE CLÉS */}
        <section id="clef" className="py-24 bg-[#0d1118] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Titre */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Double de clés automobile
            </h2>
            <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
              SoloTofs Cars réalise vos <span className="text-[#3fa0ff] font-semibold">doubles de clés, reprogrammations et réparations</span>
               de clés automobiles toutes marques. Intervention rapide, sur place ou à distance selon le type de clé.
            </p>

            {/* Icônes + services */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center bg-[#0b0e13]/70 p-6 rounded-2xl border border-white/10 hover:border-[#3fa0ff]/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#3fa0ff" className="w-10 h-10 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a3 3 0 1 1 4.243 4.243l-9.193 9.193a2 2 0 0 1-1.414.586H6v-2.828a2 2 0 0 1 .586-1.414l8.646-8.646z" />
                </svg>
                <h3 className="font-semibold text-lg text-white mb-2">Copie & Programmation</h3>
                <p className="text-neutral-400 text-sm">Duplication et codage de vos clés existantes (clé simple ou télécommande).</p>
              </div>

              <div className="flex flex-col items-center text-center bg-[#0b0e13]/70 p-6 rounded-2xl border border-white/10 hover:border-[#3fa0ff]/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#3fa0ff" className="w-10 h-10 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405M9 11V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5m-6 6a3 3 0 0 0 6 0v-4H9v4z" />
                </svg>
                <h3 className="font-semibold text-lg text-white mb-2">Clé perdue ou cassée</h3>
                <p className="text-neutral-400 text-sm">Recréation complète d’une clé à partir du véhicule ou du calculateur.</p>
              </div>

              <div className="flex flex-col items-center text-center bg-[#0b0e13]/70 p-6 rounded-2xl border border-white/10 hover:border-[#3fa0ff]/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#3fa0ff" className="w-10 h-10 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25l7.5 7.5 7.5-7.5" />
                </svg>
                <h3 className="font-semibold text-lg text-white mb-2">Réparation & boîtier</h3>
                <p className="text-neutral-400 text-sm">Remplacement de boîtier, piles, boutons ou transpondeurs endommagés.</p>
              </div>

              <div className="flex flex-col items-center text-center bg-[#0b0e13]/70 p-6 rounded-2xl border border-white/10 hover:border-[#3fa0ff]/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#3fa0ff" className="w-10 h-10 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8m12 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0z" />
                </svg>
                <h3 className="font-semibold text-lg text-white mb-2">Clé intelligente</h3>
                <p className="text-neutral-400 text-sm">Programmation de clés "keyless" et cartes de démarrage pour véhicules récents.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 font-semibold hover:bg-[#5ab4ff] transition-colors"
              >
                Demander un double de clé
              </a>
            </div>
          </div>
        </section>



        {/* SECTION OUTILS & PARTENAIRES */}
        <section
            id="partenaires"
            className="py-24 border-t border-white/10 bg-[#0b0e13]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Nos outils & <span className="text-[#3fa0ff]">partenaires de confiance</span>
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nous travaillons avec les meilleurs outils du marché pour vous garantir des résultats fiables et durables.
            </p>

            {/* Carrousel centré */}
            <div className="relative overflow-hidden">
              <div className="flex gap-16 sm:gap-24 animate-marquee">
                {/* 1re série de logos */}
                <img src="/logos/abrites.png" alt="Abrites" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/alientech.jpg" alt="Alientech" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/autel.png" alt="Autel" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/auto_tuner_logo.webp" alt="Auto Tuner" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/logo_flex_magic_sport.png" alt="Flex Magic Motorsport" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/mwtools.jpg" alt="MW Tools" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/xhorse.jpg" alt="Xhorse" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />

                {/* 2e série dupliquée pour la boucle fluide */}
                <img src="/logos/abrites.png" alt="Abrites" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/alientech.jpg" alt="Alientech" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/autel.png" alt="Autel" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/auto_tuner_logo.webp" alt="Auto Tuner" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/logo_flex_magic_sport.png" alt="Flex Magic Motorsport" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/mwtools.jpg" alt="MW Tools" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/xhorse.jpg" alt="Xhorse" className="h-10 sm:h-12 object-contain opacity-80" />
              </div>

              {/* Ombres dégradées */}
              <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0b0e13] to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0b0e13] to-transparent pointer-events-none"></div>
            </div>


            <p className="mt-16 text-neutral-400 text-sm sm:text-base">
              🔧 Des partenaires techniques reconnus dans le monde entier.
            </p>
          </div>
        </section>

        <Nos_engagements />




        <FaqSection />



        {/* SECTION CONTACT */}
        <section
            id="contact"
            className="py-24 border-t border-white/10 bg-[#0b0e13]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
              Nous <span className="text-[#3fa0ff]">contacter</span>
            </h2>
            <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
              Une question, un devis ou une demande spécifique ?
              Remplissez le formulaire ou contactez-nous directement.
            </p>

            {/* Contenu principal : form + infos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* FORMULAIRE DE CONTACT */}
              <form className="space-y-4 bg-[#0d1118]/80 p-6 rounded-2xl border border-[#3fa0ff]/20 shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                      type="text"
                      placeholder="Nom Prénom"
                      className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                      required
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                      required
                  />
                </div>

                <input
                    type="tel"
                    placeholder="Téléphone"
                    className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                    required
                />

                <textarea
                    rows={5}
                    placeholder="Votre message..."
                    className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#3fa0ff] text-[#0b0e13] font-semibold px-6 py-3 text-sm hover:bg-[#5ab4ff] transition-colors"
                >
                  Envoyer le message
                </button>
              </form>

              {/* INFOS DE CONTACT */}
              <div className="flex flex-col justify-center space-y-6 text-neutral-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SoloTofs Cars</h3>
                  <p>
                    📍 <strong>44 Impasse Ampère</strong>
                    <br />73200 Gilly-sur-Isère
                  </p>
                </div>

                <div>
                  <p>
                    📞{" "}
                    <a href="tel:+33423324104" className="text-[#3fa0ff] hover:underline">
                      +33 4 23 32 41 04
                    </a>
                  </p>
                  <p>
                    📧{" "}
                    <a href="mailto:contact@solotofscars.fr" className="text-[#3fa0ff] hover:underline">
                      contact@solotofscars.fr
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-400">
                    Ouvert du lundi au vendredi
                    <br />9h00 – 12h00 / 14h00 – 18h00
                  </p>
                </div>

                <div>
                  <a
                      href="https://maps.google.com/?q=SoloTofs+Cars,+44+Impasse+Amp%C3%A8re,+73200+Gilly-sur-Is%C3%A8re"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#3fa0ff]/40 px-5 py-2.5 text-sm font-semibold text-[#3fa0ff] hover:bg-[#3fa0ff]/10 transition-colors"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONE DESSERVIE / MAP SOLOTOFS CARS */}
        <section className="px-6 sm:px-10 py-16 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Retrouvez <span className="text-[#3fa0ff]">SoloTofs Cars</span> à Gilly-sur-Isère
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.492931919048!2d6.352547576693351!3d45.66524712231062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478baeb66e7a302d%3A0xe81598b95b92dc3d!2sSoloTofs%20Cars!5e0!3m2!1sfr!2sfr!4v1734444000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>




        <Footer />
      </div>
  );
}
