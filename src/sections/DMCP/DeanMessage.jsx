// import React from "react";
// import DeanImage from "../../assets/DMCP/Dean.png";

// function DeansMessageRNPC() {
//   return (
//     <div className="bg-[#122E5E] text-white px-6 md:px-40 py-20 ">
//       <div className="container">
//         <h2 className="text-3xl md:text-4xl font-oswald-medium font-[500] mb-10">
//           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
//           DEAN’S MESSAGE
//         </h2>

//         <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
//           {/* Image + Name */}
// <div className="flex-shrink-1">
//   <img
//     src={DeanImage}
//     alt="Dean"
//     className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
//   />
//   <div className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
//     <p className="text-[#E1CD67] font-bold">Dr. Anil M. Pethe</p>
//     <p>
//       Dean, Datta Meghe College of Pharmacy, Sawangi (M), Wardha
//       <br />
//       M.Pharm, PhD, MBA
//       <br />
//     </p>
//     <p>Email - anil.pethe@dmiher.edu.in</p>
//   </div>
// </div>

//           {/* Message */}
//           <div className="text-lg tracking-wide font-sans text-[16px]  leading-6 text-[#FFFFFF] max-w-3xl font-[400]">
//             <p className="mb-6">
//               Welcome to Datta Meghe College of Pharmacy, Sawangi (Meghe),
//               Wardha.
//               <br />
//               Welcome to Datta Meghe College of Pharmacy, Sawangi (Meghe),
// Wardha. At our institution, we are dedicated to providing
// high-quality education through a team of well-qualified faculty
// members who mentor and guide students toward excellence in
// pharmaceutical sciences. Our strong industry connects and
// placement cell ensures promising career opportunities by bridging
// the gap between academics and industry requirements.

// Through
// Coursera courses and our Virtual Training Center, students gain
// access to global learning resources, enhancing their knowledge and
// skills. With a 1500+ bed hospital, a well-equipped preclinical and
// clinical setup, and a dedicated Research House, we provide
// extensive hands-on training and research opportunities. Our
// Machine Room enables students to develop pharmaceutical
// formulations, while our Herbal Garden fosters expertise in natural
// drug research. The Pharmacy Museum offers insights into the
// evolution of pharmaceutical sciences. Beyond academics, we
// encourage extracurricular activities to promote holistic
// development, leadership, and teamwork. Join us in this journey of
// innovation, learning, and professional success. Together, let’s
// shape the future of healthcare.
//             </p>
//             <button className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]">
//               know More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeansMessageRNPC;

import React, { useState } from "react";
import DeanImage from "../../assets/DMCP/Dean.png";

const DirectorsMessageCDOE = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
        <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
        DIRECTOR’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
        <div className="flex">
          {/* Image + Name */}
          <div className="flex-shrink-0">
            <img
              src={DeanImage}
              alt="Dean"
              className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
            />
            <div className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
              <p className="text-[#E1CD67] font-bold">Dr. Anil M. Pethe</p>
              <p>
                Dean, Datta Meghe College of Pharmacy, <br /> Sawangi (M), Wardha
                <br />
                M.Pharm, PhD, MBA
                <br />
              </p>
              <p>Email - anil.pethe@dmiher.edu.in</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-xm tracking-wide  leading-6 text-[#f5eeee] max-w-3xl">
          <p className="mb-3">
            Welcome to Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha.
          </p>
          <p className="mb-3">
            At our institution, we are dedicated to providing high-quality
            education through a team of well-qualified faculty members who
            mentor and guide students toward excellence in pharmaceutical
            sciences. Our strong industry connects and placement cell ensures
            promising career opportunities by bridging the gap between academics
            and industry requirements.
          </p>

          <p className="mb-3">
            Through Coursera courses and our Virtual Training Center, students
            gain access to global learning resources, enhancing their knowledge
            and skills. With a 1500+ bed hospital, a well-equipped preclinical
            and clinical setup, and a dedicated Research House, we provide
            extensive hands-on training and research opportunities. Our Machine
            Room enables students to develop pharmaceutical formulations, while
            our Herbal Garden fosters expertise in natural drug research.
          </p>
          {!showMore && (
            <button
              className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
              onClick={() => setShowMore(true)}
            >
              View More
            </button>
          )}
          {showMore && (
            <>
              <p>
                The Pharmacy Museum offers insights into the evolution of
                pharmaceutical sciences. Beyond academics, we encourage
                extracurricular activities to promote holistic development,
                leadership, and teamwork. Join us in this journey of innovation,
                learning, and professional success. Together, let’s shape the
                future of healthcare.
              </p>
              <a
                href="#"
                className="text-[#9AD1FF] text-sm underline cursor-pointer mt-2 block"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMore(false);
                }}
              >
                view less
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessageCDOE;
