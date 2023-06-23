import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (thunkAPI) => {
    const num = Math.round(Math.random() * 799) + 1;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num.toString()}`
      );
      return response.data;
    } catch (error) {
      return error.toString();
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.status = "succeded";
      state.pokemon = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export default pokemonSlice.reducer;
