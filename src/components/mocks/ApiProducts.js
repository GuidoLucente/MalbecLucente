const products = [
    {id:'01', category: "tinto", name:"Rutini", description:"Vino Rutini Encuentro Malbec 750ml. Rutini Wines", price: "$1499", img: "/img/Rutini.jpg", stock: 5 },
    {id:'02', category: "tinto", name:"Callia", description:"El Malbec de Bodegas Callia M es un vino tinto de primera clase.", price: "$300", img: "/img/Callia.jpg", stock: 11},
    {id:'03', category: "tinto", name:"Alma Mora", description:"Vino de color rojo intenso, aroma a frutas maduras, frambuesas, ciruelas y un toque de vainilla.", price: "$649", img: "/img/AlmaMora.jpg", stock: 8},
    {id:'04', category: "blanco", name: "Cosecha Tardia", description:"cosecha tardía o Late Harvest es un término que se aplica a los vinos elaborados a partir de uvas secadas en la vid durante más tiempo de lo habitual.", price: "$607",img: "/img/cosechaTardia.jpg", stock: 9},
    {id:'05', category: "blanco", name:"Finca Norte", description:"Vino fermentado en barricas de segunda, y tercer uso,con un color dorado y reflejos verdosos", price: "$399", img:"/img/fincaNorte.jpg", stock: 23},
    {id:'06', category: "blanco", name:"Rutini Sauvignon", description:"Amarillo brillante, con reflejos verdosos. Intensamente aromático, de carácter cítrico que recuerda al pomelo rosado y algunos toques herbáceos.", price: "$13800", img:"/img/rutiniSauvi.jpg"},
    {id:'07', category:"espumantes", name:"Encuentro Brut Nature", description:"Los límpidos tonos coral-cobrizo, con matices piel de cebolla, están atravesados por cordones de pequeñas burbujas finísimas y permanentes. La sutileza de sus aromas recuerdan a notas florales y frutas confitadas.", price:"$21.612", img:"/img/encuentroBrut.jpg"},
    {id:'08', category:"espumantes", name:"Trumpeter Extra Brut Chardonnay", description:"Dorado ámbar suave y brillante, con reflejos verdosos. Equilibrado y armonioso, refleja un balance bien conseguido de azúcar y acidez.", price:"$10.782", img:"/img/trumpeterBrut.jpg"},
    {id:'09', category:"espumantes", name:"Collección Rutini Extra Brut", description:"Dorado, matiz amarillo acerado. Burbuja pequeña y permanente. Aromas sutiles a frutos blancos frescos, frutos secos y pan brioche.", price:"$23.568", img:"/img/rutiniBrut.jpg"}
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