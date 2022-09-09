import React, {useState} from 'react'

//스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from 'styled-components';

import DateButton from "../component/DateButton"

const FlexibleDateSwiper = () => {
    // 스와이퍼 관련
    Swipercore.use([Navigation, Pagination]);

    const flexdate_settings = {
        slidesPerView:6,
        slidesPerGroup : 1,
        spaceBetween: 8, 
        allowTouchMove: true,//드래그 금지
        speed : 1200,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
    };

  return (
    <div className="swiper-flex-date">
        <Swiper {...flexdate_settings}>
            <SwiperSlide>
                <DateButton mon={9} year={2022}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={10} year={2022}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={11} year={2022}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={12} year={2022}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={1} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={2} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={3} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={4} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={5} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={6} year={2023}/>
            </SwiperSlide>
            <SwiperSlide>
                <DateButton mon={7} year={2023}/>
            </SwiperSlide>
        </Swiper>
        <button type="button" className="swiper-button-prev"><span></span></button>
        <button type="button" className="swiper-button-next"><span></span></button>
    </div>
  )
}

export default FlexibleDateSwiper