import React, { useState,useEffect } from "react";
import PopupModal from "../sections/Home/PopupModal";

const FloatingButtons = () => {
  const [showModal, setShowModal] = useState(false);
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
      console.log(
        "[NoPaperForm] Script appended to document.body:",
        script.src
      );

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
      // <div
      //   className="npf_wgts"
      //   data-height="400px"
      //   data-width="full"
      //   data-w="e07589d3e4cb30c4c23ee47924975ec8"
      //   style={{ minHeight: "400px" }}
      // ></div>
      <div
        className="npf_wgts w-[500px] "
        data-height="420px"
        data-width="full"
        data-w="e07589d3e4cb30c4c23ee47924975ec8"
        style={{ width: "400px", minHeight: "420px" }}
      ></div>
    );
  };
  return (
    <div>
      <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
        <div className="transform -rotate-90 origin-right pointer-events-auto">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right pointer-events-auto">
          <button
            type="button"
            // onClick={() =>
            //   window.open(
            //     "https://www.dmiher.edu.in/lp/national-admission",
            //     "_blank"
            //   )
            // }
            onClick={() => setShowModal(true)}
            className="bg-[#122E5E] text-white text-sm px-6 py-3 "
          >
            Admission Enquiry
          </button>
        </div>
      </div>
      <PopupModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Admission Enquiry"
      >
        <div className="flex-grow p-0 m-0 overflow-auto">
          <NoPaperFormWidget />
        </div>
      </PopupModal>
    </div>
  );
};

export default FloatingButtons;
