import { FaArrowRight } from "react-icons/fa6";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Shared/Button/Button";
import {  useLocation } from "react-router-dom";

const WhatWeDo = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center p-2 md:p-5">
      <div className="px-2 md:p-5">
        <ImageCard />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-4xl md:text-8xl lg:text-3xl font-bold text-deep-blue">
            What We Do
          </h1>
          
        </div>
        <div className="space-y-5 text-wrap">
          <h2 className="text-xl md:text-2xl font-bold text-center">
           Experts in Shelves & Racks Manufacturing
          </h2>
          <p className="text-left md:text-justify">
          At Shamshad and Sons, we specialize in designing, manufacturing, and installing a wide range of high-quality shelves and racks tailored to meet the needs of various industries and spaces. Our product lineup includes:

Supermarket Display Racks

Warehouse Storage Shelves

Pharmacy and Cosmetic Racks

Garment Display Racks

Book and Stationery Racks

Home and Kitchen Shelves

Custom-Made Industrial Racks

Whether you're setting up a retail outlet, organizing a warehouse, or enhancing your home, our solutions are built for durability, space efficiency, and a polished, professional appearance.
          </p>
          <div>
            {location.pathname === "/about" || (
                <Button
                url="/about"
                  btnText="Learn More"
                  btnIcon={<FaArrowRight />}
                  extraClass="bg-deep-blue hover:bg-white hover:border-2 border-2 hover:border-deep-blue text-white hover:text-deep-blue p-2 animate-all duration-500 "
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
