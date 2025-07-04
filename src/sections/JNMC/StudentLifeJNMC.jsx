import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DanceClub from "../../assets/JNMC/StudentLife/Dance Club.JPG";
import Events1 from "../../assets/JNMC/StudentLife/EVENTS 1.JPG";
import GFC5 from "../../assets/JNMC/StudentLife/GFC 5.jpeg";
import GuestLecture from "../../assets/JNMC/StudentLife/Guest Lecture.jpg";
import LiteratureClub from "../../assets/JNMC/StudentLife/literature club 2.jpg";
import PrideParade from "../../assets/JNMC/StudentLife/pride parade girl up.jpg";
import SocialWelfareClub from "../../assets/JNMC/StudentLife/Social Welfare Club.JPG";
import SportsClub from "../../assets/JNMC/StudentLife/Sports Club.jpg";
import TheatreClub from "../../assets/JNMC/StudentLife/Theatre Club.JPG";

const allClubs = [
  { title: "Dance Club", image: DanceClub },
  { title: "Events", image: Events1 },
  { title: "GFC 5", image: GFC5 },
  { title: "Guest Lecture", image: GuestLecture },
  { title: "Literature Club", image: LiteratureClub },
  { title: "Pride Parade", image: PrideParade },
  { title: "Social Welfare Club", image: SocialWelfareClub },
  { title: "Sports Club", image: SportsClub },
  { title: "Theatre Club", image: TheatreClub },
];

const SectionHeader = ({ title }) => (
  <div className="mb-6">
    <div className="h-1 w-20 bg-red-500 mt-1" />
    <h2
      className="text-2xl sm:text-3xl mt-3 text-[#707070] uppercase"
      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
    >
      {title}
    </h2>
  </div>
);

function StudentLifeSAS() {
  const sliderRef = useRef(null);

  const chunkedSlides = [];
  for (let i = 0; i < allClubs.length; i += 9) {
    chunkedSlides.push(allClubs.slice(i, i + 9));
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-50 px-4 py-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <SectionHeader title="STUDENT LIFE" />
        </div>

        {/* Description and Arrows */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          {/* Text Content */}
          <div className="text-[#707070] max-w-4xl text-sm">
            <p>
              JNMC offers a vibrant student life with a diverse mix of academic,
              cultural, and social activities. From Academic, Quiz, and
              Literature Clubs to Social Welfare, Arts, Music, Theatre, Dance,
              and Sports Clubs, students find ample opportunities to explore
              passions, build skills, and engage with the community. Events like
              “Dhwani” (Music), “Nrityam” (Dance), theatrical performances, and
              sports meets like “Energia” provide a holistic platform for
              self-expression and teamwork. With supportive faculty and peer
              mentorship, JNMC fosters a well-rounded, enriching campus
              experience.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2 mt-15 self-start lg:self-center">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="border p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="border p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {chunkedSlides.map((slideGroup, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {slideGroup.map((item, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover rounded-md"
                      />
                      {/* Optional Title Overlay */}
                      <p className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default StudentLifeSAS;
