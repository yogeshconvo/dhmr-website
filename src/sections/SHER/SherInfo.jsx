import React from "react";

const SherInfo = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          SCHOOL OF HIGHER EDUCATION AND RESEARCH (SHER)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          REDEFINING ACADEMIC EXCELLENCE THROUGH <br /> INNOVATION,
          COLLABORATION, AND RIGOUR
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] text-sm sm:text-base max-w-4xl mx-auto">
          <p className="mb-4">
            SHER shapes the university’s academic landscape through a unified
            framework of excellence. It sets guidelines, SOPs, and
            implementation frameworks for new programs, curriculum updates,
            instructional methods, learner-centric approaches, assessments, and
            learning resources. SHER also drives faculty development, capacity
            building, and continuous professional growth.
          </p>

          <p className="mb-4">
            Internationally recognized as one of India’s four AMEE networking
            centers, SHER collaborates with McGraw Hill to create high-quality
            instructional materials. Two of its educational units are accredited
            by the National Medical Commission (NMC) and the National Commission
            for Indian System of Medicine (NCISM) for faculty development in
            medical and Ayurveda education. Twelve specialized educational units
            ensure consistent, high-standard academic policy implementation.
          </p>

          <p className="mb-4">
            <span className="font-bold">Core Areas of Impact:</span> Curriculum
            Design and Mapping (including Outcome-Based Education) I Academic
            Innovation I Skill Training and Development I Program Evaluation I
            Educational Research
          </p>
        </div>
      </section>
    </div>
  );
};

export default SherInfo;
