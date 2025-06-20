// import React from "react";
// import Slider from "react-slick";

// // Importing all 14 images
// import TheEdge1 from "../../assets/ResearchGrid/The EDGE/1.jpg";
// import TheEdge2 from "../../assets/ResearchGrid/The EDGE/2.jpg";
// import TheEdge3 from "../../assets/ResearchGrid/The EDGE/3.jpg";
// import TheEdge4 from "../../assets/ResearchGrid/The EDGE/4.jpg";
// import TheEdge5 from "../../assets/ResearchGrid/The EDGE/5.jpg";
// import TheEdge6 from "../../assets/ResearchGrid/The EDGE/6.jpg";
// import TheEdge7 from "../../assets/ResearchGrid/The EDGE/7.jpg";
// import TheEdge8 from "../../assets/ResearchGrid/The EDGE/8.jpg";
// import TheEdge9 from "../../assets/ResearchGrid/The EDGE/9.jpg";
// import TheEdge10 from "../../assets/ResearchGrid/The EDGE/10.jpg";
// import TheEdge11 from "../../assets/ResearchGrid/The EDGE/11.jpg";
// import TheEdge12 from "../../assets/ResearchGrid/The EDGE/12.png";
// import TheEdge13 from "../../assets/ResearchGrid/The EDGE/13.jpg";
// import TheEdge14 from "../../assets/ResearchGrid/The EDGE/14.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const cards = [
//   {
//     title: "Top Performer in Research Grants",
//     description:
//       "Consistently ranks among top universities for UG & PG grants from ICMR, CCRAS, RNTCP, and more.",
//     image: TheEdge1,
//   },
//   {
//     title: "DST-Funded TIFAC Centre",
//     description:
//       "Hosts a Department of Science & Technology-backed TIFAC Centre in Interventional Radiology.",
//     image: TheEdge2,
//   },
//   {
//     title: "Pioneers in Herbal Medicine Research",
//     description:
//       "Equipped with Rasashala for herbal formulation and an authentic Herbal Garden for medicinal plant studies.",
//     image: TheEdge3,
//   },
//   {
//     title: "Robust Clinical Research",
//     description:
//       "Includes an Institutional Clinical Research Unit and participation in national health programs.",
//     image: TheEdge4,
//   },
//   {
//     title: "AICTE-Supported IDEA Lab",
//     description:
//       "A space for innovation, prototyping, and interdisciplinary design thinking.",
//     image: TheEdge5,
//   },
//   {
//     title: "State-of-the-Art Preclinical Facility",
//     description:
//       "Centralized infrastructure for early-stage biomedical and drug research.",
//     image: TheEdge6,
//   },
//   // {
//   //   title: "Govt-Recognized Evidence Resource Hub",
//   //   description:
//   //     "Approved by the Ministry of Health as a national centre for evidence-based clinical guidelines.",
//   //   image: TheEdge7,
//   // },
//   {
//     title: "BIRAC-Supported BioNEST Incubator",
//     description:
//       "A Bioincubator that nurtures biotech startups and scalable innovations.",
//     image: TheEdge8,
//   },
//   {
//     title: "ICMR-Linked Integrative Medicine Network",
//     description:
//       "Part of ICMR-NITM’s nationwide Clinical Trial Network for Integrative Medicine.",
//     image: TheEdge9,
//   },
//   {
//     title: "Global Research Collaborations",
//     description:
//       "Engaged in impactful collaborations with top global universities and research bodies.",
//     image: TheEdge10,
//   },
//   {
//     title: "Innovation-Driven Curriculum",
//     description:
//       "Curriculum structured to encourage innovation and interdisciplinary research.",
//     image: TheEdge11,
//   },
//   {
//     title: "High-End Simulation Labs",
//     description:
//       "Advanced simulation environments for experiential learning and trials.",
//     image: TheEdge12,
//   },
//   {
//     title: "Patents & Publications",
//     description:
//       "Track record of impactful publications and IP generation in health sciences.",
//     image: TheEdge13,
//   },
//   // {
//   //   title: "Next-Gen Research Mentorship",
//   //   description:
//   //     "Expert mentorship programs for UG/PG/PhD students across domains.",
//   //   image: TheEdge14,
//   // },
// ];

// const TheEdge = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex justify-center mt-4 gap-2">{dots.slice(0, 4)}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
//     ),
//   };

