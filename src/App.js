
import './App.css';
import{Navbar} from './components/NavBar' //importo un boton desde la carpeta button
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea para importar el CSS de Bootstrap
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import Home from "./pages/Home"
import Products  from "./pages/Products"
import MyAccount  from "./pages/MyAccount"
import { useState } from 'react';


function App() {
  const [session, setSession] = useState(null)

  const handleSetSession = (user) => {
    setSession(user)
  }

  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/my-account' element={
            <ProtectedRoute session={session}>
              <MyAccount onLogout={handleSetSession} user={session} />
            </ProtectedRoute>
          } />
      </Routes>
   </BrowserRouter>
  );
}


export default App;
