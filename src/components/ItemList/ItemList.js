import React from "react";
import Item from "../ItemProducts/Item";

const ItemList = ({productList}) => {

    return(
        <div>
            <h3>Catalogo</h3>
            <div style={{display:'flex', justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            {productList.map((product)=><Item product={product}key={product.id}/>)}
            </div>
        </div>
    )
    
}
 

export default ItemList