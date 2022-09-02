import React from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as AirbnbLogo } from "../assets/svg/logo.svg";
import { ReactComponent as AirbnbLogoOnly } from "../assets/svg/logo_only.svg";

const HeaderReserve = () => {
  return (
    <div>
        <div className='header pad-l24'>
            <h1 className="logo">
                <Link to="/" title="에어비앤비 메인으로 가기">
                    <AirbnbLogo className="header-logo" />
                    <AirbnbLogoOnly className="heder-logo-only" />
                </Link>
            </h1>
        </div>
    </div>
  )
}

export default HeaderReserve