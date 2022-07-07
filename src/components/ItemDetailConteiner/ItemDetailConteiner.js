import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../ItemProducts/Item";
import { getData } from "../mocks/ApiProducts";

const ItemDetailConteiner = () =>{ 

       
    const [detalle, setDetalle] = useState ({})
    useEffect(()=>{
    getData
    .then((res)=> setDetalle(res.find((Item)=> Item.id === "01")))
    .catch((error) => console.log(error))
    }, [])
 
return (
    <div>
        <ItemDetail detalle = {detalle}/>
    </div>
)
}


export default ItemDetailConteiner