//   return (
//     <section className="bg-white py-16 px-6 md:px-30 text-gray-600 font-sans">
//       {/* Heading */}
//       <div className="mb-12">
//         <h2 className="text-2xl ml-2 md:text-3xl font-[500] font-oswald-medium uppercase inline-block pb-1">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4 h-2" />
//           The Edge
//         </h2>
//         <p className="text-2xl font-[400] ml-2 font-oswald-medium mt-2">
//           Experience The Edge In Research, <br /> Trials & Innovation
//         </p>
//         <p className="text-sm text-gray-600 ml-2 font-oswald-light mt-1">
//           Evolving as one of India’s Most Distinctive Research Ecosystems
//         </p>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {cards.map((card, idx) => (
//           <div key={idx} className="px-2">
//             <div className="relative rounded-lg overflow-hidden shadow-md group h-full">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                 <h3 className="text-white font-oswald-medium text-sm md:text-base">
//                   {card.title}
//                 </h3>
//                 <p className="text-white font-oswald-light text-xs md:text-sm mt-1">
//                   {card.description}
//                 </p>
//               </div> */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/30 via-black/10 to-transparent p-4">
//                 <h3 className="text-gray-200 font-oswald-medium text-sm md:text-base">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-200 font-oswald-light text-xs md:text-sm mt-1">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default TheEdge;

import React, { useState } from "react";
import Slider from "react-slick";

import TheEdge1 from "../../assets/ResearchGrid/The EDGE/1.jpg";
import TheEdge2 from "../../assets/ResearchGrid/The EDGE/2.jpg";
import TheEdge3 from "../../assets/ResearchGrid/The EDGE/3.jpg";
import TheEdge4 from "../../assets/ResearchGrid/The EDGE/4.jpg";
import TheEdge5 from "../../assets/ResearchGrid/The EDGE/5.jpg";
import TheEdge6 from "../../assets/ResearchGrid/The EDGE/6.jpg";
import TheEdge8 from "../../assets/ResearchGrid/The EDGE/8.jpg";
import TheEdge9 from "../../assets/ResearchGrid/The EDGE/9.jpg";
import TheEdge10 from "../../assets/ResearchGrid/The EDGE/10.jpg";
import TheEdge11 from "../../assets/ResearchGrid/The EDGE/11.jpg";
import TheEdge12 from "../../assets/ResearchGrid/The EDGE/12.png";
import TheEdge13 from "../../assets/ResearchGrid/The EDGE/13.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const cards = [
//   {
//     title: "Top Performer in Research Grants",
//     description:
//       "Consistently ranks among top universities for UG & PG grants from ICMR, CCRAS, RNTCP, and more.",
//     image: TheEdge1,
//   },
//   {
//     title: "DST-Funded TIFAC Centre",
//     description:
//       "Hosts a Department of Science & Technology-backed TIFAC Centre in Interventional Radiology.",
//     image: TheEdge2,
//   },
//   {
//     title: "Pioneers in Herbal Medicine Research",
//     description:
//       "Equipped with Rasashala for herbal formulation and an authentic Herbal Garden for medicinal plant studies.",
//     image: TheEdge3,
//   },
//   {
//     title: "Robust Clinical Research",
//     description:
//       "Includes an Institutional Clinical Research Unit and participation in national health programs.",
//     image: TheEdge4,
//   },
//   {
//     title: "AICTE-Supported IDEA Lab",
//     description:
//       "A space for innovation, prototyping, and interdisciplinary design thinking.",
//     image: TheEdge5,
//   },
//   {
//     title: "State-of-the-Art Preclinical Facility",
//     description:
//       "Centralized infrastructure for early-stage biomedical and drug research.",
//     image: TheEdge6,
//   },
//   {
//     title: "BIRAC-Supported BioNEST Incubator",
//     description:
//       "A Bioincubator that nurtures biotech startups and scalable innovations.",
//     image: TheEdge8,
//   },
//   {
//     title: "ICMR-Linked Integrative Medicine Network",
//     description:
//       "Part of ICMR-NITM’s nationwide Clinical Trial Network for Integrative Medicine.",
//     image: TheEdge9,
//   },
//   {
//     title: "Global Research Collaborations",
//     description:
//       "Engaged in impactful collaborations with top global universities and research bodies.",
//     image: TheEdge10,
//   },
//   {
//     title: "Innovation-Driven Curriculum",
//     description:
//       "Curriculum structured to encourage innovation and interdisciplinary research.",
//     image: TheEdge11,
//   },
//   {
//     title: "High-End Simulation Labs",
//     description:
//       "Advanced simulation environments for experiential learning and trials.",
//     image: TheEdge12,
//   },
//   {
//     title: "Patents & Publications",
//     description:
//       "Track record of impactful publications and IP generation in health sciences.",
//     image: TheEdge13,
//   },
// ];

