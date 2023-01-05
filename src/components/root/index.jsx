import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <>
    <Navbar />
      <Outlet />
    <Footer />
    </>
  );
}
