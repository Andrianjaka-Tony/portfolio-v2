"use client";

import { ProjectAsset } from "@/app/type";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  asset: ProjectAsset;
};

export default function ParallaxProjectCard({ asset }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const topTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div ref={ref} className="bg-[#191919] px-6 lg:px-8 w-full aspect-square">
      <motion.div style={{ top: topTransform, y: yTransform }} className="relative w-full left-0">
        {asset.video && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full bg-[#222] object-cover aspect-[16/10]"
          >
            <source src={asset.source} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        )}
        {!asset.video && (
          <img
            loading="lazy"
            src={asset.source}
            className="w-full bg-[#222] left-0 object-cover aspect-[16/10]"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
