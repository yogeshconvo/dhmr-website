// import { Download } from "lucide-react";
import { saveAs } from "file-saver";
import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";
import { Download } from "lucide-react";

export default function DownloadBrochureButton() {
  const handleDownload = () => {
    // Fetch the file as blob and trigger download
    fetch(AdmissionBrochure)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "National_Brochure.pdf");
      })
      .catch((error) => {
        console.error("Download failed:", error);
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




// import React, { useEffect, useRef, useState } from "react";

// const EnquiryButton = () => {
//   const handleClick = () => {
//     // Avoid loading the script multiple times
//     if (!document.getElementById("npf-widget-popup-script")) {
//       const script = document.createElement("script");
//       script.id = "npf-widget-popup-script";
//       script.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
//       script.async = true;

//       script.onload = () => {
//         // Poll until widget init function is available
//         const interval = setInterval(() => {
//           if (typeof window.NpfWidgetsInit === "function") {
//             clearInterval(interval);
//             new window.NpfWidgetsInit({
//               widgetId: "985f42eaefa1b745c7a8e27ca95ff76d",
//               baseurl: "widgets.in6.nopaperforms.com",
//               formTitle: "Enquiry Form",
//               titleColor: "#FF0033",
//               backgroundColor: "#ddd",
//               iframeHeight: "500px",
//               buttonbgColor: "#4c79dc",
//               buttonTextColor: "#FFF",
//             });

//             // Automatically click the widget trigger button
//             const triggerBtn = document.querySelector(
//               ".npfWidgetButton.npfWidget-985f42eaefa1b745c7a8e27ca95ff76d"
//             );
//             if (triggerBtn) triggerBtn.click();
//           }
//         }, 200);
//       };

//       document.body.appendChild(script);
//     } else {
//       // If already loaded, directly click the trigger button
//       const triggerBtn = document.querySelector(
//         ".npfWidgetButton.npfWidget-985f42eaefa1b745c7a8e27ca95ff76d"
//       );
//       if (triggerBtn) triggerBtn.click();
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={handleClick}
//         className="bg-[#122E5E] text-white text-sm px-6 py-3 rounded hover:bg-[#0e244b] transition"
//       >
//         Admission Enquiry
//       </button>

//       {/* Hidden button needed by the widget for programmatic trigger */}
//       <button
//         type="button"
//         style={{ display: "none" }}
//         className="npfWidgetButton npfWidget-985f42eaefa1b745c7a8e27ca95ff76d"
//       >
//         Enquiry
//       </button>
//     </>
//   );
// };

// export default EnquiryButton;
