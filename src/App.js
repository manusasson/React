
import './App.css';
import{Navbar} from './components/NavBar' //importo un boton desde la carpeta button
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea para importar el CSS de Bootstrap
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import Home from "./pages/Home"
import Products  from "./pages/Products"
import MyAccount  from "./pages/MyAccount"
import { useState } from 'react';
import SignIn from './pages/Login'
import Detail  from './pages/Details'
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
        <Route path='/login' element={<SignIn onLogin={handleSetSession} />} />
        <Route path='/products/:id' element={<Detail />} />
      </Routes>
   </BrowserRouter>
  );
}


export default App;
