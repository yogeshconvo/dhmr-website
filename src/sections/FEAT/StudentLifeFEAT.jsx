// import React, { useEffect, useState } from "react";
// import Img1 from "../../assets/FEAT/StudentLife/1.png";
// import Img2 from "../../assets/FEAT/StudentLife/2.png";
// import Img3 from "../../assets/FEAT/StudentLife/3.png";
// import Img4 from "../../assets/FEAT/StudentLife/4.png";
// import Img5 from "../../assets/FEAT/StudentLife/5.png";
// import Img6 from "../../assets/FEAT/StudentLife/6.png";
// const allClubs = [
//   { title: "Canteen", image: Img1 },
//   { title: "Computer Centre", image: Img2 }, // (British English: Centre / American: Center – choose as per your usage)
//   { title: "Library", image: Img3 },
//   { title: "Garba Night", image: Img4 },
//   { title: "Ganesh Festival Celebration", image: Img5 },
//   { title: "Sports", image: Img6 },
// ];

// const StudentLifeFEATFEAT = () => {
//   const [slide, setSlide] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   const itemsPerSlide = 9;
//   const totalSlides = Math.ceil(allClubs.length / itemsPerSlide);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % totalSlides);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const currentItems = allClubs.slice(
//     slide * itemsPerSlide,
//     slide * itemsPerSlide + itemsPerSlide
//   );

//   return (
//     <section className="bg-[#e3f2fe] py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
//           <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
//           Student Life <br /> at FEAT
//         </h2>
// <div className="mt-4 text-[#707070] max-w-4xl text-xm">
//   <p>
//     Various Academic Extracurricular clubs and Committees working at
//     FEAT provide opportunities to explore interests and passions beyond
//     academics like organizing events like Ignitra, Smarangandh,
//     Prajwalathi, Engineers Day, Blood Donation camp
//   </p>
//   <p>
//     Constitutional Day, Har Ghar Tiranga, Republic Day, Tree Plantation
//     etc.
//   </p>

//   {!showMore && (
//     <button
//       onClick={() => setShowMore(true)}
//       className="text-[#F04E30] mt-2 underline"
//     >
//       View More
//     </button>
//   )}

//   {showMore && (
//     <>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 list-disc list-inside pl-2 mt-4">
//         <li>Student Council Members</li>
//         <li>Artistry Troop Club</li>
//         <li>Rhythmic Crew Club</li>
//         <li>Spring Field Club</li>
//         <li>Sensation Club</li>
//         <li>Literary Club</li>
//         <li>Tech Warriors Club</li>
//         <li>Social Welfare & Organ Donation Club</li>
//       </ul>

//       <p className="mt-6">
//         Various Academic Co-curricular Activities clubs and Committees
//         at FEAT are integral to fostering a well-rounded education.
//         <br /> Activities include TechnoFEAT, IEEE Conference, DevFest
//         etc. Clubs include:
//       </p>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 list-disc list-inside pl-2 mt-2">
//         <li>IEEE Club</li>
//         <li>CSI Club</li>
//         <li>IETE Club</li>
//         <li>ISTE Club</li>
//         <li>GDG Club</li>
//         <li>C4GT Club</li>
//         <li>GeeksforGeeks</li>
//         <li>IdeaOrbit Club</li>
//       </ul>

//       <button
//         onClick={() => setShowMore(false)}
//         className="text-[#F04E30] mt-4 underline block"
//       >
//         View Less
//       </button>
//     </>
//   )}
// </div>
//       </div>

//       {/* Grid Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//         {currentItems.map((club, index) => (
//           <div
//             key={index}
//             className="relative h-64 sm:h-72 md:h-80 lg:h-80 rounded-xl overflow-hidden shadow-md bg-gray-200"
//           >
//             {club.image ? (
//               <img
//                 src={club.image}
//                 alt={club.title}
//                 className="object-cover w-full h-full"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
//                 Image Placeholder
//               </div>
//             )}
//             <div className="absolute inset-0 bg-opacity-30 flex w-full items-end">
//               <p
//                 className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4"
//                 style={{
//                   fontFamily: "'Oswald', sans-serif",
//                   fontWeight: 300,
//                 }}
//               >
//                 {club.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center items-center mt-6 space-x-2">
//         {Array.from({ length: totalSlides }).map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSlide(idx)}
//             className={`w-3 h-3 rounded-full ${
//               idx === slide ? "bg-[#EE4B2B]" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StudentLifeFEATFEAT;
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Img1 from "../../assets/FEAT/StudentLife/1.png";
import Img2 from "../../assets/FEAT/StudentLife/2.png";
import Img3 from "../../assets/FEAT/StudentLife/3.png";
import Img4 from "../../assets/FEAT/StudentLife/4.png";
import Img5 from "../../assets/FEAT/StudentLife/5.png";
import Img6 from "../../assets/FEAT/StudentLife/6.png";

const allClubs = [
  { title: "Canteen", image: Img1 },
  { title: "Computer Centre", image: Img2 },
  { title: "Library", image: Img3 },
  { title: "Garba Night", image: Img4 },
  { title: "Ganesh Festival Celebration", image: Img5 },
  { title: "Sports", image: Img6 },
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
  const [showMore, setShowMore] = useState(false);

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
        {/* Header */}
        <div className="mb-6">
          <SectionHeader title="STUDENT LIFE" />
        </div>

        {/* Description and Arrows */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          {/* Text Content */}
          <div className="text-[#707070] max-w-4xl text-sm">
            <p>
              Various Academic Extracurricular clubs and Committees working at
              FEAT provide opportunities to explore interests and passions
              beyond academics like organizing events like Ignitra, Smarangandh,
              Prajwalathi, Engineers Day, Blood Donation camp, Constitutional
              Day, Har Ghar Tiranga, Republic Day, Tree Plantation etc.
            </p>

            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="text-[#F04E30] mt-2 underline"
              >
                View More
              </button>
            )}

            {showMore && (
              <>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 list-disc list-inside pl-2 mt-4">
                  <li>Student Council Members</li>
                  <li>Artistry Troop Club</li>
                  <li>Rhythmic Crew Club</li>
                  <li>Spring Field Club</li>
                  <li>Sensation Club</li>
                  <li>Literary Club</li>
                  <li>Tech Warriors Club</li>
                  <li>Social Welfare & Organ Donation Club</li>
                </ul>

                <p className="mt-6">
                  Various Academic Co-curricular Activities clubs and Committees
                  at FEAT are integral to fostering a well-rounded education.
                  <br /> Activities include TechnoFEAT, IEEE Conference, DevFest
                  etc. Clubs include:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 list-disc list-inside pl-2 mt-2">
                  <li>IEEE Club</li>
                  <li>CSI Club</li>
                  <li>IETE Club</li>
                  <li>ISTE Club</li>
                  <li>GDG Club</li>
                  <li>C4GT Club</li>
                  <li>GeeksforGeeks</li>
                  <li>IdeaOrbit Club</li>
                </ul>

                <button
                  onClick={() => setShowMore(false)}
                  className="text-[#F04E30] mt-4 underline block"
                >
                  View Less
                </button>
              </>
            )}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2 self-start lg:self-center">
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
