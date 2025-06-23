
// import React, { useState, useRef, useEffect } from "react";

// import Image1 from "../../assets/FEAT/DepartmentGrid/1.png";
// import Image2 from "../../assets/FEAT/DepartmentGrid/2.png";
// import Image3 from "../../assets/FEAT/DepartmentGrid/3.png";
// import Image4 from "../../assets/FEAT/DepartmentGrid/4.png";
// import Image5 from "../../assets/FEAT/DepartmentGrid/5.png";
// import Image6 from "../../assets/FEAT/DepartmentGrid/6.png";

// const SAHSCard = ({ image, title }) => {
//   const lines = title.split("\n");

//   return (
//     <div
//       className="relative h-28 md:h-40 w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-center px-2"
//         style={{
//           fontFamily: '"Helvetica Neue", sans-serif',
//           fontStretch: "condensed",
//         }}
//       >
//         <h3 className="text-white text-sm sm:text-base md:text-2xl font-light">
//           {lines.map((line, i) => (
//             <React.Fragment key={i}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </h3>
//       </div>
//     </div>
//   );
// };

// const Departments = () => {
//   const [activeCampus, setActiveCampus] = useState("wardha");
//   const [activeHospital, setActiveHospital] = useState("wardha-hospital");

//   const showLeadership = (campus) => {
//     alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
//   };

//   const wardhaData = [
//     { image: Image1, title: "Radiology" },
//     { image: Image2, title: "Radiotherapy" },
//     { image: Image3, title: "Pathology" },
//     { image: Image4, title: "Medicine" },
//     { image: Image5, title: "Respiratory Medicine" },
//     { image: Image6, title: "Dermatology" },
//     { image: Image5, title: "Physiology" },
//     { image: Image6, title: "Cardiology" },
//     { image: Image1, title: "Cardio Vascular Surgery" },
//     { image: Image2, title: "Nephology" },
//     { image: Image3, title: "Neurosciences" },
//     { image: Image4, title: "Surgery I Anaesthesia" },
//     { image: Image5, title: "Emergency Medicine" },
//     { image: Image6, title: "Orthopedics" },
//     { image: Image5, title: "Anesthesia" },
//     { image: Image6, title: "Ophthalmology" },
//     { image: Image2, title: "MGAC" },
//     { image: Image3, title: "AHS" },
//     { image: Image4, title: "Clinical Nutrition and Dietetics" },
//     { image: Image5, title: "Psychology" },
//   ];


//   const wanaData = [
//     { image: Image1, title: "Radiology " },
//     { image: Image2, title: "Pathology " },
//     { image: Image3, title: "Medicine " },
//     { image: Image4, title: "Respiratory Medicine " },
//     { image: Image5, title: "Dermatology " },
//     { image: Image6, title: "Physiology " },
//     { image: Image5, title: "Cardiology " },
//     { image: Image1, title: "Cardio Vascular Surgery" },
//     { image: Image2, title: "Nephology" },
//     { image: Image3, title: "Neurosciences" },
//     { image: Image4, title: "Surgery I Anaesthesia" },
//     { image: Image6, title: "Nephology " },
//     { image: Image5, title: "Surgery " },
//     { image: Image6, title: "Anaesthesia" },
//     { image: Image5, title: "Emergency Medicine " },
//     { image: Image6, title: "Orthopaedics " },
//     { image: Image1, title: "Anaesthesia " },
//     { image: Image2, title: "Ophthalmology " },
//     { image: Image3, title: "AHS " },
//     { image: Image4, title: "Clinical Nutrition and Dietetics" },
//     { image: Image5, title: "Psychology" },
//   ];

//   const firstRow = wardhaData.slice(0.8);

//   const secRow = wanaData.slice(0.8);

//   return (
//     <div className="py-15 bg-white">
//       <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6">
//         <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
//           <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
//           OUR DEPARTMENTS
//         </h2>

//         {/* Tabs (optional - can uncomment if needed later) */}

//         <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
//           <button
//             className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === "wardha"
//               ? "text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
//               : "text-gray-400"
//               }`}
//             onClick={() => setActiveCampus("wardha")}
//           >
//             SASH Wardha
//           </button>
//           <button
//             className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === "wana"
//               ? "text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
//               : "text-gray-400"
//               }`}
//             onClick={() => setActiveCampus("wana")}
//           >
//             SASH Wana
//           </button>
//         </div>

//         {activeCampus === 'wardha' && (
//           <div className="max-w-5xl mx-auto space-y-5">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
//               {firstRow.map((item, index) => (
//                 <SAHSCard key={index} image={item.image} title={item.title} />
//               ))}
//             </div>
//           </div>
//         )}

//         {activeCampus === 'wana' && (
//           <div className="max-w-5xl mx-auto space-y-5">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
//               {secRow.map((item, index) => (
//                 <SAHSCard key={index} image={item.image} title={item.title} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Departments;



