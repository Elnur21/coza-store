import React, { useState } from "react";
import { faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImageGallery from "./imageGalery/MyImageGallery";
import Button from "../../components/buttons/Button";
import { Link } from "react-router-dom";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function ShopModal(props) {
  const [count1, setCount1] = useState(1);
  return (
    <div
      className={"position-fixed shopModal w-100 h-100 myModal top-0 start-0"+props.classShop}
      style={{ transitionDuration: "3s" }}
    >
      <div className="bg-dark position-fixed w-100 h-100 top-0 opacity-50 myModal"></div>
      <div className=" position-fixed w-100 h-100 top-0 d-flex justify-content-center flex-column align-items-center myModal">
        <div className="d-flex justify-content-end w-75">
          <button
            className="btn shadow-none fs-3 opacity-50"
            onClick={props.click}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="w-75 bg-white px-3 py-5 row">
          <div className="col-lg-7">
            <MyImageGallery basicImage={props.myOrder.image}/>
          </div>
          <div className="col-lg-5 pt-1">
            <h4>{props.myOrder.name}</h4>
            <br />
            <h5 className="fw-bold">${props.myOrder.price}</h5>
            <br />
            <p>
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            <br />
            <br />
            <form>
              <div className="d-flex justify-content-end align-items-center gap-5">
                <label htmlFor="size">Size</label>
                <select
                  name="size"
                  id="size"
                  className="btn shadow-none w-75 text-start border"
                >
                  <option value="Choose an option">Choose an option</option>
                  <option value="Size S">Size S</option>
                  <option value="Size M">Size M</option>
                  <option value="Size L">Size L</option>
                  <option value="Size XL">Size XL</option>
                </select>
              </div>
              <br />
              <div className="d-flex justify-content-end align-items-center gap-5">
                <label htmlFor="Color">Color</label>
                <select
                  name="Color"
                  id="Color"
                  className="btn shadow-none w-75 text-start border"
                >
                  <option value="Choose an option">Choose an option</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                  <option value="Grey">Grey</option>
                </select>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button
                  onClick={(e) => {
                    setCount1(count1 - 1);
                    e.preventDefault();
                  }}
                  className="btn shadow-none border-secondary rounded-0 rounded-start"
                >
                  -
                </button>
                <input
                  type="number"
                  className="btn shadow-none border-secondary px-1 rounded-0"
                  value={count1}
                  onChange={(e) => {setCount1(e.target.value);e.preventDefault();}}
                  style={{ width: "35px" }}
                />
                <button
                  onClick={(e) => {
                    setCount1(count1 + 1);
                    e.preventDefault();
                  }}
                  className="btn shadow-none border-secondary rounded-0 rounded-end"
                >
                  +
                </button>
              </div>{" "}
              <br />
              <div className="d-flex justify-content-center">
              <span
                onClick={props.addToCart}
                className="btn shadow-none rounded-pill py-2 bg-dark text-white px-4 ">
                ADD TO CART
                </span>
              </div>
            </form><br /><br />
            <ul type="none" className="d-flex justify-content-center gap-3">
                <li className="pe-3 border-none border-end">
                    <Link to="/" className="text-decoration-none text-muted"><FontAwesomeIcon icon={faHeart}/></Link>
                </li>
                <li>
                    <Link to="/" className="text-decoration-none text-muted"><FontAwesomeIcon icon={faFacebookF}/></Link>
                </li>
                <li>
                    <Link to="/" className="text-decoration-none text-muted"><FontAwesomeIcon icon={faTwitter}/></Link>
                </li>
                <li>
                    <Link to="/" className="text-decoration-none text-muted"><FontAwesomeIcon icon={faGooglePlusG}/></Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
