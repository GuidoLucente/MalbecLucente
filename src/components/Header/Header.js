import React from "react";
import Logo from "../../Pictures/CupLogo.png"
import CartWidget from "../CartWidget/Cart";
import "./Header.css"


const Header = () => {
    return(
        <header>
        <img src={Logo}  alt="" style={{width:"2rem"}}/>
        <h1>Malbec Vinoteca</h1>
        <nav>
            
            <a href="#">Espumantes</a> 
            <a href="#">Vinos Blancos</a> 
            <a href="#">Vinos Rosados</a> 
            
        </nav>
        <div>
            <CartWidget/>
        </div>
    </header>
    )
   
}

export default Header