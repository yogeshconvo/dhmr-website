import React from "react";
import hospital from "../../assets/RNPC/hospital/hospital.jpeg";
function AffiliatedHospitalsRNPC() {
  return (
    <div className="bg-[#fefaf3] py-24 ">
      <div className="container  flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Left Content */}
        <div className="w-full lg:w-[540px] pb-6 lg:pb-10 flex-1">
          {/* Heading */}
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
              <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
              AFFILIATION TO HOSPITALS
            </h2>
          </div>

          {/* Subheading Paragraph */}
          <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
            Ravi Nair Physiotherapy College (RNPC) is a leading center for
            physiotherapy-led rehabilitation, delivering patient-centered care
            across a wide network of advanced healthcare facilities. With a
            strong foundation in clinical expertise and academic integration,
            RNPC ensures holistic recovery through both outpatient and inpatient
            services.
          </p>
          <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
            Its physiotherapy departments operate within premier hospitals under
            DMIHER, including:
          </p>
          <ul className="text-[#269BFF] text-base font-oswald font-[500] mb-2 pl-5 list-disc">
            <li>AVBRH for Musculoskeletal, Pediatric, and Community OPDs</li>
            <li>
              Shalinitai Meghe Superspeciality Hospital for Neuro and Pulmonary
              Rehabilitation
            </li>
            <li>
              Siddharth Gupta Memorial Cancer Hospital for specialized Oncology
              Rehabilitation
            </li>
          </ul>
          <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
            From Neuro and Musculoskeletal care to Pediatric, Pulmonary, and
            Oncology rehabilitation, RNPC offers a full spectrum of
            services—including Community-Based Rehabilitation (CBR), ICU
            physiotherapy, and Sports Physiotherapy—delivered by trained experts
            through evidence-based protocols.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-[#F04E30] underline font-oswald-medium text-base"
          >
            Know More
          </a>
        </div>

        {/* Right Image Section (optional, add hospital/rehab image if available) */}
        <div className="relative w-full lg:w-auto flex-2">
          <img
            src={hospital}
            alt="Affiliated Hospitals"
            className="w-full max-w-full lg:h-[500px] h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AffiliatedHospitalsRNPC;
