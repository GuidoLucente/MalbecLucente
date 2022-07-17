import React from "react";
import { useNavigate } from "react-router-dom";


const Item = ({product}) => {
    
    const Navigate = useNavigate()
    const {id, img, name, description, stock} = product
    return (
    <div className="card" style={{width:"20rem", margin:".5rem"}}>
    <img src={img} className="card-img-top" alt={"name"}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{stock}</p>
    
    </div>
    <button className="btn btn succes" onClick={()=> Navigate(`/dettale/${id}`)}>Ver más</button>
    </div>
    )
}

export default Item
