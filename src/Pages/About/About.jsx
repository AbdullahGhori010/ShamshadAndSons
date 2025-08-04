import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import SomeFacts from "../../Components/SomeFacts/SomeFacts";
import { useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Shamshad And Sons | About</title>
      </Helmet>
      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
<PageTitleSection
  title="About Us"
  subTitle="We are a trusted, locally-owned company specializing in custom shelving and racking solutions for every space."
  className="text-center max-w-2xl mx-auto text-7xl md:text-9xl font-extrabold leading-tight"
/>


          <WhatWeDo />
          <SomeFacts />
        </div>
      )}
    </div>
  );
};

export default About;
