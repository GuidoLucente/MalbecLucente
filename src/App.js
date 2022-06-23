import React from "react";  

import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/Container";



const App = () => {
  return(
    <div className>
     <Header/>
     <ItemListContainer greeting="Malbec vinoteca, todas las bebidas a un click" />
    </div>
  

  )
}

export default App