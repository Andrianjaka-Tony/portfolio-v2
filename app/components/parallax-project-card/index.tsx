"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  image: string;
};

export default function ParallaxProjectCard({ image }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const topTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div ref={ref} className="bg-[#191919] px-8 w-full aspect-square">
      <motion.div style={{ top: topTransform, y: yTransform }} className="relative w-full left-0">
        <img src={image} className="w-full left-0 object-cover h-auto" />
      </motion.div>
    </motion.div>
  );
}
