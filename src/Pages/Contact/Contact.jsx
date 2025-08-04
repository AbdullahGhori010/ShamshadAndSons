import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import AppointmentForm from "../../Components/ApopointmentForm/AppointmentForm";
import CallNow from "../../Components/CallNow/CallNow";
import { useEffect, useState } from "react";

const Contact = () => {
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
        <title>Shamshad And Sons | Contact</title>
      </Helmet>

      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          <PageTitleSection
            title="Contact Us"
            subTitle="Reach out to us directly on WhatsApp—our team is available to assist you quickly and efficiently."
          />
          <div className="my-10 shadow-xl">
            <AppointmentForm />
            <CallNow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;


