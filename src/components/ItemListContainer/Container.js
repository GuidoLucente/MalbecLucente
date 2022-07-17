import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { getData } from "../mocks/ApiProducts";
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
   
    const {categoryid}= useParams()

    useEffect (()=>{
        getData
        .then((result)=> {
            if(categoryid){
                setProductList(result.filter((Item)=> Item.category === categoryid))
            }else{
                setProductList(result)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false ))
        
    },[categoryid])


    return(
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>cargando...</p> : <ItemList productList={productList}/>}
            
        </div>
    )

};




export default ItemListContainer;