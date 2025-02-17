import Hero from "../components/Hero";

import { useLoaderData } from "react-router-dom";
import OurProjects from "../components/OurProjects";
import Reviews from "../components/Reviews";
import { Helmet } from "react-helmet-async";

function Home() {
  const projects = useLoaderData();

  return (
    <div className="">
      <Hero></Hero>
      <Helmet>
        <title>Elysian | Home</title>
      </Helmet>

      <div className="bg-[#F5F6F7]">
        <div className=" lg:pt-24 md:pt-20 pt-10 max-w-6xl mx-auto lg:pb-20 md:pb-16 pb-5 px-6 lg:px-0">
          <div className="border-l-[3px] pl-6 border-[#cfa436]">
            <h4 className="text-[#cfa436] font-semibold tracking-[2px]  text-sm uppercase ">
              Best Choices
            </h4>
            <h2 className="lg:text-[40px] md:text-[34px] text-2xl font-bold ">
              Our Popular Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 lg:mt-20 mt-8 md:mt-16 ">
            {projects.map((project) => (
              <OurProjects key={project.id} project={project}></OurProjects>
            ))}
          </div>
        </div>
        <div>
          <Reviews></Reviews>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
