import Button from "../Shared/Button/Button";

const GetAQuote = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-deep-blue mb-8 tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Get A Free Quote
      </h2>

      <form className="flex flex-col gap-6">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-xl border border-deep-blue shadow-inner text-deep-blue bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-xl border border-deep-blue shadow-inner text-deep-blue bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl border border-deep-blue shadow-inner text-deep-blue bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-3 rounded-xl border border-deep-blue shadow-inner text-deep-blue bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 resize-none"
        ></textarea>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <Button
            btnText="Send Message"
            extraClass="bg-deep-blue px-6 py-2 text-lg border-2 border-deep-blue text-white rounded-xl hover:bg-transparent hover:text-deep-blue transition-all duration-500"
          />
        </div>
      </form>
    </div>
  );
};

export default GetAQuote;
