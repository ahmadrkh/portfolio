"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { BackgroundFX } from "@/components/ui/BackgroundFX";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 sm:pt-24">
      <BackgroundFX />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-soft px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
              {site.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-display-xl font-semibold text-ink"
          >
            {site.hero.lead}
            <br />
            <span className="accent-gradient-text">{site.hero.leadAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {site.hero.sub}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost">
              Get in touch
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-ink-faint"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-faint sm:inline-block" />
            <span>{site.role}</span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-faint sm:inline-block" />
            <span>React · Next.js · TypeScript</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="relative animate-float rounded-2xl border border-line bg-surface/80 shadow-card backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 font-mono text-[12px] text-ink-faint">developer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-[#c792ea]">const</span>{" "}
          <span className="text-[#82aaff]">ahmadreza</span>{" "}
          <span className="text-ink-faint">=</span> {"{"}
          {"\n"}  <span className="text-[#7eb0ff]">role</span>
          <span className="text-ink-faint">:</span>{" "}
          <span className="text-[#c3e88d]">&quot;Front-End Developer&quot;</span>,
          {"\n"}  <span className="text-[#7eb0ff]">stack</span>
          <span className="text-ink-faint">:</span> [
          <span className="text-[#c3e88d]">&quot;React&quot;</span>,{" "}
          <span className="text-[#c3e88d]">&quot;Next.js&quot;</span>,{" "}
          <span className="text-[#c3e88d]">&quot;TS&quot;</span>],
          {"\n"}  <span className="text-[#7eb0ff]">focus</span>
          <span className="text-ink-faint">:</span>{" "}
          <span className="text-[#c3e88d]">&quot;fast, type-safe UIs&quot;</span>,
          {"\n"}  <span className="text-[#7eb0ff]">shipping</span>
          <span className="text-ink-faint">:</span>{" "}
          <span className="text-[#f78c6c]">true</span>,
          {"\n"}
          {"}"}{" "}
          <span className="text-[#c792ea]">satisfies</span>{" "}
          <span className="text-[#ffcb6b]">Developer</span>;
        </code>
      </pre>
    </div>
  );
}
