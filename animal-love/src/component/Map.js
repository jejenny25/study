import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
const { kakao } = window;

const Map = () => {
    const location = useLocation();

  // 2. location.state 에서 파라미터 취득
    const address = location.state.address;
    const careNm = location.state.careNm;

    const KakaoMapScript =() =>{
        const container = document.getElementById('mapWrap');
        const options = {
            center: new kakao.maps.LatLng(36.06527, 127.73704),
            level:6
        };

        const map = new kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function(result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    //content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">'+careNm+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });
    }
    
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div id="mapWrap" style={{width:'100%', height:'800px'}} className="map-wrap"></div>
    )
}

export default Map