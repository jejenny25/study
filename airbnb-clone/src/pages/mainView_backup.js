import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as AirbnbLogo } from "../assets/images/logo.svg";
import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";
import { ReactComponent as IcoLang } from "../assets/svg/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/svg/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/svg/ico-profile.svg";
import { ReactComponent as IcoFilter } from "../assets/svg/ico-filter.svg";
import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart.svg";
import { ReactComponent as IcoMap } from "../assets/svg/ico-map.svg";
import { ReactComponent as IcoArr } from "../assets/svg/ico-arr.svg";

const mainView = () => {
    
    Swipercore.use([Navigation, Pagination]);

    const filter_settings = {
        slidesPerView: "auto",
        slidesPerGroup : 15,
        spaceBetween: 35, 
        touchRatio: 0,//드래그 금지
        speed : 1000,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
    };

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

    return (
        <div className="wrapper main-page">
            <header className="header-wrap">
                <div className="inner">
                    <div className="header">
                        <h1 className="logo">
                            <a href="#" title="에어비앤비 메인으로 가기">
                                <AirbnbLogo />
                            </a>
                        </h1>
                        <div className="sch-wrap">
                            <div className="sch-before-wrap">
                                <button type="button" className="btn btn-where"><span className="txt">어디든지</span></button>
                                <button type="button" className="btn btn-when"><span className="txt">언제든 일주일</span></button>
                                <button className="btn has-sch-ico">
                                    <span className="txt">게스트 추가</span>
                                    <span className="ico"><IcoSch /></span>
                                </button>
                            </div>

                            <div className="sch-after-wrap"></div>
                        </div>

                        <div className="personal-wrap">
                            <a href="#" className="btn"><span>호스트 되기</span></a>
                            <button type="button" className="btn"><IcoLang /><span className="blind">언어 선택</span></button>
                            <button type="button" className="btn btn-my">
                                <span className="hamburger">
                                    <IcoHamburger />
                                </span>
                                <div className="profile-img">
                                    <IcoProfile />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </header>

            {/* Container */}
            <main role="main" className="container">
                <div className="filter-wrap">
                    <div className="inner">
                        <div className="swiper-variety">
                            <Swiper {...filter_settings}>
                                <SwiperSlide className='is-active'>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">섬</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">국립공원</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">통나무집</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">기상천외한 숙소</span>
                                    </button>   
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">해변 근처</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">초소형 주택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">디자인</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">캠핑장</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">A자형 주택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">호숫가</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">북극</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">멋진 수영장</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">동굴</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">서핑</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">최고의 전망</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">복토 주택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">열대 지역</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">셰어하우스</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">Luxe</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">B&B</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">캐슬</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">농장</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">한적한 시골</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">저택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">상징적 도시</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8f7740f0-4854-4057-8082-e098649cf689.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">객잔</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">해변 바로 앞</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">골프장</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">유서 깊은 주택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">돔하우스</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">캠핑카</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">키클라데스 주택</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">풍차</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">와인 농장</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">전문자급 주방</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">보트</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">스키</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">민수</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">컨테이너 하우스</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">카사 파르티쿨라르</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">창작 공간</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">마차</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">트리하우스</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">료칸</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">타워</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">사막</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">유르트</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">헛간</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">하우스보트</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">속세를 벗어난 숙소</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">그랜드 피아노</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">리아드</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">트룰로</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">담무소</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">스키를 탄 채로 출입 가능</span>
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <button type="button" className="btn btn-variety">
                                        <div className="img"><img className="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg" alt="" width="24" height="24" /></div>
                                        <span className="txt">호수</span>
                                    </button>
                                </SwiperSlide>
                                <button type="button" className="swiper-button-prev"><span></span></button>
                                <button type="button" className="swiper-button-next"><span></span></button>
                            </Swiper>
                        </div>
                        
                        <button type="button" className="btn btn-filter">
                            <span className="ico">
                                <IcoFilter />
                            </span>
                            <span className="txt">필터</span>
                        </button>
                    </div>
                </div>

                <div className="inner">
                    <div className="content">
                        
                        <div className="room-wrap">
                            <div className="room-list">
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/916cf438-96f3-424a-8fe1-948c192ae804.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/84659d34-44c4-470a-93b9-adb2612690e6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/97b92645-f975-4e60-9ae0-205885af64b0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d3d5bf03-7a46-457d-85e6-7b19fea68b4a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d9d9db85-419a-4197-9e54-69cf26b22b76.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/af93b131-349f-446b-9bbd-ce6d3d012d8a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45327049-83d2-4aa7-9c6f-6a471dfb48ff.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/2a36dbda-401b-426b-b549-e4f9a9ff74b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/bfc5ac6e-433f-4c30-830b-06e977599f08.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">MV,몰디브</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />10월 12일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 783,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e01d211c-af54-422d-a5e4-6d1607c6f3b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/0f051374-60f2-4588-b95a-4d505ac217b5.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/436d0340-3058-45fc-98b4-f2c15228b565.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa1841da-8327-4643-9a7d-81694d564d7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ec45a0e0-1e0c-4b06-b689-bd45889118de.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/878a0c3f-6773-4272-8216-013964a48d7a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fb06ab09-bd09-4da1-bb9d-9ec5a9432afe.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/638bf5a1-633d-4563-a112-aae1e915baa7.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/87a1a1da-3688-4a1d-843d-94e88068bf07.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f9f495d9-03fd-4deb-a3c0-ee4110804433.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/85c3a8e4-cb96-4649-b86f-e417b1cb35bc.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8b09cbca-da58-4f2a-8dde-66c9b9785cfa.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">El Nido, 필리핀</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>3,050km 거리<br />8월 20일~25일</p>
                                        </div>
                                        <div className="price"><span>￦ 952,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/d727cf6e-4787-4b38-a86f-0cd8d91d02b2.png?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/4f4102ab-2f61-41f5-89bc-849f966478a8.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/f8a0166e-4680-44ad-9be1-966589494910.png?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/58587221-6dfd-4134-bf23-e41111e461fb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/bb4dbe3f-fba1-4787-b3a0-49daf857c7a0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/0db3beb1-36cb-45dd-ad29-878bbb590675.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/5fcdb2d4-3d36-41fc-8360-138a749d72a3.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/04bd32ca-680c-4d5a-84e2-3088de3cac18.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/8ad5e659-fef2-4069-9b8d-97ee3ad26949.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/99d5a810-9fa3-4ea3-a000-4d532fd34991.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/9409f226-3918-4ba2-b751-97f8c129dfcc.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/ce750abe-375c-4f24-a8b4-bf5ee019d212.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/6e535eca-f53a-47e6-addf-d6670f4c5516.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/5fa976da-83b9-4e74-a1bc-03ddd83e1e1a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/6abbf94b-d293-41dc-a9b3-b4bdd72c7a16.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/1d129219-7330-4226-8bf5-490279e90df9.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/c52e836f-e67d-47b3-960c-74217e302b74.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/a0bffaf7-d394-4e60-b899-d6c7647f10fb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Raa Atoll, 몰디브</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />8월 19일~25일</p>
                                        </div>
                                        <div className="price"><span>￦ 1,283,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/01f04dc2-fd82-4508-9215-41d1604aee04.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/e402b421-da86-454d-b23b-045457f4f410.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/6b516b3f-1715-4916-af77-73c802f79868.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/595f59c2-e1db-4fa4-bf12-cec019eca108.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/d5016e67-6530-41b1-a5f5-ebfadee40b4b.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/46a83c1f-25dc-4291-8882-154c82e2a1b4.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/2be19774-b89f-4691-bc8c-211892e9f136.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/5f7239ae-eca5-46cd-ba8f-8618eeebcf7a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/3f95000b-609d-4fc6-a0b2-7a58eaa004c6.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/def8eee0-ecab-4c1b-bc10-2a1f7cf01a24.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/df28b530-f8ed-445e-b3a6-1022edba9aeb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/9a42e59a-d890-4464-b2ba-3679e7b431f0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/f18272c6-6ae1-4a18-bfbd-7c26331e3910.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Bandos Maldives, Garden Villa</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />10월 12일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 892,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6879dc9a-d2c4-4cf3-96b8-9b3b9704154a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/c7fe0696-4154-4cef-9e91-a26cc4b3118a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ada0657e-b626-4651-bc1a-9d16227ff678.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/588ee533-f956-4f4a-bdba-bfb6585ad151.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6489443e-e62e-4acd-9e52-20b564b25f4c.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/cd9149aa-36d7-4b12-90f5-2087f907d71f.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fec9c78f-701d-441d-aec8-f087615fee49.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e43ef840-4cdf-4d68-a80d-474ed9d8abda.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6f92db24-a424-434f-b08b-1aaeb3323f27.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d31f257e-b6a0-4f9e-8fb5-5edbeb82d760.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/77eb229d-1c69-4ea9-bf41-7d9ab7474f2f.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/98f05a17-b928-4d07-90e7-cde196195e80.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/258f20f8-8faf-4339-8d55-d4d36879b215.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6d494a77-42ba-4d49-be05-0b438a859b9b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f8378b92-f2d3-4bc6-9ceb-6c567b5bdedb.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f8378b92-f2d3-4bc6-9ceb-6c567b5bdedb.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45a93b5f-e67c-4dbe-9ea1-14aa78f884b9.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/58fef34b-639f-4a32-880f-4b5b7b404004.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">San Juan, 필리핀</span>
                                            <span className="star">★ 4.8</span>
                                        </div>
                                        <div className="detail">
                                            <p>3,180km 거리<br />11월 12일~19일</p>
                                        </div>
                                        <div className="price"><span>￦ 168,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/58fef34b-639f-4a32-880f-4b5b7b404004.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6879dc9a-d2c4-4cf3-96b8-9b3b9704154a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/c7fe0696-4154-4cef-9e91-a26cc4b3118a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ada0657e-b626-4651-bc1a-9d16227ff678.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/588ee533-f956-4f4a-bdba-bfb6585ad151.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6489443e-e62e-4acd-9e52-20b564b25f4c.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/cd9149aa-36d7-4b12-90f5-2087f907d71f.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fec9c78f-701d-441d-aec8-f087615fee49.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e43ef840-4cdf-4d68-a80d-474ed9d8abda.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6f92db24-a424-434f-b08b-1aaeb3323f27.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d31f257e-b6a0-4f9e-8fb5-5edbeb82d760.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/77eb229d-1c69-4ea9-bf41-7d9ab7474f2f.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/98f05a17-b928-4d07-90e7-cde196195e80.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/258f20f8-8faf-4339-8d55-d4d36879b215.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/6d494a77-42ba-4d49-be05-0b438a859b9b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f8378b92-f2d3-4bc6-9ceb-6c567b5bdedb.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f8378b92-f2d3-4bc6-9ceb-6c567b5bdedb.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45a93b5f-e67c-4dbe-9ea1-14aa78f884b9.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Kumarakom, 인도</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>5,550km 거리<br />10월 12일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 608,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e01d211c-af54-422d-a5e4-6d1607c6f3b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/0f051374-60f2-4588-b95a-4d505ac217b5.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/436d0340-3058-45fc-98b4-f2c15228b565.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa1841da-8327-4643-9a7d-81694d564d7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ec45a0e0-1e0c-4b06-b689-bd45889118de.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/878a0c3f-6773-4272-8216-013964a48d7a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fb06ab09-bd09-4da1-bb9d-9ec5a9432afe.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/638bf5a1-633d-4563-a112-aae1e915baa7.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/87a1a1da-3688-4a1d-843d-94e88068bf07.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f9f495d9-03fd-4deb-a3c0-ee4110804433.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/85c3a8e4-cb96-4649-b86f-e417b1cb35bc.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8b09cbca-da58-4f2a-8dde-66c9b9785cfa.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Cavinti, 필리핀</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>2,547km 거리<br />10월 12일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 133,982</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/5fcdb2d4-3d36-41fc-8360-138a749d72a3.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/4f4102ab-2f61-41f5-89bc-849f966478a8.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/f8a0166e-4680-44ad-9be1-966589494910.png?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/58587221-6dfd-4134-bf23-e41111e461fb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/bb4dbe3f-fba1-4787-b3a0-49daf857c7a0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/0db3beb1-36cb-45dd-ad29-878bbb590675.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/d727cf6e-4787-4b38-a86f-0cd8d91d02b2.png?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/04bd32ca-680c-4d5a-84e2-3088de3cac18.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/8ad5e659-fef2-4069-9b8d-97ee3ad26949.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/99d5a810-9fa3-4ea3-a000-4d532fd34991.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/9409f226-3918-4ba2-b751-97f8c129dfcc.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/ce750abe-375c-4f24-a8b4-bf5ee019d212.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/6e535eca-f53a-47e6-addf-d6670f4c5516.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/5fa976da-83b9-4e74-a1bc-03ddd83e1e1a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/6abbf94b-d293-41dc-a9b3-b4bdd72c7a16.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/1d129219-7330-4226-8bf5-490279e90df9.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/c52e836f-e67d-47b3-960c-74217e302b74.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/a0bffaf7-d394-4e60-b899-d6c7647f10fb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Surat Thani, 태국</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>4,142km 거리<br />8월 7일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 482,252</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d3d5bf03-7a46-457d-85e6-7b19fea68b4a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d9d9db85-419a-4197-9e54-69cf26b22b76.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/af93b131-349f-446b-9bbd-ce6d3d012d8a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/916cf438-96f3-424a-8fe1-948c192ae804.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/84659d34-44c4-470a-93b9-adb2612690e6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/97b92645-f975-4e60-9ae0-205885af64b0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45327049-83d2-4aa7-9c6f-6a471dfb48ff.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/2a36dbda-401b-426b-b549-e4f9a9ff74b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/bfc5ac6e-433f-4c30-830b-06e977599f08.jpg?im_w=720" /></a>
                                                </SwiperSlide>    
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Maafushi, 몰디브</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />11월 3일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 54,851</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/2be19774-b89f-4691-bc8c-211892e9f136.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/01f04dc2-fd82-4508-9215-41d1604aee04.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/e402b421-da86-454d-b23b-045457f4f410.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/6b516b3f-1715-4916-af77-73c802f79868.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/595f59c2-e1db-4fa4-bf12-cec019eca108.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/d5016e67-6530-41b1-a5f5-ebfadee40b4b.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/46a83c1f-25dc-4291-8882-154c82e2a1b4.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/5f7239ae-eca5-46cd-ba8f-8618eeebcf7a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/3f95000b-609d-4fc6-a0b2-7a58eaa004c6.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/def8eee0-ecab-4c1b-bc10-2a1f7cf01a24.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/df28b530-f8ed-445e-b3a6-1022edba9aeb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/9a42e59a-d890-4464-b2ba-3679e7b431f0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/f18272c6-6ae1-4a18-bfbd-7c26331e3910.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">MV,몰디브</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />10월 12일~17일</p>
                                        </div>
                                        <div className="price"><span>￦ 783,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/e402b421-da86-454d-b23b-045457f4f410.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/df28b530-f8ed-445e-b3a6-1022edba9aeb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/9a42e59a-d890-4464-b2ba-3679e7b431f0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/2be19774-b89f-4691-bc8c-211892e9f136.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/01f04dc2-fd82-4508-9215-41d1604aee04.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/e402b421-da86-454d-b23b-045457f4f410.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/6b516b3f-1715-4916-af77-73c802f79868.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/595f59c2-e1db-4fa4-bf12-cec019eca108.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/d5016e67-6530-41b1-a5f5-ebfadee40b4b.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/46a83c1f-25dc-4291-8882-154c82e2a1b4.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/5f7239ae-eca5-46cd-ba8f-8618eeebcf7a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/3f95000b-609d-4fc6-a0b2-7a58eaa004c6.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/def8eee0-ecab-4c1b-bc10-2a1f7cf01a24.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/f18272c6-6ae1-4a18-bfbd-7c26331e3910.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Lumban, 필리핀</span>
                                            <span className="star">★ 4.88</span>
                                        </div>
                                        <div className="detail">
                                            <p>2,648km 거리<br />9월 1일~10일</p>
                                        </div>
                                        <div className="price"><span>￦ 93,840</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/84659d34-44c4-470a-93b9-adb2612690e6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d3d5bf03-7a46-457d-85e6-7b19fea68b4a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/916cf438-96f3-424a-8fe1-948c192ae804.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/97b92645-f975-4e60-9ae0-205885af64b0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/d9d9db85-419a-4197-9e54-69cf26b22b76.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/af93b131-349f-446b-9bbd-ce6d3d012d8a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45327049-83d2-4aa7-9c6f-6a471dfb48ff.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/2a36dbda-401b-426b-b549-e4f9a9ff74b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/bfc5ac6e-433f-4c30-830b-06e977599f08.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Project Ö - Private island</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>7,199km 거리<br />8월 11일~16일</p>
                                        </div>
                                        <div className="price"><span>￦ 2,783,325</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/01f04dc2-fd82-4508-9215-41d1604aee04.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/e402b421-da86-454d-b23b-045457f4f410.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/6b516b3f-1715-4916-af77-73c802f79868.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/595f59c2-e1db-4fa4-bf12-cec019eca108.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/d5016e67-6530-41b1-a5f5-ebfadee40b4b.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/46a83c1f-25dc-4291-8882-154c82e2a1b4.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/2be19774-b89f-4691-bc8c-211892e9f136.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/5f7239ae-eca5-46cd-ba8f-8618eeebcf7a.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/3f95000b-609d-4fc6-a0b2-7a58eaa004c6.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/def8eee0-ecab-4c1b-bc10-2a1f7cf01a24.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/df28b530-f8ed-445e-b3a6-1022edba9aeb.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/9a42e59a-d890-4464-b2ba-3679e7b431f0.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/f18272c6-6ae1-4a18-bfbd-7c26331e3910.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Horubadhoo,몰디브</span>
                                            <span className="star">★ 4.9</span>
                                        </div>
                                        <div className="detail">
                                            <p>6,596km 거리<br />9월 22일~30일</p>
                                        </div>
                                        <div className="price"><span>￦ 267,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/878a0c3f-6773-4272-8216-013964a48d7a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e01d211c-af54-422d-a5e4-6d1607c6f3b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/0f051374-60f2-4588-b95a-4d505ac217b5.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/436d0340-3058-45fc-98b4-f2c15228b565.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa1841da-8327-4643-9a7d-81694d564d7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ec45a0e0-1e0c-4b06-b689-bd45889118de.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fb06ab09-bd09-4da1-bb9d-9ec5a9432afe.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/638bf5a1-633d-4563-a112-aae1e915baa7.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/87a1a1da-3688-4a1d-843d-94e88068bf07.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f9f495d9-03fd-4deb-a3c0-ee4110804433.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/85c3a8e4-cb96-4649-b86f-e417b1cb35bc.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8b09cbca-da58-4f2a-8dde-66c9b9785cfa.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">The Resthouse, Perhentian Island,말레이시아</span>
                                            <span className="star">★ 4.99</span>
                                        </div>
                                        <div className="detail">
                                            <p>4,296km 거리<br />1월 1일~6일</p>
                                        </div>
                                        <div className="price"><span>￦ 362,725</span><em> /박</em></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="item-link"><span className="blind">상세페이지이동</span></a>
                                    <div className="thumbnail-wrap">
                                        <div className="swiper swiper-thumbnail1">
                                            <Swiper {...thumb_settings}>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/85c3a8e4-cb96-4649-b86f-e417b1cb35bc.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/878a0c3f-6773-4272-8216-013964a48d7a.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/e01d211c-af54-422d-a5e4-6d1607c6f3b2.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/0f051374-60f2-4588-b95a-4d505ac217b5.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/436d0340-3058-45fc-98b4-f2c15228b565.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fa1841da-8327-4643-9a7d-81694d564d7e.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/ec45a0e0-1e0c-4b06-b689-bd45889118de.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/fb06ab09-bd09-4da1-bb9d-9ec5a9432afe.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/638bf5a1-633d-4563-a112-aae1e915baa7.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/87a1a1da-3688-4a1d-843d-94e88068bf07.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/f9f495d9-03fd-4deb-a3c0-ee4110804433.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <SwiperSlide className='img'>
                                                    <a href="#"><img src="https://a0.muscache.com/im/pictures/8b09cbca-da58-4f2a-8dde-66c9b9785cfa.jpg?im_w=720" /></a>
                                                </SwiperSlide>
                                                <div className="swiper-pagination"></div>
                                                <button type="button" className="swiper-button-prev"><span></span></button>
                                                <button type="button" className="swiper-button-next"><span></span></button>
                                            </Swiper>
                                        </div>
                                        <button type="button" className="btn btn-variety"><IcoHeart /><span className="blind">좋아요</span></button>
                                    </div>
                                    <div className="txt-wrap">
                                        <div className="tit-wrap">
                                            <span className="tit">Koh Phi Phi,태국</span>
                                            <span className="star">★ NEW</span>
                                        </div>
                                        <div className="detail">
                                            <p>4,296km 거리<br />1월 1일~6일</p>
                                        </div>
                                        <div className="price"><span>￦ 62,725</span><em> /박</em></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* // Container */}

            {/* <!-- Footer --> */}
            <footer className="footer">
                <div className="inner">
                    <button type="button" className="btn btn-map">
                        <span className="txt">지도 표시하기</span>
                        <div className="ico"><IcoMap /></div>
                    </button>
                    <div className="top-area">
                        <div className="policy-wrap">
                            <ul className="policy-list">
                                <li>© 2022 Airbnb, Inc</li>
                                <li><a href="#none">개인정보 처리방침</a></li>
                                <li><a href="#none">이용약관</a></li>
                                <li><a href="#none">사이트맵</a></li>
                                <li><a href="#none">한국의 변경된 환불 정책</a></li>
                                <li><a href="#none">회사 세부정보</a></li>
                            </ul>
                        </div>

                        <div className="stting-wrap">
                            <ul className="stting-list">
                                <li className="item01">
                                    <button type="button" className="btn">
                                        <span className="ico"><IcoLang /></span>
                                        <span className="txt">한국어 (KR)</span>
                                    </button>
                                </li>
                                <li className="item02">
                                    <button type="button" className="btn">
                                        <span className="ico">￦</span>
                                        <span className="txt">KRW</span>
                                    </button>
                                </li>
                                <li className="item03">
                                    <button type="button" className="btn">
                                        <span className="txt">지원 및 참고자료</span>
                                        <span className="ico"><IcoArr /></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                            
                    </div>
                    <div className="bottom-area">
                        <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
                    </div>
                </div>
            </footer>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default mainView