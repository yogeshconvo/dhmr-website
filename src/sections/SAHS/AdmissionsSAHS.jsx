import React from "react";

function AdmissionsSAHS() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
          <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
          <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            International Admissions
          </span>
          <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        </h2>

        {/* Subheading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] uppercase leading-snug mb-6 text-center">
          Your Gateway to a Global Healthcare Career
        </h1>

        {/* Overview */}
        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-3xl mx-auto text-center">
          <p className="mb-4">
            The School of Allied Health Sciences (SAHS) offers an inclusive,
            globally connected academic environment where students from across
            the world come together to pursue healthcare excellence. With
            internationally benchmarked programs, expert mentorship, and
            hands-on clinical training, SAHS prepares you to lead and innovate
            in diverse healthcare settings worldwide.
          </p>
          <p className="mb-4 font-semibold">
            Globally Recognized, Internationally Benchmarked Curriculum |
            Clinical Training in Super-Specialty Hospitals & Simulation Labs |
            Expert Faculty of Doctors, Researchers & Educators | Global
            Placement & Internship Support | Smart Classrooms, Labs & Research
            Infrastructure | Dedicated Cell for Visa, Admission & Accommodation
            Support | Merit-based scholarships and financial aid programs
          </p>
        </div>

        {/* Programs Offered */}
        <div className="mt-10 flex flex-col items-center">
          <h3 className="text-xl font-bold text-[#F04E30] mb-2 uppercase">
            Programs Offered
          </h3>
          <ul className="flex flex-wrap justify-center gap-8 mb-6">
            {["UG", "PG"].map((program, idx) => (
              <li
                key={idx}
                className="bg-[#F5F5F5] rounded-lg px-8 py-4 text-xl font-oswald-medium shadow hover:bg-[#F25022] hover:text-white cursor-pointer transition"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              >
                {program}
              </li>
            ))}
          </ul>
          <a
            href="https://www.dmiher.edu.in/international-admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#269BFF] text-white px-8 py-2 rounded font-semibold text-base hover:bg-[#0055FF] transition mb-4"
          >
            Admission Process for International Students (Click here)
          </a>
          <div className="mt-2 text-[#707070] text-base">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:international@dmiher.edu.in"
              className="underline text-[#269BFF] hover:text-[#F04E30]"
            >
              international@dmiher.edu.in
            </a>
          </div>
          <div className="mt-6">
            <a
              href="https://www.dmiher.edu.in/alumni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#F04E30] underline font-semibold text-base hover:text-[#d13d22]"
            >
              Alumni Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSAHS;
