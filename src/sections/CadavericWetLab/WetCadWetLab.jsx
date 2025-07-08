import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import Nagpur1 from "../../assets/CadavericWetLab/wet/nagpur1.png";
import Nagpur2 from "../../assets/CadavericWetLab/wet/nagpur2.png";
import Wardha1 from "../../assets/CadavericWetLab/wet/wardha1.png";
import Wardha2 from "../../assets/CadavericWetLab/wet/wardha2.png";

// const tabs = ["Nagpur", "Wardha"];

const nagpurContent = {
  title: "CADAVERIC SURGICAL\nSKILL LAB",
  location: "Nagpur",
  desc: (
    <>
      A specialized, dedicated training facility for medical students, nurses,
      and surgeons to practice clinical and procedural skills, the wet lab
      replicates real-world clinical environments, using real biological
      materials, such as tissue, blood, and fluids. It serves as a bridge
      between theoretical knowledge and practical application, ensuring that
      healthcare professionals refine their techniques before working with live
      patients.
      <br></br>
      <br></br>
      <span className="text-lg font-bold text-[#122E5E] mb-2">Highlights</span>
      <ul className=" mt-2 text-[#58595B]">
        <li>
          Highly realistic surgical practice with{" "}
          <b className="text-[#F7941D]">Soft-Embalmed Cadavers</b> that preserve
          the natural suppleness.
          <hr className="text-gray-300 my-2 " />
        </li>
        <li>
          Commended by leading national and international faculty &nbsp;|&nbsp;
          Trusted for specialized surgical training by renowned medical
          companies like <b className="text-[#F04E30]">Smith &amp; Nephew</b>.
          <hr className="text-gray-300 my-2 " />
        </li>
        <li>
          <b className="text-[#269BFF]">
            Hands-On Training Across Specialties:
          </b>{" "}
          Orthopaedics &nbsp;|&nbsp; Neurosurgery &nbsp;|&nbsp; Cardiology
          &nbsp;|&nbsp; Anaesthesia &nbsp;|&nbsp; Obstetrics &amp; Gynaecology
          &nbsp;|&nbsp; Cardiovascular &amp; Thoracic Surgery &nbsp;|&nbsp;
          Spine Surgery &nbsp;|&nbsp; Joint Surgery &nbsp;|&nbsp; Plastic
          Surgery
        </li>
      </ul>
    </>
  ),
  images: [Nagpur1, Nagpur2],
};

const wardhaContent = {
  title: "CADAVERIC SURGICAL\nSKILL LAB",
  location: "Wardha",
  desc: (
    <>
      The fully equipped wet lab for surgical skill training is established at
      ground floor of JNMC. It empowers the surgeons, residents, and medical
      students to develop their surgical skills in a controlled, hands-on
      setting, by simulating real-life surgical conditions. Enabling the
      trainees to practice techniques before performing surgeries on patients,
      the lab allows to develop a variety of surgical skills- ranging from basic
      surgical skills to the specialized procedures like ophthalmic procedures
      on the animal parts.
      <br />
      <br />
      <span className="text-lg font-bold text-[#122E5E] mb-2">Highlights</span>
      <ul className="mt-2 text-[#58595B]">
        <li>
          <b className="text-[#F04E30]">Realistic Hands-on Training</b>{" "}
          <span className="font-normal text-[#58595B]">
            and in-depth practice on human cadavers to build familiarity with
            anatomical structures and procedural nuances.
          </span>
          <hr className="text-gray-300 my-2" />
        </li>
        <li>
          <span className="font-normal text-[#58595B]">
            Skill refinement and technique testing in a controlled setting to
            boost surgical confidence.
          </span>
          <hr className="text-gray-300 my-2" />
        </li>
        <li>
          <span className="font-normal text-[#58595B]">
            Trainees can practice high-risk procedures under expert guidance
            without compromising patient safety.
          </span>
          <hr className="text-gray-300 my-2" />
        </li>
        <li>
          <b className="text-[#269BFF]">Customizable Training Sessions</b>{" "}
          <span className="font-normal text-[#58595B]">
            for a variety of specialties, ensuring relevance to participants’
            clinical goals.
          </span>
        </li>
      </ul>
    </>
  ),
  images: [Wardha1, Wardha2],
};

