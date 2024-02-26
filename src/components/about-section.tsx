"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cardVariants } from "@/components/animation";

type AboutSectionProps = {
    children: ReactNode;
};

export default function AboutSection({ children }: AboutSectionProps) {
    const reference = useRef(null);
    const isInView = useInView(reference, { once: false });
    return (
        <motion.section
            id="about"
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="container flex transform-gpu flex-wrap pb-12 md:justify-around md:pb-32"
            ref={reference}
        >
            {children}
        </motion.section>
    );
}
