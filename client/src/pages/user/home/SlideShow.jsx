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
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='' style={{backgroundImage:"url("+slide1+")", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
          <SlideContent info="Men New-Seasion" name="JACKETS & COATS"/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url("+slide2+")", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
          <SlideContent info="Women Collection 2018" name="NEW SEASION"/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url("+slide3+")", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
          <SlideContent info="Men Collection 2018" name="NEW ARRIALS"  />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
