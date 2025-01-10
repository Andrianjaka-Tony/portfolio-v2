import { AnimeText } from "../anime-text/anime-text";

type Props = {
  name: string;
};

export function ProjectText({ name }: Props) {
  return (
    <div className="absolute py-8 bottom-0 w-full flex justify-center">
      <AnimeText
        exit={{
          opacity: 0,
          transition: {
            ease: "easeOut",
            duration: 0.5,
          },
        }}
        text={name}
        className="text-5xl uppercase"
      />
    </div>
  );
}
