// import React from "react";
// import patentIcon from "../../assets/RNPC/research/patent.png";
// import copyrightIcon from "../../assets/RNPC/research/copyright.png";
// import publicationIcon from "../../assets/RNPC/research/publication.png";
// import bookIcon from "../../assets/RNPC/research/book.png";

// const researchStats = [
//   {
//     icon: patentIcon,
//     number: "9",
//     title: "Patents",
//     bg: "#f04e30",
//   },
//   {
//     icon: copyrightIcon,
//     number: "78",
//     title: "Copyrights",
//     bg: "#122e5e",
//   },
//   {
//     icon: publicationIcon,
//     number: "1380+",
//     title: "Research Publications",
//     bg: "#269bff",
//   },
//   {
//     icon: bookIcon,
//     number: "40",
//     title: "Books & Topics Published",
//     bg: "#f7941e",
//   },
// ];

// function ResearchRNPC() {
//   return (
//     <section className="bg-[#f2f2f2] py-10">
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-16 px-4">
//         {/* Left Side: Text */}
//         <div className="text-[#58595B]  flex-1">
//           <h2 className="text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//             <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//             RESEARCH &<br /> COLLABORATIONS
//           </h2>
//           <b>Advancing Knowledge, Impacting Lives</b>
//           <p className="mt-2 mb-4">
//             With numerous funded projects, patents, and high-impact
//             publications, our research and innovation fosters a robust culture
//             of inquiry. Strategic collaborations with leading institutions
//             further amplify its research footprint, both nationally and
//             globally. A respected center for dental research, we are actively
//             advancing innovation across multiple clinical and academic domains.
//           </p>
//           <a href="#" className="know-more my-8 block">
//             Know more
//           </a>

//           <h4 className="font-bold text-primary text-xl mt-6">Thrust Areas</h4>
//           <p className="text-sm mt-2">
//             Biomechanical & Kinematics &nbsp;|&nbsp; Neuroplasticity & Brain
//             Stimulation &nbsp;|&nbsp; Biomechanics & Injury Prevention
//             &nbsp;|&nbsp; Neurodynamics & Sports Performance &nbsp;|&nbsp;
//             Regenerative Therapies &nbsp;|&nbsp; Digital & Mobile Health
//             (mHealth) Interventions &nbsp;|&nbsp; Cerebral Palsy & Developmental
//             Delays &nbsp;|&nbsp; VR-Based Therapies &nbsp;|&nbsp; Autism & ADHD
//             &nbsp;|&nbsp; Hydrotherapy &nbsp;|&nbsp; Oncology &nbsp;|&nbsp;
//             Hybrid Cardiac Rehabilitation &nbsp;|&nbsp; Inspiratory & Expiratory
//             Muscle Training (IMT/EMT) &nbsp;|&nbsp; Post-Tuberculosis (TB)
//             Pulmonary Rehabilitation &nbsp;|&nbsp; And More
//           </p>
//         </div>

//         {/* Right Side: Stats */}
//         <ul className="grid grid-cols-3 gap-8 max-w-[740px] w-full">
//           {researchStats.map((card, idx) => (
//             <li
//               key={idx}
//               className={`flex flex-col items-center gap-4 text-center ${
//                 idx === 0 || idx === 1
//                   ? "sm:border-r sm:pr-6 border-[#dcdcdc]"
//                   : ""
//               } ${idx === 3 ? "col-span-3 justify-self-center" : ""}`}
//             >
//               <div
//                 className="flex items-center justify-center rounded-full"
//                 style={{
//                   background: card.bg,
//                   width: 140,
//                   height: 140,
//                 }}
//               >
//                 <img src={card.icon} alt={card.title} width={55} />
//               </div>
//               <div className="flex flex-col items-center">
//                 <span className="text-[#F04E30] font-bold text-2xl max-sm:text-3xl">
//                   {card.number}
//                 </span>
//                 <span className="text-[#58595B] text-base font-semibold">
//                   {card.title}
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default ResearchRNPC;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import patentIcon from "../../assets/RNPC/research/patent.png";
import copyrightIcon from "../../assets/RNPC/research/copyright.png";
import publicationIcon from "../../assets/RNPC/research/publication.png";
import bookIcon from "../../assets/RNPC/research/book.png";

