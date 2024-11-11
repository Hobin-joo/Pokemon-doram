import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../components/Data";
import PokemonDetail from "./PokemonDetail";
import { ConText } from "../ContText/ContText";

const pokemonData = MOCK_DATA;
const Dex = () => {
  const [pokemonDashboard, setPokemonDashboard] = useState([]);

  const addPokemon = (pokemon) => {
    if (pokemonDashboard.find((e) => e.id === pokemon.id)) {
      alert("이미 추가됨");
      return;
    }
    if (pokemonDashboard.length === 6) {
      alert("6개만 추가할수있습니다");
      return;
    }
    setPokemonDashboard([...pokemonDashboard, pokemon]);
  };

  const removePokemon = (korean_name) => {
    const deletePokemon = pokemonDashboard.filter(
      (pokemon) => pokemon.korean_name !== korean_name
    );
    setPokemonDashboard(deletePokemon);
  };

  console.log(pokemonDashboard);

  return (
    <>
      <ConText.Provider>
        <Dashboard props={pokemonDashboard} removePokemon={removePokemon} />
        <PokemonList datas={pokemonData} addPokemon={addPokemon} />
      </ConText.Provider>
    </>
  );
};

export default Dex;
