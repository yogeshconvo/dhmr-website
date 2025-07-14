import React from "react";
import hostel from "../../assets/FC/hostel.svg";
import dining from "../../assets/FC/dining.svg";
import book from "../../assets/FC/book.svg";

function HostelFC() {
  const cards = [
    {
      title: <p className="text-[#F7941D] text-3xl">24 Hostels in total</p>,
      description:
        "10 for girls, 8 for boys, plus 4 PG hostels and 1 PG guest house",
      bg: "bg-[#0f2f6e]",
      text: "text-yellow-400",
      icon: hostel, // replace with SVG if needed
    },
    {
      title: <p className="text-[#122E5E] text-3xl">Capacity</p>,
      description: (
        <p className="text-[#58595B]">
          - 2,961 students across 1,435 rooms
          <br />
          <br />
          - Double, triple-seated rooms <br />
          Air-conditioning & Wi-Fi: Available in selected hostels; campus-wide
          connectivity across all hostels
          <br />
          <br />- Fully furnished rooms: Comfortable beds, wardrobes, study
          desks
        </p>
      ),
      bg: "bg-[#f5de5b]",
      text: "text-[#0f2f6e]",
      icon: null,
    },
    {
      title: <p className="text-[#122E5E] text-3xl">Mess & Dining</p>,
      description:
        "Vegetarian meals included in the fee; central messes and individual dining halls in buildings",
      bg: "bg-[#4db8f7]",
      text: "text-[#0f2f6e]",
      icon: dining,
    },
    {
      title: <p className="text-[#122E5E] text-3xl">Common Areas</p>,
      description:
        "- Dedicated recreation lounges\n\n- Gardens, and reading rooms in both boys’ and girls’ hostels",
      bg: "bg-[#f7931e]",
      text: "text-[#0f2f6e]",
      icon: book,
    },
  ];
  return (
    <section className="container py-16">
      <div className="mb-10">
        <h2 className="text-2xl text-[#707070] md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          HOSTEL AND RESIDENTIAL LIFE
        </h2>
        <p className="text-base font-oswald-medium font-light mt-2 max-w-3xl">
          DMIHER provides secure, comfortable, and wellequipped residential
          facilities—airconditioned or standard—designed to support student
          wellbeing, community living, and academic focus across both genders
          and all levels. The hostels are monitored with 24×7 security and CCTV
          surveillance throughout the premises, ensuring a safe environment at
          all times. Thoughtful amenities such as hot water supply and on-campus
          laundry services add to the convenience, making life at DMIHER both
          supportive and stress-free.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} ${card.text} rounded-xl p-6 shadow-md flex flex-col justify-between h-full`}
          >
            <div className="">
              <h3 className="text-xl md:text-2xl font-bold my-4">
                {card.title}
              </h3>
              <p className="text-sm whitespace-pre-line leading-relaxed text-white">
                {card.description}
              </p>
            </div>
            <div className="text-4xl mt-6">
              <img src={card.icon} alt="" className="w-24 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HostelFC;
