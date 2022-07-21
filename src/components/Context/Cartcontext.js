import React, {createContext, useState, useEffect} from "react";
import Cartt from "../Cart/Cartt";

export const CartContext = createContext();
const { Provider } = CartContext

const CartCustomProvider = ({ children }) => {
   
    const [product, setProduct] = useState([])
    const [qtyProduct, setQtyProduct] = useState (0)

    
    const getQtyProduct = () => {
        let qty = 0
        product.forEach(product => qty += product.qty)
        setQtyProduct(qty)
        }

    useEffect(() => {
    getQtyProduct()
    }, [product])
    
    const addProduct = (product) => {
    if(isInCart(product.id)){
    const found = product.find(p => p.id === product.id)
    const index = product.indexOf(found)
    const aux = [...product]
    aux [index].qty += product.qty
    setProduct (aux)
    }else{
        setProduct([...product, product])
    }
    getQtyProduct()
    }
    

    const deleteProduct = (id) => {
    setProduct(product.filter(product => product.id !== id))
    getQtyProduct()
    }

    const isInCart = (id) => {
    const found = product.find(product => product.id === id)
    return found ? true : false
    }
    
    
    const clear = () => {
        setProduct([])
        setQtyProduct(0)
    }

    const calculateStock = () => { 
     return Cartt.reduce(
        (acum, actual) => acum + actual.price * actual.stock, 0
     )
    }

return(
    <Provider value={{addProduct, deleteProduct, isInCart, clear, setQtyProduct, calculateStock}}>
     {children}
    </Provider>
)
}

export default CartCustomProvider