import React from 'react'

import data from "../db/data.json" // json 객체를 data라는 변수에 넣어 임포트

const ReviewList = () => {
    
    return (
        <div>
            <ul className="review-list">
                {data.reviews
                .filter((item, index) => index < 6)
                .map((item) => (
                    <li key={item.id}>
                        <div className="reviewer-info">
                            <div className="profile-img"><img src={item.profile} /></div>
                            <div className="txt-wrap">
                                <p className="name txt-medium">{item.name}</p>
                                <span className="date">{item.date}</span>
                            </div>
                        </div>
                        <div className="review-cont">
                            <p className="desc">{item.review}</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewList