import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import pokemonSlice from "../features/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: [thunk],
});
