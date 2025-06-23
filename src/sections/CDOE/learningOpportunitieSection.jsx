
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nevada from "../../assets/FEAT/Opportunities/1.png";
import berkeley from "../../assets/FEAT/Opportunities/2.png";
import sydney from "../../assets/FEAT/Opportunities/3.png";
import wollongong from "../../assets/FEAT/Opportunities/4.png";
import yeshiva from "../../assets/FEAT/Opportunities/5.png";
import deusto from "../../assets/FEAT/Opportunities/6.png";
import kazan from "../../assets/FEAT/Opportunities/7.png";
import plymouth from "../../assets/FEAT/Opportunities/8.png";

const logos = [
  { src: nevada, alt: "University of Nevada" },
  { src: berkeley, alt: "UC Berkeley" },
  { src: sydney, alt: "University of Sydney" },
  { src: wollongong, alt: "University of Wollongong" },
  { src: yeshiva, alt: "Yeshiva University" },
  { src: deusto, alt: "University of Deusto" },
  { src: kazan, alt: "Kazan Federal University" },
  { src: plymouth, alt: "Plymouth Marjon University" },
];

export default function LearningOpportunitieCDOE() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 400, // for very small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#707070] mb-2 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global learning  <br /> opportunities
          </h2>
          <p>Coursera Campus - 5000+ Certificate courses from top ranked colleges globally</p>
          <p className="text-gray-600 text-sm  tracking-normal leading-relaxed">
            At CDOE, global learning is just a click away. Through Coursera Campus access,
            students engage with leading certificate courses from top-ranked universities
            worldwide—acquiring industry-relevant skills, AI-driven insights, and globally
            recognized credentials. This seamless integration of international curricula
            empowers learners to stay competitive, future-ready, and connected to the world.
          </p>
        </div>



        {/* Mobile: Slick Slider */}
        {/* <div className="sm:hidden">
          <Slider {...settings}>
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-20 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div> */}

        {/* Tablet/Desktop: Grid layout unchanged */}
        <div className="hidden sm:grid grid-cols-4 gap-y-8 items-center justify-items-stretch">
          {/* {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center  border-r   max-h-20 px-4 last:border-r-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain max-h-20"
              />
            </div>
          ))} */}

        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Content */}
          <div className="">
            <h4 className="text-1xl font-bold text-[#707070] mb-2">
              <span className="block mb-4"></span>
              Gain industry-relevant skills, global certifications. Enhance employability.
            </h4>
          
            <p className="text-gray-600 text-sm max-w-2xl tracking-normal leading-relaxed">
             Certification Courses from top universities: Harvard, Stanford & more I 
             Certifications by industry leaders: Google, IBM, etc I In-demand domains:
              Data Science, Healthcare, Business Analytics, AI I Flexible, AI-powered, 
              on-demand learning
            </p>
          </div>

          {/* Right Side - Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

           
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">1,900+ Guided</h3>
                    <h3 className="text-xl font-bold text-gray-800">Projects</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Learn a job-relevant skill
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    &lt;5-2 hours
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">5,000+ Courses</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Gain knowledge on a wide array of subjects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    4-6 weeks
                  </li>
                </ul>
              </div>
            </div>

          
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">45+ Professional</h3>
                    <h3 className="text-xl font-bold text-gray-800">Certificates</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Get job-ready for an in-demand career
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    1-12 months
                  </li>
                </ul>
              </div>
            </div>

           
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">500+</h3>
                    <h3 className="text-xl font-bold text-gray-800">Specializations</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Master a skill
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    3-6 months
                  </li>
                </ul>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </section>


  );
}

