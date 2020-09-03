import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.jsx";
import { GifGrid } from "./components/GifGrid.jsx";
import "./App.scss";

function App() {
  const [categories, setCategories] = useState([]);
  const addNewCategory = (value) => {
    setCategories([value, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory addInputValue={addNewCategory} />
      <div>
        {categories.map((category, index) => {
          return <GifGrid key={index} categories={category} />;
        })}
      </div>
      {!categories.length && <div>Aún no hay categorías</div>}
    </div>
  );
}

export default App;

/**
 * usando un map espera un key que debe ser unica hace que retorne un valor de objetos el key sirve para
 * que react sepa cual se esta iterando
 * cuando se agregan nuevos elementos a un arreglo usando hooks no podemos usar .push() tenemos que crear una copia de ese arreglo y
 * agregarle nuevo valor
 *
 * enviar data del componente hijo al componente padre
 *
 */
