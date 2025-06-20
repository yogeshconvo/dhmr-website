// NPFScriptLoader.jsx
import { useEffect } from "react";

const NPFScriptLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    script.onload = () => {
      new window.NpfWidgetsInit({
        widgetId: "e07589d3e4cb30c4c23ee47924975ec8",
        baseurl: "widgets.in6.nopaperforms.com",
        formTitle: "Enquiry Form",
        titleColor: "#FF0033",
        backgroundColor: "#ddd",
        iframeHeight: "500px",
        buttonbgColor: "#4c79dc",
        buttonTextColor: "#FFF",
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default NPFScriptLoader;
