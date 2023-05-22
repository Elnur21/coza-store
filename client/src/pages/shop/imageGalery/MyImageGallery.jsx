import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productDetail1 from  "../../../assets/image/product-detail-01.jpg.webp"
import productDetail2 from  "../../../assets/image/product-detail-02.jpg.webp"
import productDetail3 from  "../../../assets/image/product-detail-03.jpg.webp"

class MyImageGallery extends Component {

  render() {
    const properties = {
      thumbnailPosition: "left",
      showPlayButton: false,
      items: [
        {
          original: this.props.basicImage,
          thumbnail: this.props.basicImage
        },
        {
          original: productDetail1,
          thumbnail: productDetail1
        },
        {
          original: productDetail2,
          thumbnail: productDetail2
        },
        {
          original: productDetail3,
          thumbnail: productDetail3 
        }
      ]
    };

    return <ImageGallery {...properties} />;
  }
}

export default MyImageGallery;
