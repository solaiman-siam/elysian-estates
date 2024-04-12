import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OurProjects({ project }) {
  const { id, estate_title, image, location } = project;
  return (
    <div id='projects' className="">
      <Link className="cursor-pointer ">
        <div className=" group relative ">
          <span className=" relative  group-hover:text-white">
            <img className="w-full h-[16rem]" src={image} alt="" />
          </span>
          <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
        </div>
        <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
          <h3 className="mt-5 hover:text-[#d0a946] text-2xl font-bold">
            {estate_title}
          </h3>
          <h4 className="pt-2 text-base text-[#6b6b6b]">{location}</h4>
        </div>
      </Link>
    </div>
  );
}

export default OurProjects;
OurProjects.propTypes = {
  project: PropTypes.array,
};
