import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import NotFound from "../../components/notFound/NotFound";

const AdminRoot = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      {user.role === "admin" ? <Outlet /> : <NotFound />}
      <Footer />
    </>
  );
};

export default AdminRoot;
