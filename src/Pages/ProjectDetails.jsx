import { useParams, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
import { FaRegHospital } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { BiShapeSquare } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
function ProjectDetails() {
 
  const projects = useLoaderData();

  const { id } = useParams();
  const element = projects.find((project) => project.id == id);
  const {
    image,
    estate_title,
    description,
    price,
    Status,
    Area,
    facilities,
    location,
    nearby_places,
    number_of_bedrooms,
  } = element;

  return (
    <div className="max-w-6xl mx-auto mt-10  pb-24">
      <div className="grid grid-cols-7 gap-10">
        <div className="col-span-4 relative">
          <h4 className="absolute right-10 text-sm uppercase rounded-sm  text-white font-bold px-2 py-0.5 bg-[#F36F1B] top-8">
            FOR {Status}
          </h4>
          <img className="rounded-xl" src={image} alt="" />
          <h3 className="pt-6 font-semibold text-3xl ">{estate_title}</h3>
          <h4 className="flex gap-2 items-center pt-3 font-medium text-[#717171]">
            {" "}
            <IoLocationSharp color="#" size={25} /> {location}
          </h4>
          <h4 className="w-fit text-[#000] mt-3 px-2 py-1 bg-opacity-40 bg-[#e1c171]">
            ${price}
          </h4>
          <p className="pt-6">{description}</p>
        </div>
        <div className=" p-4 col-span-3 rounded-lg bg-opacity-30 bg-[#f3d895]">
          <h3 className="text-2xl font-semibold">General</h3>
          <div className="p-1 mt-4 rounded-md">
            <h3 className="text-base font-semibold pb-4">Nearby Places</h3>
            <div className="flex justify-between bg-white p-4 rounded-md text-sm font-semibold">
              <div className="flex items-center gap-3">
                <LuSchool size={20} />
                <div>
                  <h4>School</h4>
                  <h4>{nearby_places.school}m away</h4>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaRegHospital size={20} />
                <div>
                  <h4>Hospital</h4>
                  <h4>
                    <h4>{nearby_places.hospital}m away</h4>
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GrRestaurant size={20} />
                <div>
                  <h4>Restaurant</h4>
                  <h4>{<h4>{nearby_places.restaurant}m away</h4>}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 mt-4 rounded-md">
            <h3 className="text-base font-semibold pb-4">Appartment Info</h3>
            <div className="flex gap-10 bg-white p-4 rounded-md text-sm font-semibold">
              <div className="flex items-center gap-3">
                <BiShapeSquare size={25} />
                <div>
                  <h4>{Area}sqft</h4>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IoIosBed size={20} />
                <div>
                  <h4>
                    <h4>{number_of_bedrooms} Bed</h4>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 mt-4 rounded-md">
            <h3 className="text-base font-semibold pb-4">Facilities</h3>
            <div className="flex justify-between bg-white p-4 rounded-md">
              {facilities.map((element, index) => (
                <p className="px-4 py-1 bg-[#1B3D58] text-white" key={index}>
                  {element}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
