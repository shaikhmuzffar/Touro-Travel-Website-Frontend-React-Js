import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import cityImg1 from '../../images/placeInfo/italy1.jpg'
import cityImg2 from '../../images/placeInfo/italy2.jpg'
import cityImg3 from '../../images/placeInfo/italy3.jpg'
import cityImg4 from '../../images/placeInfo/italy4.jpg'
import cityImg5 from '../../images/placeInfo/italy5.jpg'
import cityImg6 from '../../images/placeInfo/italy6.jpg'

export default function App() {
  return (
      <Swiper
        spaceBetween={70}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
            <img src={cityImg1} alt="" />
            <div className="cityImgOverlay"></div>
            <div className="cityInfo">
              <h2>Rome,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
            <img src={cityImg2} alt="" />
            <div className="cityImgOverlay"></div>
            <div className="cityInfo">
              <h2>Florence ,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
          <div className="cityImgOverlay"></div>
            <img src={cityImg3} alt="" />
            <div className="cityInfo">
              <h2>Milan,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
            <img src={cityImg4} alt="" />
            <div className="cityImgOverlay"></div>
            <div className="cityInfo">
              <h2>Palermo,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
            <img src={cityImg5} alt="" />
            <div className="cityImgOverlay"></div>
            <div className="cityInfo">
              <h2>Genoa ,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="placeInformationSection_popularCitiesSection_city">
            <img src={cityImg6} alt="" />
            <div className="cityImgOverlay"></div>
            <div className="cityInfo">
              <h2>Verona ,</h2>
              <span>collesum</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      )
}
