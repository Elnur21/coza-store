import React, { createContext, useEffect, useState } from 'react';
import { fetchData } from '../api/requests';
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
    fetchData()
      .then(data => {
        setBasicData(data)
      });
  }, []);
  const [myData, setMyData] = useState([]);
  const addToCart = (data) => {
    setMyData(
      [
        ...myData,
        {
          id: nextId(),
          dataId: data.id,
          name: data.name,
          image: data.image,
          price: data.price,
          value: data.value
        }
      ]
    )
  }
  const removeFromCart = (data, mydata) => {
    setMyData(mydata.filter(deck => deck.id !== data.id));
  }
  const [likeModal, setLikeModal] = useState(true);
  const toggleModalLike = () => {
    setLikeModal(!likeModal);
  };
  const [myLike, setMyLike] = useState([]);
  const addToLike = (data) => {
    setMyLike(
      [
        ...myLike,
        {
          id: nextId(),
          dataId: data.id,
          name: data.name,
          image: data.image,
          price: data.price,
          value: data.value
        }
      ]
    )
  }
  const removeFromLike = (data, mydata) => {
    setMyLike(mydata.filter(deck => deck.id !== data.id));
    console.log(myLike)
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
    addToCart
  };


  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export { CardContext, CardContextProvider };
