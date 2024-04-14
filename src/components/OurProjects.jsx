import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OurProjects({ project }) {
  const { id, estate_title, image, location } = project;
  return (
    <div className="">
      <div className="cursor-pointer ">
        <div className=" group relative ">
          <span className=" relative  group-hover:text-white">
            <img className="w-full h-[16rem]" src={image} alt="" />
          </span>
          <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
            <h3 className=" hover:text-[#d0a946] text-xl md:text-2xl lg:text-2xl font-bold">
              {estate_title}
            </h3>
            <h4 className="pt-2 text-sm md:text-base lg:text-base text-[#6b6b6b]">
              {location}
            </h4>
          </div>
          <div>
            <Link to={`/projectdetails/${id}`}>
              <button
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-3 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border border-[#BA9230] rounded-full  group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#BA9230] group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full text-sm ease md:text-base lg:text-base">
                  View Property
                </span>
                <span className="relative invisible">View Property</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
OurProjects.propTypes = {
  project: PropTypes.object,
};
