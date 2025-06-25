import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-[100px] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
