"use client";

import { Dispatch, MouseEvent, SetStateAction } from "react";

import { Project } from "@/app/type";

import { Variants, motion, MotionValue } from "motion/react";

type Props = Project & {
  position?: "center" | "left" | "right";
  activeIndex: MotionValue<number>;
  setDisplayName: Dispatch<SetStateAction<boolean>>;
};

const classNames = {
  center: "h-[600px] w-[450px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  left: "h-[150px] w-[200px] top-[50%] left-[5%] translate-x-[0%] translate-y-[-50%]",
  right: "h-[150px] w-[200px] top-[50%] right-[5%] translate-x-[0%] translate-y-[-50%]",
};

const variants: Variants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    rotate: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.5,
    },
  },
  // initials
  center: {
    height: "600px",
    width: "450px",
    top: "50%",
    left: "50%",
    right: "50%",
    x: "-50%",
    y: "-50%",
  },
  left: {
    height: "600px",
    width: "450px",
    top: "50%",
    left: "5%",
    right: "0%",
    x: "-25%",
    y: "-50%",
    clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",
  },
  right: {
    height: "600px",
    width: "450px",
    top: "50%",
    left: "95%",
    right: "50%",
    x: "-75%",
    y: "-50%",
    clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",
  },
};

export function ProjectCard({
  name,
  image,
  position = "center",
  activeIndex,
  setDisplayName,
}: Props) {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

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
  };

  return (
    <motion.div
      variants={variants}
      initial={["initial", position]}
      animate={["animate", position]}
      exit="exit"
      className={`absolute cursor-pointer`}
      onClick={handleClick}
      transition={{
        duration: 1.2,
        ease: [1, 0.01, 0.66, 0.29],
      }}
    >
      <img className="w-full h-full object-cover object-center" src={image} alt={name} />
    </motion.div>
  );
}
