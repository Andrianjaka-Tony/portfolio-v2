"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

type WordProps = {
  text: string;
  className?: string;
};

type RowProps = {
  rows: string[];
  className?: string;
};

type ParagraphProps = {
  paragraphs: string[][];
  className?: string;
  custom?: number;
};

const controlVariants: Variants = {
  animate: (delayChildren: number) => ({
    transition: {
      staggerChildren: 0.1,
      delayChildren,
    },
  }),
};

const variants: Variants = {
  initial: {
    y: "150%",
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.12, 0.74, 0, 1],
      duration: 2,
    },
  },
};

export function AnimeWord({ className, text }: WordProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={controlVariants}
      initial="initial"
      animate="animate"
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden whitespace-break-spaces">
          <motion.div variants={variants}>{word + " "}</motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export function AnimeRow({ rows, className }: RowProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={controlVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className={`flex flex-col ${className}`}
      ref={ref}
    >
      {rows.map((row, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={variants}>{row}</motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export function AnimeParagraphs({ paragraphs, className, custom = 0.2 }: ParagraphProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={controlVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className={`flex flex-col ${className}`}
      custom={custom}
      ref={ref}
    >
      {paragraphs.map((rows, index) => {
        return (
          <div key={index}>
            {rows.map((row, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div variants={variants}>{row}</motion.div>
              </div>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
}
