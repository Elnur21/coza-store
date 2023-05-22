import React from 'react'
import Banner from './Banner'
import SlideShow from './SlideShow'

import man_banner from "../../assets/image/man-banner.webp"
import woman_banner from "../../assets/image/women-banner.webp"
import accesories_banner from "../../assets/image/accesories-banner.webp"
import Shop from '../shop/Shop'
export default function Dashboard(props) {
  return (
    <div>
      <SlideShow />
      <div className='d-flex justify-content-center mt-2'>
        <div className='row w-75 justify-content-lg-between justify-content-md-center justify-content-sm-center mt-5'>
          <Banner info="Spring 2018" name="Women" imgSource={woman_banner} />
          <Banner info="Spring 2018" name="Men" imgSource={man_banner} />
          <Banner info="New Trend" name="Accesories" imgSource={accesories_banner} />
        </div>
      </div>
      <div className='shop d-flex align-items-center flex-column mt-5 pt-5'>
        <h2 className='w-75 fw-bold'>PRODUCT OVERVIEW</h2>
      </div>
      <Shop addToCart={props.addToCart} basicData={props.basicData} addToLike={props.addToLike} likes={props.likes} setLikes={props.setLikes}/>
    </div>
  )
}
