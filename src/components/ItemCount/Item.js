import React, { useState } from "react";
import Callia from "../../Pictures/Callia.png"

export const Item = () => {

    const [amount, setAmount] = useState (0)
    const count = (value) => {
        setAmount(amount+value)
    }
    
    
    return (
        <section className='bg-info'>
            <h3 className="py-3 bg-white">
                Producto
            </h3>
            <img style={{width: 200, height: 300}} src={Callia.png} alt="placeholder"></img>
            <h4>Precio: $ <span className="price">280</span></h4>
            <div className="d-flex flex-row  justify-content-between ">
                <button className="btn btn-danger p-3 fw-bold display-" onClick={() => count (-1)}> - </button>
                <span>{amount}</span>
                <button className="btn btn-success p-3 fw-bold display-1" onClick={() => count (+1)}> + </button>
            </div>
        </section>
    )

}

export default Item