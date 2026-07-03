"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature element: an abstract chip-routing field.
 * Orthogonal interconnect traces with vias, drawn in on page load —
 * like signals propagating across a die at power-on.
 */
const traces = [
  "M 0 80 H 240 V 200 H 420 V 120 H 640",
  "M 120 0 V 140 H 320 V 300 H 560",
  "M 0 260 H 180 V 340 H 460 V 240 H 720",
  "M 760 40 V 180 H 540 V 60 H 380",
  "M 820 320 H 620 V 220 H 900",
  "M 900 100 H 780 V 260 H 960",
];

const vias: Array<[number, number]> = [
  [240, 80], [420, 200], [320, 140], [180, 260], [460, 340],
  [540, 180], [620, 320], [640, 120], [780, 100], [560, 300],
];

export function TraceField() {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 960 400"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-accent"
    >
      <g fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5">
        {traces.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.15 * i, ease: "easeInOut" }}
          />
        ))}
      </g>
      <g fill="currentColor" fillOpacity="0.22">
        {vias.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.3 }}
          />
        ))}
      </g>
    </svg>
  );
}
