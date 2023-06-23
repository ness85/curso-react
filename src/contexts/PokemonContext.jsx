import axios from "axios";
import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

const PokemonContext = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const num = Math.round(Math.random() * 799) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${num.toString()}`
    );
    setPokemon(response.data);
  };
  return (
    <PokeContext.Provider value={{ pokemon, fetchPokemon }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokemonContext;
