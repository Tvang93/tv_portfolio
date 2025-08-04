import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-h-screen grid grid-cols-12 bg-blue-200 text-black">
      <div className="col-span-5 h-full w-full flex justify-center items-center">
        <div>
          <h1 className="font-bold text-6xl">Thao Vang</h1>
          <h2 className='text-2xl'>Junior Software Developer</h2>
          <h3>Email: vangt39@gmail.com | Phone: (209)373-7382</h3>
          <p className="mt-16 mb-20">Engineering solutions with creative, seamless experiences.</p>
          {/* <IconLinksComponent /> */}
        </div>
      </div>
      <div className="col-span-7 w-full max-h-screen px-10 py-10">
        <div className="h-full ps-10 pe-30 flex flex-col bg-[rgb(255,255,255,0.4)] rounded-2xl overflow-y-auto scrollbar-hidden gap-8">
          <div className="flex flex-col gap-5 mt-8">
            <h2 className="text-2xl">About Me</h2>
            <p>I am a full-stack developer with expertise in TypeScript, Next.js, and Tailwind CSS, dedicated to creating intuitive and impactful web applications. With a background in education, I bring a structured and thoughtful approach to problem-solving, ensuring that my work is both technically sound and user-friendly. My current project, MatchPoint, leverages mapping technology to help users find and engage with local tennis courts, blending geospatial queries with seamless UI design. I thrive on innovation and practicality, always seeking ways to optimize backend functionality and refine frontend experiences. Passionate about sustainability and efficient solutions, I enjoy bridging creativity with technical precision to develop meaningful applications.</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl">Tech Stack</h2>
            <div className="grid grid-cols-5 gap-3">
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/tsicon.png" className="w-10 h-10" alt="Typescript Logo" />
                <h3 className="text-center">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/jsicon.png" className="w-10 h-10" alt="JavaScript Logo" />
                <h3 className="text-center">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/csharpicon.png" className="w-10 h-10" alt="C# Logo" />
                <h3 className="text-center">C#</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/cssicon.png" className="w-10 h-10" alt="CSS Logo" />
                <h3 className="text-center">CSS</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/reacticon.png" className="w-10 h-10" alt="React & Next.JS Logo" />
                <h3 className="text-center">React & Next.JS</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/figmaicon.png" className="w-10 h-10" alt="Figma Logo" />
                <h3 className="text-center">Figma</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/azureicon.png" className="w-10 h-10" alt="Microsoft Azure Logo" />
                <h3 className="text-center">Microsoft Azure</h3>
              </div>
              <div className="flex flex-col items-center py-2.5 px-4 bg-[rgb(255,255,255,0.4)] rounded-2xl gap-2">
                <img src="/assets/tailwindicon.png" className="w-10 h-10" alt="Tailwind CSS Logo" />
                <h3 className="text-center">Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mb-8">
            <h2 className="text-2xl">Projects</h2>
            {/* <ProjectComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
