import React from "react";  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/Container";
import Contador from "./components/ItemCount/Contador";
import Item from "./components/ItemProducts/Item";

const App = () => {
  
  return(
    <div className>
     <Header/>
     <ItemListContainer greeting="Malbec vinoteca, todas las bebidas a un click" />
     <Contador/>
     <Item/>
    </div>
  )
}

export default App