"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function NextProject() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const xLeftClipTransform = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const xRightClipTransform = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
  const yTopClipTransform = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const yBottomClipTransform = useTransform(scrollYProgress, [0, 1], ["75%", "100%"]);
  const clipPath = useMotionTemplate`polygon(${xLeftClipTransform} ${yTopClipTransform}, ${xRightClipTransform} ${yTopClipTransform}, ${xRightClipTransform} ${yBottomClipTransform}, ${xLeftClipTransform} ${yBottomClipTransform})`;

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div ref={ref} className="w-screen h-[300vh] mt-32">
      <motion.div style={{ clipPath }} className="sticky top-0 h-screen w-screen">
        <motion.img
          style={{ scale: scaleTransform }}
          src="/images/kyoto.jpg"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
