import React, { useCallback, useContext } from "react";
import "./../CartWidget/Cart.css"
import CarritoIcon from "../../Pictures/CarritoIcon.png"
import { CartContext } from "../Context/Cartcontext";



const CartWidget = () => {
    
    const {qtyProducts} = useContext (CartContext)
    return (
        <div>
            <img src={CarritoIcon} alt="Carrito" className="cartSize"></img>
            <p>{qtyProducts}</p>
        </div>
    )
}

export default CartWidget