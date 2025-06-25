import React from "react";
import AG1 from "../../assets/About/AG1.png";
import AG2 from "../../assets/About/AG2.png";
import AG3 from "../../assets/About/AG3.png";
import AG4 from "../../assets/About/AG4.png";
import AG5 from "../../assets/About/AG5.png";
import AG6 from "../../assets/About/AG6.png";
import AG7 from "../../assets/About/AG7.png";
import AG8 from "../../assets/About/AG8.png";

const aboutItems = [
  {
    title: "Chancellor’s\nMessage",
    image: AG1,
    url: "https://www.dmiher.edu.in/leadership",
  },
  {
    title: "Sponsoring\nTrust",
    image: AG2,
    url: "https://www.dmiher.edu.in/leadership",
  },
  {
    title: "Leadership",
    image: AG3,
    url: "https://www.dmiher.edu.in/key-functionaries",
  },
  { title: "Governance", image: AG4 },
  {
    title: "Centres of\nExcellence",
    image: AG5,
    url: "https://www.dmiher.edu.in/frontEnd/pages/page/images/pdf/Centres_of_Excellence.pdf",
  },
  { title: "Institutional Social\nResponsibility", image: AG6 },
  { title: "Autonomous\nCells", image: AG7 },
  { title: "Mandatory\nDisclosure", image: AG8 },
];

const AboutGrid = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-20 mx-auto mt-10 mb-10 max-w-5xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {aboutItems.map((item, idx) => (
          <div
            key={idx}
            className="relative h-28 md:h-35 w-full rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  flex items-center justify-center px-2 text-center">
              <a
                href={item.url}
                target="_blank"
                className="text-white whitespace-pre-line text-sm sm:text-base md:text-lg font-medium leading-tight"
                style={{
                  fontFamily: "Helvetica LT Std Condensed, Arial, sans-serif",
                }}
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
