import React, { useState, useEffect, useRef } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import RoomPictures from '../component/RoomPictures';
import MoRoomPictures from '../component/MoRoomPictures'
import ReviewList from '../component/ReviewList';
import MoReviewList from '../component/MoReviewList';
import Roomtype from '../component/Roomtype';
import BookBox from '../component/BookBox';
import AwareInfo from '../component/AwareInfo'
import MoAwareInfo from '../component/MoAwareInfo'
import MoReserveFixed from '../component/MoReserveFixed'

//달력
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from "../component/DatePicker";
import { useRecoilValue } from "recoil";
import { startDateState , endDateState, daysState} from "../recoil/ReserveInfo";
import moment from "moment";
import "moment/locale/ko"

// 지도
import Map from "../component/Map";

// 아이콘 목록
import { ReactComponent as BtnTranslate } from "../assets/svg/btn-translate.svg";
import { ReactComponent as IcoShare } from "../assets/svg/ico-share.svg";
import { ReactComponent as IcoSave } from "../assets/svg/ico-save.svg";

import { ReactComponent as IcoHostMark } from "../assets/svg/ico-host-mark.svg";
import { ReactComponent as IcoSuperHost } from "../assets/svg/ico-superhost.svg";
import { ReactComponent as IcoLocation } from "../assets/svg/ico-location.svg";
import { ReactComponent as IcoCheckin } from "../assets/svg/ico-checkin.svg";
import { ReactComponent as IcoBay } from "../assets/svg/ico-bay.svg";
import { ReactComponent as IcoGarden } from "../assets/svg/ico-garden.svg";
import { ReactComponent as IcoSea } from "../assets/svg/ico-sea.svg";
import { ReactComponent as IcoKitchen } from "../assets/svg/ico-kitchen.svg";
import { ReactComponent as IcoWifi } from "../assets/svg/ico-wifi.svg";
import { ReactComponent as IcoCarbon } from "../assets/svg/ico-carbon.svg";
import { ReactComponent as IcoKeyboard } from "../assets/svg/ico-keyboard.svg";
import { ReactComponent as IcoCertify } from "../assets/svg/ico-certify.svg";
import { ReactComponent as IcoSecurity } from "../assets/svg/ico-security.svg";


const RoomDetail = () => {

    const [mQuery, setMQuery] = useState(
        window.innerWidth < 760 ? true : false
    );
    
    const screenChange = (event) => {
        const matches = event.matches;
        setMQuery(matches);
    }

    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록

        let mql = window.matchMedia("screen and (max-width:760px)");
        mql.addEventListener("change", screenChange);
        return () => {
            window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
            mql.removeEventListener("change", screenChange)
        };
    }, []);

    const refRoomDetail = useRef(); // 설명시작되는 곳
    const refBookArea = useRef();
    const refBtnReserve = useRef();
    const [isFixed,setFixed] = useState(false);
    const [isReservBtn,setReserveBtn] = useState(false); 

    const handleScroll = ({}) => {
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

    const previewArea = useRef(); // 사진
    const facilitiesArea = useRef(); //편의시설
    const reviewArea = useRef(); //후기
    const locationArea = useRef(); //위치
    
    const onMoveToElement = (wchichArea) => {
        let y = 0;
        if(wchichArea === "previewArea"){
            y = previewArea.current.offsetTop;
        } else if(wchichArea === "facilitiesArea"){
            y = (facilitiesArea.current.offsetTop) - 80;
        } else if(wchichArea === "reviewArea"){
            y = (reviewArea.current.offsetTop) - 80;
        } else if(wchichArea === "locationArea"){
            y = (locationArea.current.offsetTop) - 80;
        }
        console.log("y = " + y);
        window.scrollTo({top: y, behavior: 'smooth'});
    };


    // 날짜 관련
    const dateRef = useRef();
    const startDate = useRecoilValue(startDateState);
    const endDate = useRecoilValue(endDateState);
    const days = useRecoilValue(daysState);

    const renderDate = (date) => {
        return date ? moment(date).format("YYYY년 MM월 DD일") : null;
    };

    return(
        <div className="wrapper sub-page room-detail">
            <div className={`header-wrapper ${isFixed ? 'is-fixed' : ''} ${isReservBtn ? 'is-reserve-btn' : ''}`} // 얘를 변경 해서 메뉴바를 붙여줌 
            >
                <Header currentPage={"roomDetail"} onMoveToElement={onMoveToElement} />
            </div>
            {/* Container */}
            <main role="main" className="container containner-roomdetail">

                <div className="inner">
                    <div className="content">
                        
                        <div className="preview-area" ref={previewArea}>
                            {mQuery ? <MoRoomPictures /> :''}
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
                            {mQuery ? '' :<RoomPictures />}
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
                                        <Roomtype />
                                    </div>
                                </div>

                                <div className="explain-item facilities-area" ref={facilitiesArea}>
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
                                <div className="tit-wrap">
                                    <p className="tit">{days > 0 ? 'El Nido에서 '+ days +'박' : '체크인 날짜를 선택해주세요.'}</p>
                                    <p className="txt">
                                        {startDate != null && endDate != null
                                        ? renderDate(startDate) + " - " + renderDate(endDate)
                                        : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
                                    </p>
                                </div>

                                    <DatePicker ref={dateRef} startDate={null} endDate={null}/>

                                    <div className="btn-wrap align-both-end">
                                        <button type="button" className="btn btn-hover ico-only"><span><IcoKeyboard /></span></button>
                                        <button type="button" className="btn btn-txt-link btn-hover" onClick={() => {dateRef.current.setDates({ startDate: null, endDate: null })} }><span className="txt txt-medium">날짜 지우기</span></button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="book-area" id="bookArea" ref={refBookArea}>
                                <BookBox ref={refBtnReserve}/>
                            </div>
                        </div>

                        <div className="explain-item review-area" ref={reviewArea}>
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
                                {mQuery ? <MoReviewList /> : <ReviewList />}
                            </div>

                            <div className="btn-wrap">
                                <button type="button" className="btn btn-basic-border"><span>후기 128개 모두 보기</span></button>
                            </div>
                        </div>

                        <div className="explain-item location-area" ref={locationArea}>
                            <div className="tit-wrap">
                                <p className="tit">호스팅 지역</p>
                            </div>
                            <div className="map-wrap">
                                <Map />
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
                            {mQuery ? <MoAwareInfo /> : <AwareInfo />}
                        </div>
                    </div>
                </div>
            </main>
            {/* // Container */}

            {mQuery ? <MoReserveFixed /> : ''}

            {/* <!-- Footer --> */}
            <Footer currentPage={"roomDetail"}/>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default RoomDetail