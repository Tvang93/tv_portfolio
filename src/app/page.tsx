import Image from "next/image";
import SocialSidebarComponent from "./components/SocialSidebarComponent";
import NavBarComponent from "./components/NavBarComponent";
import { NavEnum } from "@/enums/NavEnums";
import { SectionIdEnum } from "@/enums/SectionIdEnum";
import { EmailJSComponent } from "./components/EmailJSComponent";

export default function Home() {
  return (
    <>
      <NavBarComponent
        homeTag={SectionIdEnum.HOME}
        aboutTag={SectionIdEnum.ABOUT}
        projectsTag={SectionIdEnum.PROJECTS}
        contactTag={SectionIdEnum.CONTACT}
      />
      <SocialSidebarComponent />
      <div className="min-h-screen max-h-screen grid grid-cols-12 bg-[url(/assets/bg.jpg)] bg-cover text-black overflow-y-scroll">
        <div className="col-span-12 flex flex-col">
          <div
            id={SectionIdEnum.HOME}
            className="min-h-screen flex items-center justify-evenly"
          >
            <div>
              <h1 className="text-6xl text-[#4B2E2E]">Thao Vang</h1>
              <h2 className="text-2xl text-[#E97451] overflow-auto max-w-115 mt-20">
                Full-Stack Engineer building intuitive, scalable systems—one
                component at a time.
              </h2>
            </div>
            <div>
              <img
                src="/assets/headshot.jpg"
                className="h-125 rounded-[20px] shadow-lg"
                alt="Thao Vang head shot"
              />
            </div>
          </div>
          <div
            id={SectionIdEnum.ABOUT}
            className="min-h-screen flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl text-[#4B2E2E]">About Me!</h1>
            <h2 className="text-xl text-white max-w-2xl mt-4 ">
              I am a full-stack developer with expertise in TypeScript, C#, and T-SQL. With a background in education, I bring a structured and thoughtful approach to problem-solving, ensuring that my work is both technically sound and user-friendly. I thrive on innovation and practicality, always seeking ways to optimize backend functionality and refine frontend experiences. Passionate about sustainability and efficient solutions, I enjoy bridging creativity with technical precision to develop meaningful applications.
            </h2>
          </div>
          <div 
            id={SectionIdEnum.PROJECTS} 
            className="min-h-screen flex flex-col items-center justify-center"
          >
          </div>
          <div
            id={SectionIdEnum.CONTACT}
            className="min-h-screen flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-4xl text-[#4B2E2E]">Contact</h1>
            <h2 className="text-[#4B2E2E]">Feel Free To Contact Me By Sending Me A Message Below</h2>
            <EmailJSComponent />
            {/* <div className="flex flex-col items-center mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 mb-2 border border-[#4B2E2E] rounded min-w-120"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 mb-2 border border-[#4B2E2E] rounded min-w-120"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 mb-2 border border-[#4B2E2E] rounded w-full max-w-md min-w-120 h-32"
              ></textarea>
            </div>
            <button className="bg-[#4B2E2E] text-[#D8CFC4] p-2 rounded cursor-pointer">
              Send Message
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
