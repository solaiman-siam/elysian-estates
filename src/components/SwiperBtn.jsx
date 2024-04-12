import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function SwiperBtn() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-2">
      <button
        className="cursor-pointer px-4 py-4  border bg-transparent transtion duration-300 hover:bg-[#cfa436]"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack color="white" size={30} />
      </button>
      <button
        className="cursor-pointer px-4 py-4 border bg-transparent transtion duration-300 hover:bg-[#cfa436]"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward color="white" size={30} />
      </button>
    </div>
  );
}

export default SwiperBtn;
