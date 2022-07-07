import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { Data } from "../mocks/ApiProducts";

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
   

    useEffect (()=>{
        Data 
        .then((result)=> setProductList(result))
        .catch((error)=> console.log(error))
        
    },[])

    const getProducts = async () => {
        try{
            const respuesta = await getData
            setProductList (respuesta)
        } catch (error) {} finally{
            setLoading(false)
        }
    } 
    

    useEffect(()=>{
        getProducts()
    },[])



    return(
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>cargando...</p> : <ItemList productList={productList}/>}
            
        </div>
    )

};




export default ItemListContainer;