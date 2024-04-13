import Hero from "../components/Hero";

import { useLoaderData } from "react-router-dom";
import OurProjects from "../components/OurProjects";
import Reviews from "../components/Reviews";

function Home() {
  const projects = useLoaderData();
  console.log(projects);

  return (
    <div className="">
      <Hero></Hero>

      <div className="bg-[#F5F6F7]">
        <div className=" pt-24  max-w-6xl mx-auto pb-20">
          <div className="border-l-[3px] pl-6 border-[#cfa436]">
            <h4 className="text-[#cfa436] font-semibold tracking-[2px]  text-sm uppercase ">
              Best Choices
            </h4>
            <h2 className="text-[40px] font-bold ">Our Popular Projects</h2>
          </div>
          <div className="grid grid-cols-3 gap-y-14 gap-x-8 mt-20 ">
            {projects.map((project) => (
              <OurProjects key={project.id} project={project}></OurProjects>
            ))}
          </div>
        </div>
        <div>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
}

export default Home;
