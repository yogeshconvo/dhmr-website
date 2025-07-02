import React from "react";
import DeanImage from "../../assets/JNMC/Abhay.png";

const DeansMessageJNMC = () => {
  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium font-[500] mb-10">
        <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
        DEAN’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          />
          <div className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
            <p className="text-[#E1CD67] font-bold"> Dr. Abhay Gaidhane</p>
            <p>
              Dean, JNMC & AVBRH
              <br />
              M.B.B.S., M.D. (Community Medicine)
              <br />
            </p>
            <p>deanjnmc_wardha@dmiher.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-lg tracking-wide font-sans text-[16px]  leading-6 text-[#FFFFFF] max-w-2xl font-[400]">
          <p className="mb-6">
            Jawaharlal Nehru Medical College & Acharya Vinoba Bhave Rural
            Hospital, established in 1990 under Datta Meghe Institute of Higher
            Education and Research, is a premier institution for medical
            education and research. Ranked 25th nationally, we offer MBBS (250
            seats), postgraduate, super-specialty, paramedical, and PhD
            programs, with NAAC “A++” accreditation.
          </p>

          <p className="mb-6">
            Our innovations include ‘Anukruti’ – a Simulation Centre, ‘Jigyasa’
            – a central museum, and early adoption of NEP 2020. As a nodal
            centre for faculty development, we integrate modern teaching methods
            and host national and international conferences. Through community
            partnerships, we adopt villages to extend healthcare. Our 1,500-bed
            hospital provides super-specialty services, a new Oncology hospital,
            and upgraded Urology, Nephrology, and transplant facilities. With a
            strong focus on research and quality education, we remain committed
            to innovation and compassionate healthcare.
          </p>

          <button className=" mb-4 px-5 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeansMessageJNMC;
