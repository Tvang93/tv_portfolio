import Image from "next/image";
import SocialSidebarComponent from "./components/SocialSidebarComponent";
import NavBarComponent from "./components/NavBarComponent";

export default function Home() {
  return (
    <>
      <NavBarComponent />
      <SocialSidebarComponent />
      <div className="min-h-screen max-h-screen grid grid-cols-12 bg-[url(/assets/bg.jpg)] bg-cover text-black">
        <div className="mt-20 col-span-12 flex items-center justify-evenly">
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
              className="h-125 rounded-[20px]"
              alt="Thao Vang head shot"
            />
          </div>
        </div>
      </div>
    </>
  );
}
