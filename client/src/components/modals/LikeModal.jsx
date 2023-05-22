import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Featured from "../../pages/blog/Featured";
export default function CartModal(props) {
  return (
    <div
      className={
        "position-fixed d-flex w-100 h-100 top-0 myModal modalRight likeModal " +
        props.cartClass
      }
      style={{ transitionDuration: "3s" }}
    >
      <div
        className="col-lg-9 col-md-6 col-sm-2 col-mobile-1"
        onClick={props.click}
      >
        <div className="overlay bg-dark opacity-50 w-100 h-100"></div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-10 col-mobile-11 bg-white p-5 cart-scroll">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className=" fw-bold">YOUR LIKES</h5>{" "}
          <button className="btn shadow-none fs-3" onClick={props.click}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>{" "}
        <br />
        <br />
        {
            props.cart.length===0?<div>You don't like any products.</div>
            :<div>
            {props.cart.map((cartItem) => (
              <Featured
                blogLink="shop"
                key={cartItem.id}
                featureImage={cartItem.image}
                click={() => props.removeFromLike(cartItem, props.cart)}
                imageWidth="w-75"
                featureHeader={cartItem.name}
                featurePrice={"$" + cartItem.price}
                likes={props.likes}
              />
            ))}
          </div>
        }
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
