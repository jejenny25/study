import { ReactComponent as AirbnbLogo } from "../assets/images/logo.svg";
import { ReactComponent as IcoSch } from "../assets/images/ico-sch.svg";
import { ReactComponent as IcoLang } from "../assets/images/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/images/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/images/ico-profile.svg";

const Header = ({currentPage}) =>{
    return(
        <header className="header-wrap" id={currentPage}>
            <div className="inner">
                <div className={currentPage === "reserve" ? 'header pad-l24' : 'header'}>
                    <h1 className="logo">
                        <a href="#" title="에어비앤비 메인으로 가기">
                            <AirbnbLogo />
                        </a>
                    </h1>

                    {currentPage === "main" ? 
                        <div className="sch-wrap">
                            <div className="sch-before-wrap">
                                <button type="button" className="btn btn-where"><span className="txt">어디든지</span></button>
                                <button type="button" className="btn btn-when"><span className="txt">언제든 일주일</span></button>
                                <button className="btn has-sch-ico">
                                    <span className="txt">게스트 추가</span>
                                    <span className="ico"><IcoSch /></span>
                                </button>
                            </div>

                            <div className="sch-after-wrap"></div>
                        </div>
                        : ''
                    }

                    {currentPage === "reserve" ? '' : 
                        <div className="personal-wrap">
                            <a href="#" className="btn"><span>호스트 되기</span></a>
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
            </div>

        </header>

    )
}

export default Header