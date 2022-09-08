import React, { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { idState, profilePic } from "../recoil/UserInfo";

const KakaoRedirectHandler = () => {
    const navigate = useNavigate();
    const [user_id, setUserId] = useRecoilState(idState);
    const [profileImage, setProfileImage] = useRecoilState(profilePic);


    useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        //let grant_type = "c46mUbpVYFlNEgDL2BFvfZZlBsksjZcC";
        let grant_type = "authorization_code";
        let client_id = "5f76191f7b20ec17876cfdb66a5374d5";
    
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`
            , {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
            console.log("test : " + res);
            // Kakao Javascript SDK 초기화
            window.Kakao.init(client_id);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            
            const getProfile = async () => {
                try {
                    // Kakao SDK API를 이용해 사용자 정보 획득
                    let data = await window.Kakao.API.request({
                        url: "/v2/user/me",
                    });
                    console.log(data);
                  // 사용자 정보 변수에 저장
                    setUserId(data.kakao_account.email);
                    setProfileImage(data.properties.profile_image);
                } catch (err) {
                    console.log(err);
                }
            };
            getProfile();
            navigate('/');
      })
    }, [])
  return (
    <div></div>
  )
}

export default KakaoRedirectHandler