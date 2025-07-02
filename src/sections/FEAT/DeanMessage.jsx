// import React from "react";
// import DeanImage from "../../assets/FEAT/DeanFEAT.png"; // Adjust the path as necessary

// const DeansMessageFEAT = () => {
//   return (
//     <div className="bg-[#0C2C5B] text-white px-10 md:px-40 py-40">
//       <h2 className="text-3xl md:text-4xl font-oswaldMedium border-l-4 border-[#F25022] pl-3 mb-10">
//         DEAN’S MESSAGE
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-10 items-start">
//         {/* Image + Name */}
//         <div className="flex-shrink-0">
//           <img
//             src={DeanImage} // Replace this with the correct image path
//             alt="Dean"
//             className="rounded-lg w-[370px] h-auto object-cover mb-4"
//           />
//           <div className="text-[13px] leading-6 text-[#F7B733] mt-2">
//             <p className="text-[#F7B733] font-bold">Prof. (Dr.) K.T.V. Reddy</p>
//             <p>
//               Dean, B. Tech, M. Tech & Ph.D. (IIT Bombay) FIETE,
//               <br />
//               SMIEEE, MCSI, MISTE, MACM
//               <br />
//               Past President, IETE HQ, New Delhi
//               <br />
//               Past Chairman, IETE Mumbai Centre
//               <br />
//               IETE Distinguished Fellow-2024
//             </p>
//             <p>Email - dean.feat@dmiher.edu.in</p>
//           </div>
//         </div>

//         {/* Message */}
//         <div className="text-xl font-[300]  leading-6 text-white">
//           <p className="mb-6">
//             As a premier institution under Datta Meghe Institute of Higher
//             Education and Research, Wardha, FEAT stands at the forefront of
//             engineering innovation—especially in the emerging domains of
//             Techno-Health and Clinical Engineering.
//           </p>

//           <p className="mb-6">
//             Rooted in a forward-looking, interdisciplinary philosophy, we are
//             committed to nurturing engineers who are not only skilled but
//             future-ready. At FEAT, we foster an inclusive and collaborative
//             environment that supports academic excellence, personal growth, and
//             professional success. Our focus on equal opportunity and holistic
//             development ensures that every student is empowered to thrive—in
//             higher studies, industry, and beyond.
//           </p>

//           <a
//             href="#"
//             className="text-[#9AD1FF] text-sm font-oswaldLight underline"
//           >
//             Know more
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeansMessageFEAT;

import React from "react";
import DeanImage from "../../assets/FEAT/DeanFEAT.png";

const DeansMessageFEAT = () => {
  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-wide font-[500] mb-10">
        <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
        DEAN’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          />
          <div className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
            <p className=" font-bold">Prof. (Dr.) K.T.V. Reddy</p>
            <p>
              Dean, B. Tech, M. Tech & Ph.D. (IIT Bombay) FIETE,
              <br />
              SMIEEE, MCSI, MISTE, MACM
              <br />
              Past President, IETE HQ, New Delhi
              <br />
              Past Chairman, IETE Mumbai Centre
              <br />
              IETE Distinguished Fellow-2024
            </p>
            <p>Email - dean.feat@dmiher.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-lg tracking-wide font-sans text-[16px] mt-4 leading-6 text-[#FFFFFF] max-w-2xl font-[400]">
          <p className="mb-6">
            As a premier institution under Datta Meghe Institute of Higher
            Education and Research, Wardha, FEAT stands at the forefront of
            engineering innovation—especially in the emerging domains of
            Techno-Health and Clinical Engineering.
          </p>

          <p className="mb-6">
            Rooted in a forward-looking, interdisciplinary philosophy, we are
            committed to nurturing engineers who are not only skilled but
            future-ready. At FEAT, we foster an inclusive and collaborative
            environment that supports academic excellence, personal growth, and
            professional success. Our focus on equal opportunity and holistic
            development ensures that every student is empowered to thrive—in
            higher studies, industry, and beyond.
          </p>

          <a href="#" className="text-[#9AD1FF] text-sm underline">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeansMessageFEAT;
