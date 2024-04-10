import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

function Hero() {
  return (
    <div className="">
      <MDBCarousel className="" showIndicators dark fade>
        <MDBCarouselItem itemId={1}>
          <div className=" bg-cover h-[700px] bg-hero1 ">
            <div className="w-full h-full bg-[#493219] bg-opacity-45">
              <MDBCarouselCaption>
                <div className="flex flex-col pt-10 text-white items-start w-full ">
                  <h5 className="text-4xl font-bold">Second slide label</h5>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="btn btn-primary btn-outline">
                    Expore More
                  </button>
                </div>
              </MDBCarouselCaption>
            </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <div className=" bg-cover h-[700px] bg-hero2 ">
            <div className="w-full h-full bg-[#5b3d1a] bg-opacity-45">
              <MDBCarouselCaption>
                <div className="flex flex-col pt-10 text-white items-start w-full ">
                  <h5 className="text-4xl font-bold">Second slide label</h5>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="btn btn-primary btn-outline">
                    Expore More
                  </button>
                </div>
              </MDBCarouselCaption>
            </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <div className=" bg-cover h-[700px] bg-hero3 ">
            <div className="w-full h-full bg-[#4e361a] bg-opacity-45">
              <MDBCarouselCaption>
                <div className="flex flex-col pt-10 text-white items-start w-full">
                  <h5 className="text-4xl font-bold">Second slide label</h5>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="btn btn-primary btn-outline">
                    Expore More
                  </button>
                </div>
              </MDBCarouselCaption>
            </div>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default Hero;
