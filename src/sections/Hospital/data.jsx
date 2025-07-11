import img1 from "../../assets/museum/colleges/img1.png";
import img2 from "../../assets/museum/colleges/img2.png";
import img3 from "../../assets/museum/colleges/img3.png";
import ACHARYA from "../../assets/hospital/hospitals/ACHARYA.png";
import CANCER from "../../assets/hospital/hospitals/CANCER.png";
import smhrc from "../../assets/hospital/hospitals/smhrc.png";
import DBASI from "../../assets/hospital/hospitals/DBASI.png";
import shalinital from "../../assets/hospital/hospitals/shalinital.png";
import placeholderImg from "../../assets/hospital/hospitals/place.png";

export const hospitalsData = {
  hospital_0: {
    bg: "bg-[#fef5eb]",
    imgs: [img1, img2, img3],
    about: {
      title: "Where Compassion Meets Clinical Excellence. At Scale.",
      desc: "DMIHER’s Wana campus is anchored by a robust hospital ecosystem that combines multi-specialty, super-specialty, maternal-child health, and community care under one integrated network. With over 1,000 beds and state-of-the-art infrastructure, the hospitals offer advanced diagnostics, critical care, and surgical excellence. From grassroots outreach to tertiary treatments, the healthcare system serves both rural and urban populations—delivering compassionate, equitable, and technology-enabled care that reflects the institution’s vision of accessible, inclusive, and patient-centered healthcare for all.",
      features: (
        <span>
          - 30+ Specialties, 1020 Bedded hospital
          <br />
          - 150 bedded Superspecialty division with 65 critical care beds <br />
          - 6 Lac plus Lives touched <br />
          - Nominated as Emergency health care by GOM <br />
          - Central India’s 1st Advanced Palliative & Rehab Centre <br />- Novel
          Community based collaboration & Schemes
        </span>
      ),
    },
    ourHospitalsTitle:
      "Serving lives. Scaling impact. Setting benchmarks in healthcare.",
    hospitals: [
      {
        name: "Shalinitai Meghe Hospital & Research Centre (SMHRC), Nagpur",
        shortName: "Shalinitai Meghe Hospital & Research Centre",
        desc: (
          <div className="text-[#58595B]">
            <p>
              A 1,020-bedded tertiary care facility, SMHRC has swiftly emerged
              as a key player in Central India’s healthcare landscape within
              just six years of its inception. With a deep focus on patient
              comfort, safety, and holistic healing, the hospital offers a
              thoughtfully designed environment that fosters recovery and
              well-being.
            </p>
            <br />
            <p>
              Located amidst the tranquil surroundings of Wanadongri, SMHRC
              delivers exceptional in-patient and out-patient services through a
              comprehensive spectrum of affordable, quality-driven medical care.
            </p>
            <br />
            <b>Broad Speciality Services:</b>
            <p>
              General Medicine | General Surgery | Orthopaedic Surgery |
              Ophthalmology | Obstetrics & Gynaecology | Pathology | Radiology |
              Microbiology | Respiratory Medicine | Dermatology | ENT |
              Psychiatry | Paediatrics | Biochemistry | Anaesthesia | Dentistry
              | Emergency Medicine | Psychology | Audiology & Speech Therapy
            </p>
          </div>
        ),
        logo: smhrc,
        photo: placeholderImg,
      },
      {
        name: "Shalinitai Meghe Maternal & Child Health Division (SMHRC)",
        shortName: "Shalinitai Meghe Maternal & Child Health Division",
        desc: (
          <div className="text-[#58595B]">
            <p>
              A center of excellence dedicated to delivering specialized care
              with both passion and compassion. This 300-bedded division at
              SMHRC offers a full spectrum of services, from high-risk maternal
              care and fetal medicine to advanced gynecological treatments.
              Equipped with state-of-the-art infrastructure—including 4D USG
              units, a government-recognized IVF center, and Central India’s
              first Human Milk Bank—it stands at the forefront of maternal and
              child healthcare. The 26-bedded Level III NICU ensures expert
              neonatal care, positioning the center as a trusted referral
              destination for high-risk pregnancies and critically ill newborns.
            </p>
            <br />
            <b>Key Services:</b>
            <p>
              Painless & High-Risk Deliveries | Minimally Invasive Gynae
              Surgeries | Foetal Interventions & 4D USG | IVF, IUI, ICSI at
              Advanced Embryology Lab | Central India’s 1st Human Milk Bank |
              26-bed Level III NICU | 24x7 Neonatal & Paediatric Emergencies |
              Paediatric Endocrinology & Nephrology | Paediatric Surgery |
              School Health Camps
            </p>
          </div>
        ),
        logo: shalinital,
        photo: placeholderImg,
      },
      {
        name: "Dr. Babasaheb Ambedkar Superspeciality Block",
        shortName: "Dr. Babasaheb Ambedkar Superspeciality Block",
        desc: (
          <div className="text-[#58595B]">
            <p>
              At the heart of this state-of-the-art facility lies a commitment
              to delivering world-class care—through premium outpatient
              services, a fully equipped emergency unit, advanced diagnostics,
              and a dedicated executive lounge with private consultation suites.
              A robust blood bank and streamlined ambulatory care further ensure
              seamless patient experience.
            </p>
            <br />
            <p>
              With a capacity of 125+ beds, this is one of Central India’s
              largest tertiary care hospitals. Seamlessly blending technology
              with expert care, the Superspeciality Block at SMHRC continues to
              rank among the Top 10 super-speciality hospitals in the region.
            </p>
            <br />
            <b>Specialities Offered:</b>
            <p>
              Neurosciences | Cardiac Sciences | Renal Sciences | Gastro
              Sciences | Interventional Radiology (IR) | Critical Care |
              Oncology | Pain Medicine | Regenerative Medicine | Minimally
              Invasive Surgery | Coloproctology | Ortho Sciences | Palliative,
              Geriatric & Rehabilitation
            </p>
          </div>
        ),
        logo: DBASI,
        photo: placeholderImg,
      },
    ],
    differenceSection: {
      title: "THE SMHRC DIFFERENCE",
      subTitle: "Redefining Healthcare Standards in Central India",
      imgs: [
        { caption: "Caption 1", src: placeholderImg },
        { caption: "Caption 2", src: placeholderImg },
        { caption: "Caption 3", src: placeholderImg },
        { caption: "Caption 4", src: placeholderImg },
      ],
      desc: (
        <div>
          <p>
            Central India’s largest and most advanced multi-speciality hospital
            | 1.9 million+ OPD and 1.9 lakh+ indoor patients served
          </p>
          <br />
          <h3 className="font-semibold">Recognized Excellence</h3>
          <p>
            Designated emergency care provider for G20 summits, marathons, mega
            gatherings & VVIP protocols | Selected by Govt. of Maharashtra for
            health check-ups of 7,500 Nagpur police personnel
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold ">Surgical Leadership</h3>
          <p>
            30,000+ super-speciality surgeries including 400+ CVTS, 1,000+
            urological, and 500+ neurosurgeries | 11 modular OTs | Endoscopic
            spine & brain surgeries | 65-bedded advanced critical care unit
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">Advanced Infrastructure</h3>
          <p>
            High-end Philips flat panel Cath Lab | NABL-accredited diagnostic
            centre | State-of-the-art radiology with 1.5T MRI, 50-slice CT, USG
            & advanced imaging
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">
            Care that Balances Precision with Compassion
          </h3>
          <p>Affordable, technology-led, patient-first healthcare</p>
        </div>
      ),
    },
  },
  hospital_1: {
    bg: "bg-[#ebf6ff]",
    imgs: [img1, img2, img3],
    about: {
      title: "Rooted in Reach. Built for Excellence.",
      desc: "DMIHER’s Wardha campus hosts a powerful healthcare ecosystem that bridges rural accessibility with urban-grade specialization. With over 1,500 beds and NABH- and NABL-accredited facilities, it delivers advanced, compassionate care across general, super-speciality, and oncological services. From robotic surgeries and transplants to preventive care and grassroots outreach, these hospitals serve a diverse population—rural, urban, and global. With world-class infrastructure and deep community integration, the Wardha campus stands as a hub for care, learning, and innovation.",
      features: (
        <span>
          - 30+ Specialities <br />
          - 1500+ Beds <br />
          - 50 Lac+ Lives Touched <br />
          - 5 Lac+ Complex Surgeries Performed <br />
          - Robotic Surgery with Advanced Cancer Care & Minimal Invasive <br />
          - State of the Art Facility with Transplant Services <br />- Infection
          Rate, Morbidity and Mortality Rate is much below the National Indices
        </span>
      ),
    },
    ourHospitalsTitle:
      "Serving people. Advancing practice. Redefining rural and regional care.",
    hospitals: [
      {
        name: "Acharya Vinoba Bhave Rural Hospital (AVBRH)",
        shortName: "Acharya Vinoba Bhave Rural Hospital (AVBRH)",
        desc: (
          <div className="text-[#58595B]">
            <p>
              With over 1,500 beds, NABH accreditation, and NABL-certified
              diagnostic labs, AVBRH stands as one of India’s largest and most
              advanced rural hospitals. Supported by 650+ experienced
              consultants and 1,000+ nursing professionals, the hospital offers
              world-class care through 25 ultramodern operation theatres, a
              dedicated transplant ICU, and 150+ critical care beds.
            </p>
            <br />
            <p>
              Equipped with state-of-the-art infrastructure and cutting-edge
              technology, AVBRH delivers precision-driven care to nearly 10 lakh
              patients annually—across both rural and international communities.
              Our Emergency Medicine Department, advanced surgical set-up, and
              patient-first approach ensure excellence in outcomes and comfort.
              Combining affordability with global standards, AVBRH continues to
              redefine rural healthcare in India—making high-quality medical
              care accessible to all.
            </p>
            <br />
            <b>Broad Speciality Services:</b>
            <p>
              General Medicine I Orthopaedics & Joint Replacement I General &
              Minimal Invasive Surgery I Paediatrics I Respiratory Medicine
              (Pulmonology) I ENT (Ear, Nose, Throat) Surgery I Obstetrics &
              Gynaecology I Dermatology I Radio Diagnostics I Ophthalmology I
              Psychiatry I Central Clinical Laboratory
            </p>
          </div>
        ),
        logo: ACHARYA,
        photo: placeholderImg,
      },
      {
        name: "Shalinitai Meghe Super Speciality Wing – AVBRH",
        shortName: "Shalinitai Meghe Super Speciality Centre (SMSC)",
        desc: (
          <div className="text-[#58595B]">
            <p>
              Focused on high-end tertiary care, this advanced wing brings
              together the region’s leading clinicians and the latest in
              biomedical technology to deliver precise diagnoses and
              personalized treatments. Powered by cutting-edge infrastructure
              and dedicated expertise, it ensures tailored, technology-driven
              care for every patient.
            </p>
            <br />
            <b>Super Speciality Services:</b>
            <p>
              Neurology I Neurosurgery I Cardiology I CVTS I Organ Transplant I
              Robotic Surgery I IVF I Neonatology I Urology I Nephrology I
              Gastroenterology I Interventional Radiology I Plastic &
              Reconstructive Surgery I Paediatric Surgery I Endocrinology I
              Rheumatology I Hair Transplant I Critical Care I Pain Management
            </p>
          </div>
        ),
        logo: shalinital,
        photo: placeholderImg,
      },
      {
        name: "SGM cancer centre",
        shortName: "SGM cancer centre",
        desc: (
          <div className="text-[#58595B]">
            <p>
              SGMCH is a state of the art 120 bedded comprehensive cancer
              hospital affiliated with AVBRH at Sawangi (Meghe), Wardha. The
              centre has ultramodern medical equipment, infrastructure along
              with pool of highly qualified, experienced and dedicated
              clinicians and paramedics to ensure and end to end clinical
              solutions for all cancer patients.
            </p>
            <br />
            <p>Medical Oncology I Surgical Oncology I Radiation Oncology</p>
          </div>
        ),
        logo: CANCER,
        photo: placeholderImg,
      },
    ],
    differenceSection: {
      title: "THE AVBRH DIFFERENCE",
      subTitle: "Where Rural Roots Meet World-Class Healing",
      imgs: [
        { caption: "Caption 1", src: placeholderImg },
        { caption: "Caption 2", src: placeholderImg },
        { caption: "Caption 3", src: placeholderImg },
        { caption: "Caption 4", src: placeholderImg },
      ],
      desc: (
        <div>
          <br />
          <h3 className="font-semibold">
            One of India’s Largest Rural Hospitals
          </h3>
          <p>
            1500+ beds | NABH-accredited hospital | NABL-certified diagnostic
            labs | Serving nearly 10 lakh patients annually
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">End-to-End Care Ecosystem</h3>
          <p>
            25 ultramodern OTs | Transplant ICU | 150+ critical care beds |
            Emergency Medicine Department | Robotic surgery & organ transplant
            services
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="  font-semibold">A Hub of Clinical Expertise</h3>
          <p>
            650+ highly qualified consultants | 1,000+ trained nursing staff |
            Advanced diagnostics and imaging | Infection, morbidity, and
            mortality rates well below national indices
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">
            Shalinitai Meghe Super Speciality Wing
          </h3>
          <p>
            Tertiary care with latest biomedical technology | Precision-driven,
            customized treatments | Advanced facilities for neurosciences,
            cardiac, renal, gastro, IVF, critical care & more
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">SGM Cancer Centre</h3>
          <p>
            120-bedded comprehensive cancer hospital | Radiation, medical, and
            surgical oncology under one roof | Advanced therapies including
            IGRT, VMAT, IMRT, SRS, SBRT, and targeted therapies
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">
            International & Domestic Patient-Centric Services
          </h3>
          <p>
            Comfort-focused private rooms | Executive care lounges | Cashless
            insurance across major government and private schemes | Affordable
            care at global standards
          </p>
          <hr className="text-black/20 my-2" />
          <h3 className="font-semibold">Academic & Research Backbone</h3>
          <p>
            Integrated with medical education | Training ground for future
            healthcare professionals | Strong community outreach and health
            promotion programs
          </p>
        </div>
      ),
    },
  },
};
