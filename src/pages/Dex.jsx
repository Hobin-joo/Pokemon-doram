import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../components/Data";
import { ConText } from "../ContText/ContText";
import { toast } from "react-toastify";

const pokemonData = MOCK_DATA;
const Dex = () => {
  const [pokemonDashboard, setPokemonDashboard] = useState([]);

  const addPokemon = (pokemon) => {
    if (pokemonDashboard.find((e) => e.id === pokemon.id)) {
      toast.info("이미 추가됨");
      return;
    }
    if (pokemonDashboard.length === 6) {
      toast.info("6개만 추가할수있습니다");
      return;
    }
    setPokemonDashboard((prevPokemon) => [...prevPokemon, pokemon]);
  };

  const removePokemon = (korean_name) => {
    const deletePokemon = pokemonDashboard.filter(
      (pokemon) => pokemon.korean_name !== korean_name
    );
    setPokemonDashboard(deletePokemon);
  };

  return (
    <>
      <ConText.Provider
        value={{ addPokemon, removePokemon, pokemonData, pokemonDashboard }}
      >
        <ToastContainer />
        <Dashboard />
        <PokemonList />
      </ConText.Provider>
    </>
  );
};

export default Dex;
