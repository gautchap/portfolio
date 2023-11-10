import ecomLight from "@/assets/ecom-light.webp";
import ecomDark from "@/assets/ecom-dark.webp";
import resobseques from "@/assets/resobseques.webp";
import shrtlnk from "@/assets/shrtlnk.webp";
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
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    badges: ["React", "NextJS 12", "Bootstrap", "Sass"],
    img: { light: resobseques, dark: resobseques },
  },
  {
    name: "E-com",
    url: "https://ecom-rsc.vercel.app",
    description:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    badges: ["TypeScript", "React", "PostgreSQL", "NextJS 13", "Tailwind"],
    img: { light: ecomLight, dark: ecomDark },
  },
  {
    name: "Tunetracer",
    url: "https://tunetracer.vercel.app",
    description:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    badges: ["TypeScript", "React", "NextJS 12", "Spotify API", "Tailwind"],
    img: { light: tunetracerLight, dark: tunetracerDark },
  },
  {
    name: "Shrtlnk",
    url: "https://shrtlnk-magic.vercel.app",
    description:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    badges: ["TypeScript", "React", "MongoDB", "Vite SSR", "Tailwind"],
    img: { light: shrtlnk, dark: shrtlnk },
  },
];
