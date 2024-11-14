import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import MOCK_DATA from "../components/Data";
import NotFound from "../pages/NotFound";

const pokemonData = MOCK_DATA;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route
          path="/Dex/PokemonDetail/:id"
          element={<PokemonDetail datas={pokemonData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
