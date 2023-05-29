import "./style.css";
import Header from "../../components/Header";
import KakaoMap from "../../components/KakaoMap";


export default function Main() {

    return (
        <>
            <Header />

            <main className="Main">
                <section className="SearchSection">
                    <KakaoMap />
                    {/* 검색창 컴포넌트 */}
                </section>
            </main>
        </>
    );
}
