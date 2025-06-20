import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Banner from "../../assets/AdmissionBanner.jpg";
import Banner from "../../assets/AdmissionBanner1.png";
import BannerMobile from "../../assets/AdmissionGrid/AdmissionMobile.png";

// Inline component for widget with debugging
const NoPaperFormWidget = () => {
  useEffect(() => {
    console.log("[NoPaperForm] useEffect triggered - injecting script");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";

    script.onload = () => {
      console.log("[NoPaperForm] Script loaded successfully.");
      console.log("[NoPaperForm] window.npf:", window.npf);
    };

    script.onerror = (e) => {
      console.error("[NoPaperForm] Failed to load the script:", e);
    };
    fetch("https://widgets.in6.nopaperforms.com/emwgts.js");

    document.body.appendChild(script);
    console.log("[NoPaperForm] Script appended to document.body:", script.src);

    return () => {
      document.body.removeChild(script);
      console.log("[NoPaperForm] Script removed on unmount.");
    };
  }, []);

  useEffect(() => {
    const observerInterval = setInterval(() => {
      const container = document.querySelector(".npf_wgts");
      console.log("[NoPaperForm] Widget container exists:", !!container);

      if (container) {
        console.log("[NoPaperForm] Widget container attributes:");
        console.log("data-height:", container.getAttribute("data-height"));
        console.log("data-width:", container.getAttribute("data-width"));
        console.log("data-w:", container.getAttribute("data-w"));
        clearInterval(observerInterval);
      }
    }, 1000);

    return () => clearInterval(observerInterval);
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="360px"
      data-width="full"
      data-w="e07589d3e4cb30c4c23ee47924975ec8"
      style={{ minHeight: "360px" }}
    ></div>
 
  );
};

export default function EducationEnquiryPage() {
  const [height, setHeight] = useState("100vh");
  const [bgImage, setBgImage] = useState(Banner);
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      if (screenHeight < 500) setHeight("170vh");
      else if (screenHeight < 606) setHeight("120vh");
      else if (screenHeight < 800) setHeight("100vh");
      else if (screenHeight < 1000) setHeight("80vh");
      else setHeight("90vh");

      if (screenWidth < 768) setBgImage(BannerMobile);
      else setBgImage(Banner);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="  bg-white overflow-x-hidden">
      {/* Banner Section */}
      {/* <div
        className="relative w-full bg-no-repeat md:bg-cover admissions-slider-hight"
        style={{ backgroundImage: `url(${bgImage})`, maxHeight: "90vh" }}
      > */}
      {/* <div
        className="relative w-full bg-no-repeat md:bg-cover max-h-[100vh] admissions-slider-hight sm:max-h-[60vh] md:max-h-[90vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      > */}
      <div
        className="relative w-full h-[90vh] overflow-hidden bg-cover
    [@media(min-width:1350px)]:max-h-[74vh]
    [@media(min-width:1550px)]:max-h-[75vh]
    [@media(min-width:1600px)]:max-h-[80vh]
    [@media(min-width:1700px)]:max-h-[90vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="banner-bg absolute inset-0" />
        {/* Top Strip */}
        <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-50 gap-y-2">
          <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
          <div className="flex items-center gap-x-5 gap-y-1">
            <a
              href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center z-50 text-sm bg-[#F04E30] text-white px-5 py-2 sm:px-5 sm:py-2 space-x-3"
            >
              <span className="font-semibold">APPLY NOW</span>
            </a>
            <span className="text-base sm:text-sm text-gray-800">
              for Admission 2025-26
            </span>
          </div>
        </div>
        {/* Helpline */}
        <div className="absolute right-20 xl:right-[6%] z-20 hidden lg:block">
          <a href="tel:+918888040999" className="block">
            <button className="bg-[#F04E30] text-white h-[50px] px-4 py-2 uppercase font-semibold text-xl font-sans whitespace-nowrap">
              Helpline: <span>+91 8888040999</span>
            </button>
          </a>
        </div>
        {/* Centered Heading */}
        <div className="absolute md:hidden insert-0 mb-20 md:mb-0 md:mt-6 md:ml-20 lg:left-[30vh] xl:left-[90vh] 2xl:left-[95vh] lg:-translate-x-1/2 inset-0 flex items-end md:items-center md:justify-center p-7 pb-20 md:p-0 md:px-4 text-white z-30">
          <div>
            <h1 className="text-3xl md:text-5xl font-oswald-medium font-[500] tracking-wider mb-2">
              WELCOME TO THE
            </h1>
            <h2 className="text-3xl md:text-5xl font-oswald-medium font-[500] tracking-wider mb-2 text-[#E1CD67]">
              DYNAMIC WORLD OF
            </h2>
            <h2 className="text-3xl md:text-5xl font-oswald-medium font-[500] tracking-wider text-[#E1CD67]">
              HIGHER EDUCATION
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`
    w-full px-4  
    lg:mt-0 lg:w-[380px] lg:h-[600px]
    mx-auto
    max-w-[380px] h-[440px]
    lg:absolute lg:right-[5%]
    lg:top-[370px] lg:-translate-y-1/2
    z-40
  `}
      >
        <div className="w-full  bg-white rounded-t-[20px]  mt-22 shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-[#F04E30] text-white text-center py-3 text-lg sm:text-xl font-sans rounded-t-lg">
            ENQUIRE NOW
          </div>

          {/* Form */}
          <div className="flex-grow p-0 m-0 overflow-auto">
            <NoPaperFormWidget />
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="flex flex-col  fixed top-[38%] max-sm:top-[30%] right-[22px] font-[500] z-20">
        <div className="transform -rotate-90 origin-right">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        {/* <div className="transform -rotate-90 origin-right">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.dmiher.edu.in/lp/national-admission",
                "_blank"
              )
            }
            className="bg-[#122E5E] text-white text-sm px-6 py-3"
          >
            Admission Enquiry
          </button>
        </div> */}
      </div>
    </div>
  );
}
