import React from "react";  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/Container";
import Item from "./components/ItemCount/Item"


const App = () => {
  return(
    <div className>
     <Header/>
     <ItemListContainer greeting="Malbec vinoteca, todas las bebidas a un click" />
     <Item/>
    </div>
  )
}

export default App