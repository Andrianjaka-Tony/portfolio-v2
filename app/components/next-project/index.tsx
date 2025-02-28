"use client";

import { useProjects } from "@/app/context/project.context";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Link, useTransitionRouter } from "next-view-transitions";
import { useRef, useState } from "react";

type Props = {
  index: number;
};

export default function NextProject({ index }: Props) {
  const router = useTransitionRouter();

  const projects = useProjects();
  const nextProject = projects[index];

  const ref = useRef(null);
  const [progress, setProgress] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(Math.floor(value * 100));
    if (value === 1 && window.innerWidth >= 1280) {
      router.push(`/${nextProject.id}`);
    }
  });

  const xLeftClipTransform = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const xRightClipTransform = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
  const yTopClipTransform = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const yBottomClipTransform = useTransform(scrollYProgress, [0, 1], ["75%", "100%"]);
  const clipPath = useMotionTemplate`polygon(${xLeftClipTransform} ${yTopClipTransform}, ${xRightClipTransform} ${yTopClipTransform}, ${xRightClipTransform} ${yBottomClipTransform}, ${xLeftClipTransform} ${yBottomClipTransform})`;

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <>
      {window.innerWidth >= 1280 && (
        <motion.div ref={ref} className="w-screen h-[200vh] mt-32">
          <motion.div className="relative xl:sticky top-0 h-screen w-screen">
            <motion.img
              style={{ scale: scaleTransform, clipPath }}
              src={nextProject.image}
              alt={nextProject.name}
              className="w-full h-full opacity-0 xl:opacity-100 object-cover brightness-[.5]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="flex px-6 items-start gap-2">
                <p className="text-3xl xl:text-5xl text-center">{nextProject.name}</p>
                <p className="hidden xl:block text-xs mt-1">{progress}</p>
              </div>
              <p className="text-sm">Next Project</p>
            </div>
          </motion.div>
        </motion.div>
      )}
      {window.innerWidth < 1280 && (
        <div className="w-screen h-screen mt-32">
          <div className="relative top-0 h-screen w-screen">
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href={`/${nextProject.id}`}
                className="flex flex-col-reverse items-center justify-center gap-2"
              >
                <div className="flex px-6 items-start gap-2">
                  <p className="text-3xl text-center">{nextProject.name}</p>
                </div>
                <p className="text-sm opacity-60">Next Project</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
