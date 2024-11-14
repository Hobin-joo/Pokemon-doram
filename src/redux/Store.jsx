import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./Pokemonslice";

const Store = configureStore({
  reducer: {
    pokemon: PokemonReducer,
  },
});

export default Store;
