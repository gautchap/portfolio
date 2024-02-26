"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cardVariants } from "@/components/animation";

type ProjectsSectionProps = {
    children: ReactNode;
};

export default function ProjectsSection({ children }: ProjectsSectionProps) {
    const reference = useRef(null);
    const isInView = useInView(reference, { once: false });
    return (
        <motion.section
            id="projects"
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="container transform-gpu pb-12 md:pb-32"
            ref={reference}
        >
            {children}
        </motion.section>
    );
}
