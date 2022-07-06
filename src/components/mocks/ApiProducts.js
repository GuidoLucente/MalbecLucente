import React from "react"
import Item from "../ItemProducts/Item"

const products = [
    {id:'01', name:"Rutini", description:"Vino Rutini Encuentro Malbec 750ml. Rutini Wines", price: "$1499", img: "/img/Rutini.jpg", stock: 5 },
    {id:'02', name:"Callia", description:"El Malbec de Bodegas Callia M es un vino tinto de primera clase.", price: "$300", img: "/img/Callia.jpg", stock: 11},
    {id:'03', name:"Alma Mora", description:"Vino de color rojo intenso, aroma a frutas maduras, frambuesas, ciruelas y un toque de vainilla.", price: "$649", img: "/img/AlmaMora.jpg", stock: 8}
]


export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(products)
        }else {reject("Vino picado") 
    }
    },2000)
})