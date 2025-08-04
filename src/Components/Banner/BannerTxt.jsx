import Button from "../Shared/Button/Button";
import { FaUpRightFromSquare } from "react-icons/fa6";

const BannerTxt = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg md:text-5xl lg:text-6xl font-extrabold text-white-coffee ">
        Racking & Shelving Manufacturing Company
      </h1>
      <p className="text-xs md:text-lg text-justify text-white">
        Shamshad And Sons is one of the largest racking and shelving supplier in Pakistan with state of the art manufacturing facility.

We also offers one window solution for all the manufacturing needs from designing, manufacturing to colouring and installation.
      </p>
      <Button
        btnText="Get A Free Quote"
        btnIcon={<FaUpRightFromSquare />}
        url="https://wa.me/923170053391"
        extraClass="bg-white text-deep-blue border-2 hover:border-white-coffee hover:bg-transparent hover:text-white-coffee  p-3 shadow-none duration-500"
        />
    </div>
  );
};

export default BannerTxt;
