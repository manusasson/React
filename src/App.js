
import './App.css';
import{Navbar} from './components/NavBar' //importo un boton desde la carpeta button
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea para importar el CSS de Bootstrap
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Home from "./pages/Home"
import Products  from "./pages/Products"
import MyAccount  from "./pages/MyAccount"



function App() {


  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/account' element ={<MyAccount />} />

      </Routes>
   </BrowserRouter>
  );
}


export default App;
