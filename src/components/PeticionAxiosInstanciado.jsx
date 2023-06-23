import React from "react";
import axios from "axios";

const pokeAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

const PeticionAxiosInstanciado = () => {
  const ejecutarPeticion = () => {
    pokeAxios
      .get("298")
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button onClick={ejecutarPeticion}>
        Ejectuar petición Axios instanciado
      </button>
    </div>
  );
};

export default PeticionAxiosInstanciado;
