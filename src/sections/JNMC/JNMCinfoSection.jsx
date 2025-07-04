import React, { useState } from "react";
import ViewMorebutton from "../../components/UI/ViewMore";

const JNMCInfoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="py-12 px-4">
      {/* Section Heading */}
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          JAWAHARLAL NEHRU MEDICAL COLLEGE (JNMC)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        <p className="text-sky-500 mb-5">
          Mandatory Disclosures | Dean & Leadership | FAQ | NMC Nodal Centre |
          Affiliated Hospitals (Teaching Hospital) | Holistic Learning |
          Departments
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          ADVANCING CARE. INSPIRING FUTURES.
        </h1>

        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
          <p className="mb-4">
            Established in 1990, JNMC, Wardha is a premier centre for medical
            education, clinical excellence, and healthcare innovation. With 250
            MBBS seats, 205 Postgraduate seats, and 10 Super-Specialty DM/M.Ch.
            programs, all recognized by the National Medical Commission, JNMC
            offers comprehensive academic progression. A pioneer in
            learner-centric education, it adopts global best practices like PBL,
            CBL, self-directed learning, Mayo Clinic-backed patient simulations,
            and bioethics training with Haifa’s International Chair.
          </p>

          <p className="mb-4">
            The campus features cutting-edge infrastructure—virtual dissection
            suites, simulation wards, ICT-enabled classrooms, advanced labs,
            immersive digital learning, and more. JNMC is also an American Heart
            Association-accredited International Training Centre and a Nodal
            Centre for Faculty Development under the National Medical
            Commission.
          </p>

          {/* <button
            onClick={handleToggleModal}
            className="text-sky-500 underline hover:text-sky-600 transition"
          >
            Know More
          </button> */}
          <ViewMorebutton label="Know More" onClick={handleToggleModal} />
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm mt-[101px] flex items-center justify-center z-50 px-4"
          onClick={handleToggleModal}
        >
          <div
            className="bg-white max-w-5xl max-h-[70vh] overflow-y-auto p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleToggleModal}
              className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-red-600"
            >
              &times;
            </button>

            <div className="text-left text-sm text-[#444] font-[Arial] space-y-4 leading-relaxed">
              <p>
                <strong>Celebrating over 35 years of excellence</strong>,
                Jawaharlal Nehru Medical College (JNMC), Wardha has established
                itself as a premier institution committed to delivering
                world-class medical education, healthcare services, and
                research. Marking its Silver Jubilee in 2015, the college
                continues to evolve, setting benchmarks in medical education and
                clinical care.
              </p>

              <p className="font-semibold text-[#102B64]">
                OUR UNIQUE STRENGTHS
              </p>
              <p>
                JNMC offers a comprehensive range of health education programs,
                from Certificate courses to Doctoral (Ph.D.) degrees, creating a
                seamless pathway for learners at every stage. The college
                boasts:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>250 MBBS seats annually for undergraduate students.</li>
                <li>
                  205 Postgraduate seats (MD/MS) across various specializations.
                </li>
                <li>
                  10 Super-Specialty programs (DM/M.Ch.), including:
                  <ul className=" list-inside pl-5">
                    <li>
                      * DM - Cardiology, Medical Oncology, Neurology, Medical
                      Gastroenterology, Neonatology, Nephrology, Critical Care
                      Medicine, Interventional Radiology
                    </li>
                    <li>* M.Ch. - Neuro-Surgery, Urology</li>
                  </ul>
                </li>
              </ul>
              <p>
                All these programs are recognized by the National Medical
                Commission, ensuring the highest academic standards.
              </p>

              <p className="font-semibold text-[#102B64]">
                World-Class Infrastructure & Facilities
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  State-of-the-art E-Classrooms & ICT-enabled Learning Modules
                </li>
                <li>
                  Virtual Learning Centre with virtual dissection and autopsy
                  capabilities
                </li>
                <li>
                  “Anukriti- School of Experiential Learning and Simulation
                  Centre (SEL&SC) & Simulation Ward for hands-on training
                </li>
                <li>
                  “Jigyasa - the curious brain” Integrated E-Museum & Digital
                  Library to enrich academic learning
                </li>
                <li>
                  Central Research Laboratory & Animal Research Lab supporting
                  advanced molecular, cellular, and immunological research
                </li>
                <li>
                  Certified skill development programs such as Advanced Cardiac
                  Life Support (ACLS) and Basic Life Support (BLS), cadaveric
                  skill lab, and wet lab, along with focused training in all
                  specialties
                </li>
              </ul>

              <p className="font-semibold text-[#102B64]">
                Leadership in Faculty Development & Training
              </p>
              <p>
                JNMC is proud to be the Nodal Centre for Faculty Development
                under the National Medical Commission of India, playing a
                pivotal role in enhancing teaching standards nationwide. It is
                also accredited as an International Training Center by the
                American Heart Association (AHA) for conducting BLS and ACLS
                courses, fostering global competencies among students and
                faculty.
              </p>

              <p className="font-semibold text-[#102B64]">
                Innovative, Learner-Centric Teaching Methodologies
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Structured self-directed learning</li>
                <li>
                  Problem-Based Learning (PBL) and Small Group Discussions
                </li>
                <li>
                  Standardized Patient Program (SPP) in collaboration with Mayo
                  Clinic
                </li>
                <li>Case-Based Learning infused by Weil Cornell</li>
                <li>Integrated Teaching & Early Clinical Exposure</li>
                <li>
                  Clinico-Pathological Conferences, Morning Clinical Meets &
                  Clinical Symbiosis
                </li>
                <li>
                  Objectively Structured Practical Exams (OSPE) & Learner Doctor
                  Clinics
                </li>
                <li>
                  Bioethics program, in collaboration with the International
                  Chair of Bioethics, Haifa
                </li>
                <li>
                  Research opportunities for all learners with tailored support
                </li>
              </ul>

              <p className="font-semibold text-[#102B64]">
                Acharya Vinoba Bhave Rural Hospital: A Hub of Quality Care
              </p>
              <p>
                AVBRH is the heart of our clinical training, the largest
                teaching hospital in Central India, with comprehensive
                healthcare services:
                <br />
                Broad Specialties across all key domains, Super-Specialty
                Services like Endoscopy, Minimal Access Surgery, Robotic
                surgery, Dialysis, Infertility Treatment, Joint Replacements,
                Arthroscopy, Limb Deformity Correction, and the Wound Care
                Clinic (Regenerative Medicine Division). Famed for delivering
                affordable, high-quality healthcare, AVBRH is a trusted
                destination for patients across the region.
              </p>

              <p className="font-semibold text-[#102B64]">
                Alumni: Our Global Ambassadors
              </p>
              <p>
                Our alumni community is our pride. Graduates of JNMC are
                excelling globally — as faculty in prestigious medical colleges,
                consultants in leading healthcare institutions, public health
                officers, entrepreneurs, and healthcare professionals across
                countries, including the USA, UK, Australia, UAE, and more.
              </p>

              <p className="font-semibold text-[#102B64]">
                Excellence in Faculty & Research
              </p>
              <p>
                Driven by a team of highly qualified and experienced faculty,
                JNMC proudly upholds a rich legacy of teaching excellence
                spanning decades, along with a strong track record of research
                contributions. Faculty members have published extensively in
                prestigious journals such as The Lancet, BMJ, Frontiers, Nature,
                and others. The institution’s contributions also include books,
                copyrights, and patents that advance medical science. JNMC has
                received research funding from renowned international and
                national agencies, including Grand Challenges Canada, the
                Wellcome Trust-DBT India Alliance, ICMR, DST, WHO, USAID, and
                many more. Furthermore, JNMC has been recognized by the Global
                Health Research (GHR) Unit and ICMR as a Technical Resource Hub
                for mentoring institutions in conducting systematic reviews and
                contributing to guideline development.
              </p>

              <p className="font-semibold text-[#102B64]">
                Join Us in Our Journey of Excellence
              </p>
              <p>
                At Jawaharlal Nehru Medical College, Wardha, we are more than an
                institution — we are a community committed to education,
                healthcare, research, and social responsibility. We welcome
                students, healthcare professionals, researchers, and
                stakeholders with a promise to deliver the best in medical
                education, compassionate care, and transformative research.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JNMCInfoSection;
