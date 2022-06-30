import React from "react";
import ItemCount from "../ItemCount/Item";
import ItemProducts from "../ItemCount/ItemProducts";

const ItemList = ({productList}) => {

    return(
        <div>
            <h3>Catalogo</h3>
            {productList.map ((produc)=><ItemCount/>)}
        </div>
    )
}
 

export default ItemList