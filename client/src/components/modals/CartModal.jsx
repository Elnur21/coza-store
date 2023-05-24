import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import cartModal1 from "../../assets/image/cartModal1.webp";
import cartModal2 from "../../assets/image/cartModal2.webp";
import cartModal3 from "../../assets/image/cartModal3.webp";
import Button from "../buttons/Button";
import Featured from "../../pages/user/blog/Featured";
import { CardContext } from "../../context/CardContext";
export default function CartModal(props) {
  const { toggleModalCart,myData,removeFromCart } = useContext(CardContext);
  return (
    <div
      className={
        "position-fixed d-flex w-100 h-100 top-0 myModal modalRight cartModal " +
        props.cartClass
      }
      style={{ transitionDuration: "3s" }}
    >
      <div
        className="col-lg-9 col-md-6 col-sm-2 col-mobile-1"
        onClick={toggleModalCart}
      >
        <div className="overlay bg-dark opacity-50 w-100 h-100"></div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-10 col-mobile-11 bg-white p-5 cart-scroll">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold">YOUR CART</h5>
          <button className="btn shadow-none fs-3" onClick={toggleModalCart}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="mt-5">
          <Featured
            blogLink="shop"
            featureImage={cartModal1}
            featureHeader="White Shirt Pleat"
            featurePrice="1 x $19.00"
          />
          <Featured
            blogLink="shop"
            featureImage={cartModal2}
            featureHeader="White Shirt Pleat"
            featurePrice="1 x $19.00"
          />
          <Featured
            blogLink="shop"
            featureImage={cartModal3}
            featureHeader="White Shirt Pleat"
            featurePrice="1 x $19.00"
          />
          {myData.map((cartItem) => (
            <Featured
              blogLink="shop"
              key={cartItem.id}
              featureImage={cartItem.image}
              click={() => removeFromCart(cartItem, myData)}
              imageWidth="w-75"
              featureHeader={cartItem.name}
              featurePrice={"$" + cartItem.price}
            />
          ))}
        </div>
        <p className="fs-5 mt-5">
          Total: $
          {57.0 +
            (myData.length > 0
              ? myData
                  .map((datum) => parseFloat(datum.price))
                  .reduce((a, b) => a + b)
              : 0.0)}
        </p>
        <div className="d-flex justify-content-between w-100 gap-1 mt-5">
          <Button btnClass="btn-dark fw-bold w-50" btnText="VIEW CART" />
          <Button btnClass="btn-dark fw-bold w-50" btnText="CHECK OUT" />
        </div>
      </div>
    </div>
  );
}
