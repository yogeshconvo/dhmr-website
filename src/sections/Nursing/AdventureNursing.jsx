import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AdventureImg1 from "../../assets/Nursing/Adventure1.png";
import adventureNursing01 from "../../assets/Nursing/adventure/adventure01.png";

const adventureData = [
  {
    bgColor: "bg-[#122e5e]",
    textColor: "text-[#e1cd67]",
    img: null,
    paragraph1: "Hands-on exposure through CCHCP integrating preventive",
    paragraph2:
      ", primary, mental, and social services for holistic nursing skills.",
    boldPara: "top",
  },
  {
    bgColor: "bg-[#FFF]",
    textColor: "text-[#f04e30]",
    img: null,
    paragraph1: "Advanced Skill Labs, OSCE Training, high-fidelity mannequins",
    paragraph2:
      ", and specialized maternal health labs for clinical excellence.",
    boldPara: "bottom",
  },
  {
    bgColor: "bg-[#269BFF]",
    textColor: "text-white",
    img: adventureNursing01,
    paragraph1: "Multiple merit-based scholarships",
    paragraph2: "and financial assistance programs for eligible students.",
    boldPara: "top",
  },
  {
    bgColor: "bg-[#E1CD67]",
    textColor: "text-[#122E5E]",
    img: null,
    paragraph1:
      "Collaborations with 7 international and 6 national adjunct faculty",
    paragraph2: ",driving innovation and research in nursing.",
    boldPara: "top",
  },
  {
    bgColor: "bg-[#F7941D]",
    textColor: "text-[#FFFFFF]",
    img: null,
    paragraph1: "International clinical externships and placements ",
    paragraph2:
      "with renowned institutions like NIMHANS, Tata Memorial, and UKE Hospital, Germany.",
    boldPara: "top",
  },
  {
    bgColor: "bg-[#F04E30]",
    textColor: "text-[#FFFFFF]",
    img: null,
    paragraph1: "100%",
    paragraph2:
      "placement assistance and job readiness support for seamless global healthcare opportunities.",
    boldPara: "top-big",
  },
];

const HighlightCard = ({ item }) => (
  <div
    className={`rounded-lg shadow-md hover:shadow-lg font-oswald-medium transition-shadow overflow-hidden flex flex-col  ${item.bgColor} ${item.textColor} w-full sm:w-64 md:w-55 min-h-[300px]`}
  >
    {item.img && (
      <img
        src={item.img}
        alt="adventure"
        className="mt-4 w-60 h-24 object-contain"
      />
    )}
    <div
      className={`flex flex-col flex-1 ${
        item.img ? "justify-start" : "justify-center"
      } items-center p-4 text-left w-full`}
    >
      <p className="mb-2 text-[20px]">
        <span
          className={` ${item.boldPara == "top" ? "font-bold" : undefined} ${
            item.boldPara == "top-big"
              ? "w-full text-[80px] block font-bold"
              : undefined
          }`}
        >
          {item.paragraph1}{" "}
        </span>
        <span
          className={`${item.boldPara == "bottom" ? "font-bold" : undefined}`}
        >
          {item.paragraph2}
        </span>
      </p>
    </div>
  </div>
);

export default function AdventureNursing() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fdf8e7] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          THE DMIHER
          <br /> NURSING ADVANTAGE
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...sliderSettings} className="-mx-1">
            {adventureData.map((item, idx) => (
              <div key={idx} className="px-1 mb-4">
                <HighlightCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
