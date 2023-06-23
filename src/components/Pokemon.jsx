import React, { useContext } from "react";
import { PokeContext } from "../contexts/PokemonContext";

const Pokemon = () => {
  const { pokemon, fetchPokemon } = useContext(PokeContext);

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <br/>
      {pokemon && (
        <span>
          {pokemon.id}. {pokemon.name}
        </span>
      )}
    </div>
  );
};

export default Pokemon;
