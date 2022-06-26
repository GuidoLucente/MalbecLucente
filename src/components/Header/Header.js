import React from "react";
import Logo from "../../Pictures/CupLogo.png"
import CartWidget from "../CartWidget/Cart";
import "./Header.css"


const Header = () => {
    return(
       <div className="nav">
       <h1> <img src={Logo}  alt="" style={{width:"10rem"}}/> Malbec </h1>
        
        <ul>
         <li><a href="/" className="nav-item"> Vinos Tintos</a> </li>
         <li><a href="/" className="nav-item"> Vinos Blancos</a></li>
         <li><a href="/" className="nav-item"> Espumantes</a></li>
        </ul>
        
        <div>
            <CartWidget/>
        </div>
        </div>
    )
   
}

export default Header