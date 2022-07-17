import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Pictures/CupLogo.png"
import CartWidget from "../CartWidget/Cart";
import "./Header.css"


const categories =[
    {
        id:1,
        path:"/category/tinto",
        name:"tintos",
    },

    {
        id:2,
        path:"/category/blanco",
        name:"blanco"
    },

    {
        id:3,
        path:"/category/espumantes",
        name:"espumantes",
    },
];


const Header = () => {
    return(
       <div className="nav">
       <h1> <img src={Logo}  alt="" style={{width:"10rem"}}/> </h1>
        
        <ul>
         {categories.map((category)=>(
            <Link to={category.path} key={category.id}>{category.name}</Link>
         ))}
        </ul>
        
        <div>
            <CartWidget/>
        </div>
        </div>
    )
   
}

export default Header