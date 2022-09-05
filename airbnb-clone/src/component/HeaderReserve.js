import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as AirbnbLogo } from "../assets/svg/logo.svg";
import { ReactComponent as AirbnbLogoOnly } from "../assets/svg/logo_only.svg";

const HeaderReserve = () => {
    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록
        return () => {
            window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
        };
    }, []);

    const [isFixed, setFiexd] = useState(false);
    const handleScroll = ({}) => {
        const scrollY = window.scrollY;
        scrollY > 0 ? setFiexd(true):setFiexd(false)
    }


  return (
    <div>
        <div className={`header header-reserve ${isFixed ? 'is-fixed' : ''}`}>
            <h1 className="logo">
                <Link to="/" title="에어비앤비 메인으로 가기">
                    <AirbnbLogo className="header-logo" />
                    <AirbnbLogoOnly className="heder-logo-only" />
                </Link>
            </h1>
            <div className="reserve-header">
                <Link to="#" className='btn btn-back'><span className="blind">이전으로 가기</span></Link>
                <h2 className='page-tit'>예약요청</h2>
            </div>
        </div>
    </div>
  )
}
export default HeaderReserve