import "./style.css";
import Header from "../../components/Header";
import KakaoMap from "../../components/KakaoMap";
import { ReactComponent as Search } from "../../assets/icons/search.svg";


export default function Main() {

    return (
        <>
            <Header />

            <main className="Main">
                <section className="SearchSection">
                    <KakaoMap />

                    <div className="SearchInput">
                        <input
                            type="text" 
                            className="SearchInput__input"
                        />

                        <button className="SearchInput__button">
                            <span>
                                <Search width="18" height="18" />
                            </span>
                        </button>
                    </div>
                </section>

                <div className="CardContainer">
                    <ul className="CardList">
                        {/* 컴포넌트로 분리 - 시작 */}
                        <li>
                            <div className="Card">
                                <div className="Card__Name">
                                    <p>
                                        {"동물 병원 이름"}
                                    </p>

                                    <p>
                                        {"동물병원/약국"}
                                    </p>
                                </div>

                                <div className="Card__address">
                                    <p>
                                        {"주소"}
                                    </p>

                                    <p>
                                        {"상세주소"}
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* 컴포넌트로 분리 - 끝 */}
                        <li>
                            <div className="Card">
                                dd
                            </div>
                        </li>
                        <li>
                            <div className="Card">
                                dd
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
