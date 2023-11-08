"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, translateY: 15 },
  animate: { opacity: 1, translateY: 0 },
};

type ContactSectionProps = {
  children: ReactNode;
};

export default function ContactSection({ children }: ContactSectionProps) {
  const reference = useRef(null);
  const isInView = useInView(reference, { once: false });
  return (
    <motion.section
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
      id="contact"
      className="h-[100dvh] pt-12 md:pt-44 container flex gap-4 flex-wrap md:flex-nowrap justify-center items-baseline"
      ref={reference}
    >
      {children}
    </motion.section>
  );
}
