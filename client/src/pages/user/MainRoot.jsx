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
        click={toggleModalSearch}
        classSearch={searchModal ? "modalTop" : " "}
      />
      <CartModal
        click={toggleModalCart}
        cartClass={cartModal ? "modalRightt" : " "}
        cart={myData}
        removeFromCart={removeFromCart}
      />
      <LikeModal
        click={toggleModalLike}
        cartClass={likeModal ? "modalRightt" : " "}
        cart={myLike}
        removeFromLike={removeFromLike}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
