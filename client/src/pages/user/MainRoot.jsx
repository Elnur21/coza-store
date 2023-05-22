import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { CardContext } from '../../context/CardContext';

const MainRoot = () => {
    const { toggleModalCart,toggleModalSearch,toggleModalLike,myData,myLike } = useContext(CardContext);
  return (
    <div>
        <Navbar clickCart={toggleModalCart} clickSearch={toggleModalSearch} clickLike={toggleModalLike} cart={myData} likes={myLike} />
      {/* <SearchModal click={toggleModalSearch} classSearch={searchModal ? "modalTop" : " "} />
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
      /> */}
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainRoot