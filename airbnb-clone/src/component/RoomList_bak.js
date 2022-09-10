import data from "../db/data.json" // json 객체를 rooms라는 변수에 넣어 임포트
import { Link } from "react-router-dom";
import Likebtn from "./Likebtn";

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilValue } from "recoil";
import { schWordState } from "../recoil/EtcInfo";

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

    const schWord = useRecoilValue(schWordState);

    // useEffect(() => {
        
    // }, [schWord])
    
    return(
        <div className="room-list">
            {data.rooms
                .filter(item => item.name.includes(schWord))
                .map((item) => (
                <div className="item" key={item.id}>
                    <Link to="/roomDetail" state={{ roomNo: item.id }} className="item-link"><span className="blind">상세페이지이동</span></Link>
                    <div className="thumbnail-wrap">
                        <div className="swiper swiper-thumbnail1">
                            <Swiper {...thumb_settings}>
                                {item.pictures.map((picture,index) => (
                                    <SwiperSlide className='img' key={index}>
                                        <Link to="/roomDetail" state={{ roomNo: item.id }}><img src={picture} /></Link>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-pagination"></div>
                                <button type="button" className="swiper-button-prev"><span></span></button>
                                <button type="button" className="swiper-button-next"><span></span></button>
                            </Swiper>
                        </div>
                        <Likebtn isLiked={item.isLiked}/>
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