import { useState, useEffect } from "react";

import mapMarker from "../../assets/images/map_marker.png";
import "./style.css";


const { kakao } = window;


export default function KakaoMap({ markData }) {
    const [center, setCenter] = useState(new kakao.maps.LatLng(37.3067600253, 127.0846083156));
    
    useEffect(() => {
        // 지도 생성
        const container = document.getElementById("map");
        const option = {
            center: center, //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, option);

        if(markData.length > 0) {   // prop으로 받은 데이터 유효성 검사
            const moveLatLan = new kakao.maps.LatLng(markData[0].REFINE_WGS84_LAT, markData[0].REFINE_WGS84_LOGT);
            setCenter(moveLatLan);
            map.setCenter(center);

            // 마커 찍기
            markData.map(data => {
                // 마커 이미지 설정
                const imgSize = new kakao.maps.Size(64, 64);
                const markerImg = new kakao.maps.MarkerImage(mapMarker, imgSize);
        
                // 마커 위치 설정
                const position = new kakao.maps.LatLng(data.REFINE_WGS84_LAT, data.REFINE_WGS84_LOGT);
                
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    image: markerImg
                });
            })
        }

    }, [markData]);

    return(
        <div id="map"></div>
    );
}