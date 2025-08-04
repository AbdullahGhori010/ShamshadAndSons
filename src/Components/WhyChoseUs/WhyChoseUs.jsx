import Button from "../Shared/Button/Button";
import { FaPhoneAlt } from "react-icons/fa";
import backgroundImage from "../../assets/Slider/1.jpg"

const WhyChoseUs = () => {
  return (
    <div className="w-full bg-cover bg-fixed px-5 py-10 md:p-36" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col gap-6 justify-center items-center bg-deep-blue rounded-2xl py-5 px-7 md:py-20 md:px-10">
        <h2 className="text-base md:text-xl lg:text-5xl font-bold text-white-coffee">
          Why Choose Us?
        </h2>
        <p className="text-center font-bold text-white text-xs md:text-base">
       When you choose us for your shelving and racking needs, you're partnering with a professional, experienced team dedicated to quality, durability, and customer satisfaction. We deliver custom storage solutions that are built to last, tailored to your space, and installed with precision—backed by reliable service you can trust.
        </p>
        <Button
          afterIcn={<FaPhoneAlt />}
          url="https://wa.me/923170053391"
          btnText="contact us"
             extraClass="bg-[#ac1929] text-white border-2 border-[#ac1929] px-2 py-1 hover:bg-transparent hover:text-[#FFFFFF] animate-all duration-500 "
        />
      </div>
    </div>
  );
};

export default WhyChoseUs;
