import React from "react";

export default function FunctionalUnits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 font-[Arial]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="w-14 h-1 bg-red-600 mb-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">
            Our Functional Units: <br />
            <span className="text-gray-800">Action and Impact</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl text-sm sm:text-base">
            Aligned with the functions outlined by the National Assessment &
            Accreditation Council (NAAC) in December 2017, the Internal Quality
            Assurance Cell (IQAC) at DMIHER (DU) is structured into four
            functional units (wings), each driving transformative impact and
            steering the institution towards continuous, progressive excellence.
          </p>
        </div>

        {/* Grid of 4 Columns */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 text-sm text-gray-800">
          {/* 1 */}
          <div className="border-r md:pr-4">
            <div className=" items-center mb-2">
              <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold mr-2">
                1
              </div>

              <h3 className="text-blue-600 font-semibold">
                Rankings and Accreditations
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Strategize Institutional growth in National and International
                level through planning and participating in various
                Accreditations and Rankings
              </li>
              <li>
                Coordinate the preparation of the Annual Quality Assurance
                Report (AQAR)
              </li>
            </ul>
            <p className="font-semibold mt-3">Related DMIHER initiatives :</p>
            <ul className="list-disc pl-5">
              <li>NAAC</li>
              <li>NIRF</li>
              <li>TIMES</li>
              <li>QS</li>
              <li>IQMC</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="border-r md:pr-4">
            <div className=" items-center mb-2">
              <div className="bg-orange-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold mr-2">
                2
              </div>
              <h3 className="text-orange-500 font-semibold">
                Quality benchmarks & Best Practices
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Identify emerging areas in Higher Education and Quality
                benchmarks thereof.
              </li>
              <li>
                Ensure application of quality benchmarks in all academic and
                administrative functions
              </li>
              <li>
                Document, Analyse and Recommend strategies leading to quality
                improvement for various programmes/activities in tune with the
                Core values of NAAC
              </li>
              <li>Ensure adoption and dissemination of best practices</li>
              <li>
                Promote use of technology in various functions and processes of
                the University
              </li>
              <li>
                Act as a catalyst in Internalisation of Quality culture and
                institutionalization of best practices
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className="border-r md:pr-4">
            <div className=" items-center mb-2">
              <div className="bg-blue-800 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold mr-2">
                3
              </div>
              <h3 className="text-blue-800 font-semibold">
                Audits , Feedbacks & Evaluation
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Encourage self and external evaluation, accountability, autonomy
                and innovations in higher education
              </li>
              <li>
                Ensure periodical conduct of Academic and Administrative Audit
                and standardise mechanisms to bridge the gaps as identified in
                the audit reports.
              </li>
              <li>
                Collect, analyse and suggest remedial interventions on the basis
                of feedback from all stakeholders on quality-related
                institutional processes
              </li>
            </ul>
            <p className="font-semibold mt-3">Related DMIHER initiatives:</p>
            <ul className="list-disc pl-5">
              <li>Stakeholder’s Feedback</li>
              <li>Student Satisfaction survey</li>
              <li>Student Interactions</li>
              <li>Audits</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="pr-4">
            <div className=" items-center mb-2">
              <div className="bg-red-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold mr-2">
                4
              </div>
              <h3 className="text-red-600 font-semibold">
                Quality dissemination and Quality circles
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Organize inter and intra institutional workshops, seminars on
                quality related themes and promotion of quality circles
              </li>
              <li>
                Provide Leadership in the higher education arena in terms of
                Mentoring of the other HEIs through various Customized Quality
                Enhancement initiatives.
              </li>
              <li>Ensure adoption and dissemination of best practices</li>
            </ul>
            <p className="font-semibold mt-3">Related DMIHER initiatives:</p>
            <ul className="list-disc pl-5">
              <li>Quality related events and activities</li>
              <li>Mentoring activities: eg. Margdarshan, NAAC</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
