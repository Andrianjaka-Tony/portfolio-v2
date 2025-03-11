"use client";

import { Link } from "next-view-transitions";
import { AnimeParagraphs, AnimeRow } from "../components/anime-text/anime-word";
import { ScrollTop } from "../components/scroll-top";
import { useLoadingStore } from "../store/loading.store";
import { ProjectLoader } from "../components/loader/project-loader";
import { ReactNode } from "react";

function Presentation() {
  return (
    <div>
      <div className="md:hidden flex flex-col gap-8">
        <h1 className="text-4xl mb-10">Creative Developer</h1>
        <p className="leading-normal">
          I'm a Creative Developer at the start of my journey. I specialize in development, focusing
          on crafting intuitive visually appealing, and efficient user interfaces.
        </p>
        <p className="leading-normal">
          I love exploring new ideas, solving problems, and finding creative ways to bring projects
          to life with innovation, fueling my passion for continuous growth.
        </p>
      </div>
      <div className="hidden md:flex flex-col">
        <AnimeParagraphs
          paragraphs={[
            [
              <p className="flex pl-4 items-center gap-2">
                <img src="/tony.jpg" className="w-8 h-8 rounded-full object-cover" />
                I'm a Creative Developer at the start of my journey.
              </p>,
              "I specialize in development, focusing on crafting intuitive",
              "visually appealing, and efficient user interfaces for",
              "seamless user experiences.",
            ],
            [
              "I love exploring new ideas, solving problems, and finding",
              "creative ways to bring projects to life with innovation,",
              "fueling my passion for continuous growth. I continuously",
              "embrace every challenge.",
            ],
          ]}
          className="text-xl md:text-2xl lg:text-3xl md:leading-snug lg:leading-snug gap-12"
        />
      </div>
    </div>
  );
}

type SectionItem = {
  titles?: string[];
  values?: string[] | ReactNode[];
};

function SectionItem({ titles = [], values = [] }: SectionItem) {
  const mt = titles.length > 0 ? "mt-1 md:mt-4 lg:mt-6" : "mt-0";

  return (
    <div className="pl-4 md:px-12 lg:px-16">
      {titles.length > 0 && (
        <AnimeRow
          rows={titles}
          className="flex flex-col text-lg md:text-2xl lg:text-3xl md:gap-1 lg:gap-1"
        />
      )}
      {values.length > 0 && (
        <AnimeRow rows={values} className={`${mt} text-sm md:text-lg flex flex-col opacity-50`} />
      )}
    </div>
  );
}

type SectionProps = {
  title: string;
  items: SectionItem[];
};

function Section({ title, items }: SectionProps) {
  return (
    <div className="flex flex-col">
      <AnimeRow rows={[title]} className="text-xl md:text-2xl lg:text-3xl leading-snug" />
      <div className="flex flex-col gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
        {items.map((item, index) => (
          <SectionItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

function WorkingExperience() {
  return (
    <Section
      title="Experience"
      items={[
        {
          titles: ["Junior Developer", "Vahatra Corporation"],
          values: ["2024 - 2025"],
        },
      ]}
    />
  );
}

function Education() {
  return (
    <Section
      title="Education"
      items={[
        {
          titles: ["Master's student in Computer Science", "IT University"],
          values: ["2024 - Now"],
        },
        {
          titles: ["Bachelor of Computer Science", "IT University"],
          values: ["2021 - 2024"],
        },
      ]}
    />
  );
}

function Technologies() {
  return (
    <Section
      title="Technologies"
      items={[
        {
          values: [
            "Tailwind",
            "TypeScript",
            "React",
            "Next",
            "Motion",
            "Java",
            "Spring-Boot",
            "PostgreSQL",
          ],
        },
      ]}
    />
  );
}

function GetInTouch() {
  return (
    <Section
      title="Get In Touch"
      items={[
        {
          titles: [],
          values: [
            <a target="_blank" href="https://www.instagram.com/andrianjaka.tony/">
              Instagram
            </a>,
            <a target="_blank" href="https://x.com/Andrianja_tony">
              X
            </a>,
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tony-andrianjakatsihoarana-388866283/"
            >
              Linkedin
            </a>,
            <a target="_blank" href="https://web.facebook.com/andrianjaka.tony">
              Facebook
            </a>,
          ],
        },
      ]}
    />
  );
}

export default function About() {
  const { isLoading } = useLoadingStore();

  return (
    <>
      <div className="z-10 py-4 px-6 lg:py-8 static lg:fixed top-0 left-0 w-screen flex justify-between lg:justify-center gap-12 text-sm lg:text-lg">
        <Link
          href="/"
          scroll={false}
          className="opacity-40 hover:opacity-100 duration-200 cursor-pointer hidden lg:block"
        >
          Work
        </Link>
        <Link href="/" scroll={false} className="cursor-pointer lg:hidden">
          Tony Andrianjaka
        </Link>
        <Link href="/about" scroll={false} className="cursor-pointer hidden lg:block">
          About
        </Link>
        <Link href="/" scroll={false} className="cursor-pointer lg:hidden">
          Back
        </Link>
      </div>
      {isLoading && <ProjectLoader />}
      {!isLoading && (
        <div className="flex items-center py-48 lg:py-60 px-6 justify-center font-light">
          <ScrollTop />
          <div className="mx-auto flex flex-col gap-24 md:gap-32 lg:gap-48">
            <Presentation />
            <WorkingExperience />
            <Education />
            <Technologies />
            <GetInTouch />
          </div>
        </div>
      )}
    </>
  );
}
