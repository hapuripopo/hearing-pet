import "./style.css"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoIcon } from "../../assets/logoIcon.svg";

export default function Header() {

    return (
        <nav className="MainNavbar">
            <div className="MainNavbar__wrapper">
                <div className="MainNavbar__logo">
                    <Logo width="100" height="28" />
                    <LogoIcon width="20" height="20" />
                </div>
            </div>
        </nav>
    );
}