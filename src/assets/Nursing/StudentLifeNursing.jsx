import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import AcedemicFacilitesImg1 from "../../assets/Nursing/studentLife/facilitiesimg1.png";
import AcedemicFacilitesImg2 from "../../assets/Nursing/studentLife/facilitiesimg2.png";
import AcedemicFacilitesImg3 from "../../assets/Nursing/studentLife/facilitiesimg3.png";
import AcedemicFacilitesImg4 from "../../assets/Nursing/studentLife/facilitiesimg4.png";
import AcedemicFacilitesImg5 from "../../assets/Nursing/studentLife/facilitiesimg5.png";
import AcedemicFacilitesImg6 from "../../assets/Nursing/studentLife/facilitiesimg6.png";
import AcedemicFacilitesImg7 from "../../assets/Nursing/studentLife/facilitiesimg7.png";
import AcedemicFacilitesImg8 from "../../assets/Nursing/studentLife/facilitiesimg8.png";
import AcedemicFacilitesImg9 from "../../assets/Nursing/studentLife/facilitiesimg9.png";
import AcedemicFacilitesImg10 from "../../assets/Nursing/studentLife/facilitiesimg10.png";
import AcedemicFacilitesImg12 from "../../assets/Nursing/studentLife/facilitiesimg12.png";
import { Grid, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const academicFacilities = [
  {
    title: "School of Experiential Learning & Simulation Centre",
    image: AcedemicFacilitesImg9,
  },
  { title: "Museum", image: AcedemicFacilitesImg10 },
  { title: "Clinical Training", image: AcedemicFacilitesImg12 },
  { title: "Hi-Tech Classes", image: AcedemicFacilitesImg3 },
  // { title: "Hi-Tech Classrooms", image: AcedemicFacilitesImg4 },
  { title: "Brainstorming Rooms", image: AcedemicFacilitesImg1 },
  { title: "Herbal Garden", image: AcedemicFacilitesImg2 },

  { title: "Animal House", image: AcedemicFacilitesImg4 },
  { title: "Lecture Halls", image: AcedemicFacilitesImg5 },
  { title: "Computer Labs", image: AcedemicFacilitesImg6 },
  { title: "Library & Digital Library", image: AcedemicFacilitesImg7 },
  { title: "Reading Rooms", image: AcedemicFacilitesImg8 },
];

export const SectionHeader = ({
  title,
  subtitle,
  onPrev,
  onNext,
  showViewAll = true,
  viewAllLink = "#",
}) => (
  <div className="mb-8">
    {title && (
      <>
        <div className="h-1 w-20 bg-red-500 mt-1" />
        <h2
          className="text-2xl sm:text-3xl mt-3 text-[#707070] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
        >
          {title}
        </h2>
      </>
    )}
    <div className="flex flex-row items-center justify-between mt-4 gap-2 flex-wrap">
      {/* <p className="text-sm sm:text-lg text-[#F04E30] font-[500]">{subtitle}</p> */}
      <div className="flex-1 h-px bg-white mx-2 min-w-[40px]" />
      <div className="hidden md:flex items-center gap-2 flex-wrap">
        <button
          onClick={onPrev}
          className="p-2 border rounded-full text-gray-600 hover:bg-gray-100 hover:opacity-85 transition"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="p-2 border rounded-full text-gray-600 hover:bg-gray-100  hover:opacity-85 transition "
        >
          <ArrowRight size={20} />
        </button>
        {showViewAll && (
          <a
            href={viewAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F04E30] ml-2 font-[600] sm:text-base text-sm cursor-pointer hover:underline whitespace-nowrap"
            style={{
              fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
            }}
          >
            VIEW ALL
          </a>
        )}
      </div>
    </div>

    {showViewAll && (
      <div className="md:hidden mt-4 text-end">
        <a
          href={viewAllLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-[600] text-sm cursor-pointer hover:underline"
          style={{ fontFamily: '"Helvetica LT Std", "Condensed", sans-serif' }}
        >
          VIEW ALL
        </a>
      </div>
    )}
  </div>
);

function StudentLifeNursing() {
  const studentLifeRef = useRef(null);

  const settings = {
    Modules: [Grid, Pagination],
    pagination: { clickable: true },
    slidesPerView: 4,
    grid: {
      rows: 2,
      fill: "row",
    },
    infinite: true,
    arrows: false,
    spaceBetween: 16,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Academic Facilities */}
        <div className="relative">
          <SectionHeader
            title="STUDENT LIFE"
            subtitle=""
            onPrev={() => studentLifeRef.current?.slickPrev()}
            onNext={() => studentLifeRef.current?.slickNext()}
            viewAllLink="https://www.dmiher.edu.in/"
          />
          <Slider ref={studentLifeRef} {...settings}>
            {academicFacilities.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="px-2 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-md"
                  />
                  <p
                    className="mt-2 text-gray-600 text-base sm:text-lg absolute z-20 bg-gradient-to-r from-black to-transparent w-full py-2 px-4 text-white text-sm bottom-4"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
          {/* Mobile Navigation Buttons */}
          <div className="md:hidden">
            <button
              onClick={() => studentLifeRef.current?.slickPrev()}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10  border-2 border-white p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "4rem" }}
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <button
              onClick={() => studentLifeRef.current?.slickNext()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10   border-2 border-white p-2 rounded-full shadow-lg hover:bg-white transition-all"
              style={{ marginTop: "4rem" }}
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentLifeNursing;
