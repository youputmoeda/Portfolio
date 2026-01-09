import React from "react";
import { SectionWrapper } from "../hoc";
import { ProjectsSection } from "./projects/ProjectsSection";

const Projects = () => {
  return <ProjectsSection />;
};

export default SectionWrapper(Projects, "Projects");