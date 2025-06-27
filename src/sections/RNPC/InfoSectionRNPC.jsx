import React, { useState } from "react";

function InfoSectionRNPC() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          Ravi Nair Physiotherapy College (RNPC)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          {"Advancing the Science of Movement".toUpperCase()}
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
          <p className="mb-4">
            Established in 1998, RNPC has grown into a distinguished institution
            with a global reputation for excellence in physiotherapy education,
            research, and clinical care. Recognized across India and beyond, it
            leads in the science of human movement and rehabilitation with
            state-of-the-art facilities.
          </p>

          <p className="mb-4">
            Undergraduate, postgraduate, and PhD programs blend clinical
            expertise with research depth—guided by expert faculty and supported
            by world-class hospital facilities. Covering Musculoskeletal,
            Neurological, Cardiorespiratory, Sports, Pediatric, and Oncological
            domains, the curriculum equips students to tackle real-world
            challenges. Electives at the undergraduate level allow students to
            pursue focused interests, while a vibrant research culture fosters
            innovation with direct patient impact.
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
            <p className="mb-4">
              <b>
                First institution in India to adopt the Competency-Based Medical
                Education (CBME) curriculum for Physiotherapy
              </b>
              &nbsp;|&nbsp;
              <b>Attached hospital, offering unparalleled clinical exposure</b>
              &nbsp;|&nbsp;
              <b>
                Partnerships and affiliations with prestigious organisations,
                including Sports Authority of India
              </b>
              &nbsp;|&nbsp;
              <b>
                Workshops and sessions with National and International adjunct
                faculties
              </b>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default InfoSectionRNPC;
