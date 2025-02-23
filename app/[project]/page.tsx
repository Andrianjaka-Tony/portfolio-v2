"use client";

import { Link, useTransitionRouter } from "next-view-transitions";
import { AnimeParagraphs } from "../components/anime-text/anime-word";
import NextProject from "../components/next-project";
import ParallaxProjectCard from "../components/parallax-project-card";
import { ScrollTop } from "../components/scroll-top";
import { Project as ProjectType } from "../type";
import { useProjects } from "../context/project.context";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCurrentProjectStore } from "../store/current-project.store";

export default function Project() {
  const router = useTransitionRouter();
  const { setIndex } = useCurrentProjectStore();

  const params = useParams();
  const project = params.project as string;

  const projects = useProjects();
  const foundProject = projects.find((p) => p.id === project) as ProjectType;
  const projectIndex = projects.indexOf(foundProject);
  const nextProjectIndex = (projects.indexOf(foundProject) + 1) % projects.length;

  useEffect(() => {
    router.prefetch(`/${projects[nextProjectIndex].id}`);
    setIndex(projectIndex);
  }, []);

  return (
    <>
      <div className="z-10 px-16 py-8 fixed top-0 left-0 w-screen">
        <Link
          href="/"
          scroll={false}
          className="opacity-40 hover:opacity-100 duration-200 cursor-pointer"
        >
          Back
        </Link>
      </div>

      <div>
        <ScrollTop />
        <div className="relative top-0 left-0 flex gap-16">
          <div className="flex-1 pt-32 pb-16 px-16 sticky top-0 h-screen flex flex-col">
            <div className="">
              <p className="text-2xl leading-none">{foundProject?.name}</p>
            </div>
            <AnimeParagraphs
              paragraphs={[
                [
                  "The blinking light caught her attention. She thought about it a bit and",
                  "couldn't remember ever noticing it before. That was strange since it was",
                  "obvious the flashing light had been there for years.",
                ],
                [
                  "Ten more steps. If he could take ten more steps it would be over, but his",
                  "legs wouldn't move. He tried to will them to work, but they wouldn't listen to",
                  "his brain. Ten more steps and it would be over but it didn't appear he would",
                  "be able to do it.",
                ],
              ]}
              className="leading-normal opacity-70 gap-4 mt-auto"
              custom={0.3}
            />
          </div>
          <div className="flex-1 pt-32 pb-16 px-16 flex flex-col gap-8">
            <div className="bg-[#111] w-full flex aspect-square">
              <img
                src={foundProject?.image}
                alt={foundProject?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <ParallaxProjectCard image="/images/test/t2.png" />
            <ParallaxProjectCard image="/images/test/t3.png" />
            <ParallaxProjectCard image="/images/test/t4.png" />
            <ParallaxProjectCard image="/images/test/t5.png" />
            <ParallaxProjectCard image="/images/test/t6.png" />
            <ParallaxProjectCard image="/images/test/t7.png" />
          </div>
        </div>
        <NextProject index={nextProjectIndex} />
      </div>
    </>
  );
}
