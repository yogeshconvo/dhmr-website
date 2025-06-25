<<<<<<< HEAD
// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import nevada from "../../assets/FEAT/Opportunities/1.png";
// import berkeley from "../../assets/FEAT/Opportunities/2.png";
// import sydney from "../../assets/FEAT/Opportunities/3.png";
// import wollongong from "../../assets/FEAT/Opportunities/4.png";
// import yeshiva from "../../assets/FEAT/Opportunities/5.png";
// import deusto from "../../assets/FEAT/Opportunities/6.png";
// import kazan from "../../assets/FEAT/Opportunities/7.png";
// import plymouth from "../../assets/FEAT/Opportunities/8.png";

// const logos = [
//   { src: nevada, alt: "University of Nevada" },
//   { src: berkeley, alt: "UC Berkeley" },
//   { src: sydney, alt: "University of Sydney" },
//   { src: wollongong, alt: "University of Wollongong" },
//   { src: yeshiva, alt: "Yeshiva University" },
//   { src: deusto, alt: "University of Deusto" },
//   { src: kazan, alt: "Kazan Federal University" },
//   { src: plymouth, alt: "Plymouth Marjon University" },
// ];

// export default function GlobalOpportunities() {
//       const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 400, // for very small devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//    return (
//     <section className="bg-white px-6 py-16">
// <div className="max-w-7xl mx-auto">
//   <div className="mb-8">
//     <h2 className="text-3xl sm:text-4xl font-bold text-[#707070] mb-2 uppercase relative">
//       <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
//       Global Opportunities <br />
//     </h2>
//     <p className="text-gray-600 text-sm max-w-2xl tracking-normal leading-relaxed">
//      SAHS opens pathways to global education through semester-abroad programs,
//      international degree transitions, and placement opportunities with renowned
//      global partners.
//     </p>
//     <p className="font-semibold">
//       MS BME (Biotechnology, Management and Entrepreneurship) program at Yeshiva
//       University, USA I Semester abroad for M.Sc. Clinical Nutrition and Dietetics
//       at Leeds Bucket University, USA. I International Placement Opportunities for
//       the Students through BAPIO Training Academy, Bedford, UK
//     </p>
//   </div>

//         {/* Mobile: Slick Slider */}
//         <div className="sm:hidden">
//           <Slider {...settings}>
//             {logos.map((logo, idx) => (
//               <div key={idx} className="flex justify-center items-center h-24">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="object-contain max-h-20 mx-auto"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Tablet/Desktop: Grid layout unchanged */}
//         <div className="hidden sm:grid grid-cols-4 gap-y-8 items-center justify-items-stretch">
//           {logos.map((logo, idx) => (
//             <div
//               key={idx}
//               className="flex justify-center items-center  border-r   max-h-20 px-4 last:border-r-0"
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="object-contain max-h-20"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

=======
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
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
<<<<<<< HEAD
import GO from "../../assets/GO.png";
=======
>>>>>>> c0b206998fde489064a735526d2847598df56a7b

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

<<<<<<< HEAD
export default function GlobalOpportunitiesSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
=======
export default function GlobalOpportunities() {
      const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
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

<<<<<<< HEAD
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl font-[Arial] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-oswald-medium font-[500] sm:text-4xl  text-[#707070] mb-2 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities <br />
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl tracking-normal leading-relaxed">
            SAHS opens pathways to global education through semester-abroad
            programs, international degree transitions, and placement
            opportunities with renowned global partners.
          </p>
          <p className="font-[400] max-w-6xl">
            MS BME (Biotechnology, Management and Entrepreneurship) program at
            Yeshiva University, USA I Semester abroad for M.Sc. Clinical
            Nutrition and Dietetics at Leeds Bucket University, USA. I
            International Placement Opportunities for the Students through BAPIO
            Training Academy, Bedford, UK
=======
   return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#707070] mb-2 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities <br /> 
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl tracking-normal leading-relaxed">
           SAHS opens pathways to global education through semester-abroad programs, 
           international degree transitions, and placement opportunities with renowned 
           global partners. 
          </p>
          <p className="font-semibold">
            MS BME (Biotechnology, Management and Entrepreneurship) program at Yeshiva 
            University, USA I Semester abroad for M.Sc. Clinical Nutrition and Dietetics 
            at Leeds Bucket University, USA. I International Placement Opportunities for 
            the Students through BAPIO Training Academy, Bedford, UK
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
          </p>
        </div>

        {/* Mobile: Slick Slider */}
        <div className="sm:hidden">
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
        </div>

<<<<<<< HEAD
        {/* <div className="hidden sm:grid grid-cols-4 gap-y-8 items-center justify-items-stretch">
=======
        {/* Tablet/Desktop: Grid layout unchanged */}
        <div className="hidden sm:grid grid-cols-4 gap-y-8 items-center justify-items-stretch">
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
          {logos.map((logo, idx) => (
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
          ))}
<<<<<<< HEAD
        </div> */}
        <img
          src={GO}
          alt=""
          className=" hidden md:block  max-w-7xl  h-85 ml-[-40px]"
        />
      </div>
    </section>
  );
}
=======
        </div>
      </div>
    </section>
  );
}
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
