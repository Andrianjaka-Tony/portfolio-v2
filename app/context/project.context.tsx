"use client";

import { createContext, ReactNode, useContext } from "react";

import { projects } from "../data/projects";
import { Project } from "../type";

const ProjectContext = createContext<Project[]>([]);

export function ProjectProvider({ children }: { children: ReactNode }) {
  return <ProjectContext.Provider value={projects}>{children}</ProjectContext.Provider>;
}

export function useProjects(): Project[] {
  return useContext(ProjectContext);
}
