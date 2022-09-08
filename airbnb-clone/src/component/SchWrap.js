import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isActiveState } from "../recoil/EtcInfo";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from "../component/DatePicker";

import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";
import { ReactComponent as IcoClock } from "../assets/svg/ico-clock2.svg";

import { useRecoilValue } from "recoil";
import { startDateState , endDateState, daysState} from "../recoil/ReserveInfo";

import moment from "moment";
import "moment/locale/ko"

export const SchWrap = () => {
    
    const [isActive, setIsActive] = useRecoilState(isActiveState);
    const [isTabActive1, setIsTabActive1] = useState(false);
    const [isTabActive2, setIsTabActive2] = useState(false);
    const [isTabActive3, setIsTabActive3] = useState(false);

    const onClick = (_sch_type) => {
        setIsActive(!isActive);
        moveTab(_sch_type);
    };

    const moveTab = (_sch_type) => {
        if(_sch_type === 1){
            setIsTabActive1(true);
            setIsTabActive2(false);
            setIsTabActive3(false);
        }else if(_sch_type === 2){
            setIsTabActive1(false);
            setIsTabActive2(true);
            setIsTabActive3(false);
        }else if(_sch_type === 3){
            setIsTabActive1(false);
            setIsTabActive2(false);
            setIsTabActive3(true);
        }
    };


    //날짜검색
    const startDate = useRecoilValue(startDateState);
    const endDate = useRecoilValue(endDateState);
    const days = useRecoilValue(daysState);

    const renderDate = (date) => {
        return date ? moment(date).format("MM월 DD일") : null;
    };


  return (
    <div className="sch-wrap">
        <div className="sch-before-wrap">
            <button type="button" className="btn btn-where" onClick={() => {onClick(1)}}><span className="txt">어디든지</span></button>
            <button type="button" className="btn btn-when" onClick={() => {onClick(2)}}><span className="txt">언제든 일주일</span></button>
            <button className="btn has-sch-ico" onClick={() => {onClick(3)}}>
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
                        <div className={`item item-place ${isTabActive1 ? 'is-active' : ''}`}>
                            <div className="input-wrap" onClick={() => {moveTab(1)}} >    
                                <label htmlFor="input01" className="txt-label">여행지</label>
                                <input type="input" name="" className="txt-input" placeholder="여행지 검색"/>
                            </div>

                            <div className="item-detail">
                                <div className="sch-history-wrap">
                                    <div className="tit-wrap">
                                        <p className="tit">최근 검색 내역</p>
                                    </div>
                                    <div className="history-wrap">
                                        <ul className="history-list">
                                            <li>
                                                <Link to="#">
                                                    <div className="ico-wrap"><span className="ico"><IcoClock /></span></div>
                                                    <div className="txt-wrap">
                                                        <p className="name">Lough, County Wexford · 숙소</p>
                                                        <p className="sch-type">언제든지</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sch-region-wrap">
                                    <div className="tit-wrap">
                                        <p className="tit">지역으로 검색하기</p>
                                    </div>
                                    <div className="region-list-wrap">
                                        <ul className="region-list">
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region01"/>
                                                    <label htmlFor="region01">
                                                        <span className="img"><img src="images/map_type01.jpg" alt="" /></span>
                                                        <span className="txt">유연한 검색</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region02"/>
                                                    <label htmlFor="region02">
                                                        <span className="img"><img src="images/map_type02.jpg" alt="" /></span>
                                                        <span className="txt">유럽</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region03"/>
                                                    <label htmlFor="region03">
                                                        <span className="img"><img src="images/map_type03.jpg" alt="" /></span>
                                                        <span className="txt">프랑스</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region04"/>
                                                    <label htmlFor="region04">
                                                        <span className="img"><img src="images/map_type04.jpg" alt="" /></span>
                                                        <span className="txt">동남아시아</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region05"/>
                                                    <label htmlFor="region05">
                                                        <span className="img"><img src="images/map_type05.jpg" alt="" /></span>
                                                        <span className="txt">이탈리아</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio-btn">
                                                    <input type="radio" name="region_sel" id="region06"/>
                                                    <label htmlFor="region06">
                                                        <span className="img"><img src="images/map_type06.jpg" alt="" /></span>
                                                        <span className="txt">미국</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 여행지 검색 끝 */}

                        {/* 체크인 체크아웃 시작 */}
                        <div className={`item item-date ${isTabActive2 ? 'is-active' : ''}`}>
                            <div className="input-wrap" onClick={() => {moveTab(2)}} > 
                                <span className="txt-label">체크인</span>
                                <p className={`txt-input ${startDate === "" ? '' : 'txt-date-on'}`}> {startDate === "" ? "날짜 입력" : renderDate(startDate)} </p>
                            </div>
                            <div className="input-wrap" onClick={() => {moveTab(2)}} > 
                                <span className="txt-label">체크인</span>
                                <p className={`txt-input ${endDate === "" ? '' : 'txt-date-on'}`}> {endDate === "" ? "날짜 입력" : renderDate(endDate)}</p>
                            </div>


                            <div className="item-detail">
                                <DatePicker />
                            </div>
                        </div>
                        {/* 체크인 체크아웃 끝 */}

                        {/* 게스트 시작 */}
                        <div className={`item item-guest ${isTabActive3 ? 'is-active' : ''}`}>
                            <div className="input-wrap"  onClick={() => {moveTab(3)}} > 
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
  )
}

export default SchWrap