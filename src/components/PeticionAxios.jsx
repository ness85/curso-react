import React from "react";
import axios from "axios";

const PeticionAxios = () => {
  const ejecutarPeticion = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/298";
    axios
      .get(url)
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button onClick={ejecutarPeticion}>Ejectuar petición Axios</button>
    </div>
  );
};

export default PeticionAxios;
