import { ReactComponent as IcoMap } from "../assets/images/ico-map.svg";
import { ReactComponent as IcoArr } from "../assets/images/ico-arr.svg";
import { ReactComponent as IcoLang } from "../assets/images/ico-lang.svg";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="inner">
                <button type="button" className="btn btn-map">
                    <span className="txt">지도 표시하기</span>
                    <div className="ico"><IcoMap /></div>
                </button>
                <div className="top-area">
                    <div className="policy-wrap">
                        <ul className="policy-list">
                            <li>© 2022 Airbnb, Inc</li>
                            <li><a href="#none">개인정보 처리방침</a></li>
                            <li><a href="#none">이용약관</a></li>
                            <li><a href="#none">사이트맵</a></li>
                            <li><a href="#none">한국의 변경된 환불 정책</a></li>
                            <li><a href="#none">회사 세부정보</a></li>
                        </ul>
                    </div>

                    <div className="stting-wrap">
                        <ul className="stting-list">
                            <li className="item01">
                                <button type="button" className="btn">
                                    <span className="ico"><IcoLang /></span>
                                    <span className="txt">한국어 (KR)</span>
                                </button>
                            </li>
                            <li className="item02">
                                <button type="button" className="btn">
                                    <span className="ico">￦</span>
                                    <span className="txt">KRW</span>
                                </button>
                            </li>
                            <li className="item03">
                                <button type="button" className="btn">
                                    <span className="txt">지원 및 참고자료</span>
                                    <span className="ico"><IcoArr /></span>
                                </button>
                            </li>
                        </ul>
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