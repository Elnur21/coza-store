import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { CardContext } from "../../context/CardContext";
import SearchModal from "../../components/modals/SearchModal"
import CartModal from "../../components/modals/CartModal"
import LikeModal from "../../components/modals/LikeModal"

const MainRoot = () => {
  const {
    toggleModalCart,
    toggleModalSearch,
    toggleModalLike,
    myData,
    myLike,
    cartModal,
    removeFromCart,
    likeModal,
    searchModal,
    removeFromLike,
  } = useContext(CardContext);
  return (
    <div>
      <Navbar />
      <SearchModal
        classSearch={searchModal ? "modalTop" : " "}
      />
      <CartModal
        cartClass={cartModal ? "modalRightt" : " "}
      />
      <LikeModal
        cartClass={likeModal ? "modalRightt" : " "}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
