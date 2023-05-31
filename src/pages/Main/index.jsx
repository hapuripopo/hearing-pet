import { useEffect } from "react";
import axios from "axios";

import "./style.css";

import Header from "../../components/Header";
import KakaoMap from "../../components/KakaoMap";
import HospitalCard from "./components/HospitalCard";

import { ReactComponent as Search } from "../../assets/icons/search.svg";


export default function Main() {

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://openapi.gg.go.kr/OTHERHALFANIMEDIWELF?Type=json"
                );
                console.log(response.data.OTHERHALFANIMEDIWELF[1].row);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

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
