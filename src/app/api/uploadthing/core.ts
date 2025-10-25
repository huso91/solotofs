import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const fileRouter = {
    fileUploader: f({
        blob: { maxFileSize: "8MB" }, // ✅ valeurs valides : "1MB", "8MB", "16MB", "32MB"...
    })
        .onUploadComplete(async ({ file }) => {
            console.log("✅ Fichier reçu :", file.url);
            return { fileUrl: file.ufsUrl ?? file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof fileRouter;
