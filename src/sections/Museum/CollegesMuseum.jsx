import React, { useState } from "react";
import img1 from "../../assets/museum/colleges/img1.png";
import img2 from "../../assets/museum/colleges/img2.png";
import img3 from "../../assets/museum/colleges/img3.png";
import CollegeBox from "./CollegeBox";
const tabsData = {
  tab_1: {
    links: [
      {
        title: "Key Officials",
        path: "#",
      },
      {
        title: "Holistic Learning Infrastructure",
        path: "#",
      },
      {
        title: "FAQs",
        path: "#",
      },
    ],
    bg: "bg-[#122e5e]",
    titleOne: "Jigyasa – The Curious Brain",
    paraOne: (
      <>
        <p>
          <span className="font-bold">
            Integrating Eight Departments. Sparking Infinite Possibilities
          </span>
          .<br />
          Jigyasa stands as a one-of-its-kind integrated medical museum in
          India, spanning over 15,000 square feet at DMIHER. This meticulously
          curated space brings together the collections of eight key
          departments—Anatomy, Physiology, Pathology, Forensic Medicine,
          Microbiology, Pharmacology, and Community Medicine—under one roof.
          Each section showcases high-quality, plastinated specimens and
          anatomical models, creating a comprehensive and immersive learning
          environment.
          <br />
          <br />
          <span className="font-bold">A hub for self-directed learning</span>
          <br /> Designed as a hub for self-directed learning, Jigyasa features
          QR-coded specimens linked to detailed information, offering students
          seamless digital access to in-depth explanations. Every model and
          exhibit is catalogued individually, empowering learners to explore at
          their own pace. Innovation zones within each section provide
          interactive platforms for hands-on teaching and learning. A dedicated
          brain section displays anatomical brain specimens and mounted
          sections, complemented by an LED wall with an advanced AV system to
          broadcast live surgical procedures from operating rooms, bridging the
          gap between theory and practice.
        </p>
      </>
    ),
    imgs: [img1, img2, img3],
    titleTwo: "Highlights",
    highlights: [
      <>
        <span className="text-[#F04E30]">
          India’s Only Integrated Medical Museum
        </span>{" "}
        combining eight departments under one roof.
      </>,
      <>
        Vast Collection of meticulously dissected,{" "}
        <b>plastinated specimens and anatomical models.</b>
      </>,
      <>
        <span className="text-[#E1CD67]">Crime Scene Simulations</span> that
        connect theoretical aspects of forensic medicine with practical,
        real-world scenarios.
      </>,
      <>
        <span className="text-[#F04E30]">Green Herbarium</span> showcasing
        medicinal plants and dry herbs, illuminating the origins of
        pharmaceutical substances.
      </>,
      <>
        Educational Games like{" "}
        <span className="text-[#269BFF]">
          Medical Crosswords and Bingo Health
        </span>{" "}
        to spark curiosity and engagement.
      </>,
      <>
        <span className="text-[#F7941D]">Dedicated Innovation Areas</span>{" "}
        within each section for interactive learning and problem-solving.
      </>,
      <>
        <span className="text-[#269BFF]">Real Human Mummy</span> for teaching
        surface marking of anatomical structures and enriching understanding of
        human anatomy.
      </>,
      <>
        Live Surgical Streaming via LED walls and AV systems for{" "}
        <b>immersive, real-time learning experiences.</b>
      </>,
    ],
  },
  tab_2: {
    links: [
      {
        title: "Key Officials",
        path: "#",
      },
      {
        title: "Holistic Learning Infrastructure",
        path: "#",
      },
    ],
    bg: "bg-[#585555]",
    titleOne: "Swadhyay – The pursuit of self-directed learning",
    paraOne: (
      <>
        <p>
          <span className="font-bold">
            Structured Learning. Integrated Knowledge. Interactive Discovery.
          </span>
          <br />
          Swadhyay, at Datta Meghe Medical College, Wanadongri, Nagpur, is a
          pioneering Structured Self-Directed Learning (SSDL) space designed to
          elevate the educational journey of MBBS and allied health sciences
          students. Spanning multiple disciplines under one roof, Swadhyay
          seamlessly integrates six key departments—Anatomy, Pathology, Forensic
          Medicine & Toxicology, Microbiology, Community Medicine, and
          Pharmacology—into an interactive, state-of-the-art museum. Adding to
          its distinction, the museum houses a dedicated Lung Museum, curated by
          the Department of Physiology.
          <br />
          <br />
          <span className="font-bold">Non-didactic learning</span>
          <br /> Built to comply with National Medical Commission norms for
          non-didactic learning, Swadhyay transforms traditional teaching into a
          dynamic, engaging experience. Human specimens, anatomical models,
          illuminated charts, skeletons, poisons, medical instruments, weapons,
          and murals are meticulously displayed and digitized with unique QR
          codes, ensuring instant mobile access to detailed explanations. Each
          section is enhanced with digital e-content and television screens,
          offering virtual access to complex concepts and procedures. This
          interactive environment bridges the gap between theory and
          application, creating a comprehensive, multi-sensory learning
          experience.
        </p>
      </>
    ),
    imgs: [img1, img2, img3],
    titleTwo: "Highlights",
    highlights: [
      <>
        Central India’s{" "}
        <span className="text-[#F7941D]">Pioneering Integrated Museum</span> for
        medical and allied health sciences.
      </>,
      <>
        Hub for <span className="text-[#269BFF]">Self-Directed Learning</span>{" "}
        that encourages curiosity, exploration, and independent study.
      </>,
      <>
        <span className="text-[#F04E30]">Lung Museum</span> showcasing
        physiology innovations and pulmonary anatomy
      </>,
      <>
        <span className="text-[#E1CD67]">Digitally Enhanced Learning</span> with
        QR codes and television screens displaying e-content and virtual
        resources.
      </>,
      <>
        <span className="text-[#F7941D]">Interactive Teaching Methods</span>{" "}
        including illuminated pull-out and sliding charts, real specimens, and
        self-explanatory displays.
      </>,
      <>
        <span className="text-[#269BFF]">Comprehensive SSDL Approach</span>{" "}
        supporting both undergraduate and postgraduate learning needs.
      </>,
      <>
        Holistic Learning Space offering students a{" "}
        <span className="text-[#F04E30]">
          multi-disciplinary, integrated learning journey
        </span>{" "}
        in compliance with NMC norms.
      </>,
      <>
        <span className="text-[#E1CD67]">
          Six Departments United under one roof
        </span>
        —Anatomy, Pathology, Forensic Medicine & Toxicology, Microbiology,
        Community Medicine, and Pharmacology.
      </>,
    ],
  },
};

function CollegesMuseum() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="py-16">
      <div className="flex gap-4 justify-center py-8 text-2xl">
        <span
          className={`flex-1 text-right text-[#58595B] cursor-pointer transition ${
            activeTab == 1 ? "text-[#F04E30] font-bold underline " : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          SWADHYAY - WANADONGRI
        </span>
        |
        <span
          className={`flex-1 text-[#58595B]  cursor-pointer transition ${
            activeTab == 2 ? "text-[#F04E30] font-bold underline " : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          JIGYASA - WARDHA
        </span>
      </div>

      <div className="mx-auto w-fit">
        {tabsData[`tab_${activeTab}`].links.map((link, idx) => (
          <a
            href={link.path}
            key={idx}
            className={`text-[#269BFF] text-sm hover:underline ${
              idx < tabsData[`tab_${activeTab}`].links.length - 1
                ? "border-r pr-2 mr-2"
                : ""
            }`}
          >
            {link.title}
          </a>
        ))}
      </div>
      <CollegeBox data={tabsData[`tab_${activeTab}`]} />
    </section>
  );
}

export default CollegesMuseum;
