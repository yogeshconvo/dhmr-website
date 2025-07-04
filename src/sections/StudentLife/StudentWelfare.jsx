import React from "react";
import hospital from "../../assets/RNPC/hospital/hospital.jpeg";

function AffiliatedHospitalsRNPC() {
  return (
    <div className="bg-[#fefaf3] py-14">
      <div className="container gap-12 items-center justify-center">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
            <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
            THE STUDENT WELFARE CELL
          </h2>
        </div>
        <h4 className="text-gray-400 font-[300] text-xl">
          Cultivating Confidence, Fostering Belonging
        </h4>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Content */}
          <div className="w-full pb-6 lg:pb-10 flex-1">
            <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
              We understand that a vibrant, dynamic campus environment nurtures
              well-rounded, confident, and future-ready individuals. While
              academic excellence is our foundation, co-curricular and
              extracurricular activities are equally vital for personal growth
              and professional trajectories. Led by our Student Welfare Cell,
              these programs are meticulously planned and integrated into the
              academic year through a detailed annual calendar. Reflecting
              diverse interests and talents, they offer students platforms to
              express creativity, develop skills, and showcase potential to a
              broader community.
            </p>
            <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
              We encourage voluntary participation, empowering students to lead
              clubs and mentor peers, fostering continuity, collaboration, and a
              sense of belonging. This approach lets students actively shape the
              fabric of student life at DMIHER.
            </p>
            <p className="text-[#58595B] text-base font-oswald font-[400] pb-2 tracking-normal">
              By working closely with students, we create opportunities for
              leadership, collaboration, and holistic development. Through a
              blend of learning, creativity, and community engagement, we
              empower them to thrive academically, explore passions, and build
              lasting connections.
            </p>
            <p className="text-[#269BFF]">Know more..</p>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-auto flex-2">
            <img
              src={hospital}
              alt="Affiliated Hospitals"
              className="w-full h-auto max-w-full lg:h-[500px] mt-2 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
      <section className="bg-[#fdf3e7] py-16 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-oswald-medium text-gray-700 mb-4">
          Objectives of the Student Welfare Cell
        </h2>

        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
          The objective of the Student Welfare Cell is to foster a holistic and
          empowering student experience. It supports academic excellence,
          research initiatives, post-graduate pursuits, engagement in
          competitions and sports, physical wellbeing, financial assistance, and
          active involvement in welfare activities— ensuring students are
          recognized, supported, and inspired throughout their journey.
        </p>

        <button className="bg-[#f04e30] hover:bg-[#d54429] text-white px-6 py-2 rounded shadow font-oswald-medium text-sm sm:text-base transition-all duration-300">
          8 Objectives
        </button>
      </section>
    </div>
  );
}

export default AffiliatedHospitalsRNPC;
