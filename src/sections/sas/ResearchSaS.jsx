import React from "react";
import patents from "../../assets/sas/research/patents.png";
import copyrights from "../../assets/sas/research/copyrights.png";
import books from "../../assets/sas/research/books.svg";
import topics from "../../assets/sas/research/topics.svg";
import papers from "../../assets/sas/research/papers.svg";

const researchData = [
  {
    icon: patents,
    iconBG: "#F04E30",
    number: "6",
    title: "Patents",
  },
  {
    icon: copyrights,
    iconBG: "#122E5E",
    number: "24",
    title: "Copyrights",
  },
  {
    icon: books,
    iconBG: "#F7941D",
    number: "81+",
    title: "Books Published",
  },
  {
    icon: topics,
    iconBG: "#E1CD67",
    number: "126+",
    title: "Topics Published",
  },
  {
    icon: papers,
    iconBG: "#269BFF",
    number: "157+",
    title: "Research Papers",
  },
];

function ResearchSaS() {
  const firstRow = researchData.slice(0, 3);
  const secondRow = researchData.slice(3);

  return (
    <div className="container py-10 flex flex-wrap gap-12 justify-between">
      {/* Text Section */}
      <div className="text-[#58595B] max-w-[365px] flex-1">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          {"Research and Collaboration".toUpperCase()}
        </h2>
        <b>Engineering Ideas, Impacting Futures</b>
        <p>
          Our vibrant research ecosystem encourages curiosity, critical
          thinking, and innovation across disciplines. From faculty-led projects
          to student-driven inquiry, we foster a culture where ideas are
          explored, tested, and transformed into meaningful impact.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center gap-10 flex-1 w-full max-w-[900px]">
        {/* First Row: 3 cards */}
        <ul className="flex flex-wrap justify-center gap-12 w-full">
          {firstRow.map((card, idx) => (
            <li
              key={idx}
              className={`w-[29%] min-w-[180px] flex flex-col items-center gap-4 
                ${idx < 2 ? "sm:border-r sm:pr-6 sm:border-[#D9D9D9]" : ""}
              `}
            >
              <div
                className="w-[120px] h-[120px] max-sm:w-[140px] max-sm:h-[140px] flex items-center justify-center rounded-full"
                style={{ background: card.iconBG }}
              >
                <img src={card.icon} alt={card.title} width={70} />
              </div>
              <div className="text-center">
                <span className="text-orange font-bold text-2xl max-sm:text-3xl">
                  {card.number}
                </span>
                <span className="text-[#58595B] text-xl block">
                  {card.title}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Second Row: 2 cards centered */}
        <ul className="flex flex-wrap justify-center gap-12 w-full">
          {secondRow.map((card, idx) => (
            <li
              key={idx}
              className={`w-[29%] min-w-[180px] flex flex-col items-center gap-4 
        ${idx === 0 ? "sm:border-r sm:pr-6 sm:border-[#D9D9D9]" : ""}
      `}
            >
              <div
                className="w-[120px] h-[120px] max-sm:w-[140px] max-sm:h-[140px] flex items-center justify-center rounded-full"
                style={{ background: card.iconBG }}
              >
                <img src={card.icon} alt={card.title} width={70} />
              </div>
              <div className="text-center">
                <span className="text-orange font-bold text-2xl max-sm:text-3xl">
                  {card.number}
                </span>
                <span className="text-[#58595B] text-xl block">
                  {card.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResearchSaS;
