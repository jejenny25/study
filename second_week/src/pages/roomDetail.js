import React, { useState, useEffect, useRef } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

//스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

//달력
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from "../component/DatePicker";

// 지도
import Map from "../component/Map";

// 아이콘 목록
import { ReactComponent as BtnTranslate } from "../assets/images/btn-translate.svg";
import { ReactComponent as IcoShare } from "../assets/images/ico-share.svg";
import { ReactComponent as IcoSave } from "../assets/images/ico-save.svg";
import { ReactComponent as IcoPicAll } from "../assets/images/ico-picall.svg";
import { ReactComponent as IcoHostMark } from "../assets/images/ico-host-mark.svg";
import { ReactComponent as IcoSuperHost } from "../assets/images/ico-superhost.svg";
import { ReactComponent as IcoLocation } from "../assets/images/ico-location.svg";
import { ReactComponent as IcoCheckin } from "../assets/images/ico-checkin.svg";
import { ReactComponent as IcoBedKing } from "../assets/images/ico-bed-king.svg";
import { ReactComponent as IcoBedQueen } from "../assets/images/ico-bed-queen.svg";
import { ReactComponent as IcoBay } from "../assets/images/ico-bay.svg";
import { ReactComponent as IcoGarden } from "../assets/images/ico-garden.svg";
import { ReactComponent as IcoSea } from "../assets/images/ico-sea.svg";
import { ReactComponent as IcoKitchen } from "../assets/images/ico-kitchen.svg";
import { ReactComponent as IcoWifi } from "../assets/images/ico-wifi.svg";
import { ReactComponent as IcoCarbon } from "../assets/images/ico-carbon.svg";
import { ReactComponent as IcoKeyboard } from "../assets/images/ico-keyboard.svg";
import { ReactComponent as IcoFlag } from "../assets/images/ico-flag.svg";
import { ReactComponent as IcoCertify } from "../assets/images/ico-certify.svg";
import { ReactComponent as IcoSecurity } from "../assets/images/ico-security.svg";
import { ReactComponent as IcoClock } from "../assets/images/ico-clock.svg";
import { ReactComponent as IcoPet } from "../assets/images/ico-pet.svg";


