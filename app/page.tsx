"use client";

import { AnimatePresence, useMotionValue, useMotionValueEvent } from "motion/react";
import { ProjectBackground } from "./components/project/project-background";
import { ProjectCard } from "./components/project/project-card";
import { useState } from "react";
import { ProjectText } from "./components/project/project-text";
import { ProjectLoader } from "./components/loader/project-loader";
import ProjectCursor from "./components/project/project-cursor";
import { Link } from "next-view-transitions";
import { useProjects } from "./context/project.context";
import { useLoadingStore } from "./store/loading.store";
import { useCurrentProjectStore } from "./store/current-project.store";

export default function Home() {
  const projects = useProjects();
  const { length } = projects;

  const { isLoading } = useLoadingStore();
  const { index: currentIndex } = useCurrentProjectStore();
  const [displayName, setDisplayName] = useState<boolean>(true);

  // Cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<"" | "left" | "center" | "right">("");

  return (
    <>
      <div className="z-10 py-4 px-6 lg:py-8 fixed top-0 left-0 w-screen flex justify-between lg:justify-center gap-12 text-sm lg:text-lg">
        <Link href="/" scroll={false} className="cursor-pointer hidden lg:block">
          Work
        </Link>
        <Link href="/" scroll={false} className="cursor-pointer lg:hidden">
          Tony Andrianjaka
        </Link>
        <Link
          href="/about"
          scroll={false}
          className="lg:opacity-40 lg:hover:opacity-100 duration-200 cursor-pointer"
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
        {isLoading && <ProjectLoader />}
        {!isLoading && (
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
