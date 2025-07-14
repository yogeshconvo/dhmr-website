import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const cards = [
  {
    bg: "bg-[#269bff] text-white",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-semibold">
          A campus that reverberates with promise and possibility
        </p>
        <p className="font-oswald-medium text-base mt-2">
          ICU, OR, Emergency, and obstetric simulations across campuses.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#ffaa00] text-[#1e2050]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Dual Museums for Self-Learning
        </p>
        <p className="font-oswald-medium text-base mt-2">
          Jigyasa & Swadhyay – with QR-coded catalogs, life-size models, and
          digital AV systems.
        </p>
      </>
    ),
  },
  {
    bg: "bg-white text-[#1e2050]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold text-[#f04e30]">
          Multi-Specialty Teaching Hospitals
        </p>
        <p className="font-oswald-medium text-base mt-2">
          2,500+ beds, NABH & NABL accredited, with robotic surgery and
          transplant units.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#f04e30] text-white",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Cadaveric & Wet Labs
        </p>
        <p className="font-oswald-medium text-base mt-2">
          For advanced anatomical dissection and soft-tissue surgical training.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#707070] text-[#f7d13d]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Standardized Patient Programs
        </p>
        <p className="font-oswald-medium text-base mt-2 text-white">
          Backed by Mayo Clinic methodology, teaching empathy and diagnostic
          interaction.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] text-[#ffaa00]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          AI & Emerging Tech Labs
        </p>
        <p className="font-oswald-medium text-base mt-2 text-white">
          Intel Unnati, IBM Labs, Biotech, 3D Printing, IDEA Labs.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#ffe05c] text-[#1e2050]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Research & R&D Spaces
        </p>
        <p className="font-oswald-medium text-base mt-2">
          For diagnostics, wearable tech, Ayurveda, regenerative dentistry and
          more.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#0096ff] text-white",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Comprehensive Academic Infrastructure
        </p>
        <p className="font-oswald-medium text-base mt-2">
          Smart lecture halls, seminar rooms, LMS-enabled classrooms.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#f5b600] text-[#1e2050]",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Student-Centric Amenities
        </p>
        <p className="font-oswald-medium text-base mt-2">
          Gym, yoga halls, transport, cafeterias, EV charging stations, safety
          systems.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#ff6848] text-white",
    content: (
      <>
        <p className="font-oswald-medium text-2xl font-bold">
          Recreation Meets Reflection
        </p>
        <p className="font-oswald-medium text-base mt-2">
          Sports grounds, cognitive health center, green spaces, and herbariums.
        </p>
      </>
    ),
  },
];

function ReasonsCF() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-16 px-4 bg-[#FAFAF6] flex justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] ">
          <div className="border-t-4 border-[#F04E30] w-20 mb-2"></div>
          10 REASONS THAT SET US APART
        </h2>
        <p className="text-xl md:text-2xl text-[#122E5E] max-w-sm">
          A campus that reverberates with promise and possibility
        </p>
        <p className="text-sm md:text-base text-[#707070] max-w-3xl mb-10">
          From undergrad to doctorate. From Ayurveda to AI. From Wardha to
          Wanadongri.One vibrant ecosystem nurturing futures across disciplines
          and geographies.
        </p>

        <div className="relative mx-auto">
          {isVisible && (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ el: ".custom-pagination", clickable: true }}
              spaceBetween={10}
              loop={true}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4,
                  centeredSlides: false,
                },
              }}
              className="!px-0 sm:!px-0"
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex !justify-center items-center"
                >
                  <div
                    className={`w-[290px] h-[360px] sm:w-[260px] sm:h-[330px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-center `}
                  >
                    {card.content}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="custom-pagination mt-6 flex justify-center" />
        </div>
      </div>
    </div>
  );
}

export default ReasonsCF;
