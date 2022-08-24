import rooms from "../db/data.json" // json 객체를 rooms라는 변수에 넣어 임포트

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart.svg";

const RoomList = () => {

    Swipercore.use([Navigation, Pagination]);

    const thumb_settings = {
        slidesPerView: "auto",
        speed : 1000,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets : 4,
        },
    };

    return(
        <div className="room-list">
            {rooms.details.map((item) => (
                <div className="item" key={item.id}>
                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                    <div className="thumbnail-wrap">
                        <div className="swiper swiper-thumbnail1">
                            <Swiper {...thumb_settings}>
                                {item.pictures.map((picture) => (
                                    <SwiperSlide className='img' key={picture.index}>
                                        <a href="#"><img src={picture} /></a>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-pagination"></div>
                                <button type="button" className="swiper-button-prev"><span></span></button>
                                <button type="button" className="swiper-button-next"><span></span></button>
                            </Swiper>
                        </div>
                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                    </div>
                    <div className="txt-wrap">
                        <div className="tit-wrap">
                            <span className="tit">{item.name}</span>
                            <span className="star">★ {item.rate}</span>
                        </div>
                        <div className="detail">
                            <p>{item.distance}km 거리<br />{item.date}</p>
                        </div>
                        <div className="price"><span>￦ {item.price}</span><em> /박</em></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RoomList