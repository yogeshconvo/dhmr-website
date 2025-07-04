import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/nav-logo.png";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const [showMobileHospitalDropdown, setShowMobileHospitalDropdown] =
    useState(false);
  const [showMobileAdmissionDropdown, setShowMobileAdmissionDropdown] =
    useState(false);
  const location = useLocation();

  let hideTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  let hospitalHideTimeout;

  const handleHospitalEnter = () => {
    clearTimeout(hospitalHideTimeout);
    setShowHospitalDropdown(true);
  };

  const handleHospitalLeave = () => {
    hospitalHideTimeout = setTimeout(() => {
      setShowHospitalDropdown(false);
    }, 100);
  };

  const admissionsList = {
    Admissions: [
      {
        label: "National Admissions",
        to: "/admissions",
      },
      {
        label: "International Admissions",
        to: "https://www.dmiher.edu.in/international-admission/",
      },
      {
        label: "Ph.D Admission",
        to: "https://www.dmiher.edu.in/post-doctoral-programme-1",
      },
    ],
  };

  const [showAdmissionDropdown, setShowAdmissionDropdown] = useState(false);
  let admissionHideTimeout;

  const handleAdmissionEnter = () => {
    clearTimeout(admissionHideTimeout);
    setShowAdmissionDropdown(true);
  };

  const handleAdmissionLeave = () => {
    admissionHideTimeout = setTimeout(() => {
      setShowAdmissionDropdown(false);
    }, 100);
  };

  const academicsInstitutes = {
    "Main Campus - Wardha": [
      {
        label: "Jawaharlal Nehru Medical College",
        to: "https://www.dmiher.edu.in/about-jnmc",
      },
      {
        label: "Sharad Pawar Dental College and Hospital",
        to: "https://www.dmiher.edu.in/about-spdc",
        // to: "/spdc",
      },
      {
        label: "Mahatma Gandhi Ayurvedic College Hospital and Research Centre",
        to: "https://www.mgachrc.org/",
      },
      {
        label: "Ravi Nair Physiotherapy College",
        to: "/rnpc",
      },
      {
        label: "Datta Meghe College of Pharmacy",
        to: "https://www.dmcopwardha.com/",
      },
      { label: "Faculty of Engineering and Technology", to: "/feat" },
      {
        label: "Smt Radhikabai Meghe Memorial College of Nursing",
        to: "/SRMMCON",
      },
      {
        label: "Shalinitai Meghe College of Nursing",
        to: "/SMCON-W",
      },
      {
        label: "School of Allied Health Sciences",
        to: "https://www.dmiher.edu.in/about-sahes",
      },
      {
        label: "School of Allied Sciences",
        to: "/sas",
      },
      {
        label: "Centre for Distance and Online Education",
        to: "/cdoe",
      },
    ],
    "Off Campus - Wanadongri, Nagpur": [
      {
        label: "Datta Meghe Medical College",
        to: "https://www.dmmcnagpur.com/",
      },
      {
        label:
          "Shalinitai Meghe Homeopathy Hospital College and Research Centre",
        to: "https://smhhcrc.com/",
      },
      {
        label: "Shalinitai Meghe College of Nursing",
        to: "/SMCON-N",
      },
      {
        label: "School of Allied Health Sciences",
        to: "https://www.dmiher.edu.in/school-of-allied-health-sciences-nagpur-a-constituent-unit-of-dmiher",
      },
    ],
  };

  const hospitalsList = {
    "Main Campus (Wardha)": [
      {
        label: "Acharya Vinoba Bhave Rural Hospital (AVBRH)",
        to: "https://www.avbrhsawangimeghe.com/",
      },
      {
        label: "Shalinitai Meghe Super Speciality Hospital",
        to: "https://www.smschospital.com/",
      },
      {
        label: "SGM Cancer Centre",
        to: "https://cancersgmhospital.com/",
      },
    ],
    "Off Campus (Wanadongri)": [
      {
        label: "Shalinitai Meghe Hospital & Research Centre (SMHRC), Nagpur",
        to: "https://www.smhospitalnagpur.com/",
      },
    ],
  };

  const navLinks = [
    { to: "/about", label: "About" },
    { label: "Academics", isDropdown: true },
    { to: "/programs", label: "Programs" },
    { label: "Hospitals", isHospitalDropdown: true },
    { to: "/research", label: "Research" },
    {
      to: "https://www.dmiher.edu.in/international-cell",
      label: "Global Connects",
    },
  ];

  const topLinks = [
    { label: "Admissions", isAdmissionDropdown: true },
    { to: "https://dmiher.edu.in/admissionform", label: "Announcements" },
    { to: "https://www.dmiher.edu.in/contact-us1", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed w-full bg-white top-[-1px] left-0 z-[999] shadow-sm h-[101px] xl:h-[101px]">
      <div className="flex justify-between items-center px-4 xl:px-6 py-3 pb-0 xl:ml-20 xl:mr-20 ml-0 mr-0 h-full">
        <Link to={"/"} className="flex items-center xl:w-[350px]">
          <img src={logo} alt="Logo" className="xl:w-[210px] w-[200px] z-50" />
        </Link>

        <div className="hidden xl:flex flex-col items-end space-y-2 justify-end h-full gap-1">
          <div className="flex items-center gap-2 text-[14px] font-[500] font-helvetica text-[#707070]">
            {topLinks.map((link, index) => {
              const isExternal = link.to?.startsWith("http");
              const commonClasses = `hover:underline pr-3 whitespace-nowrap ${
                !isExternal && isActive(link.to)
                  ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                  : ""
              } ${index < 2 ? "border-r-2 border-[#707070]" : ""}`;

              if (link.isAdmissionDropdown) {
                return (
                  <div
                    key="admission-dropdown"
                    className="relative"
                    onMouseEnter={handleAdmissionEnter}
                    onMouseLeave={handleAdmissionLeave}
                  >
                    <button className={commonClasses}>{link.label}</button>
                    {showAdmissionDropdown && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white text-[#1f3c88] border shadow-lg p-4 z-[9999] w-[300px]">
                        {Object.entries(admissionsList).map(
                          ([category, links]) => (
                            <div key={category} className="mb-4">
                              {/* <h4 className="text-md font-semibold mb-2 border-b">
                                {category}
                              </h4> */}
                              <ul className="space-y-1">
                                {links.map((item) => (
                                  <li
                                    key={item.to}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#1f3c88] mt-[6px]" />
                                    {item.to.startsWith("/") ? (
                                      <Link
                                        to={item.to}
                                        className="text-sm hover:text-[#ff4f37] block"
                                        onClick={() =>
                                          setShowAdmissionDropdown(false)
                                        }
                                      >
                                        {item.label}
                                      </Link>
                                    ) : (
                                      <a
                                        href={item.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm hover:text-[#ff4f37] block"
                                        onClick={() =>
                                          setShowAdmissionDropdown(false)
                                        }
                                      >
                                        {item.label}
                                      </a>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className={commonClasses}>
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://www.dmiher.edu.in/pct_result/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src={userIcon}
                  alt="Login"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm sm:text-base font-light">Login</span>
            </a>
          </div>

          <div className="flex gap-10 text-[#1f3c88] text-[18px]">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key="academics-dropdown"
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="pb-[2px] border-b-[5px] border-transparent hover:border-[#ff4f37] text-[#1f3c88]">
                      {link.label}
                    </button>
                    {showDropdown && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 flex bg-white text-[#1f3c88] border shadow-lg p-4 z-[9999] w-[600px] justify-between">
                        {Object.entries(academicsInstitutes).map(
                          ([campus, institutes]) => (
                            <div key={campus} className="w-1/2 px-4">
                              <h4 className="text-md font-semibold mb-2 border-b">
                                {campus}
                              </h4>
                              <ul className="space-y-1">
                                {institutes.map((inst) => (
                                  <li
                                    key={inst.to}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#1f3c88] mt-[6px]" />
                                    {inst.to.startsWith("/") ? (
                                      <Link
                                        to={inst.to}
                                        className="text-sm hover:text-[#ff4f37] block"
                                        onClick={() => setShowDropdown(false)}
                                      >
                                        {inst.label}
                                      </Link>
                                    ) : (
                                      <a
                                        href={inst.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm hover:text-[#ff4f37] block"
                                        onClick={() => setShowDropdown(false)}
                                      >
                                        {inst.label}
                                      </a>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              } else if (link.label === "Hospitals") {
                return (
                  <div
                    key="hospital-dropdown"
                    className="relative"
                    onMouseEnter={handleHospitalEnter}
                    onMouseLeave={handleHospitalLeave}
                  >
                    <button className="pb-[2px] border-b-[5px] border-transparent hover:border-[#ff4f37] text-[#1f3c88]">
                      {link.label}
                    </button>
                    {showHospitalDropdown && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white text-[#1f3c88] border shadow-lg p-4 z-[9999] w-[300px]">
                        {Object.entries(hospitalsList).map(
                          ([campus, hospitals]) => (
                            <div key={campus} className="mb-4">
                              <h4 className="text-md font-semibold mb-2 border-b">
                                {campus}
                              </h4>
                              <ul className="space-y-1">
                                {hospitals.map((hospital) => (
                                  <li
                                    key={hospital.to}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#1f3c88] mt-[6px]" />
                                    <a
                                      href={hospital.to}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm hover:text-[#ff4f37] block"
                                      onClick={() =>
                                        setShowHospitalDropdown(false)
                                      }
                                    >
                                      {hospital.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              const isExternal = link.to?.startsWith("http");
              const commonClasses = `pb-[2px] border-b-[5px] ${
                isActive(link.to)
                  ? "border-[#ff4f37]"
                  : "border-transparent hover:border-[#ff4f37]"
              }`;

              return isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className={commonClasses}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "fixed top-0 left-0 right-0 bottom-0 bg-primary opacity-100"
            : "fixed top-0 left-0 right-0 bottom-0 opacity-0 pointer-events-none"
        } z-[9999]`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4 text-sm text-white font-oswald-medium font-light h-screen overflow-y-auto">
          <div className="flex flex-col gap-2 font-medium text-[16px] border-b-[3px] pb-4 border-b-white">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key="mobile-academics">
                    <button
                      onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                      className="border-b-[1px] pb-2 text-left w-full"
                    >
                      {link.label}
                    </button>
                    {showMobileDropdown && (
                      <div className="ml-4 mt-2 space-y-3">
                        {Object.entries(academicsInstitutes).map(
                          ([campus, institutes]) => (
                            <div key={campus}>
                              <h4 className="font-bold text-sm">{campus}</h4>
                              <ul className="pl-3 space-y-1">
                                {institutes.map((inst) =>
                                  inst.to.startsWith("/") ? (
                                    <Link
                                      key={inst.to}
                                      to={inst.to}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-xs text-white font-[400] tracking-wide hover:text-[#ff4f37]"
                                    >
                                      {inst.label}
                                    </Link>
                                  ) : (
                                    <a
                                      key={inst.to}
                                      href={inst.to}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-xs hover:underline font-[400] tracking-wide text-white hover:text-[#ff4f37]"
                                    >
                                      {inst.label}
                                    </a>
                                  )
                                )}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              } else if (link.label === "Hospitals") {
                return (
                  <div key="mobile-hospitals">
                    <button
                      onClick={() =>
                        setShowMobileHospitalDropdown(
                          !showMobileHospitalDropdown
                        )
                      }
                      className="border-b-[1px] pb-2 text-left w-full"
                    >
                      {link.label}
                    </button>
                    {showMobileHospitalDropdown && (
                      <div className="ml-4 mt-2 space-y-3">
                        {Object.entries(hospitalsList).map(
                          ([campus, hospitals]) => (
                            <div key={campus}>
                              <h4 className="font-bold text-sm">{campus}</h4>
                              <ul className="pl-3 space-y-1">
                                {hospitals.map((hospital) => (
                                  <a
                                    key={hospital.to}
                                    href={hospital.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-xs text-white font-[400] tracking-wide hover:text-[#ff4f37]"
                                  >
                                    {hospital.label}
                                  </a>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              // For non-dropdown regular links
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b-[1px] pb-2 block ${
                    isActive(link.to)
                      ? "border-[#ff4f37] text-[#ff4f37]"
                      : "border-transparent hover:text-[#ff4f37]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Top Links */}
          <div className="flex flex-col gap-2 text-[13px] font-[500] font-helvetica text-white border-b-[3px] pb-4 border-b-white">
            {topLinks.map((link) => {
              const isExternal = link.to?.startsWith("http");
              const commonClasses = `hover:underline border-none text-white font-normal ${
                !isExternal && isActive(link.to)
                  ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                  : ""
              }`;

              if (link.isAdmissionDropdown) {
                return (
                  <div key="mobile-admissions">
                    <button
                      onClick={() =>
                        setShowMobileAdmissionDropdown(
                          !showMobileAdmissionDropdown
                        )
                      }
                      className="border-b-[1px] pb-2 text-left w-full text-white"
                    >
                      {link.label}
                    </button>
                    {showMobileAdmissionDropdown && (
                      <div className="ml-4 mt-2 space-y-3">
                        {Object.entries(admissionsList).map(
                          ([category, links]) => (
                            <div key={category}>
                              <h4 className="font-bold text-sm">{category}</h4>
                              <ul className="pl-3 space-y-1">
                                {links.map((item) => (
                                  <a
                                    key={item.to}
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-xs text-white font-[400] tracking-wide hover:text-[#ff4f37]"
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={commonClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={commonClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Helpline and Login */}
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white text-lg">
              Admission Helpline
            </span>
            <a
              href="tel:+918888040999"
              className="font-bold text-secondary text-lg"
            >
              +91 8888040999
            </a>
          </div>

          <a
            href="https://www.dmiher.edu.in/pct_result/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-black"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src={userIcon}
                alt="Login"
                className="w-full h-full object-cover brightness-0 invert-100"
              />
            </div>
            <span className="text-lg sm:text-base font-light flex items-center bg-[#F04E30] text-white px-8 py-1 uppercase sm:px-5 sm:py-2 space-x-3">
              Login
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
