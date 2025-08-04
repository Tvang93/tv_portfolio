"use client";

import React from "react";

const SocialSidebarComponent = () => {
  return (
    <div className="absolute left-0 min-h-screen flex items-center">
        <div className="flex flex-col items-center space-y-6 py-4 px-2 bg-white shadow-lg">
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
        onClick={() =>
          window.open("https://github.com/Tvang93")
        }
      />
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
