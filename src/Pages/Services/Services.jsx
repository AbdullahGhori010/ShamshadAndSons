import { Helmet } from "react-helmet-async";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import { useEffect, useState } from "react";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Shamshad And Sons | Services</title>
      </Helmet>
      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          <PageTitleSection
            title="Our Services"
            subTitle="We take pride in delivering high-quality shelving and racking solutions for both Industrial and commercial spaces."
          />
          <div className="p-2 md:p-10">
            <h2 className="text-deep-blue font-bold text-xl md:text-xl lg:text-4xl my-5 text-center">
              What We Offer
            </h2>
            <ServicesCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
