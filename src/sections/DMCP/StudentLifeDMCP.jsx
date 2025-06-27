import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Img1 from "../../assets/DMCP/StudentLife/Picture1.jpg";
import Img2 from "../../assets/DMCP/StudentLife/Picture2.jpg";
import Img3 from "../../assets/DMCP/StudentLife/Picture3.jpg";
import Img4 from "../../assets/DMCP/StudentLife/Picture4.jpg";
import Img5 from "../../assets/DMCP/StudentLife/Picture5.jpg";
import Img6 from "../../assets/DMCP/StudentLife/Picture6.jpg";
import Img7 from "../../assets/DMCP/StudentLife/Picture7.jpg";
import Img8 from "../../assets/DMCP/StudentLife/Picture8.jpg";
import Img9 from "../../assets/DMCP/StudentLife/Picture9.jpg";
import Img10 from "../../assets/DMCP/StudentLife/Picture10.png";
import Img11 from "../../assets/DMCP/StudentLife/Picture11.jpg";
import Img12 from "../../assets/DMCP/StudentLife/Picture12.png";
import Img13 from "../../assets/DMCP/StudentLife/Picture13.jpg";
import Img14 from "../../assets/DMCP/StudentLife/Picture14.jpg";
import Img15 from "../../assets/DMCP/StudentLife/Picture15.jpg";

const allClubs = [
  { title: "", image: Img1 },
  { title: "", image: Img2 },
  { title: "", image: Img3 },
  { title: "", image: Img4 },
  { title: "", image: Img5 },
  { title: "", image: Img6 },
  { title: "", image: Img7 },
  { title: "", image: Img8 },
  { title: "", image: Img9 },
  { title: "", image: Img10 },
  { title: "", image: Img11 },
  { title: "", image: Img12 },
  { title: "", image: Img13 },
  { title: "", image: Img14 },
  { title: "", image: Img15 },
];

// Header
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

// Main Component
function StudentLifeSAS() {
  const sliderRef = useRef(null);

  const chunkedSlides = [];
  for (let i = 0; i < allClubs.length; i += 6) {
    chunkedSlides.push(allClubs.slice(i, i + 6));
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
        {/* Header + Arrows */}
        <div className=" justify-between items-center mb-4">
          <SectionHeader title="STUDENT LIFE" />
          <div className="flex justify-between">
            <div className="mt-2 text-[#707070] max-w-4xl text-xm">
              <p>
                <b>A vibrant blend of culture, creativity, and community</b>{" "}
                <br />
                From spirited performances and sports fests to social drives,
                blood donation camps, and fieldwork, our students actively
                participate in shaping a holistic, inclusive campus experience.
                Whether it’s celebrating Indian traditions, giving back to
                society, or simply enjoying everyday moments with peers—DMCP
                offers an environment where learning, leadership, and life come
                together.
              </p>
            </div>
            <div className="flex gap-2 mt-25">
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
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {chunkedSlides.map((slideGroup, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {slideGroup.map((item, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-md"
                    />
                    {/* <p
                      className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.title}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default StudentLifeSAS;
