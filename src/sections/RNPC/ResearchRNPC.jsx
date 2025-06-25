import React from "react";
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
    <section className="bg-[#f2f2f2] py-24 ">
      <div className="container flex gap-18 flex-wrap items-center">
        {/* Left Side: Text */}
        <div className="text-[#58595B] max-w-[400px] flex-1">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            RESEARCH &
            <br /> COLLABORATIONS
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
            Pulmonary Rehabilitation &nbsp;|&nbsp; And More
          </p>
        </div>

        {/* Right Side: Stats */}
        <ul className="flex gap-10 flex-wrap max-w-[740px] min-w-[315px] md:min-w-[450px] flex-1">
          {researchStats.map((card, idx) => (
            <li
              key={idx}
              className="w-[46%] sm:w-[22%] max-sm:w-[100%] flex flex-col items-center gap-4 mb-6"
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
              <div className="flex flex-col items-center text-center">
                <span className="text-[#F04E30] font-bold text-2xl max-sm:text-3xl">
                  {card.number}
                </span>
                <span className="text-[#58595B] text-base font-semibold">
                  {card.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ResearchRNPC;
