import { Link } from "next-view-transitions";
import { AnimeParagraphs, AnimeRow } from "../components/anime-text/anime-word";
import { ScrollTop } from "../components/scroll-top";

function Presentation() {
  return (
    <div className="flex flex-col">
      <AnimeParagraphs
        paragraphs={[
          [
            "Hello, my name is Tony, I'm a Creative Developer",
            "based at Madagascar at the start of my journey.",
          ],
          [
            "I specialize in development, focusing on crafting",
            "intuitive, visually appealing, and efficient user",
            "interfaces for seamless user experiences.",
          ],
          [
            "I love exploring new ideas, solving problems,",
            "and finding innovative ways to bring projects to",
            "life. My curiosity keeps me motivated to learn",
            "and grow every day.",
          ],
        ]}
        className="text-3xl leading-snug gap-12"
      />
    </div>
  );
}

type SectionItem = {
  titles?: string[];
  values?: string[];
};

function SectionItem({ titles = [], values = [] }: SectionItem) {
  const mt = titles.length > 0 ? "mt-6" : "mt-0";

  return (
    <div className="px-16">
      {titles.length > 0 && <AnimeRow rows={titles} className="flex flex-col text-3xl gap-1" />}
      {values.length > 0 && <AnimeRow rows={values} className={`${mt} flex flex-col opacity-50`} />}
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
      <AnimeRow rows={[title]} className="text-3xl leading-snug" />
      <div className="flex flex-col gap-12 mt-16">
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
          titles: ["Frontend"],
          values: ["Tailwind", "TypeScript", "React", "Next", "Motion"],
        },
        {
          titles: ["Backend"],
          values: ["Java", "Spring-Boot"],
        },
        {
          titles: ["Database"],
          values: ["PostgreSQL"],
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
          values: ["Email", "Instagram", "X", "Linkedin", "Facebook"],
        },
      ]}
    />
  );
}

export default function About() {
  return (
    <>
      <div className="z-10 py-8 fixed top-0 left-0 w-screen flex justify-center gap-12">
        <Link
          href="/"
          scroll={false}
          className="opacity-40 hover:opacity-100 duration-200 cursor-pointer"
        >
          Work
        </Link>
        <Link href="/about" scroll={false} className="cursor-pointer">
          About
        </Link>
      </div>
      <div className="flex py-60 font-light">
        <ScrollTop />
        <div className="w-2/5"></div>
        <div className="w-1/2 flex flex-col gap-48">
          <Presentation />
          <WorkingExperience />
          <Education />
          <Technologies />
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
