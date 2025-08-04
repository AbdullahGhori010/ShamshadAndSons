const FrequentlyQuestion = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-deep-blue">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {/* Question No. 01  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q1</sup> Do you offer custom sizes and designs?
          </div>
          <div className="collapse-content">
            <p>
         Yes, we specialize in custom-built shelves and racks based on your specific space, load requirements, and design preferences.
            </p>
          </div>
        </div>

        {/* Question No. 02  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q2</sup> What materials do you use for the racks and shelves?
          </div>
          <div className="collapse-content">
            <p>
             We use high-quality, durable materials like powder-coated steel, stainless steel, and heavy-duty metals to ensure long-lasting strength and performance.
            </p>
          </div>
        </div>

        {/* Question No. 03  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3"/>
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q3</sup> Can you handle large commercial or industrial orders?
          </div>
          <div className="collapse-content">
            <p>
     Absolutely. We are equipped to fulfill both small-scale and bulk orders for warehouses, supermarkets, retail chains, and more.
            </p>
          </div>
        </div>

        {/* Question No. 04  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q4</sup> Do you provide delivery and installation services?
          </div>
          <div className="collapse-content">
            <p>
             Yes, we offer both delivery and professional installation services to ensure proper setup and safety.
            </p>
          </div>
        </div>

        {/* Question No. 05  */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q5</sup> How long does it take to manufacture and deliver?
          </div>
          <div className="collapse-content">
            <p>
           Delivery timelines depend on the order size and customization, but most projects are completed within 7–14 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
