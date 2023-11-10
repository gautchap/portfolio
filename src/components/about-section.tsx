"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, translateY: 15 },
  animate: { opacity: 1, translateY: 0 },
};

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
      className="h-[100dvh] pt-12 md:pt-44 container transform-gpu"
      ref={reference}
    >
      {children}
    </motion.section>
  );
}
