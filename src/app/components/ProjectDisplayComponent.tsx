import React, { } from "react";

interface Prop {
  project: string;
}

const ProjectDisplayComponent = (prop: Prop) => {
    const { project } = prop;

  return (
    <div
      className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center"
    >
      <h2 className="text-2xl text-[#4B2E2E] mb-4">{project}</h2>
      {/* <img
        src={`/assets/${project.toLowerCase()}.png`}
        alt={`${project} screenshot`}
        className="w-full h-48 object-cover rounded mb-4"
      /> */}
      <p className="text-center text-[#333]">
        Description for {project} goes here. This project showcases my skills in
        full-stack development, including both frontend and backend
        technologies.
      </p>
    </div>
  );
};

export default ProjectDisplayComponent;
