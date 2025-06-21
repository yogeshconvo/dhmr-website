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
import SHER from "../pages/SHER";

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
        {/* <Route path="/global-connects" element={<SHER />} /> */}
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/sas" element={<SaS />} />
      </Route>
    </Routes>
  );
}
