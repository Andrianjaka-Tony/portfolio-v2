type BackgroundProps = {
  source: string;
  alt?: string;
};

function Background({ source, alt }: BackgroundProps) {
  return (
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover brightness-[.5] object-center"
        src={source}
        alt={alt}
      />
    </div>
  );
}

export function ProjectBackground() {
  return (
    <div className="relative h-screen w-screen">
      <Background source="/images/new-york.jpg" />
    </div>
  );
}
