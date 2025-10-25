"use client";
{/*
"use client";

import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function UploadFileField({
                                            onUploadComplete,
                                        }: {
    onUploadComplete: (url: string) => void;
}) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    return (
        <div className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-6 text-center">
            <p className="text-neutral-300 mb-3">
                📁 Upload du fichier d’origine (.bin / .ori / .zip)
            </p>

            {/* ✅ Ici : on précise les 2 génériques → router + nom d’endpoint
            <UploadButton<OurFileRouter, "fileUploader">
                endpoint="fileUploader"
                onClientUploadComplete={(res: any) => {
                    if (res && res[0]?.url) {
                        const url = res[0].url;
                        console.log("✅ URL du fichier :", url);
                        setFileUrl(url);
                        onUploadComplete(url);
                    }
                }}
                onUploadError={(error: any) => alert(`Erreur: ${error.message}`)}
            />

            {fileUrl && (
                <p className="mt-3 text-sm text-[#3fa0ff] break-all">
                    ✅ Fichier chargé :{" "}
                    <a href={fileUrl} target="_blank" className="underline">
                        {fileUrl.split("/").pop()}
                    </a>
                </p>
            )}
        </div>
    );
}
*/}


import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function UploadFileField({
                                            onUploadComplete,
                                        }: {
    onUploadComplete: (url: string) => void;
}) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [isUploaded, setIsUploaded] = useState(false);

    return (
        <div className="bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-6 text-center">
            <p className="text-neutral-300 mb-3 text-sm sm:text-base">
                📁 Upload du fichier d’origine (.bin / .ori / .zip)
            </p>

            <div className="flex flex-col items-center gap-3 w-full">
                {!isUploaded ? (
                    <UploadButton<OurFileRouter, any>
                        endpoint="fileUploader"
                        appearance={{
                            button:
                                "bg-[#3fa0ff] text-[#0b0e13] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#5ab4ff] transition text-lg sm:text-base w-full sm:w-auto",
                            container: "flex flex-col items-center gap-2 w-full max-w-xs sm:max-w-md",
                            allowedContent: "text-neutral-400 text-xs sm:text-sm text-center",
                        }}
                        content={{
                            button: (opts) => (opts?.ready ? "📂" : "Préparation..."),
                            allowedContent: (opts) =>
                                opts?.isUploading
                                    ? "⏳ Upload en cours..."
                                    : "Fichiers autorisés : .bin, .ori, .zip (max 8 MB)",
                        }}
                        onClientUploadComplete={(res: any) => {
                            if (res && res[0]?.url) {
                                const url = res[0].url;
                                console.log("✅ URL du fichier :", url);
                                setFileUrl(url);
                                setIsUploaded(true);
                                onUploadComplete(url);
                            }
                        }}
                        onUploadError={(error: any) =>
                            alert(`Erreur lors de l'upload : ${error.message}`)
                        }
                    />
                ) : (
                    <div className="bg-[#17202b] px-6 py-4 rounded-lg border border-[#3fa0ff]/40 text-[#3fa0ff] text-sm sm:text-base w-full sm:w-auto">
                        ✅ Fichier chargé avec succès !
                    </div>
                )}
            </div>

            {fileUrl && (
                <p className="mt-3 text-sm text-[#3fa0ff] break-all">
                    🔗{" "}
                    <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#5ab4ff] transition"
                    >
                        {fileUrl.split("/").pop()}
                    </a>
                </p>
            )}
        </div>
    );
}

