import Image from "next/image";
import SocialSidebarComponent from "./components/SocialSidebarComponent";
import NavBarComponent from "./components/NavBarComponent";
import { NavEnum } from "@/enums/NavEnums";
import { SectionIdEnum } from "@/enums/SectionIdEnum";

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
              <h1 className="text-4xl text-[#4B2E2E]">Thao Vang</h1>
              <h2 className="text-2xl text-[#E97451] overflow-auto max-w-115">
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
            <h2 className="text-xl text-[#E97451]">
              Scroll down to learn more about me.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
