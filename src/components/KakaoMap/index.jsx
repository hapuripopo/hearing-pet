import "./style.css"
import { useEffect } from "react";

const { kakao } = window;

export default function KakaoMap() {

    useEffect(() => {
        const container = document.getElementById("map");
        const option = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, option);
    }, [])

    return(
        <div className="wrapper">
            <div id="map"></div>
        </div>
    );
}