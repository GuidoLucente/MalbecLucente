import React from "react";
import Callia from "../../Pictures/Callia.png"
import Contador from "../ItemCount/Contador";

const Item = () => {
    
    const onAdd = () => {
        alert ("Producto agregado al carrito")
    }
    
    return (
    <div className="w-50 d-flex flex-column align-items-center">
    <h3 className="py-3 bg-white"> Producto </h3>
    <img style={{width: 200, height: 300}} src={Callia} alt="placeholder"/>
    <h4>Precio: $ <span className="price">280</span></h4>
    <Contador initial={1} stock={12} onAdd={onAdd}/>
    </div>
    )
}

export default Item
