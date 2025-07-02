// import React, { useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const tabRoutes = [
//   {
//     number: 1,
//     path: "/SRMMCON",
//     label: "Smt. Radhikabai Meghe Memorial College of Nursing, Wardha",
//   },
//   {
//     number: 2,
//     path: "/SMCON-W",
//     label: "Shalinitai Meghe College of Nursing, Salod (Hirapur), Wardha",
//   },
//   {
//     number: 3,
//     path: "/SMCON-N",
//     label: "Shalinitai Meghe College of Nursing, Nagpur",
//   },
// ];

// function CollegeTabs({
//   collegeTabNumber,
//   setCollegeTabNumber,
//   setManualNavigation,
// }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const found = tabRoutes.find((tab) =>
//       location.pathname.startsWith(tab.path)
//     );
//     if (found) {
//       setCollegeTabNumber(found.number);
//     }
//   }, [location.pathname, setCollegeTabNumber]);

//   const handleTabClick = (tab) => {
//     setManualNavigation(true); // mark this as a manual (tab) navigation
//     setCollegeTabNumber(tab.number);
//     navigate(tab.path);
//   };

//   return (
//     <ul className="container flex items-center font-oswald-medium justify-center gap-[8%] border-b my-8 w-fit m-auto max-sm:flex-col">
//       {tabRoutes.map((tab) => (
//         <li
//           key={tab.number}
//           onClick={() => handleTabClick(tab)}
//           className={`cursor-pointer text-center text-xl py-4 max-w-[410px] ${
//             collegeTabNumber === tab.number
//               ? "font-[500] text-[#122E5E] border-b-4 border-[#F04E30]"
//               : "text-[#58595B]"
//           }`}
//         >
//           {tab.label}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default CollegeTabs;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabRoutes = [
  {
    number: 1,
    path: "/SRMMCON",
    label: "Smt. Radhikabai Meghe Memorial College of Nursing, Wardha",
  },
  {
    number: 2,
    path: "/SMCON-W",
    label: "Shalinitai Meghe College of Nursing, Salod (Hirapur), Wardha",
  },
  {
    number: 3,
    path: "/SMCON-N",
    label: "Shalinitai Meghe College of Nursing, Nagpur",
  },
];

function CollegeTabs({ collegeTabNumber, setCollegeTabNumber }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const found = tabRoutes.find((tab) =>
      location.pathname.startsWith(tab.path)
    );
    if (found && found.number !== collegeTabNumber) {
      setCollegeTabNumber(found.number);
    }
  }, [location.pathname, setCollegeTabNumber]);

  const handleTabClick = (tab) => {
    if (collegeTabNumber !== tab.number) {
      sessionStorage.setItem("manualTabNavigation", "true");
      setCollegeTabNumber(tab.number);
      navigate(tab.path);
    }
  };

  return (
    <ul className="container flex items-center font-oswald-medium justify-center gap-[8%] border-b my-8 w-fit m-auto max-sm:flex-col">
      {tabRoutes.map((tab) => (
        <li
          key={tab.number}
          onClick={() => handleTabClick(tab)}
          className={`cursor-pointer text-center text-xl py-4 max-w-[410px] ${
            collegeTabNumber === tab.number
              ? "font-[500] text-[#122E5E] border-b-4 border-[#F04E30]"
              : "text-[#58595B]"
          }`}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
}

export default CollegeTabs;
