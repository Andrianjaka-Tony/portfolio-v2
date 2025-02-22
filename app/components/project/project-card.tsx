"use client";

import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";

import { Project } from "@/app/type";

import { Variants, motion, MotionValue, Transition } from "motion/react";
import { useTransitionRouter } from "next-view-transitions";

type Props = {
  project: Project;
  position?: "center" | "left" | "right";
  activeIndex: MotionValue<number>;
  setDisplayName: Dispatch<SetStateAction<boolean>>;
  setCursor: Dispatch<SetStateAction<"" | "left" | "center" | "right">>;
};

const variants: Variants = {
  initial: {
    opacity: 0,
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
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
  // initials
  center: (width: number) => {
    let size = {
      height: "400px",
      width: "300px",
    };

    if (width <= 640) {
      size = {
        height: "300px",
        width: "225px",
      };
    }

    return {
      top: "50%",
      left: "50%",
      right: "50%",
      x: "-50%",
      y: "-50%",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      rotate: 0,
      ...size,
    };
  },
  left: (width: number) => {
    let options = {
      height: "400px",
      width: "300px",
      x: "",
      left: "",
    };

    if (width > 1024) {
      options = {
        height: "400px",
        width: "300px",
        left: "5%",
        x: "-30%",
      };
    } else if (width <= 1024 && width > 640) {
      options = {
        height: "400px",
        width: "300px",
        left: "0%",
        x: "-50%",
      };
    } else if (width <= 640) {
      options = {
        height: "360px",
        width: "270px",
        left: "0%",
        x: "-65%",
      };
    }

    return {
      top: "50%",
      y: "-50%",
      clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
      rotate: "-90deg",
      ...options,
    };
  },
  right: (width: number) => {
    let options = {
      height: "400px",
      width: "300px",
      x: "",
      left: "",
    };

    if (width > 1024) {
      options = {
        height: "400px",
        width: "300px",
        left: "95%",
        x: "-70%",
      };
    } else if (width <= 1024 && width > 640) {
      options = {
        height: "400px",
        width: "300px",
        left: "100%",
        x: "-50%",
      };
    } else if (width <= 640) {
      options = {
        height: "360px",
        width: "270px",
        left: "100%",
        x: "-35%",
      };
    }

    return {
      top: "50%",
      y: "-50%",
      clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
      rotate: "90deg",
      ...options,
    };
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
  project,
  position = "center",
  activeIndex,
  setDisplayName,
  setCursor,
}: Props) {
  const router = useTransitionRouter();
  const [isClickable, setIsClickable] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerWidth: width } = window;
      setWindowWidth(width);
    });
  }, []);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (isClickable) {
      if (position === "center") {
        router.push(`/${project.id}`);
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

  useEffect(() => {
    if (position === "center") {
      router.prefetch(`/${project.id}`);
    }
  }, [position]);

  return (
    <>
      <motion.div
        variants={variants}
        initial={["initial", position]}
        animate={["animate", position]}
        exit="exit"
        className={`absolute cursor-pointer will-change-[transform,opacity,clip-path]`}
        onClick={handleClick}
        transition={transition}
        custom={windowWidth}
        onMouseOver={() => setCursor(isClickable ? position : "")}
        onMouseLeave={() => setCursor("")}
      >
        <motion.img
          variants={imageVariants}
          transition={transition}
          className="w-full h-full object-cover object-center"
          src={project.image}
          alt={project.name}
        />
      </motion.div>
    </>
  );
}
