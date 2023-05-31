import "./style.css";
import Header from "../../components/Header";
import KakaoMap from "../../components/KakaoMap";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import HospitalCard from "./components/HospitalCard";


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
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                    </ul>
                </div>
            </main>
        </>
    );
}
