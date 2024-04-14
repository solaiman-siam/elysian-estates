import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="my-10 lg:my-24 md:my-24 max-w-6xl mx-auto">
      <Helmet>
        <title>Elysian | Contact </title>
      </Helmet>
      <div className="">
        <div className="bg-[#253046] lg:pl-24 md:pl-8 py-10 md:py-24  lg:py-24 grid grid-cols-1 md:grid-cols-3 px-6 lg:px-0 md:px-0  lg:grid-cols-3 gap-14">
          <div>
            <div className="border-l-[3px] border-[#BA9230] pl-6">
              <h3 className="text-[#BA9230] text-xs font-semibold tracking-[2px]  lg:text-sm md:text-sm uppercase md:pb-4 pb-2 lg:pb-5">
                Contact Us
              </h3>
              <h2 className="lg:text-[40px] md:text-4xl text-2xl font-bold text-white">
                Our Offices
              </h2>
            </div>
            <p className="  pt-8 text-[#b8b8b8]">
              The arrangement and layout of the apartments maximises natural
              light, opening to elegant private balconies, which provide
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white pb-8">
              Store In London
            </h3>
            <h4 className="text-[#b8b8b8] pb-10 w-10/12">
              123 Fifth Floor East 26th Street, New York, NY 10011
            </h4>
            <h4 className="text-[#b8b8b8] w-10/12">
              contact@parkco.com +1 246-345-0695
            </h4>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl pb-8">
              Store In Istanbul
            </h3>
            <h4 className="text-[#b8b8b8] w-10/12 pb-10">
              123 Fifth Floor East 26th Street, New York, NY 10011
            </h4>
            <h4 className="text-[#b8b8b8] w-10/12">
              contact@parkco.com +1 246-345-0695
            </h4>
          </div>
        </div>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
