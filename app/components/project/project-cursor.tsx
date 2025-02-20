import React from "react";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  variant: string;
  position: { x: number; y: number };
};

const text = {
  left: "Previous",
  center: "View Project",
  right: "Next",
};

const iconRotation = {
  left: "rotate-180",
  center: "-rotate-45",
  right: "rotate-0",
};

export default function ProjectCursor({ variant, position }: Props) {
  const value = text[variant];

  return (
    <motion.div
      initial={{ scale: 0, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      animate={{ scale: 1, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      exit={{ scale: 0, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      transition={{ type: "tween" }}
      className={`fixed px-4 py-3 flex ${
        variant == "left" && "flex-row-reverse"
      } items-center justify-center gap-3 bg-[#000000d1] text-foreground pointer-events-none text-xs uppercase`}
    >
      {value}
      <ArrowRight className={`w-4 h-4 ${iconRotation[variant]}`} />
    </motion.div>
  );
}