import React, { useState, useRef, useEffect } from "react";

import Image1 from "../../assets/FEAT/DepartmentGrid/1.png";
import Image2 from "../../assets/FEAT/DepartmentGrid/2.png";
import Image3 from "../../assets/FEAT/DepartmentGrid/3.png";
import Image4 from "../../assets/FEAT/DepartmentGrid/4.png";
import Image5 from "../../assets/FEAT/DepartmentGrid/5.png";
import Image6 from "../../assets/FEAT/DepartmentGrid/6.png";

const SAHSCard = ({ image, title }) => {
  const lines = title.split("\n");

  return (
    <div
      className="relative h-28 md:h-40 w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-center px-2"
        style={{
          fontFamily: '"Helvetica Neue", sans-serif',
          fontStretch: "condensed",
        }}
      >
        <h3 className="text-white text-sm sm:text-base md:text-2xl font-light">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
      </div>
    </div>
  );
};

const Departments = () => {
  const [activeCampus, setActiveCampus] = useState("wardha");
  const [currentSlide, setCurrentSlide] = useState(0);

  const wardhaData = [
    { image: Image1, title: "Radiology" },
    { image: Image2, title: "Radiotherapy" },
    { image: Image3, title: "Pathology" },
    { image: Image4, title: "Medicine" },
    { image: Image5, title: "Respiratory Medicine" },
    { image: Image6, title: "Dermatology" },
    { image: Image5, title: "Physiology" },
    { image: Image6, title: "Cardiology" },
    { image: Image1, title: "Cardio Vascular Surgery" },
    { image: Image2, title: "Nephology" },
    { image: Image3, title: "Neurosciences" },
    { image: Image4, title: "Surgery I Anaesthesia" },
    { image: Image5, title: "Emergency Medicine" },
    { image: Image6, title: "Orthopedics" },
    { image: Image5, title: "Anesthesia" },
    { image: Image6, title: "Ophthalmology" },
    { image: Image2, title: "MGAC" },
    { image: Image3, title: "AHS" },
    { image: Image4, title: "Clinical Nutrition and Dietetics" },
    { image: Image5, title: "Psychology" },
  ];

  const wanaData = [
    { image: Image1, title: "Radiology" },
    { image: Image2, title: "Pathology" },
    { image: Image3, title: "Medicine" },
    { image: Image4, title: "Respiratory Medicine" },
    { image: Image5, title: "Dermatology" },
    { image: Image6, title: "Physiology" },
    { image: Image5, title: "Cardiology" },
    { image: Image1, title: "Cardio Vascular Surgery" },
    { image: Image2, title: "Nephology" },
    { image: Image3, title: "Neurosciences" },
    { image: Image4, title: "Surgery I Anaesthesia" },
    { image: Image6, title: "Nephology" },
    { image: Image5, title: "Surgery" },
    { image: Image6, title: "Anaesthesia" },
    { image: Image5, title: "Emergency Medicine" },
    { image: Image6, title: "Orthopaedics" },
    { image: Image1, title: "Anaesthesia" },
    { image: Image2, title: "Ophthalmology" },
    { image: Image3, title: "AHS" },
    { image: Image4, title: "Clinical Nutrition and Dietetics" },
    { image: Image5, title: "Psychology" },
  ];

  // Get current data based on active campus
  const currentData = activeCampus === "wardha" ? wardhaData : wanaData;

  // Items per slide - 8 boxes (4x2 grid)
  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(currentData.length / itemsPerSlide);

  // Reset slide when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCampus]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current slide data
  const currentSlideData = currentData.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <div className="py-15 bg-white">
      <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
          <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          OUR DEPARTMENTS
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
          <button
            className={`relative pb-2 text-lg font-bold transition-all duration-300 ${
              activeCampus === "wardha"
                ? "text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveCampus("wardha")}
          >
            SASH Wardha
          </button>
          <button
            className={`relative pb-2 text-lg font-bold transition-all duration-300 ${
              activeCampus === "wana"
                ? "text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveCampus("wana")}
          >
            SASH Wana
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          {/* {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                style={{ marginLeft: '-25px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                style={{ marginRight: '-25px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </>
          )} */}

          {/* Grid Layout - 2 rows of 4 boxes each */}
          <div className="space-y-6 px-5 max-w-7x">
            {/* First Row - 4 boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
              {currentSlideData.slice(0, 4).map((item, index) => (
                <SAHSCard key={`row1-${index}`} image={item.image} title={item.title} />
              ))}
            </div>

            {/* Second Row - 4 boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
              {currentSlideData.slice(4, 8).map((item, index) => (
                <SAHSCard key={`row2-${index}`} image={item.image} title={item.title} />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-[#EE4B2B] scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Departments;
