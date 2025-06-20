import React from "react";

const IQACInfoSection = () => {
  return (
    <div className="py-12 px-4">
      <section className="bg-white text-center mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          NURTURING A CULTURE
          <br /> OF CONTINUOUS IMPROVEMENT
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] text-sm sm:text-base max-w-4xl mx-auto">
          <p className="mb-4">
            In alignment with the National Assessment and Accreditation Council
            (NAAC - Bangalore) guidelines for every accredited institution, the
            Internal Quality Assurance Cell (IQAC) at DMIHER (DU) embodies the
            institution’s commitment to quality sustenance and enhancement.
            Embedded at the core of the university’s future vision, IQAC leads
            the foundational steps toward internalizing and institutionalizing
            quality enhancement initiatives. With a focus on systematic,
            catalytic progress, the IQAC integrates quality benchmarks,
            disseminates best practices, and fosters a culture of continuous
            learning and institutional excellence.
          </p>
          <p className="mb-4">
            Structured into four key functional units—Rankings & Accreditations,
            Quality Benchmarks & Best Practices, Quality Dissemination &
            Circles, and Feedbacks, Audits & Program Evaluation—the IQAC stands
            as a cornerstone of DMIHER (DU)’s academic ecosystem, driving
            quality-driven growth and global recognition.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IQACInfoSection;
