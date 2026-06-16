"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Below-the-fold reveal: subtle scale + fade-up, staggered via `delay`.
 *  Respects prefers-reduced-motion (renders static). Leaf client component —
 *  keep it imported into Server Components, never the page itself. */
export default function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
