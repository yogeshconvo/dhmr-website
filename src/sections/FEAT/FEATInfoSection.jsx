import React from "react";

const FEATInfoSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          FACULTY OF ENGINEERING AND TECHNOLOGY (FEAT)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          FUTURE-FOCUSED. TECHNOLOGY-LED.
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] font-[Arial] tracking-wide  max-w-4xl mx-auto">
          <p className="mb-4">
            FEAT delivers student-centric learning with a strong research
            backbone—specializing in Techno-health and Clinical Engineering
            through AI-driven healthcare solutions, biomedical engineering, and
            medical technology.
          </p>

          <p className="mb-4 tracking-wide  font-[Arial]">
            We offer cutting-edge UG and PG programs covering AI, Data Science,
            Machine Learning, Computer Science, Design, Medical and Biomedical
            Engineering. Our Ph.D. programs span Computer Science, Electronics,
            Wireless Communication, UAV Technology, and Clinical
            Engineering—building deep, interdisciplinary expertise in AI, IoT,
            cybersecurity, and health informatics.
          </p>

          <p className="mb-4 font-[Arial]">
            FEAT{" "}
            <i>
              empowers students to lead in tomorrow’s most transformative
              fields—software, healthcare, and biotechnology.
            </i>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FEATInfoSection;
