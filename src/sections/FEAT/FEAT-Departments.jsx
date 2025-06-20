import React from "react";
import Image1 from "../../assets/FEAT/DepartmentGrid/1.png";
import Image2 from "../../assets/FEAT/DepartmentGrid/2.png";
import Image3 from "../../assets/FEAT/DepartmentGrid/3.png";
import Image4 from "../../assets/FEAT/DepartmentGrid/4.png";
import Image5 from "../../assets/FEAT/DepartmentGrid/5.png";
import Image6 from "../../assets/FEAT/DepartmentGrid/6.png";

const FEATCard = ({ image, title }) => {
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

const FEATDepartments = () => {
  const researchData = [
    { image: Image1, title: "Artificial Intelligence &\nData Science" },
    { image: Image2, title: "Artificial Intelligence\n& Machine Learning" },
    { image: Image3, title: "Computer Science\n& Design" },
    {
      image: Image4,
      title: "Computer Science\n& Medical Engineering",
    },
    { image: Image5, title: "Computer Science\n& Engineering" },
    { image: Image6, title: "Biomedical\nEngineering" },
  ];

  const firstRow = researchData.slice(0, 4);
  const secondRow = researchData.slice(4);

  return (
    <div className="py-15 bg-white">
      <div className="max-w-7xl mx-auto space-y-6  ">
        <h2 className="text-3xl ml-10 md:ml-0 sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
          <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          OUR DEPARTMENTS
        </h2>

        <div className="max-w-5xl mx-auto space-y-5">
          {/* Desktop View: Show only on md and up */}
          <div className="hidden md:block space-y-5">
            {/* First row: responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
              {firstRow.map((item, index) => (
                <FEATCard key={index} image={item.image} title={item.title} />
              ))}
            </div>
            {/* Second row: responsive center-aligned */}
            <div className="flex flex-wrap justify-center gap-4">
              {secondRow.map((item, index) => (
                <FEATCard
                  key={index + 4}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          {/* Mobile View: 2 columns, 3 rows – visible only below md */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-2 px-10 justify-items-center">
              {[...firstRow, ...secondRow].slice(0, 6).map((item, index) => (
                <FEATCard
                  key={`mobile-${index}`}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FEATDepartments;
