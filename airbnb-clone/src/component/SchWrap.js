import React from 'react'
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isActiveState } from "../recoil/EtcInfo";

import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";

export const SchWrap = () => {
    
    const [isActive, setIsActive] = useRecoilState(isActiveState);
    const onClick = () => {
        setIsActive(!isActive)
    };

  return (
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
                                <label htmlFor="input01" className="txt-label">여행지</label>
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
  )
}

export default SchWrap