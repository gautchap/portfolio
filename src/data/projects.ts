import ecomLight from "@/assets/ecom-light.webp";
import ecomDark from "@/assets/ecom-dark.webp";
import resobseques from "@/assets/resobseques.webp";
import authNest from "@/assets/auth-nest.webp";
import tunetracerLight from "@/assets/tunetracer-light.webp";
import tunetracerDark from "@/assets/tunetracer-dark.webp";

import { StaticImageData } from "next/image";

export type Project = {
    name: string;
    url: string;
    description: string;
    img: {
        light: StaticImageData;
        dark: StaticImageData;
    };
    badges: string[];
};

export const projects = [
    {
        name: "Résbosèques",
        url: "https://www.resobseques.fr",
        description:
            "Development with atomic design under Next for a B2B application in the funeral funerary sector, SaaS, implementation of a search tool (crematoriums, funeral homes, etc.) on a national scale over 40,000 players in the sector",
        badges: ["React", "NextJS 12", "Bootstrap", "Sass"],
        img: { light: resobseques, dark: resobseques },
    },
    {
        name: "E-commerce",
        url: "https://ecom-rsc.vercel.app",
        description:
            "Development of an e-commerce template for the end-of-course project, using react server components and server actions, authentication with google and magic link.",
        badges: ["TypeScript", "React", "PostgreSQL", "NextJS 14", "Tailwind"],
        img: { light: ecomLight, dark: ecomDark },
    },
    {
        name: "Tunetracer",
        url: "https://tunetracer.vercel.app",
        description:
            "Development of an application to track your favorite artists and music on Spotify and play the music directly on your browser, with playlist creation, authentication with Spotify, Spotify SDK.",
        badges: ["TypeScript", "React", "NextJS 12", "Spotify API & SDK", "Tailwind"],
        img: { light: tunetracerLight, dark: tunetracerDark },
    },
    {
        name: "NestJS Auth",
        url: "https://github.com/gautchap/auth-nest",
        description:
            "A simple authentication API with NestJS and Fastify, using JWT, Passport and nodemailer for email confirmation.",
        badges: ["TypeScript", "NestJS", "Prisma", "PostgreSQL"],
        img: { light: authNest, dark: authNest },
    },
];
