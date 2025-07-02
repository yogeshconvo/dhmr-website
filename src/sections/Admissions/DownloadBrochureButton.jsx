import { useState } from "react";
import { saveAs } from "file-saver";
import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";
import { Download } from "lucide-react";

export default function DownloadBrochureButton() {
  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = () => {
    setStatus("Brochure is downloading...");
    setShowAlert(true);

    fetch(AdmissionBrochure)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "National_Brochure.pdf");
        setStatus("Brochure downloaded successfully!");
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Download failed:", error);
        setStatus("Failed to download the brochure. Please try again.");
        setShowAlert(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10 sm:py-16 space-y-4 relative">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
      >
        DOWNLOAD UNIVERSITY BROCHURE
        <Download size={18} strokeWidth={3} />
      </button>

      {/* Backdrop Blur Layer */}
      {showAlert && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />

          {/* Alert Box */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-4 rounded shadow-lg z-50 text-center text-sm sm:text-base font-medium space-y-3 w-[90%] max-w-md">
            <p>{status}</p>
            <button
              onClick={() => setShowAlert(false)}
              className="bg-[#F04E30] text-white px-5 py-1.5 rounded hover:bg-[#e04428] text-sm"
            >
              OK
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// DownloadBrochureButton.jsx

// import { useEffect } from "react";
// import { saveAs } from "file-saver";
// import { Download } from "lucide-react";
// import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";

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

//   // Load NPF scripts only once
//   useEffect(() => {
//     // For embedded iframe form
//     const formScript = document.createElement("script");
//     formScript.type = "text/javascript";
//     formScript.async = true;
//     formScript.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//     document.body.appendChild(formScript);

//     // For popup form
//     const popupScript = document.createElement("script");
//     popupScript.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
//     popupScript.async = true;
//     popupScript.onload = () => {
//       // Init after script is loaded
//       new window.NpfWidgetsInit({
//         widgetId: "7089981ea2624eae75f32ce93269b444",
//         baseurl: "widgets.in6.nopaperforms.com",
//         formTitle: "Enquiry Form",
//         titleColor: "#FF0033",
//         backgroundColor: "#ddd",
//         iframeHeight: "500px",
//         buttonbgColor: "#4c79dc",
//         buttonTextColor: "#FFF",
//       });
//     };
//     document.body.appendChild(popupScript);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center bg-white px-4 py-10 sm:py-16 gap-10">
//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
//       >
//         DOWNLOAD UNIVERSITY BROCHURE
//         <Download size={18} strokeWidth={3} />
//       </button>

//       {/* Enquiry IFrame Form */}
//       <div
//         className="npf_wgts w-full max-w-2xl"
//         data-height="500px"
//         data-w="7089981ea2624eae75f32ce93269b444"
//       ></div>

//       {/* Enquire Now Popup Button */}
//       <button
//         type="button"
//         className="npfWidgetButton npfWidget-7089981ea2624eae75f32ce93269b444 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//       >
//         Enquire Now!
//       </button>
//     </div>
//   );
// }
