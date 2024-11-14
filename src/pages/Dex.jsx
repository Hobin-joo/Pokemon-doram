import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "react-toastify/dist/ReactToastify.css";

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
