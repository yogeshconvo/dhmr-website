import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import Card1 from "../../assets/JNMC/card1.png";
import Card2 from "../../assets/JNMC/card2.png";
import Card3 from "../../assets/JNMC/card3.png";
import Card4 from "../../assets/JNMC/card4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
   
    description:
      "Structured self-directed learning | Problem-Based Learning (PBL) and Small Group Discussions ",
    image: Card1,
  },
  {
   
    description:
      "Standardized Patient Program (SPP) in collaboration with Mayo Clinic I Case Based Learning in INFUSED by Weil Cornel University I Bioethics program, in collaboration with the International Chair of Bioethics Haifa",
    image: Card2,
  },
  {
   
    description:
      "Integrated Teaching & Early Clinical Exposure I Clinico-Pathological Conferences, Morning Clinical Meets & Clinical Symbiosis I Objectively Structured Practical Exams (OSPE) & Learner Doctor Clinics",
    image: Card3,
  },
  {
  
    description:
      "Research opportunities for all learners, with tailored support for potential learners needing additional guidance.",
    image: Card4,
  },
];

export default function InnovativeJNMC() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle mobile/desktop
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Universal Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-3 w-3 rounded-full border border-black bg-transparent" />
    ),
  };

  return (
    <div className="bg-white mx-auto px-6 md:px-40 py-20">
      <h2 className="text-3xl text-[#707070] font-oswald-medium mb-2 font-semibold text-start">
        Innovative, Learner-Centric Teaching Methodologies
      </h2>
      <p className="text-2xl font-oswald-medium text-[#58595B] font-light mb-8">
        Nurturing critical thinkers and compassionate clinicians
      </p>

      {/* Slider for both desktop & mobile */}
      <Slider {...sliderSettings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-2">
            <Card card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Card Component
function Card({ card }) {
  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg group ">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 text-white p-4 h-44 flex flex-col">
        <h3
          className="text-[18px] font-bold leading-tight"
      
        >
          {card.title}
        </h3>
        <p
          className="text-sm mt-1 leading-snug overflow-hidden text-ellipsis line-clamp-4"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "400",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>

    
  );
}
