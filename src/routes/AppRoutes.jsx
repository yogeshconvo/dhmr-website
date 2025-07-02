import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Program from "../pages/Program";
import Research from "../pages/Research";
import FEAT from "../pages/FEAT";
import Nursing from "../pages/Nursing";
import SaS from "../pages/SaS";
import IQAC from "../pages/IQAC";
import CDOE from "../pages/CDOE";
import SHER from "../pages/SHER";
import SAHS from "../pages/SAHS";
import RNPC from "../pages/RNPC";
import DMCP from "../pages/DMCP";
import SPDC from "../pages/SPDC";
import DAL from "../pages/DAL";
import JNMC from "../pages/JNMC";

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
        <Route path="/DAL" element={<DAL />} />
        <Route path="/SMCON-W" element={<Nursing />} />
        <Route path="/SMCON-N" element={<Nursing />} />
        <Route path="/SRMMCON" element={<Nursing />} />
        <Route path="/sahs" element={<SAHS />} />
        <Route path="/IQAC" element={<IQAC />} />
        <Route path="/jnmc" element={<JNMC/>}/>
        <Route path="/sas" element={<SaS />} />
        <Route path="/sahs" element={<SAHS />} />
        <Route path="/cdoe" element={<CDOE />} />
        <Route path="/rnpc" element={<RNPC />} />
        <Route path="/dmcp" element={<DMCP />} />
        <Route path="/SHER" element={<SHER />} />
      </Route>
    </Routes>
  );
}
