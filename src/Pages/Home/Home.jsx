import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BannerTxt from "../../Components/Banner/BannerTxt";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import ShapeImage from "../../Components/ShapeImage/ShapeImage";
import ShapeDetails from "../../Components/ShapeImage/ShapeDetails";
import WhyChoseUs from "../../Components/WhyChoseUs/WhyChoseUs";
import Button from "../../Components/Shared/Button/Button";
import FrequentlyQuestion from "../../Components/FrequentlyQuestion/FrequentlyQuestion";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1500); 
  }, []);
  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Shamshad And Sons| Home</title>
      </Helmet>
      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          {/* Carousal here */}
          <section className="relative">
            {/* Banner Here  */}
            <div>
              <Banner />
              <div
                className="absolute z-10 top-0 bottom-0 right-0 left-0"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%,  rgba(0,212,255,0.025647759103641476) 100%)",
                }}
              ></div>
            </div>

            {/* Button Text Here  */}
            <div className="absolute top-0 bottom-0 md:left-10 z-20 p-2 md:w-1/3 flex flex-col justify-center items-start">
              <BannerTxt />
            </div>
          </section>

          {/* What we do  */}
          <section>
            <WhatWeDo />
          </section>

          {/* Service Section  */}
          <section className="p-5 flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-6xl  font-bold text-deep-blue mb-4 text-center">
                Our Services
              </h1>
        
            </div>
            <ServicesCard />
            <Button
              btnIcon="&raquo;"
              url="/services"
              btnText="View All Services"
              extraClass="bg-[#ac1929] text-white border-2 border-[#ac1929] px-2 py-1 hover:bg-transparent hover:text-[#ac1929] animate-all duration-500 "
            />
          </section>

          {/* Best Deal section  */}
          <section className="flex md:flex-row flex-col-reverse justify-center items-center gap-6 p-2 md:p-5">
            <ShapeDetails />
            <ShapeImage />
          </section>

          {/* Why Choose Us Section  */}
          <section className="py-2">
            <WhyChoseUs />
          </section>

          {/* Frequently Questions Section */}
          <section className="p-2 md:p-5">
            <FrequentlyQuestion />
          </section>
        </div>
      )}
      
    </div>
  );
};

export default Home;