const researchStats = [
  {
    icon: patentIcon,
    number: "9",
    title: "Patents",
    bg: "#f04e30",
  },
  {
    icon: copyrightIcon,
    number: "78",
    title: "Copyrights",
    bg: "#122e5e",
  },
  {
    icon: publicationIcon,
    number: "1380+",
    title: "Research Publications",
    bg: "#269bff",
  },
  {
    icon: bookIcon,
    number: "40",
    title: "Books & Topics Published",
    bg: "#f7941e",
  },
];

function ResearchRNPC() {
  return (
    <section className="bg-[#f2f2f2] py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-16 px-4">
        {/* Left Side: Text */}
        <div className="text-[#58595B] flex-1">
          <h2 className="text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            RESEARCH &<br /> COLLABORATIONS
          </h2>
          <b>Advancing Knowledge, Impacting Lives</b>
          <p className="mt-2 mb-4">
            With numerous funded projects, patents, and high-impact
            publications, our research and innovation fosters a robust culture
            of inquiry. Strategic collaborations with leading institutions
            further amplify its research footprint, both nationally and
            globally. A respected center for dental research, we are actively
            advancing innovation across multiple clinical and academic domains.
          </p>
          <a href="#" className="know-more my-8 block">
            Know more
          </a>

          <h4 className="font-bold text-primary text-xl mt-6">Thrust Areas</h4>
          <p className="text-sm mt-2">
            Biomechanical & Kinematics &nbsp;|&nbsp; Neuroplasticity & Brain
            Stimulation &nbsp;|&nbsp; Biomechanics & Injury Prevention
            &nbsp;|&nbsp; Neurodynamics & Sports Performance &nbsp;|&nbsp;
            Regenerative Therapies &nbsp;|&nbsp; Digital & Mobile Health
            (mHealth) Interventions &nbsp;|&nbsp; Cerebral Palsy & Developmental
            Delays &nbsp;|&nbsp; VR-Based Therapies &nbsp;|&nbsp; Autism & ADHD
            &nbsp;|&nbsp; Hydrotherapy &nbsp;|&nbsp; Oncology &nbsp;|&nbsp;
            Hybrid Cardiac Rehabilitation &nbsp;|&nbsp; Inspiratory & Expiratory
            Muscle Training (IMT/EMT) &nbsp;|&nbsp; Post-Tuberculosis (TB)
            Pulmonary Rehabilitation &nbsp;| And More
          </p>
        </div>

        {/* Right Side: Stats - Desktop Grid */}
        <ul className="hidden sm:grid grid-cols-3 gap-8 max-w-[740px] w-full">
          {researchStats.map((card, idx) => (
            <li
              key={idx}
              className={`flex flex-col items-center gap-4 text-center ${
                idx === 0 || idx === 1
                  ? "sm:border-r sm:pr-6 border-[#dcdcdc]"
                  : ""
              } ${idx === 3 ? "col-span-3 justify-self-center" : ""}`}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  background: card.bg,
                  width: 140,
                  height: 140,
                }}
              >
                <img src={card.icon} alt={card.title} width={55} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#F04E30] font-bold text-2xl max-sm:text-3xl">
                  {card.number}
                </span>
                <span className="text-[#58595B] text-xl font-semibold">
                  {card.title}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Slider */}
        <div className="block sm:hidden w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {researchStats.map((card, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <li className="flex flex-col items-center gap-4 text-center w-[250px] mx-auto">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      background: card.bg,
                      width: 140,
                      height: 140,
                    }}
                  >
                    <img src={card.icon} alt={card.title} width={55} />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[#F04E30] font-bold text-3xl">
                      {card.number}
                    </span>
                    <span className="text-[#58595B] text-xl font-semibold">
                      {card.title}
                    </span>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ResearchRNPC;
