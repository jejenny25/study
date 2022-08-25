import React from 'react'
import Header from "../component/Header"; // 헤더 컴포넌트 추가
import RoomList from "../component/RoomList"; // room list 컴포넌트 추가
import Filter from '../component/Filter'; //filter 컴포넌트 추가
import Footer from "../component/Footer"; // Footer 컴포넌트 추가

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoFilter } from "../assets/svg/ico-filter.svg";


const MainView = () => {

    return (
        <div className="wrapper main-page">
            <Header currentPage={"main"} />
            
            {/* Container */}
            <main role="main" className="container">
                <div className="filter-wrap">
                    <div className="inner">
                        {/* <Filter /> */}
                        
                        <button type="button" className="btn btn-filter">
                            <span className="ico">
                                <IcoFilter />
                            </span>
                            <span className="txt">필터</span>
                        </button>
                    </div>
                </div>

                <div className="inner">
                    <div className="content">
                        
                        <div className="room-wrap">
                            <RoomList />
                        </div>
                    </div>
                </div>
            </main>
            {/* // Container */}

            {/* <!-- Footer --> */}
            <Footer currentPage={"main"}/>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default MainView