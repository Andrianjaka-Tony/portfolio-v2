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
      <div className="z-10 py-3 px-6 xl:px-16 xl:py-8 lg:fixed flex justify-between top-0 left-0 w-screen overflow-x-hidden">
        <Link
          href="/"
          scroll={false}
          className="opacity-40 hover:opacity-100 duration-200 cursor-pointer hidden lg:block"
        >
          Back
        </Link>
        <Link href="/" scroll={false} className="cursor-pointer lg:hidden">
          Tony Andrianjaka
        </Link>
        <Link href="/" scroll={false} className="cursor-pointer lg:hidden">
          Back
        </Link>
      </div>

      <div>
        <ScrollTop />
        <div className="relative top-0 left-0 flex flex-col xl:flex-row">
          <div className="flex-1 pt-32 pb-16 px-6 xl:px-16 xl:sticky top-0 h-screen flex flex-col">
            <div className="">
              <p className="text-3xl xl:text-2xl leading-tight">{foundProject?.name}</p>
            </div>
            <div className="flex flex-col mt-16 gap-8 xl:flex leading-normal opacity-70 xl:gap-4 xl:mt-auto max-w-[600px]">
              {foundProject.descriptions?.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
          <div className="flex-1 pt-32 pb-16 px-6 xl:px-16 flex flex-col gap-8">
            <ParallaxProjectCard asset={{ source: foundProject?.image, video: false }} />
            {foundProject.assets?.map((asset, index) => (
              <ParallaxProjectCard key={index} asset={asset} />
            ))}
          </div>
        </div>
        <NextProject index={nextProjectIndex} />
      </div>
    </>
  );
}
