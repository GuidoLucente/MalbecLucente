import React from "react";
import Logo from "../../Pictures/CupLogo.png"
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
    </header>
    )
   
}

export default Header