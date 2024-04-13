import expert1 from "../../src/assets/images/teambox_9.jpg";
import expert2 from "../../src/assets/images/teambox_10.jpg";
import expert3 from "../../src/assets/images/teambox_11.jpg";
import expert4 from "../../src/assets/images/teambox_8.jpg";
import expert5 from "../../src/assets/images/teambox_7.jpg";
import expert6 from "../../src/assets/images/teambox_6.jpg";
import expert7 from "../../src/assets/images/teambox_5.jpg";
import expert8 from "../../src/assets/images/teambox_4.jpg";
import expert9 from "../../src/assets/images/teambox_3.jpg";
import expert10 from "../../src/assets/images/teambox_2.jpg";
import expert11 from "../../src/assets/images/teambox_1.jpg";

function About() {
  return (
    <div className="  pt-20 bg-[#FBFAF8]">
      {/* Our Professional Team */}
      <div className="max-w-6xl mx-auto">
        <div className="border-l-[3px] pl-6 border-[#cfa436]">
          <h4 className="text-[#cfa436] font-semibold tracking-[2px]  text-sm uppercase ">
            our team
          </h4>
          <h2 className="text-[40px] font-bold ">Meet The Professional Team</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-20 ">
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert1} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                DEREK COTNER
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert2} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                KENNETH SPIERS
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert3} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                REBECCA EASON
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10"></div>

      {/* Our Experts */}
      <div className="max-w-6xl mx-auto pt-20">
        <div className="flex justify-between">
          <div className="border-l-[3px] pl-6 border-[#cfa436]">
            <h4 className="text-[#cfa436] font-semibold tracking-[2px]  text-sm uppercase ">
              our team
            </h4>
            <h2 className="text-[40px] font-bold ">Our Experts</h2>
          </div>
          <p className="w-5/12 text-[#767676]">
            We leverage our breadth of asset classes, vertically integrated
            services, unique business model, and in-house development and
            management expertise
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-20 ">
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert4} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Eloise Smith
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert5} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Ellienara Ara
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert6} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Alex Martinez
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert7} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Niceco Smith
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert8} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Jonin Sirim
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert9} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Tomax Smith
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert10} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Sella Martinez
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
          <div>
            <div className=" group relative mt-14 mb-4">
              <span className=" relative  group-hover:text-white">
                <img className="w-full " src={expert11} alt="" />
              </span>
              <span className="absolute left-0 duration-500  bottom-0 w-0 h-full transition-all bg-[#d0a946] z-0 group-hover:w-full bg-opacity-80"></span>
            </div>
            <div className="border-l-[1px] pl-2 w-fit border-[#d0a946]">
              <h3 className=" hover:text-[#d0a946] text-xl font-bold">
                Eloise Smith
              </h3>
              <h4 className="pt-2 text-base text-[#6b6b6b]">
                Executive Director
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
