import React from "react";
import mask from "../../assets/global/alliances/mask.png";
import allience1 from "../../assets/global/alliances/allience1.png";
import allience2 from "../../assets/global/alliances/allience2.png";
import allience3 from "../../assets/global/alliances/allience3.png";
import allience4 from "../../assets/global/alliances/allience4.png";
import allience5 from "../../assets/global/alliances/allience5.png";
import allience6 from "../../assets/global/alliances/allience6.png";
import allience7 from "../../assets/global/alliances/allience7.png";
import allience8 from "../../assets/global/alliances/allience8.png";
import allience9 from "../../assets/global/alliances/allience9.png";
import allience10 from "../../assets/global/alliances/allience10.png";
import allience11 from "../../assets/global/alliances/allience11.png";
import allience12 from "../../assets/global/alliances/allience12.png";
import allience13 from "../../assets/global/alliances/allience13.png";
import allience14 from "../../assets/global/alliances/allience14.png";
import allience15 from "../../assets/global/alliances/allience15.png";
import allience16 from "../../assets/global/alliances/allience16.png";
import allience17 from "../../assets/global/alliances/allience17.png";
import allience18 from "../../assets/global/alliances/allience18.png";
import allience19 from "../../assets/global/alliances/allience19.png";
import allience20 from "../../assets/global/alliances/allience20.png";
import { li } from "framer-motion/client";

const logos = [
  allience1,
  allience2,
  allience3,
  allience4,
  allience5,
  allience6,
  allience7,
  allience8,
  allience9,
  allience10,
  allience11,
  allience12,
  allience13,
  allience14,
  allience15,
  allience16,
  allience17,
  allience18,
  allience19,
  allience20,
];
function AlliancesGlobal() {
  return (
    <section
      className={`bg-cover bg-no-repeat py-16 relative after:absolute  after:inset-0 after:w-full after:h-full after:bg-black/5 z-10 after:-z-10 `}
      style={{
        backgroundImage: `url(${mask})`,
      }}
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-4">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          GLOBAL ALLIANCES, <br />
          UNBOUNDED POSSIBILITIES
        </h2>
        <p className="max-w-xl text-[#58595B]">
          Our network of global partnerships connects DMIHER with leading
          institutions and organizations worldwide, fostering innovation,
          knowledge exchange, and transformative collaborations. These
          relationships empower students, faculty, and researchers to drive
          positive change on a global scale
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-4 my-6">
          {logos.map((logo, idx) => (
            <li key={idx} className="">
              <img src={logo} alt="allience" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AlliancesGlobal;
