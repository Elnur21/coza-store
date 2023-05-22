import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import alertify from 'alertifyjs';
import ScrollTop from "./components/common/ScrollTop";
import "../src/assets/style/main.css"
import "../src/assets/style/responsive.css"
import SearchModal from "./components/modals/SearchModal"
import CartModal from "./components/modals/CartModal";
import LikeModal from "./components/modals/LikeModal";
import { useEffect, useState } from "react";
import NotFound from "./components/notFound/NotFound";
import nextId from "react-id-generator";
import Dashboard from "./pages/user/home/Dashboard";
import Blog from "./pages/user/blog/Blog";
import BlogContent from "./pages/user/blog/BlogContent";
import Contact from "./pages/user/contact/Contact";
import About from "./pages/user/about/About";
import Features from "./pages/user/features/Features";
import Shop from "./pages/user/shop/Shop";

function App() {
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
    const url = "http://localhost:3001/userData";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBasicData(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
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
    alertify.error(data.name + " removed to cart!")
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
    alertify.error(data.name + " removed to cart!")
  }
  return (
    <div className="App">
      <ScrollTop />
      <Navbar clickCart={toggleModalCart} clickSearch={toggleModalSearch} clickLike={toggleModalLike} cart={myData} likes={myLike} />
      <SearchModal click={toggleModalSearch} classSearch={searchModal ? "modalTop" : " "} />
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
      />
      <Routes>
        <Route path="/" element={<Dashboard addToCart={addToCart} basicData={basicData} addToLike={addToLike} likes={myLike} setLikes={setMyLike} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} basicData={basicData} addToLike={addToLike} likes={myLike} setLikes={setMyLike} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog-content" element={<BlogContent />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features myData={myData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
