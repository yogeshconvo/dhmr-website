import React from "react";
import {
  Users,
  GraduationCap,
  BookOpenCheck,
  Wallet,
  ShieldAlert,
  Accessibility,
  Scale,
} from "lucide-react";

const committees = [
  {
    name: "Executive Council",
    link: "https://www.dmiher.edu.in/board-of-management",
    icon: <Users />,
  },
  {
    name: "Academic Council",
    link: "https://www.dmiher.edu.in/academic-council",
    icon: <GraduationCap />,
  },
  {
    name: "Board of Studies",
    link: "https://www.dmiher.edu.in/archive/topic/972",
    icon: <BookOpenCheck />,
  },
  {
    name: "Finance Committee",
    link: "https://www.dmiher.edu.in/finance-committee",
    icon: <Wallet />,
  },
];

const inclusiveFacilities = [
  {
    name: "Socio-Economically Disadvantaged Groups Cell (SEDG)",
    link: "https://www.dmiher.edu.in/equal-opportunity-cell",
    icon: <Users />,
  },
  {
    name: "Facilities for differently-abled (e.g., barrier-free environment)",
    link: "https://naac.dmiher.edu.in/fdata/wl/?id=xqR1lL5zDkQj9SNXnP7LrJi0AYaAKfm7",
    icon: <Accessibility />,
  },
  {
    name: "Internal Complaint Committee",
    link: "https://www.dmiher.edu.in/internal-complaint-committee-for-redressal-sexual-harrasment-complaints",
    icon: <ShieldAlert />,
  },
  {
    name: "Equal Opportunity Cell",
    link: "https://www.dmiher.edu.in/equal-opportunity-cell",
    icon: <Scale />,
  },
];

const Card = ({ icon, name, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-[#fef7f6]"
  >
    <div className="bg-[#F04E30]/10 text-[#F04E30] rounded-full p-3">
      <div className="w-6 h-6">{icon}</div>
    </div>
    <div className="text-gray-800 font-medium text-[20px] mt-2 leading-snug">
      {name}
    </div>
  </a>
);

const CommitteesSection = () => {
  return (
    <section className="bg-[#FAFAF6] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-[500]  text-[#707070] font-oswald-medium uppercase mb-5  tracking-wide">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          Committees
        </h2>

        {/* First Row: 3 Items in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-8">
          {committees.slice(0, 4).map((item, index) => (
            <div key={index} className="w-full">
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* Inclusive Section Title */}
        <h2 className="text-3xl font-[500]  text-[#707070] font-oswald-medium uppercase mb-5 tracking-wide">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          Inclusive Cells & Facilities
        </h2>

        {/* Inclusive Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {inclusiveFacilities.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
