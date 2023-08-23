
import './App.css';
import{ButtonConParametros} from './components/Button'
import{Navbar} from './components/NavBar' //importo un boton desde la carpeta button
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea para importar el CSS de Bootstrap





function App() {
const [counter, setCounter] = useState(0)

  ///defino un evento al onclick
const handlerOnClick = () => {alert('enviar un mensaje')}
  ///defino un evento al onclick
const handlerSetCounter = () => {
  setCounter(counter +  1)
}

  return (
   <div>
    <Navbar/>
     <Titulo/>
     <SubTitulo/>
     <Buttons/>
     <TituloConPropiedades titulo={"Titulo por Parametros"} />
     <ButtonConParametros evento={handlerOnClick} text={"primer texto"}/> //llamo al evento al hacer on onClick
     <br/>
     <ButtonConParametros evento={handlerSetCounter} text={"contador:"+counter}/> //llamo al evento al hacer on onClick
   </div>
  );
}

const Titulo = () => <h1>Titulos</h1>
const SubTitulo = () => <h2>Sub Titulo</h2>
const Buttons = () => {return (<button>Boton1</button>)}
const TituloConPropiedades = ({titulo}) => <h1>{titulo}</h1>

export default App;
