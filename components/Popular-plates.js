import React from 'react'
import Style from "../styles/Home.module.css"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



function PopularPlates() {
  return (
    <div className={Style.PopularPlatesParent}>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     /* spaceBetween={50}
      slidesPerView={3}*/
      navigation
      autoplay={{delay: 2000}}
     /* pagination={{ clickable: false }}*/
   /*   scrollbar={{ draggable: false }}*/
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className={Style.PopularPlatesCard1}> </div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard2}> </div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard3}></div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard4}></div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard5}></div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard6}></div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard7}></div></SwiperSlide>
      <SwiperSlide><div className={Style.PopularPlatesCard8}></div></SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default PopularPlates;
