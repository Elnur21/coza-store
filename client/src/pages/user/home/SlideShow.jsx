import React from 'react'
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
export default function SlideShow() {
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500
        }}
        modules={[EffectFade, Autoplay, Navigation]}
      >
        <SwiperSlide style={{ backgroundImage: `url(${slide1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
          <SlideContent info="Men New-Seasion" name="JACKETS & COATS" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${slide3})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
          <SlideContent info="Women Collection 2018" name="NEW SEASON" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${slide2})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
          <SlideContent info="Men Collection 2018" name="NEW ARRIALS" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