const SurgicalCadWetLab = () => {
  const [activeTab, setActiveTab] = useState("Nagpur");

  const content = activeTab === "Nagpur" ? nagpurContent : wardhaContent;

  return (
    <section className="bg-[#ecf6ff] py-10 px-2 sm:px-6">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
          <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
          WET LAB
        </h2>
        {/* Tabs */}
        <div className="flex gap-4 mt-4 mb-6 mx-auto w-fit">
          <button
            onClick={() => setActiveTab("Nagpur")}
            className={`text-base sm:text-lg font-semibold uppercase transition-all border-b-2  ${
              activeTab === "Nagpur"
                ? "text-[#269BFF] border-[#269BFF]"
                : "text-[#A0A0A0] border-transparent hover:text-[#269BFF]"
            }`}
          >
            Nagpur
          </button>
          |
          <button
            onClick={() => setActiveTab("Wardha")}
            className={`text-base sm:text-lg font-semibold uppercase transition-all border-b-2  ${
              activeTab === "Wardha"
                ? "text-[#269BFF] border-[#269BFF]"
                : "text-[#A0A0A0] border-transparent hover:text-[#269BFF]"
            }`}
          >
            Wardha
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col flex-wrap md:flex-row gap-10 py-4 items-start">
          {/* Text */}
          <div className="flex-1 text-[#58595B] text-base leading-relaxed min-w-[300px]">
            <h3 className="text-lg sm:text-xl font-bold text-[#122E5E] mb-2">
              {content.location}
            </h3>
            <div className="mb-4 text-sm">{content.desc}</div>
          </div>
          {/* Image Slider */}
          <div className="flex-1 w-full max-w-xl mx-auto">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              className="rounded-lg overflow-hidden"
              loop={true}
              style={{ paddingBottom: "3rem" }}
            >
              {content.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${content.location} Cadaveric Lab`}
                    className="w-full h-64 sm:h-[70%] object-cover rounded-lg shadow"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Key Officials - Wardha Only */}
        {activeTab === "Wardha" && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#122E5E] mb-6">
              Key Officials
            </h3>
            <div className="flex flex-col lg:flex-row gap-6 flex-wrap">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow flex-1 flex gap-8 flex-col md:flex-row items-center">
                <img
                  src={Wardha1}
                  alt="Dr. Vaibhav Anjankar"
                  className="w-full sm:w-48 h-64 object-cover rounded  flex-3"
                  style={{ objectPosition: "center top" }}
                />
                <div className="w-full p-4 flex-2">
                  <div className="text-[#F04E30] font-semibold mb-1">
                    Wet Lab Incharge
                  </div>
                  <hr className="text-black/40 my-2" />
                  <div className="font-bold">Dr. Vaibhav Anjankar</div>
                  <div className="text-sm text-[#58595B]">
                    Professor of Anatomy
                    <br />
                    Jawaharlal Nehru Medical College,
                    <br />
                    DMIHER (DU), Wardha
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow flex-1 flex gap-8 flex-col md:flex-row items-center">
                <img
                  src={Wardha1}
                  alt="Dr. Vemaiah Adumulam"
                  className="w-full sm:w-48 h-64 object-cover rounded flex-3"
                  style={{ objectPosition: "center top" }}
                />
                <div className="w-full p-4 flex-2">
                  <div className="text-[#F04E30] font-semibold mb-1">
                    Wet Lab Coordinator
                  </div>
                  <hr className="text-black/40 my-2" />
                  <div className="font-bold">Dr. Vemaiah Adumulam</div>
                  <div className="text-sm text-[#58595B]">
                    Department of Anatomy
                    <br />
                    Jawaharlal Nehru Medical College,
                    <br />
                    DMIHER (DU), Wardha
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurgicalCadWetLab;
