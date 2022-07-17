import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getData } from "../mocks/ApiProducts";

const ItemDetailConteiner = () =>{ 

    const [detalle, setDetalle] = useState ({})
    const {id} = useParams ()
    useEffect(()=>{
    getData
    .then((res)=> setDetalle(res.find((Item)=> Item.id === id)))
    .catch((error) => console.log(error))
    }, [id])
 
return (
    <div>
        <ItemDetail detalle = {detalle}/>
    </div>
)
}


export default ItemDetailConteiner