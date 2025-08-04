import { MdOutlineDeselect } from "react-icons/md";

const SomeFacts = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-10 gap-5 md:gap-10 justify-between items-center">
      <div className="text-deep-blue flex-1 p-5">
        <h2 className="font-bold text-xl">Reliable. Affordable. Professional.</h2>
        <p className="text-wrap text-justify">
        Not all shelving and racking providers are created equal. The difference in quality, durability, and design between a DIY setup and a professionally built system is significant. At Shamshad and Sons, we take pride in being a dependable and affordable choice for all your shelving and racking needs. With years of hands-on experience, a skilled team, and a commitment to customer satisfaction, we deliver tailored storage solutions that are built to last every time.
        </p>
      </div>
      <div className="text-deep-blue flex-1 p-5">
        <h2 className="text-xl font-bold text-deep-blue">Some Facts</h2>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Over 10 Years of Experience
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Custom Designs for Commercial & Industrial Use
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Fast Turnaround & On-Site Installation Available
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Heavy-Duty Materials and Long-Lasting Finishes
        </p>
      </div>
    </div>
  );
};

export default SomeFacts;
