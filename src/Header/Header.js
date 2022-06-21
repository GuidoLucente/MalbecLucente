import React from "react";
import Logo from "../../Pictures/CupLogo.png"
import "./Header.css"


const Header = () => {
    return 
    <header>
        <img src={Logo}  alt="" />
    <h1>Malbec Vinoteca</h1>
    <nav>
            <ul class ="nav_links">
                <li><a href="#">Espumantes</a> </li>
                <li><a href="#">Vinos Blancos</a> </li>
                <li><a href="#">Vinos Rosados</a> </li>
            </ul>
        </nav>
    </header>
}

export default Header