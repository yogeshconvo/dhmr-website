// import React from "react";

// import OD1 from "../../assets/OurDepartmentGrid/1.png";
// import OD2 from "../../assets/OurDepartmentGrid/2.png";
// import OD3 from "../../assets/OurDepartmentGrid/3.png";
// import OD4 from "../../assets/OurDepartmentGrid/4.png";
// import OD5 from "../../assets/OurDepartmentGrid/5.png";
// import OD6 from "../../assets/OurDepartmentGrid/6.png";
// import OD7 from "../../assets/OurDepartmentGrid/7.png";
// import OD8 from "../../assets/OurDepartmentGrid/8.png";
// import OD9 from "../../assets/ResearchGrid/3.png";

// const departmentItems = [
//   { title: "Orthodontics", image: OD1 },
//   { title: "Conservative Dentistry\nand Endodontics", image: OD2 },
//   { title: "Pedodontia and\nPreventive Dentistry", image: OD3 },
//   { title: "Oral Medicine \n& Radiology", image: OD9 },
//   { title: "Oral Pathology &\nMicrobiology", image: OD4 },
//   { title: "Oral and Maxillofacial\nSurgery", image: OD5 },
//   { title: "Periodontics and Oral\nImplantology", image: OD6 },
//   { title: "Prosthodontics and\nCrown & Bridge", image: OD7 },
//   { title: "Public Health\nDentistry", image: OD8 },
// ];

// const OurDepartment = () => {
//   return (
//     <section className="py-20 px-5 sm:px-8 md:px-20 max-w-7xl mx-auto">
//       <div className="mb-10">
//         <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//           Our Departments
//         </h2>
//       </div>
//       {/* <div className="grid grid-cols-2 sm:pl-20 sm:pr-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {departmentItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="group relative block h-35 md:h-40 rounded-xl overflow-hidden shadow"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
//               style={{ backgroundImage: `url(${item.image})` }}
//             ></div>

//             <div className="relative z-10 h-full w-full flex items-center justify-center px-2 text-center">
//               <h3 className="text-white text-xl md:text-2xl font-oswald-medium font-thin whitespace-pre-line leading-tight">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div className="grid grid-cols-2 sm:pl-20 sm:pr-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {departmentItems.map((item, idx) => {
//           const isLast = idx === departmentItems.length - 1;
//           const isSingleInLastRow = departmentItems.length % 4 === 1 && isLast;

//           return isSingleInLastRow ? (
//             <div key={idx} className="lg:col-span-4 flex justify-center">
//               <div className="group relative block h-35 md:h-40 w-full max-w-[250px] rounded-xl overflow-hidden shadow">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
//                   style={{ backgroundImage: `url(${item.image})` }}
//                 ></div>

//                 <div className="relative z-10 h-full w-full flex items-center justify-center px-2 text-center">
//                   <h3 className="text-white text-xl md:text-2xl font-oswald-medium font-thin whitespace-pre-line leading-tight">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div
//               key={idx}
//               className="group relative block h-35 md:h-40 rounded-xl overflow-hidden shadow"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>

//               <div className="relative z-10 h-full w-full flex items-center justify-center px-2 text-center">
//                 <h3 className="text-white text-xl md:text-2xl font-oswald-medium font-thin whitespace-pre-line leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default OurDepartment;
import React from "react";

import OD1 from "../../assets/OurDepartmentGrid/1.png";
import OD2 from "../../assets/OurDepartmentGrid/2.png";
import OD3 from "../../assets/OurDepartmentGrid/3.png";
import OD4 from "../../assets/OurDepartmentGrid/4.png";
import OD5 from "../../assets/OurDepartmentGrid/5.png";
import OD6 from "../../assets/OurDepartmentGrid/6.png";
import OD7 from "../../assets/OurDepartmentGrid/7.png";
import OD8 from "../../assets/OurDepartmentGrid/8.png";
import OD9 from "../../assets/ResearchGrid/3.png";

const departmentItems = [
  {
    title: "Student affairs & Student Council",
    image: OD1,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Orthodontics.pdf#toolbar=0",
  },
  {
    title: "Institution wise Student Councils",
    image: OD2,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Conservative.pdf#toolbar=0",
  },
  {
    title: "Student Clubs",
    image: OD3,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Pedodontia.pdf#toolbar=0",
  },
  {
    title: "Activity Calendar",
    image: OD8,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/ODMR.pdf#toolbar=0",
  },
  {
    title: "NSS",
    image: OD4,
    link: "https://www.dmiher.edu.in/uploads/dept/SPDC/New%20Format%20-%20Pathology.pdf#toolbar=0&navpanes=0",
  },
  {
    title: "Awards",
    image: OD5,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Oral%20Surgery.pdf",
  },
  {
    title: "Student Charter",
    image: OD6,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Periodontics.pdf#toolbar=0",
  },
  {
    title: "Campus Amenities",
    image: OD7,
    link: "https://www.dmiher.edu.in/uploads/topics/STAFFDEPT/SPDC/Prosthodontics.pdf#toolbar=0",
  },

];

const OurDepartment = () => {
  return (
    <section className="py-20 px-5 sm:px-8 md:px-20 max-w-7xl mx-auto">
 

      <div className="grid grid-cols-2 sm:pl-20 sm:pr-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {departmentItems.map((item, idx) => {
          const isLast = idx === departmentItems.length - 1;
          const isSingleInLastRow = departmentItems.length % 4 === 1 && isLast;

          const content = (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-35 md:h-40 rounded-xl overflow-hidden shadow"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="relative z-10 h-full w-full flex items-center justify-center px-2 text-center">
                <h3 className="text-white text-xl md:text-2xl font-oswald-medium font-thin whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            </a>
          );

          return isSingleInLastRow ? (
            <div key={idx} className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[250px]">{content}</div>
            </div>
          ) : (
            <div key={idx}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};

export default OurDepartment;
