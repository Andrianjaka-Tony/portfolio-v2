import React from "react";

import { motion } from "motion/react";

type Props = {
  variant: string;
  position: { x: number; y: number };
};

const text = {
  left: "Previous",
  center: "View Project",
  right: "Next",
};

export default function ProjectCursor({ variant, position }: Props) {
  const value = text[variant];

  return (
    <motion.div
      initial={{ scale: 0, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      animate={{ scale: 1, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      exit={{ scale: 0, top: position.y, left: position.x, y: "-50%", x: "-50%" }}
      transition={{ type: "tween" }}
      className="fixed px-4 py-3 flex items-center justify-center bg-[#000000d1] text-foreground pointer-events-none text-xs uppercase"
    >
      {value}
    </motion.div>
  );
}
