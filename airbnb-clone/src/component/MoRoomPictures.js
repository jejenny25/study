import React from 'react'
//스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/pagination";

const MoRoomPictures = () => {

    // 스와이퍼 관련
    Swipercore.use([Pagination]);

    const room_settings = {
        slidesPerView:1,
        slidesPerGroup : 1,
        allowTouchMove: true,//드래그 금지
        speed : 1200,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    };
  return (
    <div className="picture-area">
        <Swiper {...room_settings}>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail01.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail02.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail03.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail04.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail05.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail06.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail07.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail08.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail09.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail10.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail11.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail12.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail13.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <SwiperSlide>
                <button type='button' className='btn'>
                    <div className="item">
                        <div className="img"><img src="images/room_pictures/room_detail14.jpg" alt="" /></div>
                    </div>
                </button>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
        </Swiper>
    </div>
  )
}

export default MoRoomPictures