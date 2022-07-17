import React, {useState, useContext} from "react"
import Contador from "../ItemCount/Contador"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../Context/Cartcontext"

const ItemDetail = ({detalle}) => {
    
    const [amount, setAmount] = useState (Initial)
    const [buy, setbuy]= useState (false)
    const Navigate = useNavigate()
    const {addProduct} = useContext (CartContext)
    
    const onAdd = (count, product) => {

        setbuy(true)
        addProduct ({...product, qty: count})
        alert ("Producto agregado al carrito")
    }
   
    return(
      
      <div>
        <h2>Vino {detalle.name}</h2>
        <img src={detalle.img}></img>
        <h2>Precio {detalle.price}</h2>
        <h3>descripciòn {detalle.description}</h3>
        
        {buy ? <button className="btn btn-success" onClick={()=>{Navigate("/cart")}}>Ir al carrito</button>
        :<Contador Initial={1} stock={detalle.stock} onAdd={onAdd} amount={amount} setAmount={setAmount}/>}
      </div>

   )
}


export default ItemDetail