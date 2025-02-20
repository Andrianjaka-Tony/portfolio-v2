"use client";

import { AnimatePresence, useMotionValue, useMotionValueEvent } from "motion/react";
import { ProjectBackground } from "./components/project/project-background";
import { ProjectCard } from "./components/project/project-card";
import { useState } from "react";
import { ProjectText } from "./components/project/project-text";
import { projects } from "./data/projects";
import { ProjectLoader } from "./components/loader/project-loader";
import ProjectCursor from "./components/project/project-cursor";
import { Link } from "next-view-transitions";

export default function Home() {
  const { length } = projects;

  const activeIndex = useMotionValue<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex.get());
  const [displayName, setDisplayName] = useState<boolean>(true);
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);

  // Cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<"" | "left" | "center" | "right">("");

  useMotionValueEvent(activeIndex, "change", (value) => {
    setCurrentIndex(value);
  });

  return (
    <>
      <div className="z-10 py-8 fixed top-0 left-0 w-screen flex justify-center gap-12">
        <Link href="/" scroll={false} className="cursor-pointer">
          Work
        </Link>
        <Link
          href="/about"
          scroll={false}
          className="opacity-40 hover:opacity-100 duration-200 cursor-pointer"
        >
          About
        </Link>
      </div>
      <div
        onMouseMove={(event) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        }}
        className="relative overflow-hidden w-screen h-screen"
      >
        <ProjectLoader setComplete={setDisplayLoader} />
        {displayLoader && (
          <>
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
                      setCursor={setCursor}
                    />
                  )
                );
              })}
            </AnimatePresence>
            <AnimatePresence mode="sync">
              {displayName && <ProjectText key={1} name={projects[currentIndex].name} />}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {cursor !== "" && <ProjectCursor position={mousePosition} variant={cursor} />}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}
