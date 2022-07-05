import React from "react";
import Callia from "../../Pictures/Callia.png"
import Contador from "../ItemCount/Contador";

const Item = ({product}) => {
    
    const {img, name, description} = product


    const onAdd = () => {
        alert ("Producto agregado al carrito")
    }
    
    return (
    <div className="card" style={{width:"20rem", margin:".5rem"}}>
    <img src={img} className="card-img-top" alt="name"/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    <Contador initial={1} stock={12} onAdd={onAdd}/>
    </div>
    </div>
    )
}

export default Item
