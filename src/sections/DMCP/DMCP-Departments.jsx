import React from "react";
import Img1 from "../../assets/DMCP/departments/1.jpg";
import Img2 from "../../assets/DMCP/departments/2.jpg";
import Img3 from "../../assets/DMCP/departments/3.jpg";
import Img4 from "../../assets/DMCP/departments/4.jpg";
import Img5 from "../../assets/DMCP/departments/5.jpg";
import Img6 from "../../assets/DMCP/departments/6.jpg";
import Img7 from "../../assets/DMCP/departments/7.jpg";

const DepartmentCard = ({ image, title, link }) => (
  <a
    href={link || "#"}
    className="relative h-28 md:h-40 w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 group"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-2 group-hover:bg-[#F04E30]/80 transition">
      <h3 className="text-white text-sm sm:text-base md:text-2xl font-light font-oswald-medium">
        {title}
      </h3>
    </div>
  </a>
);

function DepartmentsDMCP() {
  const departments = [
    {
      image: Img1,
      title: "Pharmaceutics",
      link: "#",
    },
    {
      image: Img2,
      title: "Pharmacology ",
      link: "#",
    },
    {
      image: Img3,
      title: "Regulatory Affairs",
      link: "#",
    },
    {
      image: Img4,
      title: "Pharmaceutical Quality Assurance",
      link: "#",
    },
    {
      image: Img5,
      title: "Pharmaceutical Chemistry",
      link: "#",
    },
    {
      image: Img6,
      title: "Pharmacognosy",
      link: "#",
    },
    {
      image: Img7,
      title: "Pharmacy Practice",
      link: "#",
    },
  ];

  // For grid layout: 4 in first row, 3 in second row (desktop)
  const firstRow = departments.slice(0, 4);
  const secondRow = departments.slice(4);

  return (
    <div className="py-15 bg-white container">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl ml-10 md:ml-0 sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
          <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          OUR DEPARTMENTS
        </h2>

        <div className="max-w-5xl mx-auto space-y-5">
          {/* Desktop View */}
          <div className="hidden md:block space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
              {firstRow.map((item, index) => (
                <DepartmentCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {secondRow.map((item, index) => (
                <DepartmentCard
                  key={index + 4}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-2 px-10 justify-items-center">
              {departments.map((item, index) => (
                <DepartmentCard
                  key={`mobile-${index}`}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentsDMCP;
