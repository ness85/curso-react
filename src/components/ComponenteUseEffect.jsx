import React, { useEffect, useState } from "react";

const ComponenteUseEffect = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // Se ejecuta cuando se monta el componente
    console.log("Se ha ejecutado el useEffect");

    return () => {
      // Esto se va a ejecutar cuando el componente se vaya a desmontar
      console.log("Me voy a desmontar");
    };
  }, []);

  useEffect(() => {
    // Toggle se monta o se actualiza
    console.log("Actualización de toggle")
  }, [toggle])

  return (
    <div>
      <h3>ComponenteUseEffect</h3>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default ComponenteUseEffect;