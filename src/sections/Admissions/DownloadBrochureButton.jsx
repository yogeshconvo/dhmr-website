// DownloadBrochureButton.jsx
import { saveAs } from "file-saver";
import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";
import { Download } from "lucide-react";

export default function DownloadBrochureButton() {
  const handleDownload = () => {
    fetch(AdmissionBrochure)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "National_Brochure.pdf");
        alert("Brochure downloaded successfully!");
      })
      .catch((error) => {
        console.error("Download failed:", error);
        alert("Failed to download the brochure. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 py-10 sm:py-16">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
      >
        DOWNLOAD UNIVERSITY BROCHURE
        <Download size={18} strokeWidth={3} />
      </button>
    </div>
  );
}

// import React, { useEffect, useRef } from "react";

// const EnquiryForm = () => {
//   const iframeRef = useRef(null);
//   const popupRef = useRef(null);

//   useEffect(() => {
//     // IFrame Script
//     const iframeScript = document.createElement("script");
//     iframeScript.type = "text/javascript";
//     iframeScript.async = true;
//     iframeScript.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//     if (iframeRef.current) {
//       iframeRef.current.appendChild(iframeScript);
//     }

//     // PopUp Script
//     const popupScript = document.createElement("script");
//     popupScript.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
//     popupScript.async = true;
//     if (popupRef.current) {
//       popupRef.current.appendChild(popupScript);
//     }

//     // Init PopUp Config
//     const initScript = document.createElement("script");
//     initScript.innerHTML = `
//       new NpfWidgetsInit({
//         widgetId: "7089981ea2624eae75f32ce93269b444",
//         baseurl: "widgets.in6.nopaperforms.com",
//         formTitle: "Enquiry Form",
//         titleColor: "#FF0033",
//         backgroundColor: "#ddd",
//         iframeHeight: "500px",
//         buttonbgColor: "#4c79dc",
//         buttonTextColor: "#FFF"
//       });
//     `;
//     popupRef.current?.appendChild(initScript);
//   }, []);

//   return (
//     <div className="space-y-8">
//       {/* IFrame Embed */}
//       <div ref={iframeRef}>
//         <div
//           className="npf_wgts"
//           data-height="400px"
//           data-w="7089981ea2624eae75f32ce93269b444"
//         ></div>
//       </div>

//       {/* Popup Button */}
//       <div ref={popupRef}>
//         <button
//           type="button"
//           className="npfWidgetButton npfWidget-7089981ea2624eae75f32ce93269b444"
//         >
//           Enquire Now!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EnquiryForm;
