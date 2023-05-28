import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ShopContent from "../../pages/user/shop/ShopContent";
import { CardContext } from "../../context/CardContext";

export default function SearchModal(props) {
  const { basicData, toggleModalSearch, addToLike, addToCart, likes, setLikes } = useContext(CardContext);
  const [shopDatas, setShopDatas] = useState([]);
  const [character, setCharacter] = useState("");
  useEffect(() => {
    setShopDatas(basicData)
  }, [basicData])

  const onSearchHandleChange = (value) => {
    const newData = basicData.filter((order) =>
      order.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setShopDatas(newData);
  };
  return (
    <div
      className={
        `position-fixed searchModal w-100 h-100 myModal top-0 ${props.classSearch}`}
      style={{ transitionDuration: "2s" }}
    >
      <div className="bg-white position-fixed w-100 h-100 top-0 opacity-50 myModal"></div>
      <div className=" position-fixed w-100 h-100 top-0 d-flex justify-content-center flex-column align-items-center myModal">
        <div className="d-flex justify-content-end w-50">
          <button
            className="btn shadow-none fs-3 opacity-50"
            onClick={toggleModalSearch}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="d-flex w-50">
          <button className="p-3 border-end-0 btn bg-white rounded-0 rounded-square border shadow-none fs-1">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="btn bg-white text-start border rounded-0 rounded-square border-start-0 shadow-none p-3 w-100 bg-white fs-1"
            onChange={(e) => { onSearchHandleChange(e.target.value); setCharacter(e.target.value.length) }}
          />
        </div>
        {character ? (
          <div className="d-flex gap-2 w-100">
            {shopDatas.map((order) => (
              <ShopContent
                key={order._id}
                cardImage={order.image}
                cardTitle={order.name}
                cardPrice={order.price}
                addToCart={() => addToCart(order)}
                addToLike={() => addToLike(order)}
                likes={likes}
                setLikes={setLikes}
                myOrder={order}
                class="w-25"
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
