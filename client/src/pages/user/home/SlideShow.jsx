import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../../../assets/style/swiper.css"
import { EffectFade, Autoplay, Navigation } from 'swiper';
import SlideContent from './SlideContent';
import slide1 from "../../../assets/image/slide1.webp"
import slide2 from "../../../assets/image/slide2.webp"
import slide3 from "../../../assets/image/slide3.webp"
import { SlideContext } from '../../../context/SlideContext';
export default function SlideShow() {
  const { slides } = useContext(SlideContext);
  const [slideData, setSlideData] = useState([])
  useEffect(() => {
    setSlideData(slides)
  }, [slides])
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500
        }}
        modules={[EffectFade, Autoplay, Navigation]}
      >
        {
          slideData.map(slide => (
            <SwiperSlide style={{ backgroundImage: `url(${slide.image})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
              <SlideContent info={slide.description} name={slide.name} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
