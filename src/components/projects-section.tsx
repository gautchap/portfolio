"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, translateY: 15 },
  animate: { opacity: 1, translateY: 0 },
};

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
      className="pb-12 md:pb-32 container transform-gpu"
      ref={reference}
    >
      {children}
    </motion.section>
  );
}
