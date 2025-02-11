"use client";

import { Project } from "@/app/type";

import { AnimatePresence, motion, Variants } from "motion/react";

type BackgroundProps = {
  source: string;
  alt: string;
  currentIndex: number;
  index: number;
};

const variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};

function Background({ source, alt, index, currentIndex }: BackgroundProps) {
  const variantKey = index === currentIndex ? "visible" : "hidden";

  return (
    <motion.div variants={variants} animate={variantKey} className="absolute inset-0">
      <img
        className="w-full h-full object-cover brightness-[.5] object-center"
        src={source}
        alt={alt}
      />
    </motion.div>
  );
}

type ProjectBackgroundProps = {
  currentIndex: number;
  projects: Project[];
};

export function ProjectBackground({ projects, currentIndex }: ProjectBackgroundProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.75,
        duration: 0.5,
      }}
      className="relative h-screen w-screen"
    >
      <AnimatePresence initial={false}>
        {projects.map((project, index) => (
          <Background
            key={index}
            index={index}
            currentIndex={currentIndex}
            source={project.image}
            alt={project.name}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
