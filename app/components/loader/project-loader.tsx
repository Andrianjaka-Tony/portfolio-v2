"use client";

import React from "react";

import { motion, Variants } from "motion/react";
import { projects } from "@/app/data/projects";

const parentVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const imageVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.23, 0.94, 0.32, 0.96],
    },
  },
};

export function ProjectLoader() {
  return (
    <div className="relative top-0 left-0 h-screen w-screen perspective">
      <div className="absolute inset-0 flex justify-center items-center opacity-40">100%</div>
      <motion.div variants={parentVariants} initial="initial" animate="animate">
        {projects.map((project) => {
          return (
            <motion.div
              key={project.name}
              className="absolute h-[250px] w-[250px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              initial={{ height: "250px", width: "250px" }}
              animate={{
                height: "400px",
                width: "300px",
                transition: {
                  duration: 0.3,
                  delay: 3,
                  ease: [0.73, -0.02, 0.31, 1],
                },
              }}
            >
              <motion.img
                variants={imageVariants}
                src={project.image}
                className="w-full h-full object-cover object-center scale-150"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
