import { ReactComponent as AirbnbLogo } from "../assets/images/logo.svg";
import { ReactComponent as IcoSch } from "../assets/images/ico-sch.svg";
import { ReactComponent as IcoLang } from "../assets/images/ico-lang.svg";
import { ReactComponent as IcoHamburger } from "../assets/images/ico-hamburger.svg";
import { ReactComponent as IcoProfile } from "../assets/images/ico-profile.svg";

const Header = (props) =>{
    return(
        <header className={props.isFixed ? 'header-wrap is-fixed' : 'header-wrap'} id={props.currentPage} >
            {props.isFixed}
            <div className="inner">
                <div className={props.currentPage === "reserve" ? 'header pad-l24' : 'header'}>
                    <h1 className="logo">
                        <a href="#" title="에어비앤비 메인으로 가기">
                            <AirbnbLogo />
                        </a>
                    </h1>

                    {props.currentPage === "reserve" &&  
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
                    }

                    {props.currentPage === "roomDetail" &&  
                        <div className="sch-wrap">
                            <div className="sch-before-wrap type-one-btn">
                                <button className="btn has-sch-ico">
                                    <span className="txt">검색 시작하기</span>
                                    <span className="ico"><IcoSch /></span>
                                </button>
                            </div>

                            <div className="sch-after-wrap"></div>
                        </div>
                    }

                    {props.currentPage === "reserve" ? '' : 
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
                {props.currentPage === "roomDetail" && 
                    <div className="sub-header">
                        <div className="quick-menu">
                            <ul className="quick-menu-list">
                                <li>
                                    <a href="#previewArea"><span>사진</span></a>
                                </li>
                                <li>
                                    <a href="#facilitiesArea"><span>편의시설</span></a>  
                                </li>
                                <li>
                                    <a href="#reviewArea"><span>후기</span></a>
                                </li>
                                <li>
                                    <a href="#locationArea"><span>위치</span></a>
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