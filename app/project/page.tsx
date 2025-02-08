"use client";

import NextProject from "../components/next-project";
import ParallaxProjectCard from "../components/parallax-project-card";
import { ScrollTop } from "../components/scroll-top";

export default function Project() {
  return (
    <div>
      <ScrollTop />
      <div className="relative top-0 left-0 flex gap-16">
        <div className="flex-1 pt-32 pb-16 px-16 sticky top-0 h-screen flex flex-col">
          {/* <h1 className="text-2xl uppercase">Motion Agent</h1> */}
          <p className="leading-normal text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolor. Iusto,
            error. Ut adipisci necessitatibus ipsum magni quasi esse itaque blanditiis inventore
            error eveniet, rem debitis repellat, sit aut non.
          </p>
          {/* <div className="mt-12 text-sm leading-normal">
          <p>Frontend development</p>
          <p>3D</p>
        </div> */}
          <div className="mt-auto">
            <p className="uppercase text-3xl leading-none">Motion Agent</p>
          </div>
        </div>
        <div className="flex-1 pt-32 pb-16 px-16 flex flex-col gap-8">
          <div className="bg-[#111] w-full flex aspect-square">
            <img src="/images/amsterdam.webp" className="w-full h-full object-cover" />
          </div>
          <ParallaxProjectCard image="/images/test/t2.png" />
          <ParallaxProjectCard image="/images/test/t3.png" />
          <ParallaxProjectCard image="/images/test/t4.png" />
          <ParallaxProjectCard image="/images/test/t5.png" />
          <ParallaxProjectCard image="/images/test/t6.png" />
          <ParallaxProjectCard image="/images/test/t7.png" />
        </div>
      </div>
      <NextProject />
    </div>
  );
}
