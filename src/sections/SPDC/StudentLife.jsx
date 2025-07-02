// export default StudentLife;
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Img1 from "../../assets/SPDC/StudentLife/1.jpg";
import Img2 from "../../assets/SPDC/StudentLife/2.jpg";
import Img3 from "../../assets/SPDC/StudentLife/3.png";
import Img4 from "../../assets/SPDC/StudentLife/4.jpg";
import Img5 from "../../assets/SPDC/StudentLife/5.jpg";
import Img6 from "../../assets/SPDC/StudentLife/6.jpg";
import Img7 from "../../assets/SPDC/StudentLife/7.jpg";
import Img8 from "../../assets/SPDC/StudentLife/8.png";
import Img9 from "../../assets/SPDC/StudentLife/9.jpg";
import Img10 from "../../assets/SPDC/StudentLife/10.jpg";
import Img11 from "../../assets/SPDC/StudentLife/11.jpg";
import Img12 from "../../assets/SPDC/StudentLife/12.png";
import Img13 from "../../assets/SPDC/StudentLife/13.jpg";
import Img14 from "../../assets/SPDC/StudentLife/14.jpeg";

const academicFacilities = [
  { title: "", image: Img1 },
  { title: "", image: Img9 },
  { title: "", image: Img10 },
  { title: "", image: Img11 },
  { title: "", image: Img12 },
  { title: "", image: Img2 },
  { title: "", image: Img3 },
  { title: "", image: Img4 },
  { title: "", image: Img5 },
  { title: "", image: Img6 },
  { title: "", image: Img7 },
  { title: "", image: Img8 },

  { title: "", image: Img13 },
  { title: "", image: Img14 },
];

// Main Component
function StudentLife() {
  const sliderRef = useRef(null);

  // Grouping in chunks of 6 for 3 columns x 2 rows
  const chunkedSlides = [];
  for (let i = 0; i < academicFacilities.length; i += 9) {
    chunkedSlides.push(academicFacilities.slice(i, i + 9));
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
        <div className="">
          <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            Student Life <br /> at SPDC&H
          </h2>
          <div className="mt-4 text-[#707070] max-w-4xl text-sm">
            <p>
              Student life at Sharad Pawar Dental College & Hospital is dynamic
              and enriching, offering a perfect balance of academics,
              creativity, and community engagement. From the Academic Club and
              Quiz Club to vibrant platforms like the Music, Dance, Theatre, and
              Arts Clubs, students actively explore their passions beyond the
              classroom. Social impact is driven through initiatives under the
              NSS, Social Welfare Club, and Youth Red Cross. Sports and cultural
              celebrations thrive, with the annual signature
              fest—Spectrum—bringing together talent, energy, and camaraderie.
              Hostel life, student councils, and cross-disciplinary interactions
              further foster a well-rounded, spirited campus environment.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-1 ">
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
                      className="w-full h-56 object-cover shadow-xl rounded-md"
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

export default StudentLife;
