// // DownloadBrochureButton.jsx
// import { saveAs } from "file-saver";
// import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";
// import { Download } from "lucide-react";

// export default function DownloadBrochureButton() {
//   const handleDownload = () => {
//     fetch(AdmissionBrochure)
//       .then((response) => response.blob())
//       .then((blob) => {
//         saveAs(blob, "National_Brochure.pdf");
//         alert("Brochure downloaded successfully!");
//       })
//       .catch((error) => {
//         console.error("Download failed:", error);
//         alert("Failed to download the brochure. Please try again.");
//       });
//   };

//   return (
//     <div className="flex items-center justify-center bg-white px-4 py-10 sm:py-16">
//       <button
//         onClick={handleDownload}
//         className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
//       >
//         DOWNLOAD UNIVERSITY BROCHURE
//         <Download size={18} strokeWidth={3} />
//       </button>
//     </div>
//   );
// }

// DownloadBrochureButton.jsx


import { useEffect } from "react";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";

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

  // Load NPF scripts only once
  useEffect(() => {
    // For embedded iframe form
    const formScript = document.createElement("script");
    formScript.type = "text/javascript";
    formScript.async = true;
    formScript.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(formScript);

    // For popup form
    const popupScript = document.createElement("script");
    popupScript.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
    popupScript.async = true;
    popupScript.onload = () => {
      // Init after script is loaded
      new window.NpfWidgetsInit({
        widgetId: "7089981ea2624eae75f32ce93269b444",
        baseurl: "widgets.in6.nopaperforms.com",
        formTitle: "Enquiry Form",
        titleColor: "#FF0033",
        backgroundColor: "#ddd",
        iframeHeight: "500px",
        buttonbgColor: "#4c79dc",
        buttonTextColor: "#FFF",
      });
    };
    document.body.appendChild(popupScript);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10 sm:py-16 gap-10">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
      >
        DOWNLOAD UNIVERSITY BROCHURE
        <Download size={18} strokeWidth={3} />
      </button>

      {/* Enquiry IFrame Form */}
      <div 
        className="npf_wgts w-full max-w-2xl"
        data-height="500px"
        data-w="7089981ea2624eae75f32ce93269b444"
      ></div>

      {/* Enquire Now Popup Button */}
      <button
        type="button"
        className="npfWidgetButton npfWidget-7089981ea2624eae75f32ce93269b444 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Enquire Now!
      </button>
    </div>
  );
}
