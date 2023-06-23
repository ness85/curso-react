import React, { useState, useCallback } from "react";
import ComponenteUseMemo from "./components/ComponenteUseMemo";
import ComponenteUseEffect from "./components/ComponenteUseEffect";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Gorka");

  const increment = useCallback(() => {
    // setCount(count + 1);
    setCount(prev => prev + 1)
  }, []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Sumar</button>
      <button onClick={() => setName("Julián")}>Cambiar Nombre</button>
      <ComponenteUseMemo nombre={name} />
      {count < 5 && <ComponenteUseEffect />}
    </div>
  );
}

export default App