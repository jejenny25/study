import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as AirbnbLogo } from "../assets/svg/logo.svg";
import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";
import { ReactComponent as IcoLang } from "../assets/svg/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/svg/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/svg/ico-profile.svg";

const Header = (props) =>{

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return(
        
        <header className={`header-wrap ${isActive ? "is-active" : ""}`} id={props.currentPage} >
            <div className={props.currentPage != "reserve" ? 'inner' : ''}>
                <div className={props.currentPage === "reserve" ? 'header pad-l24' : 'header'}>
                    <h1 className="logo">
                        <Link to="/" title="에어비앤비 메인으로 가기">
                            <AirbnbLogo />
                        </Link>
                    </h1>

                    {props.currentPage === "main" &&  
                        <div className="sch-wrap">
                            <div className="sch-before-wrap">
                                <button type="button" className="btn btn-where" onClick={onClick}><span className="txt">어디든지</span></button>
                                <button type="button" className="btn btn-when" onClick={onClick}><span className="txt">언제든 일주일</span></button>
                                <button className="btn has-sch-ico" onClick={onClick}>
                                    <span className="txt">게스트 추가</span>
                                    <p><span className="ico"><IcoSch /></span></p>
                                </button>
                            </div>

                            <div className="sch-after-wrap">
                                <div className="after-inner">
                                    <div className="sch-type-wrap">
                                        <ul className="sch-type-list">
                                            <li>
                                                <button type="button" className="btn is-active"><span>숙소</span></button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn"><span>체험</span></button>
                                            </li>
                                            <li>
                                                <Link to="#" className="btn"><span>온라인 체험</span></Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="sch-detail-wrap">
                                        <div className="sch-tab-wrap">
                                            {/* 여행지 검색 시작 */}
                                            <div className="item item-place is-active">
                                                <div className="input-wrap">    
                                                    <label for="input01" className="txt-label">여행지</label>
                                                    <input type="input" name="" value="" className="txt-input" placeholder="여행지 검색"/>
                                                </div>

                                                <div className="item-detail">
                                                    최근검색내역, 지역으로 검색하기
                                                </div>
                                            </div>
                                            {/* 여행지 검색 끝 */}

                                            {/* 체크인 체크아웃 시작 */}
                                            <div className="item item-date">
                                                <div className="input-wrap"> 
                                                    <span className="txt-label">체크인</span>
                                                    <p className="txt-input">날짜 입력</p>
                                                </div>
                                                <div className="input-wrap"> 
                                                    <span className="txt-label">체크인</span>
                                                    <p className="txt-input">날짜 입력</p>
                                                </div>


                                                <div className="item-detail">
                                                    날짜 선택, 유연한일정
                                                </div>
                                            </div>
                                            {/* 체크인 체크아웃 끝 */}

                                            {/* 게스트 시작 */}
                                            <div className="item item-guest">
                                                <div className="input-wrap"> 
                                                    <span className="txt-label">여행자</span>
                                                    <p className="txt-input">게스트 추가</p>
                                                </div>
                                                <div className="btn-wrap">
                                                    <button type="button" className="btn-sch"><span className="ico"><IcoSch /></span><span className="txt">검색</span></button>
                                                </div>

                                                <div className="item-detail">
                                                    게스트 명수
                                                </div>
                                            </div>
                                            {/* 게스트 끝 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {props.currentPage === "roomDetail" &&  
                        <div className="sch-wrap">
                            <div className="sch-before-wrap type-one-btn">
                                <button className="btn has-sch-ico">
                                    <span className="txt">검색 시작하기</span>
                                    <p><span className="ico"><IcoSch /></span></p>
                                </button>
                            </div>

                            <div className="sch-after-wrap">
                            </div>
                        </div>
                    }

                    {props.currentPage === "reserve" ? '' : 
                        <div className="personal-wrap">
                            <Link to="#" className="btn"><span>호스트 되기</span></Link>
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
                    }
                </div>
                {props.currentPage === "roomDetail" && 
                    <div className="sub-header">
                        <div className="quick-menu">
                            <ul className="quick-menu-list">
                                <li>
                                    <Link to="#previewArea"><span>사진</span></Link>
                                </li>
                                <li>
                                    <Link to="#facilitiesArea"><span>편의시설</span></Link>  
                                </li>
                                <li>
                                    <Link to="#reviewArea"><span>후기</span></Link>
                                </li>
                                <li>
                                    <Link to="#locationArea"><span>위치</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="book-summury-wrap">
                            <div className="book-info">
                                <p className="price"> ₩740,142 <span className="day">/박</span></p>
                                <div className="review-info">
                                    <span className="txt-medium">★ 4.6  · </span>
                                    <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button>
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <button type="button" className="btn btn-basic btn-red"><span>예약하기</span></button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </header>

    )
}

export default Header