import React, { useState, useEffect, useRef } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Dropbox from "../component/Dropbox";

// 아이콘 목록
import { ReactComponent as ImgCardMaster } from "../assets/images/img-card-master.svg";
import { ReactComponent as IcoCheck } from "../assets/svg/ico-check.svg";
import { ReactComponent as IcoCard } from "../assets/svg/ico-card.svg";
import { ReactComponent as IcoCalendar } from "../assets/svg/ico-calendar.svg";


const Reserve = () => {
    return(
        <div className="wrapper sub-page">
            <Header currentPage={"reserve"} />
            {/* Container */}
            <main role="main" className="container containner-reserve">
                <div className="inner">
                    <div className="content">
                        
                        <div className="reserve-area">
                            <div className="reserve-tit-area">
                                <button type="button" className="btn btn-goback"><span>뒤로가기</span></button>
                                <h2 className="tit">예약 요청</h2>
                            </div>

                            <div className="reserve-content">
                                <div className="reserve-info-area"> 
                                    <div className="reserve-item reserve-info-wrap ">
                                        <div className="tit-wrap">
                                            <p className="tit">예약정보</p>
                                        </div>
                                        <div className="reserve-info-list-wrap">
                                            <ul className="reserve-info-list">
                                                <li>
                                                    <div className="txt-wrap">
                                                        <span className="txt-medium">날짜</span>
                                                        <p>8월 20일~25일</p>
                                                    </div>
                                                    <div className="btn-wrap">
                                                        <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">수정</span></button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="txt-wrap">
                                                        <span className="txt-medium">게스트</span>
                                                        <p>게스트 1명</p>
                                                    </div>
                                                    <div className="btn-wrap">
                                                        <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">수정</span></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="reserve-item pay-info-wrap ">
                                        <div className="tit-wrap">
                                            <p className="tit">결제 수단</p>
                                            <div className="card-type-wrap">
                                                <ul>
                                                    <li><img src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg" alt="비자카드" height="9" aria-hidden="true" /></li>
                                                    <li><img src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg" alt="아메리칸익스프레스 카드" height="9" aria-hidden="true" /></li>
                                                    <li><span role="img" aria-label="마스터카드"><img src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg" alt="마스터카드" height="9" aria-hidden="true" /></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Dropbox />
                                        {/* <div className="selectbox-wrap">
                                            <button type="button" className="btn btn-select btn-card">
                                                <span className="img">
                                                    <ImgCardMaster />
                                                </span>
                                                <span className="txt">•••• 9417</span>
                                            </button>
                                            <div className="select-list-wrap">
                                                <ul className="select-list">
                                                    <li>
                                                        <button type="button" className="btn btn-select-item btn-card">
                                                            <span className="img">
                                                                <ImgCardMaster />
                                                            </span>
                                                            <span className="txt">•••• 9417</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-select-item btn-card is-checked">
                                                            <span className="img">
                                                                <ImgCardMaster />
                                                            </span>
                                                            <span className="txt">•••• 9417</span>
                                                            <div className="img-chk"><IcoCheck /></div>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <div className="tit">결제수단 추가하기</div>
                                                        <button type="button" className="btn btn-select-item btn-card">
                                                            <span className="img">
                                                                <IcoCard />
                                                            </span>
                                                            <span className="txt">신용카드 또는 체크카드</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-txt-link"><span className="txt txt-medium f16">쿠폰 입력하기</span></button>
                                        </div>
                                    </div>


                                    <div className="reserve-item msg-info-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">필수 입력 정보</p>
                                        </div>
                                        <div className="msg-wrap">
                                            <div className="desc-wrap">
                                                <p className="txt-medium f16">호스트에게 메시지 보내기</p>
                                                <p className="f16">호스트에게 여행 목적과 도착 예정 시간을 알려주세요.</p>
                                            </div>
                                            <div className="host-wrap">
                                                <div className="img">
                                                    <img src="https://a0.muscache.com/im/users/26650346/profile_pic/1422151004/original.jpg?aki_policy=profile_x_medium" />
                                                </div>
                                                <div className="txt-wrap">
                                                    <p className="name txt-medium f16">Philipe</p>
                                                    <p className="join-date">에어비앤비 가입: 2015년</p>
                                                </div>
                                            </div>
                                            <div className="txtarea-wrap">
                                                <textarea rows="5" className="inp inp-textarea"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="reserve-item refund-info-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">환불 정책</p>
                                        </div>
                                        <div className="desc-wrap">
                                            <p className="f16">8월 20일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다.
                                                <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">자세히 알아보기</span></button>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="reserve-item confirm-info-wrap">
                                        <div className="confirm-info">
                                            <div className="img"><IcoCalendar /></div>
                                            <div className="desc-wrap f16">
                                                <p className="txt-medium">호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직 확정된 것이 아닙니다.</p>
                                                <p>예약 확정 전까지는 요금이 청구되지 않습니다.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="reserve-item policy-info-wrap">

                                        <div className="policy-txt-wrap">
                                            <p>
                                                아래 버튼을 선택하면 <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">호스트가 설정한 숙소 이용규칙,</span></button> <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">에어비앤비 재예약 및 환불 정책</span></button>에 동의하며, 피해에 대한 책임이 본인에게 있을 경우 에어비앤비가 <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">결제 수단으로 청구</span></button>의 조치를 취할 수 있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.
                                            </p>
                                            <p>또한, <button type="button" className="btn btn-txt-link"><span className="txt txt-medium txt-blue">개정된 이용 약관</span></button>과 <button type="button" className="btn btn-txt-link"><span className="txt txt-medium txt-blue">결제 서비스 약관</span></button> 및 <button type="button" className="btn btn-txt-link"><span className="txt txt-medium txt-blue">개인정보 처리방침</span></button>에도 동의합니다.</p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn btn-basic btn-big btn-red"><span>예약 요청</span></button>
                                        </div>
                                    </div>

                                </div>

                                <div className="book-area">
                                    <div className="book-box-wrap">
                                        <div className="book-box">
                                            <div className="room-info-wrap">
                                                <div className="room-thumbnail">
                                                    <img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?aki_policy=large" />
                                                </div>
                                                <div className="txt-wrap">
                                                    <div className="top-wrap">
                                                        <span className="room-type">섬</span>
                                                        <span className="room-name">Exclusive & Private Island Resort: Floral Island</span>
                                                    </div>
                                                    <div className="bot-wrap">
                                                        <ul>
                                                            <li>★ 4.96<span className="txt-gray">(후기 129개)</span></li>
                                                            <li>🎖 <span className="txt-gray">슈퍼호스트</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="air-corver-wrap">
                                                <div className="txt-wrap">
                                                    <div className="img"><img src="https://a0.muscache.com/pictures/aircover/aircover-logo-ko/original/c4217131-d53a-45b4-b78a-81fc968eefa0.svg" alt="에어커버" /></div>
                                                    <p className="f16">를 통한 예약 보호</p>
                                                </div>
                                            </div>
                                            <div className="price-items-wrap">
                                                <div className="tit-wrap">
                                                    <p className="tit">요금 세부정보</p>
                                                </div>
                                                <ul className="price-items">
                                                    <li>
                                                        <button type="button" className="btn btn-txt-link"><span className="txt">₩779,097 x 7박</span></button>
                                                        <p className="txt-basic">₩5,453,682</p>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-txt-link"><span className="txt">청소비</span></button>
                                                        <p className="txt-basic">₩117,536</p>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-txt-link"><span className="txt">서비스 수수료</span></button>
                                                        <p className="txt-basic">₩748,032</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tot-wrap">
                                                <span className="txt-medium f16">총 합계</span>
                                                <span className="txt-medium f16">₩6,046,563</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* // Container */}

            {/* <!-- Footer --> */}
            <Footer currentPage={"reserve"}/>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default Reserve