"use client";

import { AnimationDefinition, TargetAndTransition, Variants, motion } from "motion/react";

const parentVariants = () => {
  return {
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.025,
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
        ease: [0.36, 0.44, 0.2, 1.03],
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
  onAnimationComplete?: (definition: AnimationDefinition) => void;
};

export function AnimeText({
  className = "",
  text = "",
  origin = "100%",
  exit = {},
  onAnimationComplete,
}: Props) {
  return (
    <motion.div
      variants={parentVariants()}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex ${className}`}
      onAnimationComplete={onAnimationComplete}
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
