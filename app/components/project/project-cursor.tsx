import React from "react";

import { motion } from "motion/react";

type Props = {
  variant: string;
  position: { x: number; y: number };
};

const text = {
  left: "Prev",
  center: "View",
  right: "Next",
};

export default function ProjectCursor({ variant, position }: Props) {
  const value = text[variant];

  return (
    <motion.div
      initial={{ scale: 0, top: position.y - 40, left: position.x - 40 }}
      animate={{ scale: 1, top: position.y - 40, left: position.x - 40 }}
      exit={{ scale: 0, top: position.y - 40, left: position.x - 40 }}
      transition={{ type: "tween" }}
      className="h-20 w-20 fixed flex items-center justify-center rounded-full bg-foreground text-background pointer-events-none"
    >
      {value}
    </motion.div>
  );
}
