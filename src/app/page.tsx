import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <div id="accueil" className="bg-[#0b0e13] text-[#e6e6e6]">


        <Header/>

        {/* HERO / BANNIÈRE */}
        <section className="relative min-h-screen flex items-center pb-16 md:pb-24">
          {/* Image de fond */}
          <Image
              src="/A_changer_plustard/banniere.webp"
              alt="BMW performance – SoloTofs Cars"
              fill
              priority
              className="object-cover brightness-[0.75]"
          />

          {/* Overlay pour le contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/40 via-[#0b0e13]/60 to-[#0b0e13]/90"/>

          {/* Contenu du texte */}
          <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mt-[-6vh] sm:mt-[-8vh] md:mt-[-10vh]">
              <p className="uppercase tracking-widest text-neutral-300 text-xs sm:text-sm mb-2">
                SOLOTOFS-CARS
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight uppercase">
                La passion haute <br/>
                <span className="text-[#3fa0ff]">performance</span>
              </h1>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg uppercase tracking-wide">
                Garage multi-service • Reprogrammation moteur sur mesure
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href="#simulateur"
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
          </div>
          <div
              className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#0b0e13]/70 to-[#0b0e13]"/>

        </section>


        {/* Séparateur visuel entre la bannière et le simulateur */}
        <div className="relative z-20 -mt-24 sm:-mt-36 md:-mt-48 lg:-mt-56">
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0b0e13]" />
          <svg
              className="absolute bottom-0 w-full text-[#0b0e13]"
              viewBox="0 0 1440 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill="currentColor"
                d="M0,90 C480,0 960,180 1440,90 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <section
            id="simulateur"
            className="relative z-30 -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-24 scroll-mt-28 md:scroll-mt-36 pb-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                Simulez les performances
              </h2>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto">
                Découvrez les gains de puissance et de couple pour votre véhicule grâce à notre
                simulateur officiel{" "}
                <span className="text-[#3fa0ff] font-semibold">Tuning-Shop</span>.
              </p>
            </div>

            {/* Bloc simulateur avec séparation naturelle */}
            <div
                className="mt-12 rounded-2xl overflow-hidden border border-white/10
                 bg-[#0d1118]/95 backdrop-blur-md shadow-[0_0_35px_rgba(63,160,255,0.25)]
                 mx-auto max-w-5xl transition-transform duration-500 hover:scale-[1.01]"
            >
              <iframe
                  src="https://tuning-shop.com/iframe/iframe.php?user=7194"
                  title="Simulateur de gains SoloTofs"
                  width="100%"
                  height="700"
                  scrolling="no"
                  frameBorder="0"
                  style={{ border: 0 }}
              />
            </div>
          </div>
        </section>

        {/* SECTION APPEL À L’ACTION */}
        <section className="py-24 bg-[#0b0e13] relative border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-b from-[#0d1118] to-[#0b0e13] border border-[#3fa0ff]/20 rounded-2xl shadow-[0_0_40px_rgba(63,160,255,0.15)] p-10 md:p-16">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Prêt à libérer le <span className="text-[#3fa0ff]">véritable potentiel</span> de votre véhicule ?
            </h2>
            <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
              Rejoignez des centaines de conducteurs satisfaits qui ont optimisé leur véhicule avec SoloTofs-Cars.
              <br />
              Performance, fiabilité et sécurité garanties.
            </p>

            {/* Boutons d’action */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                  href="#upload"
                  className="inline-flex items-center gap-2 bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 rounded-xl font-semibold hover:bg-[#5ab4ff] transition-all shadow-md hover:shadow-[#3fa0ff]/30"
              >
                🚗 Envoyer mon fichier ECU
              </a>
              <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-[#3fa0ff]/50 text-[#3fa0ff] px-8 py-3 rounded-xl font-semibold hover:bg-[#3fa0ff]/10 transition-all"
              >
                📞 Nous contacter
              </a>
            </div>

            {/* Ligne de confiance */}
            <div className="mt-10 border-t border-white/10 pt-6 text-neutral-400 text-sm flex flex-col md:flex-row justify-center gap-4">
              <p>💪 3000+ clients satisfaits</p>
              <span className="hidden md:inline text-neutral-600">•</span>
              <p>🔧 50+ partenaires automobiles certifiés</p>
            </div>
          </div>
        </section>


        {/* PRÉSENTATION SOLOTOFS */}
        <section
            id="presentation"
            className="relative py-24 border-t border-white/10 bg-[#0b0e13]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image de présentation */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(63,160,255,0.2)]">
              <Image
                  src="/A_changer_plustard/pres.jpg"
                  alt="Présentation du garage SoloTofs"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0e13]/60 via-transparent to-transparent" />
            </div>

            {/* Texte de présentation */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                L’expertise <span className="text-[#3fa0ff]">SoloTofs</span>
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Basé à <span className="font-semibold text-white">Gilly-sur-Isère</span>,
                SoloTofs Cars met à votre service son savoir-faire dans la reprogrammation
                moteur, la préparation automobile et l’entretien de véhicules de toutes marques.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Notre atelier allie performance et fiabilité avec du matériel de dernière
                génération, une approche sur mesure et une passion authentique pour
                l’automobile. Chaque intervention est étudiée avec précision pour garantir
                le meilleur équilibre entre puissance, fiabilité et consommation.
              </p>
              <div className="pt-2">
                <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[#3fa0ff] px-6 py-3 text-sm font-semibold text-[#0b0e13] hover:bg-[#5ab4ff] transition-colors"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>

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



        {/* SECTION REPROGRAMMATION MOTEUR */}
        <section
            id="reprogrammation"
            className="py-24 border-t border-white/10 bg-[#0b0e13]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
              Nos prestations de <span className="text-[#3fa0ff]">reprogrammation moteur</span>
            </h2>

            {/* DEUX BLOCS — SUR PLACE / À DISTANCE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Bloc SUR PLACE */}
              <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <h3 className="text-2xl font-bold text-[#3fa0ff] mb-4">Reprogrammation sur place</h3>
                <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                  Confiez-nous votre véhicule directement dans notre atelier de Gilly-sur-Isère.
                  Nous réalisons une reprogrammation complète sur mesure, du diagnostic initial à la validation finale sur route.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">1.</span>
                    <p><strong>Diagnostic & lecture du calculateur</strong> — Nous identifions la version du calculateur et sauvegardons le fichier d’origine.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">2.</span>
                    <p><strong>Optimisation du fichier</strong> — Ajustement des cartographies moteur selon vos besoins (Stage 1, E85, suppression FAP/EGR, etc.).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">3.</span>
                    <p><strong>Réinjection & test</strong> — Nous réécrivons le fichier dans le calculateur et effectuons un essai routier pour valider le résultat.</p>
                  </div>
                </div>
              </div>

              {/* Bloc À DISTANCE */}
              <div className="bg-[#0d1118]/80 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <h3 className="text-2xl font-bold text-[#3fa0ff] mb-4">Reprogrammation à distance</h3>
                <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                  Vous êtes un garage ou un particulier équipé d’un outil de lecture ECU ?
                  Profitez de notre service en ligne rapide et professionnel pour obtenir votre fichier optimisé sans vous déplacer.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">1.</span>
                    <p><strong>Lecture du fichier ECU</strong> — Lisez le fichier d’origine de votre véhicule à l’aide de votre interface (Kess, CMD, etc.).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">2.</span>
                    <p><strong>Envoi via notre formulaire</strong> — Téléversez votre fichier sur notre site avec les informations du véhicule.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fa0ff] font-extrabold text-xl">3.</span>
                    <p><strong>Modification & retour rapide</strong> — Nous modifions le fichier et vous le renvoyons sous quelques heures par email.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ÉTAPES DE FONCTIONNEMENT (VERSION EN LIGNE) */}
        <section
            id="etapes"
            className="py-24 border-t border-white/10 bg-[#0d1118]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Comment fonctionne notre service <span className="text-[#3fa0ff]">en ligne</span> ?
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto mb-16">
              Vous possédez déjà le fichier d’origine de votre véhicule ? Envoyez-le nous, nos ingénieurs s’occupent du reste.
              Simple, rapide et 100 % sécurisé.
            </p>

            {/* Étapes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Étape 1 */}
              <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">1</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Lisez votre fichier ECU d’origine
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  À l’aide de votre outil de lecture (Kess, Autotuner, CMD, etc.), récupérez le fichier d’origine de votre véhicule.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">2</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Envoyez-le via notre formulaire
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Joignez votre fichier ECU avec vos coordonnées et les détails du véhicule.
                  Notre équipe reçoit instantanément votre demande.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">3</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Reprogrammation sur mesure
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Nous analysons et optimisons le fichier selon vos besoins (Stage 1, E85, suppression FAP/EGR, etc.) dans un délai très court.
                </p>
              </div>

              {/* Étape 4 */}
              <div className="relative group bg-[#0b0e13]/90 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#3fa0ff]/50 hover:shadow-[0_0_25px_rgba(63,160,255,0.15)]">
                <div className="text-[#3fa0ff] text-4xl font-extrabold mb-4">4</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Réception du fichier modifié
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Vous recevez par mail votre fichier optimisé, prêt à être réinjecté dans votre véhicule.
                  Assistance disponible en cas de besoin.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* FILE SERVICE / UPLOAD ECU */}
        <section id="upload" className="py-24 border-t border-white/10 bg-[#0b0e13]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Service de reprogrammation à distance
              </h2>
              <p className="text-neutral-300">
                Envoyez-nous votre fichier d’origine (.bin / .ori / .zip).
                Nos techniciens analyseront votre demande et vous contacteront
                pour valider ensemble le tarif avant toute modification.
              </p>
            </div>

            {/* Formulaire principal */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d1118]/80 p-8 rounded-2xl border border-[#3fa0ff]/20 shadow-lg">
              {/* Informations personnelles */}
              <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] flex items-center gap-2">
                👤 Informations personnelles
              </h3>
              <input type="text" placeholder="Nom Prénom" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input type="email" placeholder="Email" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input type="tel" placeholder="Téléphone" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />

              {/* Informations véhicule */}
              <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6">
                🚗 Informations du véhicule
              </h3>
              <input placeholder="Marque" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input placeholder="Modèle" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input placeholder="Année" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input placeholder="Motorisation" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required />
              <input placeholder="ECU (ex: Bosch EDC17)" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" />
              <input placeholder="Boîte de vitesse (ex: DSG / Manuelle)" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" />
              <input placeholder="Puissance actuelle (ex: 150 ch)" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" />

              <select className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-neutral-400" defaultValue="">
                <option value="" disabled>Outil de lecture</option>
                <option>Autotuner</option>
                <option>KESS V2</option>
                <option>KESS V3</option>
                <option>K-TAG</option>
                <option>PCMFlash</option>
                <option>Autre</option>
              </select>
              <input placeholder="Immatriculation ou VIN" className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 md:col-span-2" />

              {/* Optimisations & services */}
              <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6">
                ⚙️ Optimisations & services
              </h3>

              <div className="col-span-full space-y-6 text-neutral-300">
                {/* STAGE 1 */}
                <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                  <label className="flex items-center gap-2 text-white font-semibold">
                    <input type="checkbox" className="accent-[#3fa0ff]" /> Stage 1
                  </label>
                  <p className="ml-6 mt-1 text-xs text-neutral-400">
                    Optimisation niveau 1 (véhicule strictement d&apos;origine)
                  </p>
                  <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                    <p className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation :</p>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Stage 1+ — Maximum HP and TQ sans aucune modification</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> EGR OFF</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> CLAPETS OFF</label>
                  </div>
                </div>

                {/* STAGE 2 */}
                <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                  <label className="flex items-center gap-2 text-white font-semibold">
                    <input type="checkbox" className="accent-[#3fa0ff]" /> Stage 2
                  </label>
                  <p className="ml-6 mt-1 text-xs text-neutral-400">
                    Optimisation niveau 2 (Decat&apos; ou Defap&apos; minimum)
                  </p>
                  <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                    <p className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation :</p>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Stage 2+ — HPFP / Capteur Rail / Injecteurs / FBO</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> EGR OFF — Suppression EGR</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> DPF/OPF/CAT OFF</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> AdBlue OFF — Suppression AdBlue</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Pop &amp; Bang</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> HardCut (Diesel)</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Modification Bruit Ralenti (Diesel Bosch seulement)</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> CLAPETS OFF</label>
                  </div>
                </div>

                {/* STAGE 3 */}
                <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                  <label className="flex items-center gap-2 text-white font-semibold">
                    <input type="checkbox" className="accent-[#3fa0ff]" /> Stage 3
                  </label>
                  <p className="ml-6 mt-1 text-xs text-neutral-400">
                    Optimisation niveau 3 (Turbo Hybride minimum)
                  </p>
                  <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                    <p className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation :</p>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> EGR OFF</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> DPF/OPF/CAT OFF</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> AdBlue OFF</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Pop &amp; Bang</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> HardCut (Diesel)</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> Modification Bruit Ralenti (Diesel Bosch seulement)</label>
                    <label className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> CLAPETS OFF</label>
                  </div>
                </div>

                {/* AUTRES SERVICES & OPTIONS (liste complète) */}
                <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                  <p className="text-white font-semibold mb-3">Autres services</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    {/* demandes principales */}
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#3fa0ff]" /> FLEXFUEL/CONVERSION E85
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#3fa0ff]" /> GESTION BOITE AUTOMATIQUE (Stage 1/2/3)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#3fa0ff]" /> MULTIMAP VIA MHD
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#3fa0ff]" /> GESTION PROGRAMMABLE
                    </label>
                    <label className="flex items-center gap-2 sm:col-span-2 lg:col-span-1">
                      <input type="checkbox" className="accent-[#3fa0ff]" />
                      Diagnostic/Analyse Log/Vérification Cartographie : <em>Analyse diagnostic</em>
                    </label>

                    {/* options unitaires */}
                    <label className="flex items-center gap-2 sm:col-span-2">
                      <input type="checkbox" className="accent-[#3fa0ff]" />
                      EGR OFF — <span className="text-neutral-400">Uniquement pour véhicule non fapé d’origine</span>
                    </label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> EGR+DPF OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> ADBLUE OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> CATA OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> OPF OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> CLAPETS OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> START&amp;STOP OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> POP&amp;BANG</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> IMMO OFF</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#3fa0ff]" /> DTC OFF</label>
                  </div>
                </div>
              </div>

              {/* Upload fichier */}
              <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-8">
                📁 Upload du fichier d’origine
              </h3>
              <input
                  type="file"
                  accept=".bin,.ori,.zip"
                  className="col-span-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 file:mr-4 file:rounded-md file:border-0 file:bg-[#3fa0ff] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0b0e13] hover:file:bg-[#5ab4ff]"
                  required
              />

              {/* Notes */}
              <textarea
                  placeholder="Informations supplémentaires, remarques, historique..."
                  rows={4}
                  className="col-span-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3fa0ff]"
              />

              <p className="col-span-full text-sm text-neutral-400 mt-4">
                ⚠️ Aucun fichier ne sera modifié sans votre validation du devis final.
              </p>

              <div className="col-span-full flex justify-end mt-4">
                <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
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
                <img src="/logos/alientech.png" alt="Alientech" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/autotuner.png" alt="Autotuner" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/magicmotorsport.png" alt="Magic Motorsport" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/kessv2.png" alt="KessV2" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/cmdflash.png" alt="CMD Flash" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/logos/tuningshop.png" alt="Tuning Shop" className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />

                {/* 2e série (dupliquée pour la boucle fluide) */}
                <img src="/logos/alientech.png" alt="Alientech" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/autotuner.png" alt="Autotuner" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/magicmotorsport.png" alt="Magic Motorsport" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/kessv2.png" alt="KessV2" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/cmdflash.png" alt="CMD Flash" className="h-10 sm:h-12 object-contain opacity-80" />
                <img src="/logos/tuningshop.png" alt="Tuning Shop" className="h-10 sm:h-12 object-contain opacity-80" />
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

        {/* SECTION FAQ */}
        <section
            id="faq"
            className="py-24 border-t border-white/10 bg-[#0d1118]"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
              Foire aux <span className="text-[#3fa0ff]">questions</span>
            </h2>
            <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
              Voici les réponses aux questions les plus fréquentes sur nos prestations de reprogrammation moteur et nos services.
            </p>

            <div className="space-y-4">
              {/* QUESTION 1 */}
              <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                  La reprogrammation moteur est-elle risquée ?
                  <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  Non, lorsqu’elle est réalisée par un professionnel qualifié avec les bons outils, elle ne présente aucun risque.
                  Chez <strong>SoloTofs Cars</strong>, nous conservons toujours le fichier d’origine afin de pouvoir revenir en arrière à tout moment.
                </p>
              </details>

              {/* QUESTION 2 */}
              <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                  Combien de temps dure une reprogrammation sur place ?
                  <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  En moyenne entre <strong>1h30 et 2h</strong> selon le véhicule et le type de calculateur.
                  Nos techniciens effectuent un diagnostic complet avant et après la modification pour garantir un résultat optimal.
                </p>
              </details>

              {/* QUESTION 3 */}
              <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                  Puis-je revenir à la configuration d’origine ?
                  <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  Oui, absolument. Nous sauvegardons systématiquement votre fichier d’origine avant toute intervention.
                  Vous pouvez le faire remettre à tout moment sur simple demande.
                </p>
              </details>

              {/* QUESTION 4 */}
              <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                  Quels sont les délais pour les fichiers envoyés à distance ?
                  <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  Les fichiers envoyés via le formulaire en ligne sont traités dans un délai moyen de <strong>1 à 3 heures</strong> selon la charge du jour.
                  Vous recevez votre fichier modifié directement par e-mail.
                </p>
              </details>

              {/* QUESTION 5 */}
              <details className="group border border-white/10 rounded-xl bg-[#0b0e13]/80 p-5 transition-all hover:border-[#3fa0ff]/40">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white text-lg list-none">
                  La reprogrammation annule-t-elle la garantie constructeur ?
                  <span className="text-[#3fa0ff] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  Techniquement, une reprogrammation peut être détectée par le constructeur.
                  Cependant, nos réglages sont <strong>réversibles</strong> et réalisés dans le respect des tolérances mécaniques pour préserver la fiabilité du moteur.
                </p>
              </details>
            </div>
          </div>
        </section>

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
