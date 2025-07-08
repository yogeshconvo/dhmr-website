import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function WetHolisticCadWetLab() {
  // Flatten all items into one array
  const items = [
    {
      title: "Real-world surgical scenarios:",
      desc: "practice injections, IV insertion, suturing, catheterization, airway management, trauma care, and emergency interventions.",
    },
    {
      title: "Simulation materials:",
      desc: "animal tissues, organs, and high-fidelity models for hands-on training in surgical procedures.",
    },
    {
      title: "Safe, controlled environment",
      desc: "with skilled supervision for error correction and feedback.",
    },
    {
      title: "Comprehensive skills:",
      desc: "from basic surgical techniques to specialized ophthalmic procedures.",
    },
    {
      title: "Interdisciplinary workshops",
      desc: "combining medical, dental, and Ayurveda expertise.",
    },
    {
      title: "Equipped with essential instruments ",
      desc: "including Appasamy Operating Microscope.",
    },
    {
      title: "Air-conditioned labs, ergonomic seating,",
      desc: "briefing rooms, and resource materials.",
    },
    {
      title: "Live demonstrations",
      desc: "and training by expert faculty.",
    },
    {
      title: "National and international recognition ",
      desc: "for excellence in training infrastructure and methodology.",
    },
    {
      title: "Supports research and innovation",
      desc: "in medical techniques and device development.",
    },
  ];

  // Group items into slides of 4
  const slides = [];
  for (let i = 0; i < items.length; i += 4) {
    slides.push(items.slice(i, i + 4));
  }

  return (
    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
        <span className="whitespace-pre">
          {`HOLISTIC LEARNING\nINFRASTRUCTURE`}
        </span>
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="mt-12 "
        style={{ paddingBottom: "3rem" }}
        loop={true}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-wrap gap-4">
              {slide.map((item, i) => (
                <div
                  key={i}
                  className={`text-xl sm:text-xl text-[#58595B] sm:max-w-[250px] pb-4 sm:pr-4 mr-4 max-sm:border-b ${
                    i !== slide.length - 1 ? "sm:border-r" : ""
                  } border-black/50 w-full sm:w-auto`}
                >
                  <b>{item.title}</b>
                  {item.desc && <span> {item.desc}</span>}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default WetHolisticCadWetLab;
