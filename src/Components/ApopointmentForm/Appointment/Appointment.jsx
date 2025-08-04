import Button from "../../Shared/Button/Button";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Appointment = () => {
  return (
    <div className="bg-deep-blue text-white px-2 py-5 md:p-10 w-full flex flex-col justify-center items-center text-center space-y-5">
      <h4 className="text-lg md:text-xl font-bold text-white-coffee tracking-wide">
        Get Started
      </h4>
      <h2 className="text-3xl md:text-5xl font-extrabold font-playfair leading-tight">
        Book Your Appointment
      </h2>
      <p className="text-white-coffee max-w-xl">
        Ready to get started? Call us today or fill out our form for a fast, no hassle experience.
      </p>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-6 pt-4">
        <Button
          url="https://wa.me/923170053391" // Replace with actual WhatsApp number
          target="_blank"
          extraClass="border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-3 rounded-2xl text-white text-3xl transition-all duration-300"
          afterIcn={<RiWhatsappFill />}
        />
        <Button
          url="https://www.facebook.com/najatul6/"
          target="_blank"
          extraClass="border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-3 rounded-2xl text-white text-3xl transition-all duration-300"
          afterIcn={<FaFacebook />}
        />
        <Button
          url="https://www.instagram.com/najatulislam1/"
          target="_blank"
          extraClass="border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-3 rounded-2xl text-white text-3xl transition-all duration-300"
          afterIcn={<RiInstagramFill />}
        />
      </div>
    </div>
  );
};

export default Appointment;
