import { useState } from "react";

const Contador = () => {
  //crear un state
  const [numero, setNumero] = useState(0);
  //numero=numero + 1 NO SE PUEDE HACER
  //setNumero (12) SI LO PODEMOS HACER

  // let incrementarNumero = (numero)=> {
  //     setNumero (numero +1)
  //}
  return (
    <section>
      <h2 className="container">Contador</h2>
      <h3>{numero}</h3>
      <button className ="btn btn-outline-success" size="lg" onClick={() => setNumero(numero + 1)}>+1</button>
      <button className ="btn btn-outline-danger" size="sm" onClick={() => setNumero(numero - 1)}>-1</button>
    </section>
  );
};

export default Contador;
