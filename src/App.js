import React from "react";  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/Container";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner"
import { BrowserRouter } from "react-router-dom";
import CartWidget from "./components/CartWidget/Cart";


function App () {
  
  return(
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
     
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
     <Route path="/detalle/:id" element={<ItemDetailConteiner/>}/>
     <Route path="/cart" element={<CartWidget/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App