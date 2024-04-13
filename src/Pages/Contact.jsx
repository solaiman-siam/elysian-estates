import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="my-24 max-w-6xl mx-auto">
      <Helmet>
        <title>Elysian | Contact </title>
      </Helmet>
      <div className="">
        <div className="bg-[#253046] pl-24  py-24 grid grid-cols-3 gap-14">
          <div>
            <div className="border-l-[3px] border-[#BA9230] pl-6">
              <h3 className="text-[#BA9230] text-xs uppercase font-bold tracking-[4px] pb-5">
                Contact Us
              </h3>
              <h2 className="text-4xl font-bold text-white">Our Offices</h2>
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
