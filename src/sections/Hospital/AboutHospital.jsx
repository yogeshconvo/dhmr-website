import React from "react";

function AboutHospital() {
  return (
    <section className="w-full px-4 py-16 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-[500] font-oswald-medium text-[#707070] uppercase leading-tight">
          A HEALTHCARE ECOSYSTEM BUILT TO
          <br /> SERVE. DESIGNED TO EXCEL.
        </h2>
        <p
          className="mt-6 text-base md:text-sm text-[#58595B] leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          From primary care to advanced tertiary services, DMIHER’s hospital
          network across Wana and Wardha campuses brings together scale,
          specialization, and compassion. With over 2,500 beds, NABH- and
          NABL-accredited facilities, and a reach of over 50 lakh lives, these
          hospitals deliver world-class diagnostics, surgeries, critical care,
          maternal-child services, oncology, and super-speciality treatments.
          Whether in the heart of rural Vidarbha or the evolving healthcare hub
          of Nagpur, every campus is united by one mission: to make quality
          healthcare accessible, affordable, and exceptional.
        </p>
      </div>
    </section>
  );
}

export default AboutHospital;
