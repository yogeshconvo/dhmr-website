import React from "react";
import Img1 from "../../assets/Nursing/Departments/Child Health Nursing.jpg";
import Img2 from "../../assets/Nursing/Departments/COMMUNITY HEALTH NURSING.jpg";
import Img3 from "../../assets/Nursing/Departments/Medical Surgical Nursing.jpg";
import Img4 from "../../assets/Nursing/Departments/mental health nursing.jpg";
import Img5 from "../../assets/Nursing/Departments/Obstetrics And Gynecology Nursing.jpg";

// Card Component
const DepartmentCard = ({ image, title, link }) => (
  <a
    href={link || "#"}
    className="relative h-32 md:h-44 w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 group"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-2 group-hover:bg-[#F04E30]/80 transition">
      <h3 className="text-white  sm:text-base md:text-2xl font-light font-oswald-medium">
        {title}
      </h3>
    </div>
  </a>
);

// Main Component
export default function DepartmentsNursing() {
  const departments = [
    { image: Img1, title: "Child Health Nursing", link: "#" },
    { image: Img2, title: "Community Health Nursing", link: "#" },
    { image: Img3, title: "Medical Surgical Nursing", link: "#" },
    { image: Img4, title: "Mental Health Nursing", link: "#" },
    { image: Img5, title: "Obstetrics And Gynecology Nursing", link: "#" },
  ];

  const firstRow = departments.slice(0, 3);
  const secondRow = departments.slice(3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <hr className="w-12 sm:w-20 border-[#F04E30] border-t-4 mb-2" />
          <h2 className="text-3xl sm:text-4xl font-oswald-medium text-[#707070] tracking-wider">
            OUR DEPARTMENTS
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden max-w-3xl mx-auto md:block space-y-4">
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {firstRow.map((item, index) => (
              <DepartmentCard key={index} {...item} />
            ))}
          </div>

          {/* Row 2: 2 Cards Centered */}
          <div className="flex justify-center gap-5">
            {secondRow.map((item, index) => (
              <DepartmentCard key={index + 3} {...item} />
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden grid grid-cols-2 gap-6 justify-items-center mt-6">
          {departments.map((item, index) => (
            <DepartmentCard key={`m-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
