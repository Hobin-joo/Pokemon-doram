import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../components/Data";
import PokemonDetail from "./PokemonDetail";

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
  const navigate = useNavigate(); // 뒤로가기 버튼 나중에 쓸거임\

  console.log(pokemonDashboard);

  return (
    <>
      <Dashboard props={pokemonDashboard} removePokemon={removePokemon} />
      <PokemonList datas={pokemonData} addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
