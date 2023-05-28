import React, { useContext, useEffect, useState } from 'react'
import Banner from './Banner'
import SlideShow from './SlideShow'
import man_banner from "../../../assets/image/man-banner.webp"
import woman_banner from "../../../assets/image/women-banner.webp"
import accesories_banner from "../../../assets/image/accesories-banner.webp"
import Shop from '../shop/Shop'
import { BannerContext } from '../../../context/BannerContext'


export default function Dashboard() {
  const { banners } = useContext(BannerContext);
  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    setBannerData(banners)
  }, [banners])
  
  return (
    <div>
      <SlideShow />
      <div className='d-flex justify-content-center mt-2'>
        <div className='row w-75 justify-content-lg-between justify-content-md-center justify-content-sm-center mt-5'>
          {
            bannerData.map(banner => (
              <Banner info={banner.description} name={banner.name} imgSource={banner.image} />
            ))
          }
        </div>
      </div>
      <div className='shop d-flex align-items-center flex-column mt-5 pt-5'>
        <h2 className='w-75 fw-bold'>PRODUCT OVERVIEW</h2>
      </div>
      <Shop />
    </div>
  )
}
