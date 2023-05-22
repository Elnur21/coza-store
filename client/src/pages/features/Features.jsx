import React from "react";
import { Link } from "react-router-dom";
import FeatureTableContent from "./FeatureTableContent";
import table1 from "../../assets/image/table1.webp";
import table2 from "../../assets/image/table2.webp";
export default function Features(props) {
  return (
    <div>
      <section className="d-flex justify-content-center mt-5 flex-wrap">
        <div className="d-flex justify-content-start w-75 text-muted">
          <Link to="/" className="text-decoration-none text-muted pe-2">
            Home
          </Link>{" "}
          &gt; Shoping Cart
        </div>
        <div className="d-flex w-75 justify-content-between mt-5 flex-wrap">
          <div className="col-lg-8 col-md-12 col-sm-12 pe-lg-2 pe-md-0 p-sm-0">
            <div className="border border-secondary w-100 tableParent">
              <table className="table">
                <thead>
                  <tr className="p-3">
                    <th scope="col" className="text-start ps-5 py-3">
                      PRODUCT
                    </th>
                    <th scope="col" className="text-start py-3">
                      PRICE
                    </th>
                    <th scope="col" className="text-end py-3">
                      QUANTITY
                    </th>
                    <th scope="col" className="text-end pe-5 py-3">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <FeatureTableContent
                    tableImage={table1}
                    imgName="Fresh Strawberries"
                    price="36"
                  />
                  <FeatureTableContent
                    tableImage={table2}
                    imgName="Lightweight Jacket"
                    price="16"
                  />
                  {props.myData.map((cartItem) => (
                    <FeatureTableContent
                      key={cartItem.id}
                      tableImage={cartItem.image}
                      imgName={cartItem.name}
                      price={cartItem.price}
                    />
                  ))}
                </tbody>
              </table>
              <div className="border border-0 border-top border-secondary px-5 py-2 d-flex justify-content-between flex-wrap">
                <div className="d-flex gap-1 my-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Coupon Code"
                    className="btn text-start rounded-pill border-secondary shadow-none"
                  />{" "}
                  <button
                    type="submit"
                    className="btn rounded-pill bg-secondary text-dark shadow-none d-flex align-items-center gap-1"
                  >
                    <span>APPLY</span> <span>COUPON</span>
                  </button>
                </div>
                <button
                  type="reset"
                  className="btn rounded-pill bg-secondary text-dark shadow-none d-flex align-items-center gap-1 my-2"
                >
                  <span>UPDATE</span> <span>CART</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 border border-secondary py-4 px-5  col-md-12 col-sm-12">
            <h5 className="fw-bold mt-2">CART TOTALS</h5> <br />
            <p className="d-flex justify-content-between fs-6">
              <div className="col-lg-3">Subtotal:</div>
              <div className="col-lg-7">
                $
                {79.65 +
                  (props.myData.length > 0
                    ? props.myData
                        .map((datum) => parseFloat(datum.price))
                        .reduce((a, b) => a + b)
                    : 0.0)}
              </div>
            </p>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="col-lg-3 fs-6">Shipping:</p>
              <div className="col-lg-7">
                <p className="text-muted">
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <form action="">
                  <p>CALCULATE SHIPPING</p>
                  <select
                    name=""
                    id=""
                    className="btn w-100 text-start border border-secondary my-2 shadow-none"
                  >
                    <option value="Select a country">Select a country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                  <input
                    className="btn w-100 text-start border border-secondary my-2 shadow-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="State /  country"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Postcode / Zip"
                    className="btn w-100 text-start border border-secondary my-2 shadow-none"
                  />
                  <button
                    type="reset"
                    className="btn rounded-pill bg-secondary text-dark shadow-none w-100"
                  >
                    UPDATE TOTALS
                  </button>
                </form>
              </div>
            </div>{" "}
            <hr />
            <p className="d-flex justify-content-between fs-6">
              <div className="col-lg-3">Total:</div>
              <div className="col-lg-7">
                $
                {79.65 +
                  (props.myData.length > 0
                    ? props.myData
                        .map((datum) => parseFloat(datum.price))
                        .reduce((a, b) => a + b)
                    : 0.0)}
              </div>
            </p>{" "}
            <br />
            <button
              type="submit"
              className="btn rounded-pill bg-dark text-white shadow-none w-100 py-2 mb-4 d-flex justify-content-center"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
