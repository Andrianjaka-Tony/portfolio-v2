function Presentation() {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-4xl leading-snug">
        Hello, my name is Tony, I'm a Creative Developer based at Madagascar at the start of my
        journey.
      </p>
      <p className="text-4xl leading-snug">
        I specialize in development, focusing on crafting intuitive, visually appealing, and
        efficient user interfaces for seamless user experiences.
      </p>
      <p className="text-4xl leading-snug">
        I love exploring new ideas, solving problems, and finding innovative ways to bring projects
        to life. My curiosity keeps me motivated to learn and grow every day.
      </p>
    </div>
  );
}

function WorkingExperience() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl leading-snug">Experience</p>
      <div className="flex flex-col gap-12 mt-16">
        <div className="px-16">
          <div className="text-4xl">Junior Developer</div>
          <div className="text-4xl mt-1">Vahatra Corporation</div>
          <div className="mt-6 opacity-50">2024 - 2025</div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl leading-snug">Education</p>
      <div className="flex flex-col gap-12 mt-16">
        <div className="px-16">
          <div className="text-4xl">Master's student in Computer Science</div>
          <div className="text-4xl mt-1">IT University</div>
          <div className="mt-6 opacity-50">2024 - Now</div>
        </div>
        <div className="px-16">
          <div className="text-4xl">Bachelor of Computer Science</div>
          <div className="text-4xl mt-1">IT University</div>
          <div className="mt-6 opacity-50">2021 - 2024</div>
        </div>
      </div>
    </div>
  );
}

function Technologies() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl leading-snug">Technologies</p>
      <div className="flex flex-col gap-12 mt-16">
        <div className="px-16">
          <div className="text-4xl">Frontend</div>
          <div className="mt-6 opacity-50">Tailwind</div>
          <div className="mt-0 opacity-50">TypeScript</div>
          <div className="mt-0 opacity-50">React</div>
          <div className="mt-0 opacity-50">Next</div>
          <div className="mt-0 opacity-50">Motion</div>
        </div>
        <div className="px-16">
          <div className="text-4xl">Backend</div>
          <div className="mt-6 opacity-50">Java</div>
          <div className="mt-0 opacity-50">Spring-Boot</div>
        </div>
        <div className="px-16">
          <div className="text-4xl">Database</div>
          <div className="mt-6 opacity-50">PostgreSQL</div>
        </div>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl leading-snug">Get In Touch</p>
      <div className="flex flex-col gap-12 mt-16">
        <div className="px-16">
          <div className="opacity-50">Email</div>
          <div className="opacity-50">Instagram</div>
          <div className="opacity-50">X</div>
          <div className="opacity-50">Linkedin</div>
          <div className="opacity-50">Facebook</div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex py-60 font-light">
      <div className="w-2/5"></div>
      <div className="w-1/2 flex flex-col gap-48">
        <Presentation />
        <WorkingExperience />
        <Education />
        <Technologies />
        <GetInTouch />
      </div>
    </div>
  );
}
