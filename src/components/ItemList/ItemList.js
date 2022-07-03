import React from "react";
import Item from "../ItemProducts/Item";

const ItemList = ({productList}) => {

    return(
        <div>
            <h3>Catalogo</h3>
            {productList.map ((product)=><Item product={product}key={product.id}/>)}
        </div>
    )
    
}
 

export default ItemList