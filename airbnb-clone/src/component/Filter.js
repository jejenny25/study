import React from 'react'

import data from "../db/data.json" // json 객체를 rooms라는 변수에 넣어 임포트

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


function Filter() {
    Swipercore.use([Navigation, Pagination]);

    const filter_settings = {
        slidesPerView: "auto",
        spaceBetween: 24, 
        allowTouchMove: true,
        slidesPerGroup : 5,        
        speed : 1000,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 

        breakpoints: {
            1200: {
                slidesPerGroup : 15,
                allowTouchMove: false,
            },
            768: {
                slidesPerGroup :10,
                allowTouchMove: false,
                navigation:false,
            },            
        },
    };

    return (
        <div className="swiper-variety">
            <Swiper {...filter_settings}>
                {data.filters.map((item) => (

                    <SwiperSlide key={item.id}>
                        <button type="button" className="btn btn-variety">
                            <div className="img"><img src={item.icon} alt="" width="24" height="24" /></div>
                            <span className="txt">{item.name}</span>
                        </button>
                    </SwiperSlide>
                ))}
                
                <button type="button" className="swiper-button-prev"><span></span></button>
                <button type="button" className="swiper-button-next"><span></span></button>
            </Swiper>
        </div>
    )
}

export default Filter