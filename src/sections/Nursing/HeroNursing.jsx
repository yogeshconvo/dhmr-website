import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Replace with your Nursing banner images
import NursingBanner1 from "../../assets/Nursing/NursingBanner1.jpg";
import NursingBanner2 from "../../assets/Nursing/NursingBanner2.png";
import NursingBanner3 from "../../assets/Nursing/NursingBanner3.png";

const slides = [
  {
    img: NursingBanner1,
    title: "NURSING AT DMIHER:",
    highlight: "NURTURING THE HEART OF HEALTHCARE",
    paragraph: `Smt. Radhikabai Meghe Memorial College of Nursing, Wardha Rooted in Compassion, Driven by Innovation.`,
    textPosition: "right",
  },
  {
    img: NursingBanner2,
    title: "INSPIRING FUTURE-READY NURSES ",
    highlight: "THROUGH ADVANCED TRAINING",
    paragraph:
      "Shalinitai Meghe College of Nursing, Salod (Hirapur), Wardha Empowering Nurses, Transforming Communities.",
    textPosition: "left",
  },
  {
    img: NursingBanner3,
    title: "EXCELLENCE. SKILL",
    highlight: "COMPASSIONATE CARE",
    paragraph:
      "Shalinitai Meghe College of Nursing, Nagpur Shaping Nursing Futures with Purpose.",
    textPosition: "right",
  },
];

const HeroNursing = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Background Image */}
            <img
              src={slide.img}
              alt="Nursing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t ${
                slide.textPosition === "right"
                  ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
                  : "hidden lg:block left-0 md:bg-gradient-to-r md:from-black/70 md:to-transparent"
              }`}
            />

            {/* Text Content */}
            {!(slide.textPosition === "right") && (
              <div className="lg:hidden absolute inset-0 bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
            )}
            <div
              className={`absolute px-4 sm:px-6 ${
                slide.textPosition === "right"
                  ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
                  : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[30%] max-sm:w-[80%]"
              }
      top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
      text-white sm:w-1/2 w-[60%] lg:w-[50%] max-w-none z-20`}
            >
              <h1
                className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1]  max-w-[490px] ${
                  slide.textPosition === "right" ? "lg:ml-30" : ""
                } `}
              >
                {slide.title}
                {idx != 1 ? <br /> : null}
                <span className="text-[#E1CD67]">{slide.highlight}</span>
              </h1>
              <p
                className={`mt-3 text-lg font-[Oswald] font-light text-white drop-shadow-lg text-left max-w-[545px] ${
                  slide.textPosition === "right" ? "lg:ml-30" : ""
                }`}
              >
                {slide.paragraph}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* You can add floating buttons or links here if needed */}
    </div>
  );
};

export default HeroNursing;
