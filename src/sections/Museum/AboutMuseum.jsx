import React from "react";

function AboutMuseum() {
  return (
    <section className="w-full px-4 py-16 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium text-[#707070] uppercase leading-tight mb-6">
          MUSEUMS — INSPIRING <br className="hidden sm:block" />
          SELF-DIRECTED LEARNING
        </h2>
        <p className="mb-3 text-xl md:text-xl text-[#707070] leading-relaxed">
          SPARK CURIOSITY, IGNITE LEARNING, AND CONNECT KNOWLEDGE
        </p>
        <p
          className="text-base md:text-sm text-[#58595B] leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          At DMIHER, our museums aren’t just collections—they’re immersive
          learning hubs. Located in Wardha and Wanadongri, the Jigyasa and
          Swadhyay museums exemplify the university’s commitment to experiential
          and holistic education. Jigyasa—the nation’s first integrated medical
          museum—spans 15,000 square feet, bringing together anatomy,
          physiology, pathology, and more under one roof. With QR-coded
          specimens, innovation areas, and live surgical feeds, it ignites
          curiosity and promotes self-directed learning. In Wanadongri, Swadhyay
          is a state-of-the-art, structured self-directed learning space. It
          integrates multiple disciplines, digital content, and e-learning
          resources, offering students an interactive, multi-sensory educational
          journey. Together, these museums serve as dynamic platforms for
          fostering clinical reasoning, interdisciplinary integration, and a
          deeper understanding of medicine.
        </p>
      </div>
    </section>
  );
}

export default AboutMuseum;
