import React from 'react'
import { Link } from 'react-router-dom'

import { useRecoilValue } from "recoil";
import { navMapState, navState } from "../recoil/EtcInfo";

import { ReactComponent as IcoMap } from "../assets/svg/ico-map.svg";
import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";
import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart2.svg";
import { ReactComponent as Icologo } from "../assets/svg/logo-only2.svg";
import { ReactComponent as IcoMsg } from "../assets/svg/ico-msg.svg";
import { ReactComponent as IcoProfile } from "../assets/svg/ico-profile2.svg";

const NavBottom = () => {
    const napMapActive = useRecoilValue(navMapState);
    const navActive = useRecoilValue(navState);
  return (
    <div className='nav-bottom-wrap'>
        <div className={`btn-map-wrap ${napMapActive ? "is-active" : ""} ${navActive ? "" : "nav-active"}`}>
            <button type="button" className={`btn btn-map ${napMapActive ? "is-active" : ""}`}>
                <span className="txt">지도</span>
                <div className="ico"><IcoMap /></div>
            </button>
        </div>
        <div className={`nav-bottom ${navActive ? "is-active" : ""}`}>
            <ul className='nav-list'>
                <li className='item item01 is-active'>
                    <Link to="#">
                        <div className="ico"><IcoSch /></div>
                        <div className="txt">둘러보기</div>
                    </Link>
                </li>
                <li className='item item02'>
                    <Link to="#">
                        <div className="ico"><IcoHeart /></div>
                        <div className="txt">위시리스트</div>
                    </Link>
                </li>
                <li className='item item03'>
                    <Link to="#">
                        <div className="ico"><Icologo /></div>
                        <div className="txt">여행</div>
                    </Link>
                </li>
                <li className='item item04'>
                    <Link to="#">
                        <div className="ico"><IcoMsg /></div>
                        <div className="txt">메시지</div>
                    </Link>
                </li>
                <li className='item item05'>
                    <Link to="#">
                        <div className="ico"><IcoProfile /></div>
                        <div className="txt">프로필</div>
                    </Link>
                </li>
            </ul>
        </div>
            
    </div>
  )
}

export default NavBottom