"use client";

import { motion } from "framer-motion";

export default function FadeAnimation({
  children,
  duration = 1,
  delay = 0.2,
  y = 40,
  once = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
