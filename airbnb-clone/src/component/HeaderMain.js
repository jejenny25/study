import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import ShcWrap from './SchWrap'
import MoShcWrap from './MoSchWrap'

import { ReactComponent as AirbnbLogo } from "../assets/svg/logo.svg";
import { ReactComponent as AirbnbLogoOnly } from "../assets/svg/logo_only.svg";
import { ReactComponent as IcoLang } from "../assets/svg/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/svg/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/svg/ico-profile.svg";

const MainHeader = () => {
  return (
    <div className='inner'>
        <div className='header'>
            <h1 className="logo">
                <Link to="/" title="에어비앤비 메인으로 가기">
                    <AirbnbLogo className="header-logo" />
                    <AirbnbLogoOnly className="heder-logo-only" />
                </Link>
            </h1>

            <ShcWrap/>
            <MoShcWrap/>
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
            
        </div>
    </div>
  )
}

export default MainHeader