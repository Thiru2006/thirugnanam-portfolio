"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { TraceField } from "@/components/trace-field";
import { buttonClass } from "@/components/ui/button";
import { rotatingRoles, heroStats } from "@/data/profile";
import { site } from "@/lib/site";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Invisible sizers: the container always fits the widest/tallest title, so nothing ever clips. */}
      {rotatingRoles.map((role) => (
        <span key={role} aria-hidden className="invisible col-start-1 row-start-1">
          {role}
        </span>
      ))}
      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={rotatingRoles[index]}
          initial={reduce ? false : { y: "70%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-70%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="col-start-1 row-start-1 text-accent"
        >
          {rotatingRoles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <TraceField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="container-content relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          VIT Chennai · B.Tech VLSI Design &amp; Technology · Expected Graduation: {site.graduation}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl"
        >
          {site.name.replace(" V S", "")}
          <span className="text-faint"> V S</span>
          <br />
          <RotatingRole />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className={buttonClass("primary")}>
            View my work
            <ArrowDown size={15} />
          </a>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("outline")}
          >
            <FileText size={15} />
            View resume
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={"prefix" in s ? (s as { prefix?: string }).prefix ?? "" : ""}
                  suffix={s.suffix}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
