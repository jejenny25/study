import React from 'react'
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { idState, profilePic } from "../recoil/UserInfo";

const { Kakao } = window;

const AfterLogin = () => {
    const navigate = useNavigate();
    const [user_id, setUserId] = useRecoilState(idState);
    const [profileImage, setProfileImage] = useRecoilState(profilePic);

    const logoutWithKakao = () => {
        if (Kakao.Auth.getAccessToken()) {
            console.log(
                '카카오 인증 액세스 토큰이 존재합니다.',
                Kakao.Auth.getAccessToken(),
            );
            Kakao.Auth.logout(() => {
                
                console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
                setUserId(null);
                setProfileImage(null);
                navigate('/');
            });
        }
    };

  return (
    <div className='after-login'>
        <div className="info-wrap">
            <div className="img"><img src={profileImage}></img></div>
            <p className='user-id'>{user_id} 님</p>
        </div>
        <div className='btn-wrap'><button type='button' className='btn-logout' onClick={logoutWithKakao}>로그아웃</button></div>
    </div>
  )
}

export default AfterLogin