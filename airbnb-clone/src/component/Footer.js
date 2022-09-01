import { Link } from "react-router-dom";

import { ReactComponent as IcoMap } from "../assets/svg/ico-map.svg";
import { ReactComponent as IcoArr } from "../assets/svg/ico-arr.svg";
import { ReactComponent as IcoLang } from "../assets/svg/ico-lang.svg";

import { ReactComponent as BtnFacebook } from "../assets/svg/btn-facebook.svg";
import { ReactComponent as BtnTwitter } from "../assets/svg/btn-twitter.svg";
import { ReactComponent as BtnInstagram } from "../assets/svg/btn-instagram.svg";
import { ReactComponent as BtnNaver } from "../assets/svg/btn-naver.svg";
import { ReactComponent as BtnNaverPost } from "../assets/svg/btn-naver-post.svg";

const Footer = ({currentPage}) => {
    return(
        <footer className="footer">
            <div className="inner">
                {currentPage === "main" &&  
                    <button type="button" className="btn btn-map">
                        <span className="txt">지도 표시하기</span>
                        <div className="ico"><IcoMap /></div>
                    </button>
                }

                <div className="site-map-area">
                    <div className="item">
                        <p className="tit">에어비앤비 지원</p>
                        <ul>
                            <li><Link to="#">에어커버</Link></li>
                            <li><Link to="#">안전 정보</Link></li>
                            <li><Link to="#">장애인 지원</Link></li>
                            <li><Link to="#">예약 취소 옵션</Link></li>
                            <li><Link to="#">에어비앤비의 코로나19 대응 방안</Link></li>
                            <li><Link to="#">이웃 민원 신고</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="tit">커뮤니티</p>
                        <ul>
                            <li><Link to="#">Airbnb.org: 재난 구호 숙소</Link></li>
                            <li><Link to="#">아프간 난민 지원</Link></li>
                            <li><Link to="#">차별 철폐를 위한 노력</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="tit">호스팅</p>
                        <ul>
                            <li><Link to="#">호스팅 시작하기</Link></li>
                            <li><Link to="#">호스트를 위한 에어커버</Link></li>
                            <li><Link to="#">호스팅 자료 둘러보기</Link></li>
                            <li><Link to="#">커뮤니티 포럼 방문하기</Link></li>
                            <li><Link to="#">책임감 있는 호스팅</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="tit">에어비앤비</p>
                        <ul>
                            <li><Link to="#">뉴스룸</Link></li>
                            <li><Link to="#">새로운 기능에 대해 알아보기</Link></li>
                            <li><Link to="#">에어비앤비 공동창업자의 메시지</Link></li>
                            <li><Link to="#">채용정보</Link></li>
                            <li><Link to="#">투자자 정보</Link></li>
                        </ul>
                    </div>
                    <div className="item item-company-info">
                        <p className="tit">회사 상세정보</p>
                        <p className="txt">웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
                    </div>
                </div>

                <div className="top-area">
                    <div className="policy-wrap">
                        <ul className="policy-list">
                            <li>© 2022 Airbnb, Inc</li>
                            <li><Link to="#none">개인정보 처리방침</Link></li>
                            <li><Link to="#none">이용약관</Link></li>
                            <li><Link to="#none">사이트맵</Link></li>
                            <li><Link to="#none">한국의 변경된 환불 정책</Link></li>
                            <li><Link to="#none">회사 세부정보</Link></li>
                        </ul>
                    </div>

                    <div className="stting-wrap">
                        <div className="stting-list">
                            <div className="item item01">
                                <button type="button" className="btn">
                                    <span className="ico"><IcoLang /></span>
                                    <span className="txt">한국어 (KR)</span>
                                </button>
                            </div>
                            <div className="item item02">
                                <button type="button" className="btn">
                                    <span className="ico">￦</span>
                                    <span className="txt">KRW</span>
                                </button>
                            </div>
                            {currentPage === "main" &&  
                                <div className="item item03">
                                    <button type="button" className="btn">
                                        <span className="txt">지원 및 참고자료</span>
                                        <span className="ico"><IcoArr /></span>
                                    </button>
                                </div>
                            }
                        </div>
                        {currentPage !== "main" &&  
                            <ul className="sns-list">
                                <li className="item">
                                    <a target="_blank" href="https://www.facebook.com/AirbnbKorea"><BtnFacebook /></a>
                                </li>    
                                <li className="item">
                                    <a href="https://twitter.com/airbnb"><BtnTwitter /></a>
                                </li>
                                <li className="item">
                                    <a target="_blank" href="https://instagram.com/airbnb"><BtnInstagram /></a>
                                </li>
                                <li className="item">
                                    <a target="_blank" href="https://blog.naver.com/airbnbkr"><BtnNaver /></a>
                                </li>
                                <li className="item">
                                    <a target="_blank" href="https://post.naver.com/airbnb_kr"><BtnNaverPost /></a>
                                </li>
                            </ul>
                        }
                    </div>
                        
                </div>
                <div className="bottom-area">
                    <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer