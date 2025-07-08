import React, { useState } from "react";

const faqs = [
  {
    question: "How can I participate in particular training sessions?",
    answer:
      "Detailed brochure is updated on website from time to time regarding a workshop. You can contact Organizers for your participation.",
  },
  {
    question: "How much is fees for the skill training?",
    answer:
      "Detailed brochure is updated on website from time to time regarding a workshop. You can contact Organizers for your participation.",
  },
  {
    question: "Who can participate in the training workshop?",
    answer:
      "Detailed brochure is updated on website from time to time regarding a workshop. You can contact Organizers for your participation.",
  },
  {
    question: "Will I get certificate of participation?",
    answer:
      "Detailed brochure is updated on website from time to time regarding a workshop. You can contact Organizers for your participation.",
  },
];

function FAQCadWetLab() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
        FAQ'S
      </h2>
      <div className="mt-8 max-w-4xl">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className={`w-full text-left py-3 px-2  border-gray-300 flex justify-between items-center font-semibold text-base sm:text-lg ${
                openIdx === idx ? "text-[#222]" : "text-[#58595B] border-b"
              }`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <span>{faq.question}</span>
              <span className="text-xl font-bold">
                {openIdx === idx ? "-" : "+"}
              </span>
            </button>
            {openIdx === idx && (
              <div
                className={`px-2 pb-3 text-sm text-[#58595B] border-gray-300 ${
                  openIdx === idx ? "border-b" : ""
                }`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQCadWetLab;
