"use client";

import { TargetAndTransition, Variants, motion } from "motion/react";

const parentVariants = () => {
  return {
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0,
      },
    },
  } as Variants;
};

const childVariants = (origin: string, exit: TargetAndTransition) => {
  return {
    initial: {
      y: origin,
    },
    animate: {
      y: "0%",
      transition: {
        ease: [0.12, 0.74, 0, 1],
        duration: 1,
      },
    },
    exit,
  } as Variants;
};

type Props = {
  className?: string;
  text?: string;
  origin?: string;
  exit?: TargetAndTransition;
};

export function AnimeText({ className = "", text = "", origin = "200%", exit = {} }: Props) {
  return (
    <motion.div
      variants={parentVariants()}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex ${className}`}
    >
      {Array.from(text).map((character, index) => (
        <div key={index} className="overflow-hidden w-fit">
          <motion.div variants={childVariants(origin, exit)} className="whitespace-break-spaces">
            {character}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
