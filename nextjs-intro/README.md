@ NextJS introduction

### pages

- pages에 파일을 생성하면 그 파일의 이름을 가져가서 url의 이름으로 씀
- 404 페이지도 자동 생성

### react와 다른점

- create react app은 client-side render를 하는 앱을 만듦
  > react는 너의 브라우저가 유저가 보는 UI를 만드는 모든 것, 느리거나 javascript가 잘 안되면 사용자는 아무것도 볼 수 없음
  > nextJS는 실제 HTML을 가지고 있기때문에 조금 느리더라도 어쨌든 페이지가 보여짐 => SEO에도 좋음

---

- NextJS가 index를 랜더링 하기 전에 \_app.js를 먼저 확인함

### api key 숨기기

- next.config.js에서 rewrites에 api 주소와 key 넣기

* redirects는 사용자가 진입한 주소를 강제로 내가 설정한 주소로 보냄.

---

### getServerSideProps

- 서버사이드에서 이루어지는 걸 여기서 작성
- 데이터가 다 준비되어야만 유저들에게 페이지가 보여짐
- 서치엔진은 당연히 이것을 좋아함 => SEO에도 좋음

---

### Dynamic URL - url로 변수를 받는 법

- 대괄호 안에 변수명을 넣고 그걸 파일명으로 씀 ex)[id].js

---

### catch-all URL

- 여러개 query를 받게 -> [...변수명].js
