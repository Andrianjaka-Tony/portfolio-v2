"use client";

import { AnimatePresence, useMotionValue, useMotionValueEvent } from "motion/react";
import { ProjectBackground } from "./components/project/project-background";
import { ProjectCard } from "./components/project/project-card";
import { useState } from "react";
import { ProjectText } from "./components/project/project-text";
import { projects } from "./data/projects";
import { ProjectLoader } from "./components/loader/project-loader";

export default function Home() {
  const { length } = projects;

  const activeIndex = useMotionValue<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex.get());
  const [displayName, setDisplayName] = useState<boolean>(true);

  useMotionValueEvent(activeIndex, "change", (value) => {
    setCurrentIndex(value);
  });

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      {/* <ProjectLoader /> */}
      <ProjectBackground projects={projects} currentIndex={currentIndex} />
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
                project={project}
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
