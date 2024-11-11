import React, { useContext, useState } from "react";
import { StDiv, CardDiv } from "../styled/styled";
import PokemonCard from "./PokemonCard";
import { ConText } from "../ContText/ContText";

const PokemonList = () => {
  const { addPokemon, pokemonData } = useContext(ConText);
  return (
    <>
      <StDiv>
        {pokemonData.map((data) => (
          <PokemonCard key={data.id} data={data} addPokemon={addPokemon} />
        ))}
      </StDiv>
    </>
  );
};

export default PokemonList;
