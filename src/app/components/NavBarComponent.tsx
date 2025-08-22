"use client";

import React, { useEffect, useState } from "react";

interface Props {
  homeTag?: string;
  aboutTag?: string;
  projectsTag?: string;
  contactTag?: string;
}

const NavBarComponent = (props: Props) => {
  const { homeTag, aboutTag, projectsTag, contactTag } = props;
  const [activeTab, setActiveTab] = useState<string>(homeTag || "");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (tag: string) => {
    setActiveTab(tag);
    scrollToId(tag);
  };

  useEffect(() => {
    console.log("Active Tab:", activeTab);
  }, [activeTab]);

  return (
    <div className="absolute top-0 flex justify-center w-full gap-4 mt-4">
      <button onClick={() => handleNavClick(homeTag as string)}>
        <h1
          className={`text-[28px] text-[#4B2E2E] px-4 ${
            activeTab == homeTag ? `bg-[#D8CFC4] rounded-full` : ``
          }`}
        >
          Home
        </h1>
      </button>
      <button onClick={() => handleNavClick(aboutTag as string)}>
        <h1
          className={`text-[28px] text-[#4B2E2E] px-4 ${
            activeTab == aboutTag ? `bg-[#D8CFC4] rounded-full` : ``
          }`}
        >
          About
        </h1>
      </button>
      <button onClick={() => handleNavClick(projectsTag as string)}>
        <h1
          className={`text-[28px] text-[#4B2E2E] px-4 ${
            activeTab == projectsTag ? `bg-[#D8CFC4] rounded-full` : ``
          }`}
        >
          Project
        </h1>
      </button>
      <button onClick={() => handleNavClick(contactTag as string)}>
        <h1
          className={`text-[28px] text-[#4B2E2E] px-4 ${
            activeTab == contactTag ? `bg-[#D8CFC4] rounded-full` : ``
          }`}
        >
          Contact
        </h1>
      </button>
    </div>
  );
};

export default NavBarComponent;
