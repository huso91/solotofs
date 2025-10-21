import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nos_prestations from "@/components/Nos_prestations";
import EtapesSection from "@/components/EtapesSection";
import Nos_engagements from "@/components/nos_engagements";
import FaqSection from "@/components/FaqSection";


export default function FileService() {
    return (
        <div className="bg-[#0b0e13] text-[#e6e6e6] min-h-screen">
            <Header/>
            {/* HERO / BANNIÈRE */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/A_changer_plustard/banniere.webp"
                    alt="Service de reprogrammation à distance – SoloTofs Cars"
                    fill
                    priority
                    className="object-cover brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/40 via-[#0b0e13]/60 to-[#0b0e13]/90" />
                <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold uppercase text-center leading-tight">
                    Service de <span className="text-[#3fa0ff]">reprogrammation à distance</span>
                </h1>
            </section>

            {/* FILE SERVICE / UPLOAD ECU */}
            <section id="upload" className="py-24 border-t border-white/10 bg-[#0b0e13]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> {/* En-tête */}
                    <div className="max-w-3xl text-center mx-auto mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                            Service de reprogrammation à distance
                        </h2>
                        <p className="text-neutral-300">
                            Envoyez-nous votre fichier d’origine (.bin / .ori / .zip). Nos techniciens analyseront votre demande
                            et vous contacteront pour valider ensemble le tarif avant toute modification.
                        </p>

                        {/* ✅ Paiement 4x */}
                        <p className="mt-4 text-[#3fa0ff] font-semibold flex items-center justify-center gap-2">
                            💳 Paiement en 4x sans frais disponible
                        </p>
                    </div>

                    {/* Formulaire principal */}
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d1118]/80 p-8 rounded-2xl border border-[#3fa0ff]/20 shadow-lg"> {/* Informations personnelles */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] flex items-center gap-2"> 👤
                            Informations personnelles </h3> <input type="text" placeholder="Nom Prénom"
                                                                   className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                                   required/> <input type="email" placeholder="Email"
                                                                                     className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                                                     required/> <input type="tel"
                                                                                                       placeholder="Téléphone"
                                                                                                       className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                                                                       required/> {/* Informations véhicule */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6"> 🚗 Informations du
                            véhicule </h3> <input placeholder="Marque"
                                                  className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                  required/> <input placeholder="Modèle"
                                                                    className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                                    required/> <input placeholder="Année"
                                                                                      className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"
                                                                                      required/> <input
                            placeholder="Motorisation"
                            className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/> <input
                            placeholder="ECU (ex: Bosch EDC17)"
                            className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/> <input
                            placeholder="Boîte de vitesse (ex: DSG / Manuelle)"
                            className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/> <input
                            placeholder="Puissance actuelle (ex: 150 ch)"
                            className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/> <select
                            className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-neutral-400"
                            defaultValue="">
                            <option value="" disabled>Outil de lecture</option>
                            <option>Autotuner</option>
                            <option>KESS V2</option>
                            <option>KESS V3</option>
                            <option>K-TAG</option>
                            <option>PCMFlash</option>
                            <option>Autre</option>
                        </select> <input placeholder="Immatriculation ou VIN"
                                         className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 md:col-span-2"/> {/* Optimisations & services */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6"> ⚙️ Optimisations &
                            services </h3>
                        <div className="col-span-full space-y-6 text-neutral-300"> {/* STAGE 1 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4"><label
                                className="flex items-center gap-2 text-white font-semibold"> <input type="checkbox"
                                                                                                     className="accent-[#3fa0ff]"/> Stage
                                1 </label> <p className="ml-6 mt-1 text-xs text-neutral-400"> Optimisation niveau 1
                                (véhicule strictement d&apos;origine) </p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1"><p
                                    className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation
                                    :</p> <label className="flex gap-2"><input type="checkbox"
                                                                               className="accent-[#3fa0ff]"/> Stage 1+ —
                                    Maximum HP and TQ sans aucune modification</label> <label
                                    className="flex gap-2"><input type="checkbox" className="accent-[#3fa0ff]"/> EGR OFF</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label></div>
                            </div>
                            {/* STAGE 2 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4"><label
                                className="flex items-center gap-2 text-white font-semibold"> <input type="checkbox"
                                                                                                     className="accent-[#3fa0ff]"/> Stage
                                2 </label> <p className="ml-6 mt-1 text-xs text-neutral-400"> Optimisation niveau 2
                                (Decat&apos; ou Defap&apos; minimum) </p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1"><p
                                    className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation
                                    :</p> <label className="flex gap-2"><input type="checkbox"
                                                                               className="accent-[#3fa0ff]"/> Stage 2+ —
                                    HPFP / Capteur Rail / Injecteurs / FBO</label> <label className="flex gap-2"><input
                                    type="checkbox" className="accent-[#3fa0ff]"/> EGR OFF — Suppression EGR</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> DPF/OPF/CAT OFF</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> AdBlue OFF —
                                        Suppression AdBlue</label> <label className="flex gap-2"><input type="checkbox"
                                                                                                        className="accent-[#3fa0ff]"/> Pop &amp; Bang</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> HardCut (Diesel)</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> Modification
                                        Bruit Ralenti (Diesel Bosch seulement)</label> <label
                                        className="flex gap-2"><input type="checkbox"
                                                                      className="accent-[#3fa0ff]"/> CLAPETS OFF</label>
                                </div>
                            </div>
                            {/* STAGE 3 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4"><label
                                className="flex items-center gap-2 text-white font-semibold"> <input type="checkbox"
                                                                                                     className="accent-[#3fa0ff]"/> Stage
                                3 </label> <p className="ml-6 mt-1 text-xs text-neutral-400"> Optimisation niveau 3
                                (Turbo Hybride minimum) </p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1"><p
                                    className="italic text-[#3fa0ff]">Options supplémentaires pour cette optimisation
                                    :</p> <label className="flex gap-2"><input type="checkbox"
                                                                               className="accent-[#3fa0ff]"/> EGR
                                    OFF</label> <label className="flex gap-2"><input type="checkbox"
                                                                                     className="accent-[#3fa0ff]"/> DPF/OPF/CAT
                                    OFF</label> <label className="flex gap-2"><input type="checkbox"
                                                                                     className="accent-[#3fa0ff]"/> AdBlue
                                    OFF</label> <label className="flex gap-2"><input type="checkbox"
                                                                                     className="accent-[#3fa0ff]"/> Pop &amp; Bang</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> HardCut (Diesel)</label>
                                    <label className="flex gap-2"><input type="checkbox"
                                                                         className="accent-[#3fa0ff]"/> Modification
                                        Bruit Ralenti (Diesel Bosch seulement)</label> <label
                                        className="flex gap-2"><input type="checkbox"
                                                                      className="accent-[#3fa0ff]"/> CLAPETS OFF</label>
                                </div>
                            </div>
                            {/* AUTRES SERVICES & OPTIONS (liste complète) */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4"><p
                                className="text-white font-semibold mb-3">Autres services</p>
                                <div
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm"> {/* demandes principales */}
                                    <label className="flex items-center gap-2"> <input type="checkbox"
                                                                                       className="accent-[#3fa0ff]"/> FLEXFUEL/CONVERSION
                                        E85 </label> <label className="flex items-center gap-2"> <input type="checkbox"
                                                                                                        className="accent-[#3fa0ff]"/> GESTION
                                        BOITE AUTOMATIQUE (Stage 1/2/3) </label> <label
                                        className="flex items-center gap-2"> <input type="checkbox"
                                                                                    className="accent-[#3fa0ff]"/> MULTIMAP
                                        VIA MHD </label> <label className="flex items-center gap-2"> <input
                                        type="checkbox" className="accent-[#3fa0ff]"/> GESTION PROGRAMMABLE </label>
                                    <label className="flex items-center gap-2 sm:col-span-2 lg:col-span-1"> <input
                                        type="checkbox" className="accent-[#3fa0ff]"/> Diagnostic/Analyse
                                        Log/Vérification Cartographie : <em>Analyse diagnostic</em>
                                    </label> {/* options unitaires */} <label
                                        className="flex items-center gap-2 sm:col-span-2"> <input type="checkbox"
                                                                                                  className="accent-[#3fa0ff]"/> EGR
                                        OFF — <span className="text-neutral-400">Uniquement pour véhicule non fapé d’origine</span>
                                    </label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                               className="accent-[#3fa0ff]"/> EGR+DPF
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> ADBLUE
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> CATA
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> OPF
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> START&amp;STOP
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> POP&amp;BANG</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      className="accent-[#3fa0ff]"/> IMMO
                                        OFF</label> <label className="flex items-center gap-2"><input type="checkbox"
                                                                                                      className="accent-[#3fa0ff]"/> DTC
                                        OFF</label></div>
                            </div>
                        </div>
                        {/* Upload fichier */} <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-8"> 📁
                            Upload du fichier d’origine </h3> <input type="file" accept=".bin,.ori,.zip"
                                                                     className="col-span-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 file:mr-4 file:rounded-md file:border-0 file:bg-[#3fa0ff] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0b0e13] hover:file:bg-[#5ab4ff]"
                                                                     required/> {/* Notes */} <textarea
                            placeholder="Informations supplémentaires, remarques, historique..." rows={4}
                            className="col-span-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3fa0ff]"/>
                        <p className="col-span-full text-sm text-neutral-400 mt-4"> ⚠️ Aucun fichier ne sera modifié
                            sans votre validation du devis final. </p>
                        <div className="col-span-full flex justify-end mt-4">
                            <button type="submit"
                                    className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition"> Envoyer
                                ma demande
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Nos_prestations />

            <EtapesSection />

            <Nos_engagements />

            <FaqSection />

            <Footer/>
        </div>
    );
}
