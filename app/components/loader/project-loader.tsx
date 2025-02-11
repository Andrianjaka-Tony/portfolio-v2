"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { AnimeText } from "../anime-text/anime-text";
import { AnimatePresence } from "motion/react";

type Props = {
  setComplete: Dispatch<SetStateAction<boolean>>;
};

export function ProjectLoader({ setComplete }: Props) {
  const [displayProgress, setDisplayProgress] = useState<boolean>(true);
  const [displayName, setDisplayName] = useState<boolean>(true);
  const [displayJob, setDiplayJob] = useState<boolean>(false);

  return (
    <div className="z-20 absolute top-0 left-0 h-screen w-screen bg-transparent perspective pointer-events-none">
      {displayProgress && (
        <div className="absolute inset-0 flex justify-center items-center opacity-40">100%</div>
      )}
      <div className="absolute inset-0 flex justify-center items-center text-5xl">
        <AnimatePresence>
          {displayName && (
            <AnimeText
              text="TONY ANDRIANJAKA"
              onAnimationComplete={() => {
                setDisplayName(false);
                setDisplayProgress(false);
                setTimeout(() => {
                  setDiplayJob(true);
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
                setDiplayJob(false);
                setTimeout(() => {
                  setComplete(true);
                }, 550);
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
