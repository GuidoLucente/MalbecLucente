import React from "react";  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/Container";
import Contador from "./components/ItemCount/Contador";
import Item from "./components/ItemProducts/Item";

const App = () => {
  
  const onAdd = () => {
      alert ("Producto agregado al carrito")
  }
  
  return(
    <div className>
     <Header/>
     <ItemListContainer greeting="Malbec vinoteca, todas las bebidas a un click" />
     <Contador initial={1} stock={12} onAdd={onAdd}/>
     <Item/>
    </div>
  )
}

export default App