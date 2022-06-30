import React, { useEffect, useState } from "react"
import rutini from "../../Pictures/Rutini.png"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList]=useState([])
    const products = [
        {id:'01', name:"Rutini", description:"Vino Rutini Encuentro Malbec 750ml. Rutini Wines", price: "$1499", img: "../../Pictures/rutini.jpg" }
    ]
    

    const getData = new Promise ((resolve, reject) =>{
        let condition = true
        setTimeout(()=>{
            if(condition){
                resolve(products)
            }else {reject("Vino picado") 
        }
        },2000)
    })

    useEffect (()=>{
        getData
        .then((result)=> setProductList(result))
    },[])


    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productList={productList}/>
        </div>
    )

};




export default ItemListContainer;