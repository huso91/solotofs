"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nos_prestations from "@/components/Nos_prestations";
import EtapesSection from "@/components/EtapesSection";
import Nos_engagements from "@/components/nos_engagements";
import FaqSection from "@/components/FaqSection";
import UploadFileField from "@/components/UploadFileField";


export default function FileService() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            await emailjs.send(
                "service_rm0k1yh",   // ton Service ID
                "template_cfzp3nm",  // ton Template ID
                {
                    ...Object.fromEntries(formData.entries()),
                    optimisations: formData.getAll("optimisations").join(", "),
                    options_stage1: formData.getAll("options_stage1").join(", "),
                    options_stage2: formData.getAll("options_stage2").join(", "),
                    options_stage3: formData.getAll("options_stage3").join(", "),
                    autres_services: formData.getAll("autres_services").join(", "),
                },
                "rSB-k3tBZ-BkA6AQt"  // ta clé publique
            );

            setSuccessMessage("✅ Votre demande a bien été envoyée !");
            form.reset();
        } catch (error) {
            console.error(error);
            setErrorMessage("❌ Erreur lors de l’envoi. Réessayez plus tard.");
        }

        setIsSubmitting(false);
    };

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
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d1118]/80 p-8 rounded-2xl border border-[#3fa0ff]/20 shadow-lg"
                    >
                        {/* Informations personnelles */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] flex items-center gap-2">
                            👤 Informations personnelles
                        </h3>
                        <input type="text" name="nom" placeholder="Nom Prénom"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input type="email" name="email" placeholder="Email"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input type="tel" name="telephone" placeholder="Téléphone"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>

                        {/* Informations véhicule */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6">🚗 Informations du
                            véhicule</h3>
                        <input name="marque" placeholder="Marque"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input name="modele" placeholder="Modèle"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input name="annee" placeholder="Année"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input name="motorisation" placeholder="Motorisation"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3" required/>
                        <input name="ecu" placeholder="ECU (ex: Bosch EDC17)"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/>
                        <input name="boite" placeholder="Boîte de vitesse (ex: DSG / Manuelle)"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/>
                        <input name="puissance" placeholder="Puissance actuelle (ex: 150 ch)"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3"/>

                        <select name="outil"
                                className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-neutral-400"
                                defaultValue="">
                            <option value="" disabled>Outil de lecture</option>
                            <option>Autotuner</option>
                            <option>KESS V2</option>
                            <option>KESS V3</option>
                            <option>K-TAG</option>
                            <option>PCMFlash</option>
                            <option>Autre</option>
                        </select>

                        <input name="immat" placeholder="Immatriculation ou VIN"
                               className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 md:col-span-2"/>

                        {/* Optimisations & services */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-6">⚙️ Optimisations &
                            services</h3>
                        <div className="col-span-full space-y-6 text-neutral-300">
                            {/* STAGE 1 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                                <label className="flex items-center gap-2 text-white font-semibold">
                                    <input type="checkbox" name="optimisations" value="Stage 1"
                                           className="accent-[#3fa0ff]"/> Stage 1
                                </label>
                                <p className="ml-6 mt-1 text-xs text-neutral-400">Optimisation niveau 1 (véhicule
                                    d'origine)</p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                                    <p className="italic text-[#3fa0ff]">Options supplémentaires :</p>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage1"
                                                                         value="Stage 1+"
                                                                         className="accent-[#3fa0ff]"/> Stage 1+ — HP/TQ
                                        max</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage1"
                                                                         value="EGR OFF"
                                                                         className="accent-[#3fa0ff]"/> EGR OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage1"
                                                                         value="CLAPETS OFF"
                                                                         className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label>
                                </div>
                            </div>

                            {/* STAGE 2 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                                <label className="flex items-center gap-2 text-white font-semibold">
                                    <input type="checkbox" name="optimisations" value="Stage 2"
                                           className="accent-[#3fa0ff]"/> Stage 2
                                </label>
                                <p className="ml-6 mt-1 text-xs text-neutral-400">Optimisation niveau 2 (Defap / Decat
                                    minimum)</p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                                    <p className="italic text-[#3fa0ff]">Options supplémentaires :</p>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="Stage 2+"
                                                                         className="accent-[#3fa0ff]"/> Stage 2+</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="EGR OFF"
                                                                         className="accent-[#3fa0ff]"/> EGR OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="DPF OFF"
                                                                         className="accent-[#3fa0ff]"/> DPF/OPF/CAT OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="AdBlue OFF"
                                                                         className="accent-[#3fa0ff]"/> AdBlue
                                        OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="Pop & Bang"
                                                                         className="accent-[#3fa0ff]"/> Pop &
                                        Bang</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="HardCut"
                                                                         className="accent-[#3fa0ff]"/> HardCut</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage2"
                                                                         value="CLAPETS OFF"
                                                                         className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label>
                                </div>
                            </div>

                            {/* STAGE 3 */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                                <label className="flex items-center gap-2 text-white font-semibold">
                                    <input type="checkbox" name="optimisations" value="Stage 3"
                                           className="accent-[#3fa0ff]"/> Stage 3
                                </label>
                                <p className="ml-6 mt-1 text-xs text-neutral-400">Optimisation niveau 3 (Turbo Hybride
                                    minimum)</p>
                                <div className="ml-6 mt-2 text-sm text-neutral-400 space-y-1">
                                    <p className="italic text-[#3fa0ff]">Options supplémentaires :</p>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="EGR OFF"
                                                                         className="accent-[#3fa0ff]"/> EGR OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="DPF OFF"
                                                                         className="accent-[#3fa0ff]"/> DPF/OPF/CAT OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="AdBlue OFF"
                                                                         className="accent-[#3fa0ff]"/> AdBlue
                                        OFF</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="Pop & Bang"
                                                                         className="accent-[#3fa0ff]"/> Pop &
                                        Bang</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="HardCut"
                                                                         className="accent-[#3fa0ff]"/> HardCut</label>
                                    <label className="flex gap-2"><input type="checkbox" name="options_stage3"
                                                                         value="CLAPETS OFF"
                                                                         className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label>
                                </div>
                            </div>

                            {/* AUTRES SERVICES */}
                            <div className="bg-[#0b0e13] border border-white/10 rounded-lg p-4">
                                <p className="text-white font-semibold mb-3">Autres services</p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="FLEXFUEL / E85"
                                                                                      className="accent-[#3fa0ff]"/> FLEXFUEL
                                        / E85</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="Gestion boîte auto"
                                                                                      className="accent-[#3fa0ff]"/> Gestion
                                        boîte auto</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="Multimap MHD"
                                                                                      className="accent-[#3fa0ff]"/> Multimap
                                        via MHD</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="Gestion programmable"
                                                                                      className="accent-[#3fa0ff]"/> Gestion
                                        programmable</label>
                                    <label className="flex items-center gap-2 sm:col-span-2 lg:col-span-1"><input
                                        type="checkbox" name="autres_services" value="Diagnostic / Analyse carto"
                                        className="accent-[#3fa0ff]"/> Diagnostic / Analyse carto</label>
                                    <label className="flex items-center gap-2 sm:col-span-2"><input type="checkbox"
                                                                                                    name="autres_services"
                                                                                                    value="EGR OFF"
                                                                                                    className="accent-[#3fa0ff]"/> EGR
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="EGR + DPF OFF"
                                                                                      className="accent-[#3fa0ff]"/> EGR
                                        + DPF OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="AdBlue OFF"
                                                                                      className="accent-[#3fa0ff]"/> AdBlue
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="CATA OFF"
                                                                                      className="accent-[#3fa0ff]"/> CATA
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="OPF OFF"
                                                                                      className="accent-[#3fa0ff]"/> OPF
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="CLAPETS OFF"
                                                                                      className="accent-[#3fa0ff]"/> CLAPETS
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="START&STOP OFF"
                                                                                      className="accent-[#3fa0ff]"/> START&STOP
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="POP&BANG"
                                                                                      className="accent-[#3fa0ff]"/> POP&BANG</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="IMMO OFF"
                                                                                      className="accent-[#3fa0ff]"/> IMMO
                                        OFF</label>
                                    <label className="flex items-center gap-2"><input type="checkbox"
                                                                                      name="autres_services"
                                                                                      value="DTC OFF"
                                                                                      className="accent-[#3fa0ff]"/> DTC
                                        OFF</label>
                                </div>
                            </div>
                        </div>

                        {/* Upload fichier */}
                        {/* Upload fichier */}
                        <h3 className="col-span-full text-xl font-bold text-[#3fa0ff] mt-8">📁 Upload du fichier
                            d’origine</h3>
                        <input type="hidden" name="fichier_url"/>
                        <UploadFileField
                            onUploadComplete={(url) => {
                                const hidden = document.querySelector<HTMLInputElement>('input[name="fichier_url"]');
                                if (hidden) hidden.value = url;
                            }}
                        />


                        {/* Notes */}
                        <textarea name="remarques" placeholder="Informations supplémentaires, remarques, historique..."
                                  rows={4}
                                  className="col-span-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3fa0ff]"/>

                        <p className="col-span-full text-sm text-neutral-400 mt-4">⚠️ Aucun fichier ne sera modifié sans
                            votre validation du devis final.</p>

                        {/* Bouton */}
                        <div className="col-span-full flex justify-end mt-4">
                            <button type="submit" disabled={isSubmitting}
                                    className="inline-flex items-center rounded-full bg-[#3fa0ff] text-[#0b0e13] px-8 py-3 text-sm font-semibold hover:bg-[#5ab4ff] transition">
                                {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
                            </button>
                            {successMessage && (
                                <p className="col-span-full text-green-400 text-sm mt-2 text-center">
                                    {successMessage}
                                </p>
                            )}
                            {errorMessage && (
                                <p className="col-span-full text-red-400 text-sm mt-2 text-center">
                                    {errorMessage}
                                </p>
                            )}

                        </div>
                    </form>

                </div>
            </section>

            <Nos_prestations/>

            <EtapesSection/>

            <Nos_engagements/>

            <FaqSection />

            <Footer/>
        </div>
    );
}
