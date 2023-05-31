import "./style.css"
import { useEffect } from "react";

const { kakao } = window;

export default function KakaoMap() {

    useEffect(() => {
        const container = document.getElementById("map");
        const option = {
            center: new kakao.maps.LatLng(37.577780, 126.981739), //지도의 중심좌표.
            level: 5 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, option);

        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.577780, 126.981739),
            map: map
        });
    }, [])

    return(
        <div id="map"></div>
    );
}