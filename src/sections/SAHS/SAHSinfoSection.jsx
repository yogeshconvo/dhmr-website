// import React from "react";

// const SAHSInfoSection = () => {

//     return (
//         <div className="py-12 px-4">
//             <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
//                 <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
//                 <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//                     School of Allied Health Sciences (SAHS)
//                 </span>
//                 <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
//             </h2>

//             <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">

//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] uppercase leading-snug mb-6">
//                     Bridging Healthcare Gaps. Building Future-Ready Professionals.
//                 </h1>

//                 <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
//                     <p className="mb-4">
//                         At the intersection of science, care, and technology The School of
//                         Allied Health Sciences (SAHS), was established in 2018 by Datta
//                         Meghe Institute of Higher Education & Research (DMIHER), as a
//                         pioneering initiative designed to meet the growing demand for
//                         skilled healthcare professionals who work alongside doctors and
//                         specialists—delivering critical diagnostic, therapeutic, and
//                         preventive services.
//                     </p>
//                     <p className="mb-4 tracking-wide font-[Arial]">
//                         With a clear mission to develop comprehensively trained, globally
//                         competent allied health professionals across multiple domains, the
//                         two campuses in Wardha and Nagpur, are training a new generation of
//                         Allied Health Professionals (AHPs) who are shaping the future of
//                         integrated, patient-centered care. Emerging as one of Central
//                         India's most dynamic hubs for allied health education, the campuses
//                         offer a wide spectrum of programs backed by interdisciplinary
//                         training, NEP-aligned curricula, and extensive clinical exposure
//                         through DMIHER's 1,500+ bedded specialty and super-specialty
//                         hospitals.
//                     </p>
//                     <p className="mb-4 tracking-wide font-[Arial]">
//                         With over 2,500 students enrolled, the SAHS's ecosystem encourages
//                         hands-on learning, research, innovation, and global immersion
//                         through international pathway and semester-abroad programs.
//                     </p>

//                     // add view more button showing all the information from this point
//                     <p className="font-semibold mb-4">
//                         Programs at SAHS Wardha: 24 Undergraduate I 13 Postgraduate I 4
//                         Ph.D. programs I 1 Diploma I 2 Postgraduate Executive, and 6
//                         Executive Development Programs
//                     </p>
//                     <p className="font-semibold mb-4">
//                         Programs at SAHS Nagpur: 22 Undergraduate I 12 Postgraduate I 2
//                         Postgraduate Executive I 4 Executive Development
//                     </p>
//                     <p className="font-semibold">
//                         Areas of Study Across Both Campuses Include: Life Sciences |
//                         Trauma Care | Ophthalmic Sciences | Medical Imaging & Radiology
//                         | Surgical & Anesthesia Tech | Nutrition | Neuroscience | Renal
//                         Technology | Behavioral Sciences | Health & Information
//                         Management | Physician Assistant | Respiratory Therapy and more.
//                     </p>
//                 </div>
//             </section>
//         </div>

//     );
// };

// export default SAHSInfoSection;

import React, { useState } from "react";

const SAHSInfoSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl md:text-4xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          School of Allied Health Sciences (SAHS)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] uppercase leading-snug mb-6">
          Bridging Healthcare Gaps. Building Future-Ready Professionals.
        </h1>

        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
          <p className="mb-4">
            At the intersection of science, care, and technology, the School of
            Allied Health Sciences (SAHS) was established in 2018 by Datta Meghe
            Institute of Higher Education & Research (DMIHER), as a pioneering
            initiative designed to meet the growing demand for skilled
            healthcare professionals who work alongside doctors and
            specialists—delivering critical diagnostic, therapeutic, and
            preventive services.
          </p>
          <p className="mb-4 tracking-wide font-[Arial]">
            With a clear mission to develop comprehensively trained, globally
            competent allied health professionals across multiple domains, the
            two campuses in Wardha and Wana (Nagpur) are training a new
            generation of Allied Health Professionals (AHPs) who are shaping the
            future of integrated, patient-centered care. Emerging as one of
            Central India’s most dynamic hubs for allied health education, the
            campuses offer a wide spectrum of programs backed by
            interdisciplinary training, NEP-aligned curricula, and extensive
            clinical exposure through DMIHER’s 1,500+ bedded specialty and
            super-specialty hospitals.
          </p>
          <p className="mb-4 tracking-wide font-[Arial]">
            With over 2,500 students enrolled, the SAHS’s ecosystem encourages
            hands-on learning, research, innovation, and global immersion
            through international pathway and semester-abroad programs.
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
              <p className="font-semibold mb-4">
                Programs at SAHS Wardha: 24 Undergraduate I 13 Postgraduate I 4
                Ph.D. programs I 1 Diploma I 2 Postgraduate Executive, and 6
                Executive Development Programs
              </p>
              <p className="font-semibold mb-4">
                Programs at SAHS Wana: 22 Undergraduate I 12 Postgraduate I 2
                Postgraduate Executive I 4 Executive Development
              </p>
              <p className="font-semibold">
                Areas of Study Across Both Campuses Include: Life Sciences |
                Trauma Care | Ophthalmic Sciences | Medical Imaging & Radiology
                | Surgical & Anesthesia Tech | Nutrition | Neuroscience | Renal
                Technology | Behavioral Sciences | Health & Information
                Management | Physician Assistant | Respiratory Therapy and more.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default SAHSInfoSection;
