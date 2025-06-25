import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Program from "../pages/Program";
import Research from "../pages/Research";
import SPDC from "../pages/SPDC";
import FEAT from "../pages/FEAT";
import Nursing from "../pages/Nursing";
import SaS from "../pages/SaS";
import IQAC from "../pages/IQAC";
import CDOE from "../pages/CDOE";
import SHER from "../pages/SHER";
import SAHS from "../pages/SAHS";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/research" element={<Research />} />
        <Route path="/spdc" element={<SPDC />} />
        {/* <Route path="/global-connects" element={} /> */}
        <Route path="/feat" element={<FEAT />} />
        <Route path="/cdoe" element={<CDOE />} />
        {/* <Route path="/global-connects" element={<SHER />} /> */}
        <Route path="/SMCON-W" element={<Nursing />} />
        <Route path="/SMCON-N" element={<Nursing />} />
        <Route path="/SRMMCON" element={<Nursing />} />
        <Route path="/sahs" element={<SAHS />} />

        <Route path="/sas" element={<SaS />} />
      </Route>
    </Routes>
  );
}
