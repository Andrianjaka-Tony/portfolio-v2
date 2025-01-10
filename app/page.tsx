"use client";

import { AnimatePresence, useMotionValue, useMotionValueEvent } from "motion/react";
import { ProjectBackground } from "./components/project/project-background";
import { ProjectCard } from "./components/project/project-card";
import { Project } from "./type";
import { useState } from "react";
import { ProjectText } from "./components/project/project-text";

const projects: Project[] = [
  {
    name: "Vahatra",
    image: "/images/new-york.jpg",
  },
  {
    name: "Motion Agent",
    image: "/images/tokyo.jpg",
  },
  {
    name: "Home Renovation",
    image: "/images/amsterdam.webp",
  },
  {
    name: "Apollo",
    image: "/images/kyoto.jpg",
  },
];

export default function Home() {
  const { length } = projects;

  const activeIndex = useMotionValue<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex.get());
  const [displayName, setDisplayName] = useState<boolean>(true);

  useMotionValueEvent(activeIndex, "change", (value) => {
    setCurrentIndex(value);
  });

  return (
    <div className="relative w-screen h-screen">
      <ProjectBackground />
      <AnimatePresence mode="sync">
        {projects.map((project, index) => {
          const active = currentIndex;
          const position =
            index === active
              ? "center"
              : index === (active - 1 + length) % length
              ? "left"
              : index === (active + 1) % length
              ? "right"
              : null;

          return (
            position && (
              <ProjectCard
                key={index}
                {...project}
                position={position}
                activeIndex={activeIndex}
                setDisplayName={setDisplayName}
              />
            )
          );
        })}
      </AnimatePresence>
      <AnimatePresence mode="sync">
        {displayName && <ProjectText key={1} name={projects[currentIndex].name} />}
      </AnimatePresence>
    </div>
  );
}
