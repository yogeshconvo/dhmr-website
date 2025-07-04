import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import NPFScriptLoader from "./components/NPFScriptLoader";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    // <Router basename="/dmiher-newsite/duat/dhmr-web/dist">
    // <Router basename="/dmiher-web">
    //  <Router basename="/dmiher-uat"> 
    <Router>
      <ScrollToTop />
      {/* <AppWrapper /> */}
      <AppRoutes />
    </Router>
  );
}

export default App;
