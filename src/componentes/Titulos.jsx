const Titulos = ({ nuevoTitulo }) => {
  return (
    <section className="display 1">
      <h1 className="text-center"> Primer App en React</h1>

      <hr />
      <h2 className="display-5"> {nuevoTitulo}</h2>
    </section>
  );
};

export default Titulos;
