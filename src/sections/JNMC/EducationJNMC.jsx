import React from "react";
import EducationBg from "../../assets/JNMC/edication-bg.png";



function EducationJNMC() {
  return (
    <>
      {/* Section 1: Background Image with Text */}
      <section
        className="bg-cover bg-center bg-no-repeat px-6 md:px-40"
        style={{ backgroundImage: `url(${EducationBg})` }}
      >
        <div className="">
          <div className="mx-auto font-[Arial] px-6 py-16 container">
            <div className="mb-8">
              <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
                <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
                MEDICAL EDUCATION UNIT, <br /> JNMC, WARDHA
              </h2>

              <p className="text-gray-600 text-base max-w-5xl tracking-normal leading-relaxed mb-6">
                The Medical Education Unit (MEU) at Jawaharlal Nehru Medical College, Wardha, is the in-house body
                of faculty representatives from Pre-Clinical, Para-Clinical and Clinical subjects, who plays a
                pivotal role in ensuring the quality of medical education by focusing on implementation, monitoring
                and evaluation of faculty training, curriculum revision, development of learning resource material,
                innovation in instructional tools and assessment.
              </p>

              <p className="text-gray-600 text-base max-w-5xl tracking-normal leading-relaxed mb-6">
                The MEU aims to equip medical educators with advanced teaching methodologies and pedagogical skills,
                ensuring the delivery of effective and contemporary medical education, a standardized approach to
                medical education across institutions and continuous improvement of educational practices and policies
                within the institution.
              </p>

              <a href="#" className="text-[#269BFF] text-sm underline">
                Know more
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default EducationJNMC;
