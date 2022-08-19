import logo from "../img/logo.png";
import HeaderStyle from "./HeaderStyle.js";

export function Header(){
    return(
        <HeaderStyle>
            <img src={logo} alt="Logo do What to Watch" />
            <div>
                <input placeholder="Search" required type="text" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </HeaderStyle>
    )
}

export default Header;