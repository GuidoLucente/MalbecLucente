import React, { useState } from "react";

const Contador = ({initial, stock, onAdd}) => {

    const [amount, setAmount] = useState (initial)
    const count = (value) => {
        setAmount(amount+value)
    }
    
    const restar = () =>{
        if(amount > 0){
            setAmount(amount - 1)
        }
     
    }
 
    const sumar = () =>{
        if (amount < stock){
            setAmount(amount + 1)
        }

    }
    
    return (
        <div className="d-flex flex-column align-items-center">  
            <div className="d-flex flex-row  justify-content-between ">
                <button className="btn btn-danger fw-bold display-" onClick={restar}> - </button>
                <span className="btn">{amount}</span>
                <button className="btn btn-success fw-bold display-1" onClick={sumar}> + </button>
            </div>
            <button className="btn btn-info" onClick={()=>onAdd(amount)}>Agregar al carrito</button>
        </div>
    )

}

export default Contador