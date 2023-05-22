import { faClose, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ShopContent from "./ShopContent";
// import ShopModal from "./ShopModal";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
export default function Shop(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const onItemClick = () => {
    setExpanded(!isExpanded);
  };
  const onItemClick2 = () => {
    setOpen(!open);
  };
  const [userDatas, setUserDatas] = useState(props.basicData);
  const onSearchHandleChange = (value) => {
    const newData = props.basicData.filter((order) =>
      // user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) // only name search

      order.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setUserDatas(newData);
  };
  const [selectedTab, setSelectedTab] = useTabs([
    "all",
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Watches",
  ]);
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75">
        <div className="d-flex mt-4 justify-content-between flex-wrap">
          <ul
            className="d-flex gap-4 col-lg-6 col-md-12 col-sm-12 px-0 text-muted flex-wrap align-items-center"
            type="none"
          >
            <li>
              <TabSelector
                isActive={selectedTab === "all"}
                onClick={() => setSelectedTab("all")}
              >
                All Products
              </TabSelector>
            </li>
            <li>
              <TabSelector
                isActive={selectedTab === "Women"}
                onClick={() => setSelectedTab("Women")}
              >
                Women
              </TabSelector>
            </li>
            <li>
              <TabSelector
                isActive={selectedTab === "Men"}
                onClick={() => setSelectedTab("Men")}
              >
                Men
              </TabSelector>
            </li>
            <li>
              <TabSelector
                isActive={selectedTab === "Bag"}
                onClick={() => setSelectedTab("Bag")}
              >
                Bag
              </TabSelector>
            </li>
            <li>
              <TabSelector
                isActive={selectedTab === "Shoes"}
                onClick={() => setSelectedTab("Shoes")}
              >
                Shoes
              </TabSelector>
            </li>
            <li>
              <TabSelector
                isActive={selectedTab === "Watches"}
                onClick={() => setSelectedTab("Watches")}
              >
                Watches
              </TabSelector>
            </li>
          </ul>
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-start justify-content-sm-start gap-2">
            <button
              className="btn border border-secondary d-flex align-items-center gap-1"
              onClick={onItemClick2}
            >
              <FontAwesomeIcon icon={!open ? faFilter : faClose} /> Filter
            </button>
            <button
              className="btn border border-secondary title  d-flex align-items-center gap-1"
              onClick={onItemClick}
            >
              <FontAwesomeIcon icon={!isExpanded ? faSearch : faClose} /> Search
            </button>
          </div>
        </div>
        <Collapse isOpened={open}>
          <br />
          {open && (
            <div className="d-flex justify-content-between p-4 border border-secondary">
              <ul className="px-0 lh-lg" type="none">
                <li>
                  <h5>Sort By</h5>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Default
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Popularity
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Average rating
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Newness
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Price: Low to High
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    Price: High to Low
                  </Link>
                </li>
              </ul>
              <ul className="px-0 lh-lg" type="none">
                <li>
                  <h5>Price</h5>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    All
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    $0.00 - $50.00
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    $50.00 - $100.00
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    $100.00 - $150.00
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    $150.00 - $200.00
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    $200.00+
                  </Link>
                </li>
              </ul>
              <ul className="px-0 lh-lg" type="none">
                <li>
                  <h5>Color</h5>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-dark h-100 p-2"></div>
                      Black
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-primary h-100 p-2"></div>
                      Blue
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-secondary h-100 p-2"></div>
                      Grey
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-success h-100 p-2"></div>
                      Green
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-danger h-100 p-2"></div>
                      Red
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-muted">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rounded rounded-circle bg-white border border-secondary h-100 p-2"></div>
                      White
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="px-0 w-25" type="none">
                <li>
                  <h5>Tags</h5>
                </li>
                <li className="">
                  <ul className="p-0 mt-4 d-flex flex-wrap gap-2" type="none">
                    <li className="border border-secondary rounded-pill px-2 py-1">
                      <Link
                        className="text-decoration-none text-muted"
                        to="/blog"
                      >
                        Fashion
                      </Link>
                    </li>
                    <li className="border border-secondary rounded-pill px-2 py-1">
                      <Link
                        className="text-decoration-none text-muted"
                        to="/blog"
                      >
                        Lifestyle
                      </Link>
                    </li>
                    <li className="border border-secondary rounded-pill px-2 py-1">
                      <Link
                        className="text-decoration-none text-muted"
                        to="/blog"
                      >
                        Denim
                      </Link>
                    </li>
                    <li className="border border-secondary rounded-pill px-2 py-1">
                      <Link
                        className="text-decoration-none text-muted"
                        to="/blog"
                      >
                        Streetstyle
                      </Link>
                    </li>
                    <li className="border border-secondary rounded-pill px-2 py-1">
                      <Link
                        className="text-decoration-none text-muted"
                        to="/blog"
                      >
                        Crafts
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </Collapse>
        <Collapse className="w-100 content" isOpened={isExpanded}>
          <br />
          {isExpanded && (
            <div className="d-flex">
              <button className="p-3 border-end-0 btn bg-white rounded-0 rounded-square border shadow-none">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="btn bg-white text-start border rounded-0 rounded-square border-start-0 shadow-none p-3 w-100 bg-white"
                onChange={(e) => onSearchHandleChange(e.target.value)}
              />
            </div>
          )}
        </Collapse>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
        {
          selectedTab === "all"?userDatas.map((order) => (
              <ShopContent
                colClasses=" col-lg-3 col-md-4 col-sm-6"
                key={order.id}
                cardImage={order.image}
                cardTitle={order.name}
                cardPrice={order.price}
                addToCart={() => props.addToCart(order)}
                addToLike={() => props.addToLike(order)}
                likes={props.likes}
                setLikes={props.setLikes}
                myOrder={order}
              />
          )):
          userDatas.map((order) => (
            <TabPanel hidden={selectedTab !== order.value} className=" col-lg-3 col-md-4 col-sm-6 border-0">
              <ShopContent
              colClasses=" col-12"
                key={order.id}
                cardImage={order.image}
                cardTitle={order.name}
                cardPrice={order.price}
                addToCart={() => props.addToCart(order)}
                addToLike={() => props.addToLike(order)}
                likes={props.likes}
                setLikes={props.setLikes}
                myOrder={order}
              />
            </TabPanel>
          ))
        }
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary text-dark rounded-pill px-5 py-2">
            LOAD MORE
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
