import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Featured from "../../pages/user/blog/Featured";
import { CardContext } from "../../context/CardContext";
export default function CartModal(props) {
  const { toggleModalLike, myLike, removeFromLike } = useContext(CardContext);
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
        onClick={toggleModalLike}
      >
        <div className="overlay bg-dark opacity-50 w-100 h-100"></div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-10 col-mobile-11 bg-white p-5 cart-scroll">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold">YOUR LIKES</h5>
          <button className="btn shadow-none fs-3" onClick={toggleModalLike}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="mt-5">
          {
            myLike.length === 0 ? <div>You don't like any products.</div>
              : <div>
                {myLike.map((cartItem) => (
                  <Featured
                    blogLink="shop"
                    key={cartItem.id}
                    featureImage={cartItem.image}
                    click={() => removeFromLike(cartItem)}
                    imageWidth="w-75"
                    featureHeader={cartItem.name}
                    featurePrice={"$" + cartItem.price}
                    likes={props.likes}
                  />
                ))}
              </div>
          }
        </div>
      </div>
    </div>
  );
}
