import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "../redux/Pokemonslice";

export const Store = configureStore({
  reducer: {
    pokemon: PokemonReducer,
  },
});

export default Store;
