"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { spring } from "@/components/animation";

type ContactSectionProps = {
  children: ReactNode;
};

export default function ContactSection({ children }: ContactSectionProps) {
  const reference = useRef(null);
  const isInView = useInView(reference, { once: false });
  return (
    <motion.section
      variants={spring}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
      id="contact"
      className="container transform-gpu pt-2 md:pt-44"
      ref={reference}
    >
      {children}
    </motion.section>
  );
}
