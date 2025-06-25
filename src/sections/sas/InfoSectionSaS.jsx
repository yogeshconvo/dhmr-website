import React from "react";

function InfoSectionSaS() {
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          SCHOOL OF ALLIED SCIENCES, WARDHA (SAS)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[400] font-oswald-medium text-[#58595B] leading-snug mb-6">
          {"Empowering Minds Through Health Technology, Arts and Leadership Management".toUpperCase()}
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
          <p className="mb-4">
            The School of Allied Sciences (SAS) at DMIHER (DU) offers a unique
            blend of management, technology, and healthcare education. SAS
            houses three faculties: Faculty of Commerce & Management Sciences,
            Faculty of Science & Technology, and Faculty of Liberal Arts,
            Humanities & Social Sciences, providing 04 UG, 06 PG, and 05 PhD
            programs preparing students for careers at the intersection of
            health, technology, and leadership.
          </p>

          <p className="mb-4">
            With a strong focus on health IT, hospital management, and related
            fields, SAS integrates business acumen, technical expertise, and
            healthcare knowledge to develop innovative professionals for a
            rapidly evolving world.
          </p>

          <p className="mb-4">
            Equipped with state-of-the-art infrastructure, industry-driven
            learning, and expert faculty, SAS emphasizes teamwork,
            collaboration, and hands-on experience to ensure students are
            globally competitive. Affiliated with DMIHER (DU), a NAAC A++
            accredited university, SAS provides high-quality education and
            healthcare leadership training, shaping future industry leaders.
          </p>
        </div>
      </section>
    </div>
  );
}

export default InfoSectionSaS;
