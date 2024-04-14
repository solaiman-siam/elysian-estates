import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperBtn from "./SwiperBtn";

function Hero() {
  return (
    <Swiper
      spaceBetween={0}
      effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectFade]}
      className="mySwiper "
    >
      <SwiperSlide>
        <div className="bg-hero1 h-[500px] md:h-[650px] lg:h-[700px]  bg-cover bg-center relative ">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex pl-10 md:pl-16 lg:pl-20 justify-center flex-col">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-xs lg:w-full md:w-full leading-7  w-8/12 pb-4 font-bold text-white tracking-[0.4rem]"
            >
              WELCOME TO ELYSIAN ESTATES
            </h4>
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              className="lg:text-[65px] lg:w-full md:w-full w-7/12 text-3xl md:text-5xl font-bold text-white lg:leading-[80px]"
            >
              developing new ways of <br></br> living
            </h1>
            <button
              data-aos="fade-up"
              data-aos-duration="1300"
              className="btn rounded-sm w-fit bg-transparent mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold"
            >
              Discover Now
            </button>
            <div className="absolute right-8 bottom-6 lg:right-14 md:right-14 md:bottom-10 lg:bottom-10">
              <SwiperBtn></SwiperBtn>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero2 h-[500px] md:h-[650px] lg:h-[700px] bg-cover bg-center">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex pl-10 md:pl-16 lg:pl-20  justify-center flex-col">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-sm lg:pb-4 leading-7 lg:w-full md:w-full w-8/12  md:pb-4 uppercase font-medium text-white tracking-[0.5rem]"
            >
              Luxurious Private Island
            </h4>
            <h1 className="lg:text-[65px] text-3xl md:text-5xl font-semibold text-white leading-[80px]">
              Jenson Belts
            </h1>
            <button className="btn rounded-sm w-fit bg-transparent mt-2 md:mt-7  lg:mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold">
              Discover Now
            </button>
            <div className="absolute right-8 bottom-6 lg:right-14 md:right-14 md:bottom-10 lg:bottom-10">
              <SwiperBtn></SwiperBtn>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero3 h-[500px] md:h-[650px] lg:h-[700px] bg-cover bg-center">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex  pl-10 md:pl-16 lg:pl-20  justify-center flex-col">
            <h4 className="text-sm leading-7 lg:pb-4 md:pb-4  lg:w-full md:w-full w-8/12 uppercase font-medium text-white tracking-[0.5rem]">
              Mansions Development
            </h4>
            <h1 className="lg:text-[65px] text-3xl md:text-5xl font-semibold text-white leading-[80px]">
              North District
            </h1>
            <button className="btn rounded-sm w-fit bg-transparent mt-2 md:mt-7  lg:mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold">
              Discover Now
            </button>
            <div className="absolute right-8 bottom-6 lg:right-14 md:right-14 md:bottom-10 lg:bottom-10">
              <SwiperBtn></SwiperBtn>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
