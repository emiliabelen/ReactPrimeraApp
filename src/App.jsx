import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Contador from "./componentes/Contador";
import Titulos from "./componentes/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //aqui logica

  return (
    //tb se puede escribir logica

    <>
      {/* aqui va el maquetado de mi componente */}
      {/* <Titulos> </Titulos> */}
      <Titulos
        nuevoTitulo="Este titulo fue creado con props"
        estado={true}
      />{" "}
    
    <Contador></Contador>
    </>
     
  );
}

export default App;
