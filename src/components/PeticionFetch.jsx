import React from "react";

const PeticionFetch = () => {
  const ejecutarPeticion = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/298";

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button onClick={ejecutarPeticion}>Ejectuar petición Fetch</button>
    </div>
  );
};

export default PeticionFetch;