const RoomDetail = () => {
    // 스와이퍼 관련
    Swipercore.use([Navigation, Pagination]);

    const room_settings = {
        slidesPerView:3,
        slidesPerGroup : 1,
        spaceBetween: 16, 
        touchRatio: 0,//드래그 금지
        speed : 1200,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
    };

    // 스크롤 관련
    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록
            return () => {
        window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
    };
    }, []);
    
    const refRoomDetail = useRef();
    const refBtnReserve = useRef();
    const refBookArea = useRef();
    //const btn_offset = refBtnReserve.current.offsetTop;
    const [isFixed,setFixed] = useState(false);
    const [isReservBtn,setReserveBtn] = useState(false); 
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if(refRoomDetail.current) {
            const room_detail_offset = refRoomDetail.current.offsetTop;

            if (scrollY >= room_detail_offset) {
                setFixed(current => {
                    return true;
                });
            } else {		      
                setFixed(current => {
                    return false;
                });
            }
        }

        if(refBtnReserve.current && refBookArea.current) {
            const book_area_h = refBookArea.current.clientHeight;
            const btn_offset = refBtnReserve.current.offsetTop;
            console.log(" book_area_h : " + book_area_h)
            console.log(" btn_offset : " + btn_offset)
            if (scrollY >= (book_area_h + btn_offset) + 100 ) {
                setReserveBtn(current => {
                    return true;
                });
            } else {		      
                setReserveBtn(current => {
                    return false;
                });
            }
        }
    }

    return(
        <div className="wrapper sub-page">
            <div className={`header-wrapper ${isFixed ? 'is-fixed' : ''} ${isReservBtn ? 'is-reserve-btn' : ''}`} // 얘를 변경 해서 메뉴바를 붙여줌 
            >
                <Header currentPage={"roomDetail"} />
            </div>
            {/* Container */}
            <main role="main" className="container containner-roomdetail">

                <div className="inner">
                    <div className="content">
                        
                        <div className="preview-area" id="previewArea">
                            <div className="tit-area">
                                <div className="tit-wrap">
                                    <h2 className="tit">
                                        <button type="button" className="_131n1yh"><BtnTranslate /></button>
                                        <p>특별한 프라이빗 아일랜드 리조트: 플로럴 아일랜드</p>
                                    </h2>
                                </div>
                                <div className="sub-txt-wrap">
                                    <ul className="info-txt">
                                        <li className="txt-medium">★ 4.96</li>
                                        <li><button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button></li>
                                        <li><span className="ico">🎖</span><span className="txt">슈퍼호스트</span></li>
                                        <li><button type="button" className="btn btn-txt-link"><span className="txt txt-medium">El Nido, MIMAROPA, 필리핀</span></button></li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link btn-hover">
                                            <span className="ico"><IcoShare /></span>
                                            <span className="txt txt-medium">공유하기</span>
                                        </button>
                                        <button type="button" className="btn btn-txt-link btn-hover">
                                            <span className="ico"><IcoSave /></span>
                                            <span className="txt txt-medium">저장</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="picture-area">
                                <div className="pictures-wrap">
                                    <div className="item">
                                        <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720" /></button>
                                    </div>
                                    <div className="item">
                                        <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></button>
                                    </div>
                                    <div className="item">
                                        <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></button>
                                    </div>
                                    <div className="item">
                                        <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></button>
                                    </div>
                                    <div className="item">
                                        <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></button>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-basic-border type-small">
                                    <span className="ico"><IcoPicAll /></span>
                                    <span className="txt">사진 모두 보기</span>
                                </button>
                            </div>
                        </div>

                        <div className="room-detail-area" id="roomDetailArea" ref={refRoomDetail}> 
                            <div className="room-explain-area">
                                <div className="explain-item room-name-wrap">
                                    <div className="tit-wrap">
                                        <p className="tit">Philipe님이 호스팅하는 섬</p>
                                        <ul className="info-list">
                                            <li>최대 인원 16명</li>
                                            <li>침실 8개</li>
                                            <li>침대 8개</li>
                                            <li>욕실 9개</li>
                                        </ul>
                                    </div>
                                    <div className="host-pic-wrap">
                                        <div className="host-pic"><img className="_9ofhsl" aria-hidden="true" alt="Philipe님은 슈퍼호스트입니다. Philipe님에 대해 자세히 알아보세요." decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/users/26650346/profile_pic/1422151004/original.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/users/26650346/profile_pic/1422151004/original.jpg?im_w=240" /></div>
                                        <div className="ico"><IcoHostMark /></div>
                                    </div>
                                </div>
                                <div className="explain-item summury-wrap">
                                    <ul className="summury-list">
                                        <li>
                                            <div className="ico"><IcoSuperHost /></div>
                                            <div className="txt-wrap">
                                                <p className="tit">Philipe님은 슈퍼호스트입니다</p>
                                                <p className="txt">슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ico"><IcoLocation /></div>
                                            <div className="txt-wrap">
                                                <p className="tit">훌륭한 숙소 위치</p>
                                                <p className="txt">최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ico"><IcoCheckin /></div>
                                            <div className="txt-wrap">
                                                <p className="tit">순조로운 체크인 과정</p>
                                                <p className="txt">최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="explain-item air-cover-wrap">
                                    <div className="air-tit"><img src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg" alt="에어커버" /></div>
                                    <div className="desc-wrap">
                                        <p className="desc">모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</p>
                                    </div>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link"><span className="txt f16 txt-medium">더 알아보기</span></button>
                                    </div>
                                </div>

                                <div className="explain-item room-detail-wrap">
                                    <div className="translate-wrap">
                                        <button type="button" className="btn">
                                            <div className="ico"><BtnTranslate /></div>
                                        </button>
                                        <p className="f16">일부 정보는 자동 번역되었습니다.</p>
                                        <button type="button" className="btn btn-txt-link"><span className="txt f16 txt-medium">원문보기</span></button>
                                    </div>
                                    <div className="desc-wrap">
                                        <p className="desc">최대 24명까지 수용할 수 있습니다. 결혼식 및 이벤트 수락</p>
                                    </div>

                                    <div className="desc-wrap">
                                        <p className="desc">
                                            포함 사항<br />
                                            • 특별하고 프라이빗한 섬 휴양지<br />
                                            • 모든 식사 (필리핀 요리)<br />
                                            • 커피/차/물
                                        </p>
                                    </div>

                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                    </div>
                                </div>

                                <div className="explain-item room-type-wrap">
                                    <div className="tit-wrap">
                                        <p className="tit">숙박 장소</p>
                                    </div>

                                    <div className="swiper-room-type-wrap">
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
                                    </div>
                                </div>

                                <div className="explain-item facilities-area" id="facilitiesArea">
                                    <div className="tit-wrap">
                                        <p className="tit">숙소 편의시설</p>
                                    </div>
                                    <div className="facilities-list-wrap">
                                        <ul className="facilities-list">
                                            <li>
                                                <div className="ico"><IcoBay /></div>
                                                <p className="txt">만 전망</p>
                                            </li>
                                            <li>
                                                <div className="ico"><IcoGarden /></div>
                                                <p className="txt">정원 전망</p>
                                            </li>
                                            <li>
                                                <div className="ico"><IcoSea /></div>
                                                <p className="txt">해변과 인접 - 해변</p>
                                            </li>
                                            <li>
                                                <div className="ico"><IcoKitchen /></div>
                                                <p className="txt">주방</p>
                                            </li>
                                            <li>
                                                <div className="ico"><IcoWifi /></div>
                                                <p className="txt">무선 인터넷</p>
                                            </li>
                                            <li>
                                                <div className="ico"><IcoCarbon /></div>
                                                <p className="txt">일산화탄소 경보기</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-basic-border"><span className="txt">편의시설 49개 모두 보기</span></button>
                                    </div>
                                </div>

                                
                                <div className="explain-item calendar-area">

                                    <DatePicker />

                                    <div className="btn-wrap align-both-end">
                                        <button type="button" className="btn btn-hover ico-only"><span><IcoKeyboard /></span></button>
                                        <button type="button" className="btn btn-txt-link btn-hover"><span className="txt txt-medium">날짜 지우기</span></button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="book-area" id="bookArea" ref={refBookArea}>
                                <div className="book-box-wrap">
                                    <div className="book-box">
                                        <div className="top-area">
                                            <div className="price-info">
                                                <p className="price">₩789,844 <span className="day">/박</span></p>
                                            </div>
                                            <div className="review-info">
                                                <span className="txt-medium">★ 4.6  · </span>
                                                <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button>
                                            </div>
                                        </div>

                                        <div className="checkin-box">
                                            <div className="top-wrap">
                                                <button type="button" className="btn"><em>체크인</em><span>2022. 8. 20</span></button>
                                                <button type="button" className="btn"><em>체크아웃</em><span>2022. 8. 27</span></button>
                                            </div>
                                            <div className="bot-wrap">
                                                <button type="button" className="btn"><em>인원</em><span>게스트 1명</span></button>
                                            </div>
                                        </div>

                                        <div className="btn-wrap" ref={refBtnReserve}>
                                            <button type="button" className="btn w-100 btn-basic btn-red"><span>예약하기</span></button>
                                        </div>

                                        <div className="explain"><p>예약 확정 전에는 요금이 청구되지 않습니다.</p></div>

                                        <div className="price-items-wrap" >
                                            <ul className="price-items">
                                                <li>
                                                    <button type="button" className="btn btn-txt-link"><span className="txt">₩779,097 x 7박</span></button>
                                                    <p className="txt-basic">₩5,453,682</p>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-txt-link"><span className="txt">주간 할인</span></button>
                                                    <p className="txt-medium txt-green">- ₩272,682</p>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-txt-link"><span className="txt">청소비</span></button>
                                                    <p className="txt-basic">₩117,536</p>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-txt-link"><span className="txt">서비스 수수료</span></button>
                                                    <p className="txt-basic">₩748,032</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tot-wrap">
                                            <span className="txt-medium f16">총 합계</span>
                                            <span className="txt-medium f16">₩6,046,563</span>
                                        </div>
                                        <button type="button" className="btn btn-txt-link btn-report">
                                            <span className="ico"><IcoFlag /></span>
                                            <span className="txt txt-medium">숙소 신고하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="explain-item review-area" id="reviewArea">
                            <div className="tit-wrap">
                                <p className="tit">★ 4.96 · 후기 128개</p>
                            </div>

                            <div className="score-wrap">
                                <ul className="score-list">
                                    <li className="item">
                                        <div className="txt">청결도</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'100%'}}></span>
                                            </div>
                                            <span className="num">5.0</span>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="txt">정확성</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'100%'}}></span>
                                            </div>
                                            <span className="num">5.0</span>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="txt">의사소통</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'100%'}}></span>
                                            </div>
                                            <span className="num">5.0</span>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="txt">위치</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'100%'}}></span>
                                            </div>
                                            <span className="num">5.0</span>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="txt">체크인</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'100%'}}></span>
                                            </div>
                                            <span className="num">5.0</span>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="txt">가격 대비 만족도</div>
                                        <div className="score">
                                            <div className="bar-wrap">
                                                <span className="bar" style={{width:'85%'}}></span>
                                            </div>
                                            <span className="num">4.5</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="review-txt-wrap">
                                <ul className="review-list">
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviewer-info">
                                            <div className="profile-img"><img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" /></div>
                                            <div className="txt-wrap">
                                                <p className="name txt-medium">Martin</p>
                                                <span className="date">2022년 7월</span>
                                            </div>
                                        </div>
                                        <div className="review-cont">
                                            <p className="desc">꽃섬에서의 휴가는 기대를 훨씬 뛰어넘었습니다. 훌륭하고 친절하며 항상 이용할 수 있는 서비스와 지원이 우리의 꿈을 현실로 만들었습니다. 이 섬은 표준이 아닌 다른 모든 것을 갖추고 있습니다. 콘셉트와 숙소가 환경과 통합되어 있다는 점이 인상적입니다. 필립은 모호한 프로젝트를 진행합니다. 가장 친한 친구들과 함께 향후 몇 년간의 진행 상황을 확인할 예정입니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-wrap">
                                <button type="button" className="btn btn-basic-border"><span>후기 128개 모두 보기</span></button>
                            </div>
                        </div>

                        <div className="explain-item location-area"  id="locationArea">
                            <div className="tit-wrap">
                                <p className="tit">호스팅 지역</p>
                            </div>
                            <div className="map-wrap">
                                <Map />
                                {/* <div id="googleMap" style={{width:'100%', height:'480px'}}></div> */}
                            </div>

                            <div className="desc-wrap">
                                <p className="desc txt-medium">El Nido, MIMAROPA, 필리핀</p>
                                <p className="desc">우리는 지역 어부들과 탈라카넨 섬을 공유하고 있습니다. 작은 어촌마을은 언제 어디서나 방문할 수 있는 제주도의 서쪽에 위치해 있습니다!</p>
                            </div>
                            <div className="btn-wrap">
                                <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                            </div>
                        </div>

                        <div className="explain-item host-info-area">
                            <div className="host-profile-wrap">
                                <a href="#" className="go-profile">
                                    <div className="host-profile-pic"><img src="https://a0.muscache.com/im/users/26650346/profile_pic/1422151004/original.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/users/26650346/profile_pic/1422151004/original.jpg?im_w=240" /></div>
                                    <div className="ico"><IcoHostMark /></div>
                                </a>
                                <div className="txt-wrap">
                                    <p className="tit">호스트: Philipe님</p>
                                    <p className="txt">회원 가입일: 2015년 1월</p>
                                </div>
                            </div>
                            <div className="host-detail">
                                <div className="item left-item">
                                    <div className="medal-wrap">
                                        <ul className="host-medal-list">
                                            <li>
                                                <span className="ico">★</span>
                                                <span className="txt">후기 128개</span>
                                            </li>
                                            <li>
                                                <span className="ico"><IcoCertify /></span>
                                                <span className="txt">본인 인증 완료</span>
                                            </li>
                                            <li>
                                                <span className="ico">🎖</span>
                                                <span className="txt">슈퍼호스트</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="desc-wrap">
                                        <p className="desc txt-medium">숙박 중 게스트와의 교류</p>
                                        <p className="desc">이 지역과 팔라완 섬의 나머지 지역에서 이용할 수 있는 모든 액티비티와 환승에 대한 팁과 조언을 제공하기 위해 저희 가족 또는 직원 중 한 명이 언제든지 제공됩니다. 고객님의 필요에 따라 섬에서 언제든지 예약할 수 있습니다.</p>
                                    </div>
                                    <div className="desc-wrap">
                                        <p className="desc txt-medium">Philipe님은 슈퍼호스트입니다.</p>
                                        <p className="desc">슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</p>
                                    </div>
                                </div>
                                <div className="item right-item">
                                    <div className="desc-wrap">
                                        <p className="desc">응답률: 100%</p>
                                        <p className="desc">응답 시간: 1시간 이내</p>
                                    </div>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-basic-border"><span>호스트에게 연락하기</span></button>
                                    </div>
                                    <div className="warn-wrap">
                                        <div className="ico"><IcoSecurity /></div>
                                        <p className="txt">안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</p>
                                    </div>
                                </div>
                            </div>
                                
                        </div>

                        <div className="explain-item aware-info-area">
                            <div className="tit-wrap">
                                <p className="tit">알아두어야 할 사항</p>
                            </div>
                            
                            <div className="aware-list-wrap">
                                <div className="aware-item">
                                    <p className="tit">숙소 이용 규칙</p>
                                    <ul className="aware-list">
                                        <li>
                                            <div className="ico"><IcoClock /></div>
                                            <p className="txt">체크인: 오후 2:00 이후</p>
                                        </li>
                                        <li>
                                            <div className="ico"><IcoClock /></div>
                                            <p className="txt">체크아웃 시간: 오전 10:00</p>
                                        </li>
                                        <li>
                                            <div className="ico"><IcoPet /></div>
                                            <p className="txt">반려동물 동반 가능</p>
                                        </li>
                                        <li>
                                            <div className="ico"><span>🚬</span></div>
                                            <p className="txt">흡연 가능</p>
                                        </li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                    </div>
                                </div>
                                <div className="aware-item">
                                    <p className="tit">건강과 안전</p>
                                    <ul className="aware-list">
                                        <li>
                                            <div className="ico"><span>✨</span></div>
                                            <p className="txt">에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</p>
                                        </li>
                                        <li>
                                            <div className="ico ico-exclamation"><span>!</span></div>
                                            <p className="txt">일산화탄소 경보기 없음</p>
                                        </li>
                                        <li>
                                            <div className="ico ico-exclamation"><span>!</span></div>
                                            <p className="txt">보안 카메라/녹화 장치<button type="button" className="btn btn-txt-link"><span className="txt">더 보기</span></button></p>
                                        </li>
                                        <li>
                                            <div className="ico ico-exclamation"><span>!</span></div>
                                            <p className="txt">근처에 호수, 강, 바다 등이 있음</p>
                                        </li>
                                        <li>
                                            <div className="ico ico-exclamation"><span>!</span></div>
                                            <p className="txt">난간이나 보호 장치가 없는 높은 곳</p>
                                        </li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                    </div>
                                </div>
                                <div className="aware-item">
                                    <p className="tit">환불 정책</p>
                                    <ul className="aware-list">
                                        <li>
                                            <p className="txt">8월 20일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다.</p>
                                        </li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* // Container */}

            {/* <!-- Footer --> */}
            <Footer currentPage={"roomDetail"}/>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default RoomDetail