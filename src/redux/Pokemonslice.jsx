import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPokemon: (state, action) => {
      if (state.find((e) => e.id === action.payload.id)) {
        toast.info("이미 추가됨");
        return;
      }
      if (state.length === 6) {
        toast.info("6개만 추가할수있습니다");
        return;
      }
      state.push(action.payload);
    },
    removePokemon: (state, action) => {
      return state.filter((pokemon) => pokemon.korean_name !== action.payload);
    },
  },
});

export default PokemonSlice.reducer;
export const { addPokemon, removePokemon } = PokemonSlice.actions;
