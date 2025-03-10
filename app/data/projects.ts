import { Project } from "../type";

export const projects: Project[] = [
  {
    id: "vahatra",
    name: "Vahatra Human Ressources",
    image: "/images/vahatra.webp",
  },
  {
    id: "motion-agent",
    name: "Motion Agent",
    image: "/images/motion-agent.webp",
    assets: [
      {
        source: "/motion-agent/hero.webp",
        video: false,
      },
      {
        source: "/motion-agent/intro.mp4",
        video: true,
      },
      {
        source: "/motion-agent/menu.webp",
        video: false,
      },
      {
        source: "/motion-agent/transition.mp4",
        video: true,
      },
      {
        source: "/motion-agent/gadgets-2d.webp",
        video: false,
      },
      {
        source: "/motion-agent/gadget-3d.webp",
        video: false,
      },
      {
        source: "/motion-agent/collaborators.webp",
        video: false,
      },
      {
        source: "/motion-agent/footer.webp",
        video: false,
      },
    ],
  },
  {
    id: "home-renovation",
    name: "Home Renovation Company",
    image: "/images/home-renovation.webp",
  },
  {
    id: "apollo",
    name: "Apollo Art Museum",
    image: "/images/Apollo.webp",
  },
];
