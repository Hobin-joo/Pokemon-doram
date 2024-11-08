import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import MOCK_DATA from "../components/Data";

export const Router = () => {
  const pokemonData = MOCK_DATA;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route
          path="/Dex/PokemonDetail/:id"
          element={<PokemonDetail datas={pokemonData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
