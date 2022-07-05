const products = [
    {id:'01', name:"Rutini", description:"Vino Rutini Encuentro Malbec 750ml. Rutini Wines", price: "$1499", img: "../../Pictures/rutini.jpg" }
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