const items = [
  {
    title: "Accreditations",
    link: "https://www.example.com/accreditations",
  },
  {
    title: "Collaborations & Partnerships",
    link: "https://www.example.com/collaborations",
  },
  {
    title: "Academic Programs",
    link: "https://www.example.com/academic-programs",
  },
  {
    title: "Learners Mobility Programs Directory",
    link: "https://www.example.com/learners-mobility",
  },
  {
    title: "Faculty Mobility Programs",
    link: "https://www.example.com/faculty-mobility",
  },
  {
    title: "International Admissions",
    link: "https://www.example.com/international-admissions",
  },
  {
    title: "Global Service Programs",
    link: "https://www.example.com/global-service",
  },
  {
    title: "Global Research Programs",
    link: "https://www.example.com/global-research",
  },
  {
    title: "Alumni",
    link: "https://www.example.com/alumni",
  },
  {
    title: "Placements",
    link: "https://www.example.com/placements",
  },
];

function ProgramsGLobal() {
  return (
    <section className="flex flex-col items-center pt-4 pb-16 container">
      {/* First row: 4 items */}
      <div className="flex gap-2 mb-2 flex-wrap justify-center">
        {items.slice(0, 4).map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#153366] text-white rounded-lg w-64 h-32 flex items-center justify-center text-lg font-oswald-medium text-center p-4 cursor-pointer hover:scale-105 transition hover:opacity-95"
          >
            {item.title}
          </a>
        ))}
      </div>
      {/* Second row: 4 items */}
      <div className="flex gap-2 mb-2 flex-wrap justify-center">
        {items.slice(4, 8).map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#153366] text-white rounded-lg w-64 h-32 flex items-center justify-center text-lg font-oswald-medium text-center cursor-pointer hover:scale-105 transition hover:opacity-95"
          >
            {item.title}
          </a>
        ))}
      </div>
      {/* Third row: 2 items */}
      <div className="flex gap-2 flex-wrap justify-center">
        {items.slice(8, 10).map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#153366] text-white rounded-lg w-64 h-32 flex items-center justify-center text-lg font-oswald-medium text-center cursor-pointer hover:scale-105 transition hover:opacity-95"
          >
            {item.title}
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProgramsGLobal;
