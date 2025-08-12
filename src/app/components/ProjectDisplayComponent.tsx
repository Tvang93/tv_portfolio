import React, { } from "react";
import { IProjects } from "../interfaces/IProjects";

interface Prop {
  project: IProjects;
}

const ProjectDisplayComponent = (prop: Prop) => {
    const { project } = prop;

  return (
    <div
      className="bg-[#D8CFC4] bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center grow"
    >
      <h2 className="text-2xl text-[#4B2E2E] mb-4">{project.Project}</h2>
      <img
        src={project.ProjectImage}
        alt={`${project.ProjectImage} screenshot`}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <p className="text-center text-[#333] ">
        {project.ProjectDescription}
      </p>
    </div>
  );
};

export default ProjectDisplayComponent;
