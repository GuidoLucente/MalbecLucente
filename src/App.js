import React from "react";  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/Container";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartCustomProvider from "./components/Context/Cartcontext";
import Cartt from "./components/Cart/Cartt";



const App = () => {
  
  return(

     <BrowserRouter>
     <CartCustomProvider>
     <Header/>
     <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
     <Route path="/detalle/:id" element={<ItemDetailConteiner/>}/>
     <Route path="/Cartt" element={<Cartt/>}/>
     </Routes>
     </CartCustomProvider>
     </BrowserRouter>

  )
}

export default App