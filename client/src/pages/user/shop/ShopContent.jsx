import React, { useContext } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/style/shop.css";
import ShopModal from "../../../components/modals/ShopModal";
import { useState } from "react";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../context/UserContext";
import { baseUrl } from "../../../api/base_url";
export default function ShopContent(props) {
  const { user } = useContext(UserContext);
  const [shopModal, setShopModal] = useState(false);
  const toggleModalShop = () => {
    setShopModal(!shopModal);
  };
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  const removeFromLikes = () => {
    props.setLikes(props.likes.filter(deck => deck.dataId !== props.myOrder.id));
    console.log(props.likes)
  }
  const imageUrl = baseUrl + '/uploads/' + props.cardImage;

  return (
    <div className={`card bg-transparent border-0 ${props.class}`}>
      <ShopModal
        click={toggleModalShop}
        classShop={shopModal ? "" : " d-none"}
        myOrder={props.myOrder}
        addToCart={props.addToCart}
      />
      <div className="buttonHover">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="card_image"
        />
        {
          user.role === "user" ?
            <button
              className="btn shadow-none rounded-pill py-2 bg-white text-dark w-50 position-absolute cardButton"
              onClick={toggleModalShop}
            >
              Quick View
            </button> :
            <span className="d-none"></span>
        }

      </div>
      <div className="card-body px-0">
        <p className="card-text text-muted d-flex justify-content-between">
          <span>{props.cardTitle}</span>
          {
            user.role === "user" ?
              <span onClick={toggleLike}>
                {like ? (
                  <FontAwesomeIcon
                    onClick={props.addToLike}
                    icon={faHeart}
                    className="fs-5 text-secondary"
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={removeFromLikes}
                    icon={faHeartCircleCheck}
                    className="fs-5 text-secondary text-danger"
                  />
                )}
              </span> :
              <span className="d-none"></span>
          }
        </p>
        <p className="card-text">${props.cardPrice}</p>
      </div>
    </div>
  );
}
