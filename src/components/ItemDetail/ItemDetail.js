import React from "react"

const ItemDetail = (detalle) => {
 
    const onAdd = () => {
        alert ("Producto agregado al carrito")
    }
   
    return(
      
      <div>
        <h2>Vino {detalle.name}</h2>
        <img src={detalle.img}></img>
        <h2>Precio {detalle.price}</h2>
        <h3>descripciòn {detalle.description}</h3>
        <Contador initial={1} stock={detalle.stock} onAdd={onAdd}/>
      </div>

   )
}


export default ItemDetail