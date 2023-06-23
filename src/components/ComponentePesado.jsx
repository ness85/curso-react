import React from "react";

const calculoMuyGrande = () => {
  // Aquí viene un cálculo muy pesado que llevará muchos recursos
  let a;
  for (let i = 0; i < 123456789; i++) {
    a = i;
  }
  return a;
};

const ComponentePesado = React.memo(({ nombre }) => {
  calculoMuyGrande();
  return <div>Hola {nombre}</div>;
});

export default ComponentePesado;