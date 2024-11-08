import React, { useState } from "react";
import { StDiv, CardDiv } from "../styled/styled";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ datas, addPokemon }) => {
  return (
    <>
      <StDiv>
        {datas.map((data) => (
          <PokemonCard key={data.id} data={data} addPokemon={addPokemon} />
        ))}
      </StDiv>
    </>
  );
};

export default PokemonList;
