import React from "react";
import "./../CartWidget/Cart.css"
import CarritoIcon from "../../Pictures/CarritoIcon.png"



const CartWidget = () => {
    return (
        <div>
            <img src={CarritoIcon} alt="Carrito" className="cartSize"></img>
        </div>
    )
}

export default CartWidget