"use client";

import React from "react";

const SocialSidebarComponent = () => {
  return (
    <div className="absolute left-0 min-h-screen flex items-center">
      <div className="flex flex-col items-center space-y-8 py-6 px-4 bg-[#D8CFC4] shadow-lg rounded-[0_15px_15px_0]">
        <img
          className="w-12 cursor-pointer"
          src="/assets/linkedin.png"
          alt="linkedin logo"
          onClick={() =>
            window.open("https://www.linkedin.com/in/thao-vang-dev/")
          }
        />
        <img
          className="w-12 cursor-pointer"
          src="/assets/github.png"
          alt="github logo"
          onClick={() => window.open("https://github.com/Tvang93")}
        />
        <a href="/assets//resume.pdf" target="_blank" rel="noopener noreferrer">
          <img
            className="w-12 cursor-pointer"
            src="/assets/file.png"
            alt="file logo"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebarComponent;
