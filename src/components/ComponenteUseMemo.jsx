import React, { useMemo } from "react";

const calculoMuyGrande = () => {
  // Aquí viene un cálculo muy pesado que llevará muchos recursos
  let a;
  for (let i = 0; i < 123456789; i++) {
    a = i;
  }
  return a;
};

const ComponenteUseMemo = ({ nombre }) => {
  const valor = useMemo(() => calculoMuyGrande(), [nombre]);

  return <div>Hola {nombre}, el valor es {valor}</div>;
};

export default ComponenteUseMemo;