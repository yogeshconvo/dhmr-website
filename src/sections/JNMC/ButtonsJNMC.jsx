// import React from "react";

// function ButtonsJNMC() {
//     return (
//         <div className="bg-white font-oswald-medium pb-20 pt-10 px-4">
//             <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

//                 {/* Button 1 */}
//                 <a
//                     href="#"
//                     className="bg-[#F04E30] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
//                 >
//                     SVL + SPP
//                 </a>

//                 {/* Button 2 */}
//                 <a
//                     href="#"
//                     className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
//                 >
//                     Museum
//                 </a>

//                 {/* Button 3 */}
//                 <a
//                     href="#"
//                     className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
//                 >
//                     Cadaveric & Wet Lab
//                 </a>

//                 {/* Button 4 */}
//                 <a
//                     href="#"
//                     className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
//                 >
//                     NMC Nodal Centres Report
//                 </a>

//             </div>
//         </div>

//     );
// }

// export default ButtonsJNMC;
import React, { useState } from "react";

const ButtonSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttons = [
    { label: "SVL + SPP" },
    { label: "Museum" },
    { label: "Cadaveric & Wet Lab" },
    { label: "NMC Nodal Centres Report" },
  ];

  return (
    <div className="bg-white font-oswald-medium pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex === index ? "bg-[#F04E30]" : "bg-[#102B64]"
            } text-white text-center text-xl sm:text-2xl py-4 px-6 rounded-lg shadow-lg transition hover:brightness-110 w-full`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;
