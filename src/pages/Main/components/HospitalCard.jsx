

export default function HospitalCard() {

    return(
        <li>
            <div className="Card">
                <div className="Card__name">
                    <p className="Card__name--title">
                        {"동물 병원 이름"}
                    </p>

                    <p>
                        {"동물병원/약국"}
                    </p>
                </div>

                <div className="Card__address">
                    <p>
                        {"경기도 하남시 신장로 126 동부신협빌딩 1층 (신장동)"}
                    </p>
                </div>
            </div>
        </li>
    );
}
