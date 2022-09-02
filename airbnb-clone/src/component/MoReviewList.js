import React from 'react'

import data from "../db/data.json" // json 객체를 data라는 변수에 넣어 임포트

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


const MoReviewList = () => {

    const filter_settings = {
        slidesPerView: 1.2,
        spaceBetween:12, 
        allowTouchMove: true,
        slidesPerGroup : 1,        
        speed : 1000,
    };

    return (
        <div className="swiper-variety">
            <Swiper {...filter_settings}>
                {data.reviews
                .filter((item, index) => index < 3)
                .map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="review-item">
                            <div className="reviewer-info">
                                <div className="profile-img"><img src={item.profile} /></div>
                                <div className="txt-wrap">
                                    <p className="name txt-medium">{item.name}</p>
                                    <span className="date">{item.date}</span>
                                </div>
                            </div>
                            <div className="review-cont">
                                <p className="desc">{item.review}</p>
                            </div>
                            <div className="btn-wrap">
                                <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                    <SwiperSlide>
                        <div className="review-item only-btn">
                            <div className="btn-wrap">
                                <button type="button" className="btn btn-txt-link"><span className="txt">후기 128개 모두 보기</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MoReviewList