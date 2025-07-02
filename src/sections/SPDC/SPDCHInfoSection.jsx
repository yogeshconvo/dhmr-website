import React from "react";
import { useState } from "react";

const SPDCHInfoSection = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="py-12">
        <h2 className="flex items-center text-[#F04E30] font-[500] font-oswald-medium text-3xl tracking-wide uppercase mb-6">
          <hr className="flex-grow border-t border-[#F04E30] " />
          <span className="px-2 whitespace-nowrap">
            SHARAD PAWAR DENTAL COLLEGE & HOSPITAL (SPDCH)
          </span>
          <hr className="flex-grow border-t border-[#F04E30] " />
        </h2>
        <section className="bg-white text-center px-4 sm:px-8 md:px-10 py-2  mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-oswald-medium text-[#707070] font-[500] leading-snug mb-6">
            REDEFINING DENTAL LEARNING WITH <br />
            PRECISION, PURPOSE, AND PROGRESS
          </h1>

          {/* Body Text */}
          <div className="text-[#58595B] text-base sm:text-sm font-oswald-light leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              Established in 1991, SPDCH is a national benchmark in dental
              education, research, and clinical care. Ranked among India's top
              25 dental institutions (NIRF), it is powered by a faculty with
              850+ years of experience—75% holding additional or doctoral
              qualifications. Since 2022–23, SPDCH has adopted Competency-Based
              Dental Education (CBDE), a patient-focused, tech-enabled
              curriculum. With UG, 8 PG, and 5 Executive Development Programs,
              it equips students for competitive exams, career growth, and
              entrepreneurship.
            </p>
            {!showMore && (
            <button
              className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
              onClick={() => setShowMore(true)}
            >
              View More
            </button>
          )}
          {showMore && (
            <>
              <p className="mb-4">
                Immersive, hands-on learning and clinical readiness — our students
                work with CBCT, CAD-CAM, simulation labs, and 3D theaters, gaining
                hands-on experience in real-world settings, backed by a 1,500+
                bedded multi-specialty hospital. This enables immersive learning
                across advanced procedures, from cancer therapies to full-mouth
                rehabilitations. A robust research ecosystem—with 2,000+
                publications, 30+ patents, and ₹10+ crore in funded
                projects—shapes students into contributors and changemakers in
                dental science.
              </p>
              <p className="italic mt-6">
                With a legacy of excellence, cutting-edge infrastructure, and
                global collaborations, SPDCH continues to lead the future of
                dental education and healthcare—both in India and beyond.
              </p>
              <button
                className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
                onClick={() => setShowMore(false)}
              >
                View Less
              </button>
            </>
          )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SPDCHInfoSection;