const cards = [
  {
    title: "Top Performer in Research Grants",
    description:
      "Consistently among the top universities for UG & PG research grants from reputed agencies like ICMR (STS & PG thesis), CCRAS (SPARC, PG STAR), RNTCP, and others.",
    image: TheEdge1,
  },
  {
    title: "DST-Funded TIFAC Centre",
    description:
      "Home to a TIFAC Centre in Interventional Radiology, funded by the Department of Science & Technology (DST).",
    image: TheEdge2,
  },
  {
    title: "Pioneers in Herbal Medicine Research",
    description:
      "Features the Rasashala lab for herbal medicine formulation and development, along with an authentic Herbal Garden as a resource centre for medicinal plants.",
    image: TheEdge3,
  },
  {
    title: "Robust Clinical Trial Ecosystem",
    description:
      "Includes an Interdisciplinary Clinical Trial Centre and participation in ICMR’s INTENT network.",
    image: TheEdge4,
  },
  {
    title: "Govt-Recognized Evidence Resource Hub",
    description:
      "Approved by the Ministry of Health as a national centre for evidence-based clinical guidelines.",
    image: TheEdge5,
  },
  {
    title: "BIRAC-Supported BioNEST Incubator",
    description:
      "A Bioincubator that nurtures biotech startups and scalable innovations.",
    image: TheEdge6,
  },
  // {
  //   title: "ICMR Clinical Trial Network Partner",
  //   description:
  //     "Part of the ICMR-NITM-led Clinical Trial Network for advancing Integrative Medicine research across India.",
  //   image: TheEdge8,
  // },
  {
    title: "DBT/Wellcome Trust-Funded Research Centre",
    description:
      "Clinical/Public Health Research Centre funded by DBT and Wellcome Trust for impactful health science research.",
    image: TheEdge8,
  },
  // {
  //   title: "ICMR INTENT Membership",
  //   description:
  //     "Part of the ICMR’s Indian Clinical Trial and Education Network (INTENT), enhancing clinical trial capabilities.",
  //   image: TheEdge9,
  // },
  {
    title: "AICTE-Backed IDEA Lab",
    description:
      "A cutting-edge IDEA Lab supported by AICTE to promote design thinking, prototyping, and interdisciplinary innovation.",
    image: TheEdge11,
  },
  {
    title: "State-of-the-Art Preclinical Facility",
    description:
      "Centralized infrastructure for early-stage biomedical and drug research.",
    image: TheEdge12,
  },
  {
    title: "National and International Collaborations",
    description:
      "Actively networked with 12 prominent national and international consortia for collaborative research and development.",
    image: TheEdge13,
  },
];
const TheEdge = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4 gap-2">{dots.slice(0, 4)}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
    ),
  };

  return (
    <section className="bg-white py-16 px-6 md:px-30 text-gray-600 font-sans">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-2xl ml-2 md:text-3xl font-[500] font-oswald-medium uppercase inline-block pb-1">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4 h-2" />
          The Edge
        </h2>
        <p className="text-2xl font-[400] ml-2 font-oswald-medium mt-2">
          Experience The Edge In Research, <br /> Trials & Innovation
        </p>
        <p className="text-sm text-gray-600 ml-2 font-oswald-light mt-1">
          Evolving as one of India’s Most Distinctive Research Ecosystems
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-2">
            <div
              className="relative rounded-lg overflow-hidden shadow-md group h-full cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/30 via-black/10 to-transparent p-4">
                <h3 className="text-gray-200 font-oswald-medium text-sm md:text-base">
                  {card.title}
                </h3>
                <p className="text-gray-200 font-oswald-light text-xs md:text-sm mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl bg-white">
            {/* Back Button
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm rounded-full font-semibold shadow-md hover:bg-gray-200 z-10"
            >
              ← Back
            </button> */}

            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-black bg-white rounded-full text-lg font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-300 z-10"
            >
              &times;
            </button>

            {/* Image + Text */}
            <div className="w-full h-[400px] relative">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/40 to-transparent text-white p-6">
                <h3 className="text-xl font-semibold font-oswald-medium">
                  {selectedCard.title}
                </h3>
                <p className="text-sm mt-2 font-oswald-light">
                  {selectedCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TheEdge;
