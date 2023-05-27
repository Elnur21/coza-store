import React, { createContext, useEffect, useState } from 'react';
import { addCart, addLikes, deleteCardById, getCards, removeCart, removeLikes, updateCardById } from '../api/requests';
import nextId from "react-id-generator";

const CardContext = createContext();


const CardContextProvider = ({ children }) => {
  const [searchModal, setSearchModal] = useState(true);
  const toggleModalSearch = () => {
    setSearchModal(!searchModal);
  };
  const [cartModal, setCartModal] = useState(true);
  const toggleModalCart = () => {
    setCartModal(!cartModal);
  };
  const [basicData, setBasicData] = useState([]);
  useEffect(() => {
    getCards()
      .then(data => {
        setBasicData(data)
      });
  }, []);
  const [myData, setMyData] = useState([]);
  const addToCart = (data) => {
    addCart(data);
    setMyData(
      [
        ...myData,
        data
      ]
    )
  }
  const removeFromCart = (data, mydata) => {
    removeCart(data)
    setMyData(mydata.filter(deck => deck._id !== data._id));
  }
  const [likeModal, setLikeModal] = useState(true);
  const toggleModalLike = () => {
    setLikeModal(!likeModal);
  };
  const [myLike, setMyLike] = useState([]);
  const addToLike = (data) => {
    addLikes(data)
    setMyLike(
      [
        ...myLike,
        data
      ]
    )
  }
  const removeFromLike = (data, myLike) => {
    removeLikes(data);
    setMyLike(myLike.filter(deck => deck._id !== data._id));
  }
  const deleteCard = async (id) => {
    await deleteCardById(id);
  }
  const updateCard = async (category) => {
    await updateCardById(category);
  }


  const value = {
    removeFromLike,
    myLike,
    setMyLike,
    addToLike,
    removeFromCart,
    likeModal,
    setLikeModal,
    searchModal,
    toggleModalLike,
    setSearchModal,
    toggleModalSearch,
    cartModal,
    setCartModal,
    toggleModalCart,
    basicData,
    myData,
    setMyData,
    addToCart,
    deleteCard,
    updateCard
  };


  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export { CardContext, CardContextProvider };
