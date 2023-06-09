import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Button from "../buttons/Button";
import Featured from "../../pages/user/blog/Featured";
import { CardContext } from "../../context/CardContext";

export default function CartModal(props) {
  const { toggleModalCart, myData, removeFromCart } = useContext(CardContext);

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
          {myData.map((cartItem) => (
            <Featured
              blogLink="shop"
              key={cartItem.id}
              featureImage={cartItem.image}
              click={() => removeFromCart(cartItem)}
              imageWidth="w-50"
              featureHeader={cartItem.name}
              featurePrice={"$" + cartItem.price}
            />
          ))}
        </div>
        <p className="fs-5 mt-5">
          Total: $
          {
            myData.length > 0
              ? myData
                .map((c) => parseFloat(c.price))
                .reduce((a, b) => a + b)
              : 0.0
          }
        </p>
        <div className="d-flex justify-content-between w-100 gap-1 mt-5">
          <Button btnClass="btn-dark fw-bold w-50" btnText="VIEW CART" />
          <Button btnClass="btn-dark fw-bold w-50" btnText="CHECK OUT" />
        </div>
      </div>
    </div>
  );
}
