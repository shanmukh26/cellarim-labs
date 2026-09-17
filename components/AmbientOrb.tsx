"use client";

import { motion } from "framer-motion";

export default function AmbientOrb({
  color,
  className,
  duration = 26,
  range = 60,
}: {
  color: "green" | "sage";
  className?: string;
  duration?: number;
  range?: number;
}) {
  const bg =
    color === "green" ? "rgba(37,180,88,0.30)" : "rgba(64,116,93,0.28)";

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full blur-[70px] ${className ?? ""}`}
      style={{ background: bg }}
      animate={{ x: [0, range, 0], y: [0, range * 0.6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
