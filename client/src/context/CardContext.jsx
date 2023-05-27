import React, { createContext, useContext, useEffect, useState } from 'react';
import { addCart, addLikes, deleteCardById, getCards, getUsers, removeCart, removeLikes, updateCardById } from '../api/requests';
import { UserContext } from './UserContext';

const CardContext = createContext();


const CardContextProvider = ({ children }) => {
  const { user, users, setUsers } = useContext(UserContext);
  const [searchModal, setSearchModal] = useState(true);
  const toggleModalSearch = () => {
    setSearchModal(!searchModal);
  };
  const [cartModal, setCartModal] = useState(true);
  const toggleModalCart = () => {
    setCartModal(!cartModal);
  };
  const [basicData, setBasicData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [myLike, setMyLike] = useState([]);
  useEffect(() => {
    getCards()
      .then(data => {
        setBasicData(data)
      });
  }, []);
  useEffect(() => {
    if (basicData.length !== 0 && user) {
      setMyData(basicData.filter(card => (
        user.cart.includes(card._id)
      )))
      setMyLike(basicData.filter(card => (
        user.likes.includes(card._id)
      )))
    }
  }, [basicData])
  const addToCart = async (data) => {
    await getUsers().then(d => {
      setUsers(d)
    });
    var id = user._id
    await addCart(data);
    localStorage.setItem('user', JSON.stringify(users.filter(user => user._id === id)[0]))
    setMyData(
      [
        ...myData,
        data
      ]
    )
  }
  const removeFromCart = async (data) => {
    await getUsers().then(d => {
      setUsers(d)
    });
    var id = user._id
    await removeCart(data)
    localStorage.setItem('user', JSON.stringify(users.filter(user => user._id === id)[0]))
    setMyData(myData.filter(deck => deck._id !== data._id));
  }
  const [likeModal, setLikeModal] = useState(true);
  const toggleModalLike = () => {
    setLikeModal(!likeModal);
  };
  const addToLike = async (data) => {
    await getUsers().then(d => {
      setUsers(d)
    });
    var id = user._id
    await addLikes(data)
    localStorage.setItem('user', JSON.stringify(users.filter(user => user._id === id)[0]))
    setMyLike(
      [
        ...myLike,
        data
      ]
    )
  }
  const removeFromLike = async (data) => {
    await getUsers().then(d => {
      setUsers(d)
    });
    var id = user._id
    await removeLikes(data);
    localStorage.setItem('user', JSON.stringify(users.filter(user => user._id === id)[0]))
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
