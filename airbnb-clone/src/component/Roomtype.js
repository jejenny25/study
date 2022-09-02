import React from 'react'

//스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoBedKing } from "../assets/svg/ico-bed-king.svg";
import { ReactComponent as IcoBedQueen } from "../assets/svg/ico-bed-queen.svg";

const Roomtype = () => {
    // 스와이퍼 관련
    Swipercore.use([Navigation, Pagination]);

    const room_settings = {
        slidesPerView:2.1,
        slidesPerGroup : 1,
        spaceBetween: 16, 
        allowTouchMove: true,//드래그 금지
        speed : 1200,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
        breakpoints: {
            1200: {
                slidesPerView:3,
                allowTouchMove: false,
            },
        },
    };

  return (
    <div className="swiper-room-type">
        <Swiper {...room_settings}>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 1</span>
                        <p className="txt">퀸사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 2</span>
                        <p className="txt">퀸사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 3</span>
                        <p className="txt">킹사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 4</span>
                        <p className="txt">킹사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 5</span>
                        <p className="txt">킹사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="room-box">
                    <div className="ico-wrap">
                        <span className="ico"><IcoBedKing /></span>
                        <span className="ico"><IcoBedQueen /></span>
                    </div>
                    <div className="txt-wrap">
                        <span className="tit">침실 6</span>
                        <p className="txt">킹사이즈 침대 1개, 요와 이불 1개</p>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
        <button type="button" className="swiper-button-prev"><span></span></button>
        <button type="button" className="swiper-button-next"><span></span></button>
    </div>
  )
}

export default Roomtype