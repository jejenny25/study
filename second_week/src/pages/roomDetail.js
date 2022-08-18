import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

const roomDetail = () => {
    return(
        <div className="wrapper sub-page">
            <Header currentPage={"room-detail"} />
            
            {/* Container */}
            <main role="main" className="container">

                <div className="inner">
                    <div className="content">
                        
                        test
                    </div>
                </div>
            </main>
            {/* // Container */}

            {/* <!-- Footer --> */}
            <Footer currentPage={"room-detail"}/>
            {/* <!-- //Footer --> */}
        </div>
    )
}

export default roomDetail