import React from "react";
import Contador from "../ItemCount/Contador";

const Item = ({products}) => {
    
    const {img, name, description, stock} = products

    
    return (
    <div className="card" style={{width:"20rem", margin:".5rem"}}>
    <img src={img} className="card-img-top" alt={"name"}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{stock}</p>
    
    </div>
    </div>
    )
}

export default Item
