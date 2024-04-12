import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

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
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-hero1 h-[700px] bg-cover bg-center">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex pl-20 justify-center flex-col">
            <h4 className="text-sm pb-4 font-medium text-white tracking-[0.5rem]">
              WELCOME TO ELYSIAN ESTATES
            </h4>
            <h1 className="text-[65px] font-bold text-white leading-[80px]">
              developing new ways of <br></br> living
            </h1>
            <button className="btn rounded-sm w-fit bg-transparent mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold">
              Discover Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero2 h-[700px] bg-cover bg-center">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex pl-20 justify-center flex-col">
            <h4 className="text-sm pb-4 uppercase font-medium text-white tracking-[0.5rem]">
              Luxurious Private Island
            </h4>
            <h1 className="text-[65px] font-semibold text-white leading-[80px]">
              Jenson Belts
            </h1>
            <button className="btn rounded-sm w-fit bg-transparent mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold">
              Discover Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero3 h-[700px] bg-cover bg-center">
          <div className="w-full h-full bg-[#231d06] bg-opacity-60 flex pl-20 justify-center flex-col">
            <h4 className="text-sm pb-4 uppercase font-medium text-white tracking-[0.5rem]">
              Mansions Development
            </h4>
            <h1 className="text-[65px] font-semibold text-white leading-[80px]">
              North District
            </h1>
            <button className="btn rounded-sm w-fit bg-transparent mt-7 hover:bg-[#BA9230] text-white px-8 btn-md font-bold">
              Discover Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
