import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const fileRouter = {
    ecuUpload: f({ blob: { maxFileSize: "10MB" } }) // autorise jusqu’à 10 Mo
        .onUploadComplete(({ file }) => {
            console.log("✅ Fichier reçu :", file.url);
            return { fileUrl: file.url };
        }),
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;
