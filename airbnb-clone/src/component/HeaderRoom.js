import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import SubSchWrap from './SubSchWrap'
import SubNav from './SubNav'

import { ReactComponent as AirbnbLogo } from "../assets/svg/logo.svg";
import { ReactComponent as AirbnbLogoOnly } from "../assets/svg/logo_only.svg";
import { ReactComponent as IcoLang } from "../assets/svg/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/svg/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/svg/ico-profile.svg";


const HeaderRoom = React.forwardRef((props,ref) => {
     // 네비게이트
    const navigate = useNavigate();

    const goToReserve = () =>{
        navigate('/reserve');
    }
    return (
        <div className='inner'>
            <div className='header'>
                <h1 className="logo">
                    <Link to="/" title="에어비앤비 메인으로 가기">
                        <AirbnbLogo className="header-logo" />
                        <AirbnbLogoOnly className="heder-logo-only" />
                    </Link>
                </h1>

                <SubSchWrap />

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
                
                <SubNav />
            </div>

            <div className="sub-header">
                <div className="quick-menu">
                    <ul className="quick-menu-list">
                        <li>
                            <Link to="#" onClick={() => props.onMoveToElement("previewArea")}><span>사진</span></Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => props.onMoveToElement("facilitiesArea")}><span>편의시설</span></Link>  
                        </li>
                        <li>
                            <Link to="#" onClick={() => props.onMoveToElement("reviewArea")}><span>후기</span></Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => props.onMoveToElement("locationArea")}><span>위치</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="book-summury-wrap">
                    <div className="book-info">
                        <p className="price"> ₩130,338 <span className="day">/박</span></p>
                        <div className="review-info">
                            <span className="txt-medium">★ 4.6  · </span>
                            <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button type="button" className="btn btn-basic btn-red" onClick={goToReserve}><span>예약하기</span></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default HeaderRoom