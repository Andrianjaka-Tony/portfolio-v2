"use client";

import React, { useEffect, useState } from "react";
import { AnimeText } from "../anime-text/anime-text";
import { AnimatePresence } from "motion/react";
import { useProjects } from "@/app/context/project.context";
import { useTransitionRouter } from "next-view-transitions";
import { useLoadingStore } from "@/app/store/loading.store";

export function ProjectLoader() {
  const router = useTransitionRouter();
  const projects = useProjects();

  const { setLoading } = useLoadingStore();

  const pages = projects.map(({ id }) => id);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const imagesToLoad = [...projects.map(({ image }) => image), "/tony.jpg"];

  const [displayProgress, setDisplayProgress] = useState(true);
  const [displayName, setDisplayName] = useState<boolean>(false);
  const [displayJob, setDisplayJob] = useState<boolean>(false);

  useEffect(() => {
    imagesToLoad.forEach((source) => {
      const image = new Image();
      image.src = source;
      image.addEventListener("load", () => {
        setLoadingProgress((previous) => previous + 1);
      });
    });
  }, []);

  useEffect(() => {
    if (loadingProgress >= imagesToLoad.length) {
      setDisplayName(true);
    }
  }, [loadingProgress]);

  useEffect(() => {
    pages.forEach((page) => {
      router.prefetch(`/${page}`);
    });
  }, []);

  return (
    <div className="z-20 absolute top-0 left-0 h-screen w-screen bg-transparent perspective pointer-events-none">
      {displayProgress && (
        <div className="absolute inset-0 flex justify-center items-center opacity-40">
          {Math.round((loadingProgress * 100) / imagesToLoad.length)}%
        </div>
      )}
      <div className="absolute inset-0 flex justify-center items-center text-5xl">
        <AnimatePresence>
          {displayName && (
            <AnimeText
              text="TONY ANDRIANJAKA"
              onAnimationComplete={() => {
                setDisplayName(false);
                setTimeout(() => {
                  setDisplayJob(true);
                }, 500);
              }}
              origin="150%"
              exit={{
                y: "-150%",
                transition: {
                  ease: [0.69, 0, 0.91, 0.34],
                  duration: 1,
                },
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-5xl">
        <AnimatePresence>
          {displayJob && (
            <AnimeText
              text="CREATIVE DEVELOPER"
              onAnimationComplete={() => {
                setDisplayJob(false);
                setDisplayProgress(false);
                setTimeout(() => {
                  setLoading(false);
                }, 1350);
              }}
              origin="150%"
              exit={{
                y: "-150%",
                transition: {
                  ease: [0.69, 0, 0.91, 0.34],
                  duration: 1,
                },
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
