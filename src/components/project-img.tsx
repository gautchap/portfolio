"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ProjectImgProps = {
  children: ReactNode;
};

export default function ProjectImg({ children }: ProjectImgProps) {
  return (
    <motion.div whileHover={{ opacity: 0.2 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}
