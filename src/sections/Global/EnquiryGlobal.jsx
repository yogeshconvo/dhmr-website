import React from "react";

const links = [
  {
    title: "Expression of Interest form for international universities",
    path: "#",
  },
  {
    title: "Admission enquiry form",
    path: "#",
  },
  {
    title: "Outward Opportunities application form",
    path: "#",
  },
  {
    title: "Inward Opportunities application form",
    path: "#",
  },
  {
    title: "Faculty Opportunities application form",
    path: "#",
  },
];

function EnquiryGlobal() {
  return (
    <section className="bg-[#f1f1f1] py-16">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-8 font-oswald-medium font-[500] tracking-tight leading-tight ">
          <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
          ENQUIRY
        </h2>

        <ul>
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`text-[#269BFF] underline ${
                idx < links.length - 1 ? "mb-4" : ""
              }`}
            >
              <a href={link.path} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default EnquiryGlobal;
