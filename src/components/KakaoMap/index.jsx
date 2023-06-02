import { useState, useEffect } from "react";

import mapMarker from "../../assets/images/map_marker.png";
import "./style.css";


const { kakao } = window;


export default function KakaoMap({ markData }) {
    
    useEffect(() => {
        // 지도 생성
        const container = document.getElementById("map");
        const option = {
            center: new kakao.maps.LatLng(37.5383224029, 127.2043069537), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, option);

        // 마커 찍기
        markData.length > 0 && (
            markData.map(data => {
                // 마커 이미지 설정
                const imgSize = new kakao.maps.Size(64, 64);
                const markerImg = new kakao.maps.MarkerImage(mapMarker, imgSize);
        
                // 마커 위치 설정
                const position = new kakao.maps.LatLng(Number(data.REFINE_WGS84_LAT), Number(data.REFINE_WGS84_LOGT))
                
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    image: markerImg
                });
            })
        );

        
    }, [markData])

    return(
        <div id="map"></div>
    );
}