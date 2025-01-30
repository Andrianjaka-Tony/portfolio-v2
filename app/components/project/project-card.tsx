"use client";

import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";

import { Project } from "@/app/type";

import { Variants, motion, MotionValue, Transition } from "motion/react";

type Props = Project & {
  position?: "center" | "left" | "right";
  activeIndex: MotionValue<number>;
  setDisplayName: Dispatch<SetStateAction<boolean>>;
};

const variants: Variants = {
  initial: {
    opacity: 0,
    // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    // rotate: "3deg",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
  // initials
  center: {
    height: "400px",
    width: "300px",
    top: "50%",
    left: "50%",
    right: "50%",
    x: "-50%",
    y: "-50%",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    rotate: 0,
  },
  left: {
    height: "400px",
    width: "300px",
    top: "50%",
    left: "5%",
    right: "0%",
    x: "-30%",
    y: "-50%",
    clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
    rotate: "-90deg",
  },
  right: {
    height: "400px",
    width: "300px",
    top: "50%",
    left: "95%",
    right: "50%",
    x: "-70%",
    y: "-50%",
    clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
    rotate: "90deg",
  },
};

const imageVariants: Variants = {
  center: {
    rotate: 0,
    scale: 2,
  },
  left: {
    rotate: "90deg",
    scale: 3,
  },
  right: {
    rotate: "-90deg",
    scale: 3,
  },
};

const transition: Transition = {
  duration: 1.4,
  ease: [0.73, -0.02, 0.31, 1],
};

export function ProjectCard({
  name,
  image,
  position = "center",
  activeIndex,
  setDisplayName,
}: Props) {
  const [isClickable, setIsClickable] = useState<boolean>(false);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (isClickable) {
      if (position === "center") {
        return;
      }
      setDisplayName(false);
      if (position === "left") {
        const value = activeIndex.get() - 1;
        activeIndex.set(value < 0 ? 3 : value);
      }
      if (position === "right") {
        const value = activeIndex.get() + 1;
        activeIndex.set(value > 3 ? 0 : value);
      }
      setTimeout(() => {
        setDisplayName(true);
      }, 800);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClickable(true);
    }, 1400);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial={["initial", position]}
      animate={["animate", position]}
      exit="exit"
      className={`absolute cursor-pointer`}
      onClick={handleClick}
      transition={transition}
    >
      <motion.img
        variants={imageVariants}
        transition={transition}
        className="w-full h-full object-cover object-center"
        src={image}
        alt={name}
      />
    </motion.div>
  );
}
