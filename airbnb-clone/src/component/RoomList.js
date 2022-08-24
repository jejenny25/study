import data from "../db/data.json" // json 객체를 rooms라는 변수에 넣어 임포트
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart.svg";

const RoomList = () => {

    // 스와이퍼 
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
            {data.rooms.map((item) => (
                <div className="item" key={item.id}>
                    <Link to="/roomDetail" state={{ roomNo: item.id }} className="item-link"><span className="blind">상세페이지이동</span></Link>
                    <div className="thumbnail-wrap">
                        <div className="swiper swiper-thumbnail1">
                            <Swiper {...thumb_settings}>
                                {item.pictures.map((picture) => (
                                    <SwiperSlide className='img' key={picture.index}>
                                        <Link to="/roomDetail" state={{ roomNo: item.id }}><img src={picture} /></Link>
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
                            <p>{(item.distance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}km 거리<br />{item.date}</p>
                        </div>
                        <div className="price"><span>￦ {(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span><em> /박</em></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RoomList