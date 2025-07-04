import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

export default function AppWrapper() {
  const location = useLocation();

  const isValidPath = [
    "/",
    "/about",
    "/admissions",
    "/programs",
    "/research",
    "/spdc",
    "/feat",
    "/cdoe",
    "/DAL",
    "/SMCON-W",
    "/SMCON-N",
    "/SRMMCON",
    "/sahs",
    "/IQAC",
    "/jnmc",
    "/sas",
    "/rnpc",
    "/dmcp",
    "/SHER",
  ];

  const pathname = location.pathname.replace("/dmiher-web", "");

  if (!isValidPath.includes(pathname)) {
    return <Navigate to="/" replace />;
  }

  return <AppRoutes />;
}
