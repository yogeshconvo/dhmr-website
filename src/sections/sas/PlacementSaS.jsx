import React from "react";
// استبدل هذه المسارات بالمسارات الحقيقية لشعارات الشركات
// import maxHealthcare from "../../assets/sas/placement/maxhealthcare.png";
// import tcs from "../../assets/sas/placement/tcs.png";
// import infosys from "../../assets/sas/placement/infosys.png";
// import axisBank from "../../assets/sas/placement/axisbank.png";
// import dmart from "../../assets/sas/placement/dmart.png";
// import ceinsys from "../../assets/sas/placement/ceinsys.png";
// import nci from "../../assets/sas/placement/nci.png";
// import max from "../../assets/sas/placement/max.png";

const logos = [
  { src: null, alt: "Max Healthcare" },
  { src: null, alt: "TCS" },
  { src: null, alt: "Infosys" },
  { src: null, alt: "Axis Bank" },
  { src: null, alt: "DMart" },
  { src: null, alt: "Ceinsys Tech AI" },
  { src: null, alt: "National Cancer Institute" },
  { src: null, alt: "Max Healthcare" },
];

function PlacementSaS() {
  return (
    <section className="bg-white px-6 py-16 container my-[60px]">
      <div className="max-w-7xl mx-auto font-[Arial]">
        <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
          <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
          Placement Opportunities
        </h2>
        <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed mb-8">
          SAS offers <b>100% placement assistance</b> with a strong network of
          industry partners across healthcare, IT, retail, and banking sectors.
          Students have been placed with leading organizations such as Max
          Healthcare, TCS, Infosys, and Axis Bank, among others. With
          opportunities ranging from paid internships to full-time roles, the
          institute ensures hands-on industry exposure and career-ready
          training.
          <br />
          <span className="inline-block mt-2 text-[#269BFF] font-bold">
            Highest package offered: ₹12 LPA
          </span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center px-4 pt-4 mb-10">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-[#f2f6fa] rounded-xl shadow p-4 flex items-center justify-center w-full h-24 mb-2">
                {/* <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-16 w-full"
                  style={{ maxWidth: 110 }}
                /> */}
              </div>
              <span className="text-xs text-[#707070]">{logo.alt}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <div className="bg-[#E3F2FD] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#269BFF]">₹12 LPA</div>
            <div className="text-xs text-[#58595B] mt-1">Highest Package</div>
          </div>
          <div className="bg-[#FFF7E6] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#F7941D]">100%</div>
            <div className="text-xs text-[#58595B] mt-1">
              Placement Assistance
            </div>
          </div>
          <div className="bg-[#F0F6FF] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#122E5E]">Paid</div>
            <div className="text-xs text-[#58595B] mt-1">
              Internships & Training
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementSaS;
