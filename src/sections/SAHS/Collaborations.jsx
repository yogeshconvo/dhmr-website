import React from "react";

// Import all your logo images here
import asianLogo from "../../assets/SAHS/collab/asian.png";
import alpsLogo from "../../assets/SAHS/collab/alps.png";
import nationalCancerLogo from "../../assets/SAHS/collab/nationalcancer.png";
import lenskartLogo from "../../assets/SAHS/collab/lenskart.png";
import lifenityLogo from "../../assets/SAHS/collab/lifenity.png";
import adccLogo from "../../assets/SAHS/collab/adcc.png";
import aiimsLogo from "../../assets/SAHS/collab/aiims.png";
import hindujaLogo from "../../assets/SAHS/collab/hinduja.png";
import kimsLogo from "../../assets/SAHS/collab/kims.png";
import hcgLogo from "../../assets/SAHS/collab/hcg.png";
import wockhardtLogo from "../../assets/SAHS/collab/wockhardt.png";
import mahatmeLogo from "../../assets/SAHS/collab/mahatme.png";

import bapioLogo from "../../assets/SAHS/collab/bapio.png";
import leedsLogo from "../../assets/SAHS/collab/leeds.png";
import kartzLogo from "../../assets/SAHS/collab/kartz.png";

import maxLogoWide from "../../assets/SAHS/collab/max-wide.png"; // Wide photo for Max Healthcare

const nationalPartners = [
  { name: "Asian Institute of Gastroenterology, Hyderabad", logo: asianLogo },
  { name: "ALPS (MAX Health Care Ltd, New Delhi)", logo: alpsLogo },
  { name: "National Cancer Hospital, Nagpur", logo: nationalCancerLogo },
  { name: "LENSKART EYETECH PVT. LTD, New Delhi", logo: lenskartLogo },
  { name: "Lifenity Health Limited, Pune", logo: lifenityLogo },
  { name: "ADCC Academy Private Limited Nagpur", logo: adccLogo },
  { name: "AIIMS Hospital, Nagpur", logo: aiimsLogo },
  { name: "Hinduja Hospital, Nagpur", logo: hindujaLogo },
  { name: "KIMS Kingsway Hospital, Nagpur", logo: kimsLogo },
  { name: "HCG, Nagpur", logo: hcgLogo },
  { name: "Wockhardth Hospital, Nagpur", logo: wockhardtLogo },
  { name: "Mahatme Eye Hospital, Nagpur", logo: mahatmeLogo },
];

const internationalPartners = [
  { name: "BAPIO Training Academy, UK", logo: bapioLogo },
  { name: "Leeds Bucket University, UK", logo: leedsLogo },
  { name: "Kartz School, Yeshiva University, USA", logo: kartzLogo },
];

const Collaborations = () => {
  return (
    <section className="bg-[#f7fafd] py-20 px-4">
      <div className="max-w-7xl mx-auto container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="h-1 w-10 bg-[#e8502e] mb-3 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] uppercase font-oswald-medium leading-tight">
            Collaborations
          </h2>
          <p className="mt-3 text-base text-[#707070] font-[Arial] max-w-2xl mx-auto">
            <span className="font-bold text-[#707070]">
              Powered by Partnerships. Defined by Opportunity.
            </span>
            <br />
            SAHS partners with top hospitals, global universities, and leading
            healthcare academies to offer real-world training, global exposure,
            and skill-based learning. These alliances drive clinical excellence,
            academic depth, and industry readiness.
          </p>
        </div>

        {/* National Partners */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-[#122E5E] mb-6 text-center">
            National Developmental Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center">
            {nationalPartners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="bg-white rounded-lg shadow p-3 mb-2 flex items-center justify-center h-[70px] w-[110px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[90px] object-contain mx-auto"
                  />
                </div>
                <span className="text-xs text-[#707070] font-semibold">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* International Partners */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-[#269BFF] mb-6 text-center">
            International Developmental Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {internationalPartners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="bg-white rounded-lg shadow p-3 mb-2 flex items-center justify-center h-[70px] w-[110px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[90px] object-contain mx-auto"
                  />
                </div>
                <span className="text-xs text-[#707070] font-semibold">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Max Healthcare Partner */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex-1 flex justify-center">
            <img
              src={maxLogoWide}
              alt="Max Healthcare Education"
              className="w-full max-w-[450px]  object-contain"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#707070] text-lg mb-2">
              Skills and Knowledge Partner: Max Healthcare Education
            </h4>
            <p className="text-[#707070] text-sm mb-2">
              Datta Meghe Institute of Higher Education & Research (DMIHER), in
              collaboration with Max Healthcare Education, offers specialized
              Allied Health Sciences programs in apprenticeship embedded mode
              which are designed to equip students with the skills and knowledge
              required for a successful career in healthcare. This partnership
              combines DMIHER's academic excellence with Max Healthcare's
              extensive clinical expertise, providing students with a
              comprehensive learning experience.
            </p>
            <a
              href="https://www.dmiher.edu.in/about-research-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-[#0055FF] font-semibold underline hover:text-[#003399]"
            >
              Know More about MAX Advantage & Programs offered
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
