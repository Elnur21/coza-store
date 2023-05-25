import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { CardContext } from "../../context/CardContext";
import SearchModal from "../../components/modals/SearchModal";
import CartModal from "../../components/modals/CartModal";
import LikeModal from "../../components/modals/LikeModal";
import { UserContext } from "../../context/UserContext";

const MainRoot = () => {
  const { cartModal, likeModal, searchModal } = useContext(CardContext);
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <SearchModal classSearch={searchModal ? "modalTop" : " "} />
      <CartModal cartClass={cartModal ? "modalRightt" : " "} />
      <LikeModal cartClass={likeModal ? "modalRightt" : " "} />
      {user.role !== "admin" ? (
        <Outlet />
      ) : (
        <h2 className="display-3 py-5 my-5 w-100 text-center">
          Hello {user.name}
        </h2>
      )}
      <Footer />
    </>
  );
};

export default MainRoot;
