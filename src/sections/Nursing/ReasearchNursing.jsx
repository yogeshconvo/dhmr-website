import React from "react";
import research from "../../assets/Nursing/research/research.png";
import intellectual from "../../assets/Nursing/research/intellectual.png";
import copyrights from "../../assets/Nursing/research/copyrights.png";
import awards from "../../assets/Nursing/research/awards.png";
import internationalrewards from "../../assets/Nursing/research/internationalrewards.png";

const reasearchData = [
  {
    icon: research,
    iconBG: "#F7941D",
    number: "1,513",
    title: "Research Publications",
  },
  {
    icon: intellectual,
    iconBG: "#269BFF",
    number: "86",
    title: "Intellectual Property Rights",
  },
  {
    icon: copyrights,
    iconBG: "#122E5E",
    number: "83",
    title: "Copyrights",
  },
  {
    icon: awards,
    iconBG: "#F04E30",
    number: "37",
    title: "National Awards",
  },
  {
    icon: internationalrewards,
    iconBG: "#E1CD67",
    number: "10",
    title: "International Awards",
    flexRow: true,
  },
];
function ReasearchNursing() {
  return (
    <div className="container py-20 flex gap-12 flex-wrap ">
      <div className="text-[#58595B] max-w-[365px] flex-1">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          RESEARCH &
          <br /> COLLABORATIONS
        </h2>
        <b>Advancing Nursing Knowledge </b>
        <p>
          With a deep commitment to advancing nursing knowledge, our research
          focuses on evidence-based practices and critical healthcare
          challenges. Through national and international collaborations, we are
          shaping the future of nursing education and patient care. Know more
        </p>
        <a href="#" className="know-more my-12 block">
          Know more
        </a>

        <h4 className="font-bold text-primary text-xl">Thrust Areas</h4>
        <p>
          Evidence-based nursing, maternal health, malnutrition, mental health
          and adolescent psychiatry, communicable and non-communicable diseases,
          rural health, reproductive and child health, innovations in nursing
          education, informatics, and educational technology.
        </p>
      </div>

      <ul className="flex gap-12 flex-wrap max-w-[740px] min-w-[315px] md:min-w-[450px] flex-1 ">
        {reasearchData.map((card, idx) => (
          <li
            key={idx}
            className={`w-[29%] max-sm:w-[100%] flex-center gap-4 flex-col research-item`}
          >
            <div
              className={`w-[120px] h-[120px] max-sm:w-[140px] max-sm:h-[140px]  bg-[${card.iconBG}] flex-center rounded-full`}
            >
              <img src={card.icon} alt="" width={70} />
            </div>
            <div className={`flex-center text-center flex-col`}>
              <span className="text-orange font-bold text-2xl max-sm:text-3xl ">
                {card.number}
              </span>
              <span className="text-[#58595B] text-xl ">{card.title}</span>
            </div>
          </li>
        ))}
        <li className="w-[29%] max-sm:w-[100%] max-sm:text-center">
          <b className="text-primary font-bold text-lg ">
            Collaborative/Funded Projects:
          </b>
          <p className="text-[#58595B] text-lg ">
            Karlstad University (Sweden), Erasmus Women Entrepreneurship,
            Glasgow Caledonian University (Scotland, UK), and Enprendia.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ReasearchNursing;
