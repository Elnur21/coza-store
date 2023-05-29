import React from "react";
import "../../../assets/style/shop.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../api/base_url";
export default function CardContent(props) {
  const imageUrl = baseUrl + '/uploads/' + props.cardImage;

  return (
    <div className="card border-0 col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="buttonHover">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="card_image"
        />
      </div>
      <div className="card-body border rounded-bottom">
        <p className="card-text text-muted">
          <span>{props.cardTitle}</span>
        </p>
        <p className="card-text">${props.cardPrice}</p>
        <div className="d-flex w-100 justify-content-between">
          <Link to={`/admin/cards/${props.id}`} className="btn btn-warning text-white">Update</Link>
          <button className="btn btn-danger" onClick={() => {
            props.deleteCard(props.id)
            window.location.reload();
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
}
