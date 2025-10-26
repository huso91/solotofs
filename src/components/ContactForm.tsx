"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        const form = e.target as HTMLFormElement;

        try {
            await emailjs.sendForm(
                "service_rm0k1yh", // ✅ ton service ID
                "template_qqry5mj", // ✅ ton template ID
                form,
                "rSB-k3tBZ-BkA6AQt" // ✅ ta clé publique
            );

            setMessage("✅ Message envoyé avec succès !");
            form.reset();
        } catch (err) {
            console.error(err);
            setMessage("❌ Erreur lors de l’envoi. Réessayez plus tard.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#0d1118]/80 p-6 rounded-2xl border border-[#3fa0ff]/20 shadow-[0_0_25px_rgba(63,160,255,0.15)]"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="nom"
                    placeholder="Nom Prénom"
                    className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                    required
                />
            </div>

            <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                required
            />

            <textarea
                name="message"
                rows={5}
                placeholder="Votre message..."
                className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#3fa0ff]"
                required
            ></textarea>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center rounded-full bg-[#3fa0ff] text-[#0b0e13] font-semibold px-6 py-3 text-sm hover:bg-[#5ab4ff] transition-colors ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
            >
                {isSubmitting ? "Envoi..." : "Envoyer le message"}
            </button>

            {message && (
                <p
                    className={`text-sm mt-2 ${
                        message.startsWith("✅") ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {message}
                </p>
            )}
        </form>
    );
}
