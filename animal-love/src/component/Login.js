import React from 'react'

const Login = () => {
    const REST_API_KEY = "5f76191f7b20ec17876cfdb66a5374d5";
    const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div className='before-login'>
            <a href={KAKAO_AUTH_URL} className="btn-login"><img src="images/kakao_login_large.png" alt="카카오로 로그인하기" /></a>
        </div>
        )
    }

export default Login