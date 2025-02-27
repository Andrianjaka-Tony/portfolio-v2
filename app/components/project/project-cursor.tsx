import React from "react";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  variant: "" | "left" | "center" | "right";
  position: { x: number; y: number };
};

const text = {
  "": "",
  left: "Previous",
  center: "View Project",
  right: "Next",
};

const iconRotation = {
  "": "",
  left: "rotate-180",
  center: "-rotate-45",
  right: "rotate-0",
};

export default function ProjectCursor({ variant, position }: Props) {
  const value = text[variant];

  return (
    <motion.div
      initial={{
        scale: 0,
        y: `calc(${position.y} - 50%)`,
        x: `calc(${position.x} - 50%)`,
      }}
      animate={{ scale: 1, y: `calc(${position.y}px - 50%)`, x: `calc(${position.x}px - 50%)` }}
      exit={{ scale: 0, y: `calc(${position.y}px - 50%)`, x: `calc(${position.x}px - 50%)` }}
      transition={{ type: "tween" }}
      className={`fixed top-0 left-0 px-4 py-3 flex ${
        variant == "left" && "flex-row-reverse"
      } items-center justify-center gap-3 bg-[#000000d1] text-foreground pointer-events-none text-xs uppercase hidden xl:block`}
    >
      {value}
      <ArrowRight className={`w-4 h-4 ${iconRotation[variant]}`} />
    </motion.div>
  );
}
