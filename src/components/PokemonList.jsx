import React from "react";
import { StDiv, CardDiv } from "../styled/styled";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../components/Data";

const PokemonList = () => {
  return (
    <>
      <StDiv>
        {MOCK_DATA.map((data) => (
          <PokemonCard key={data.id} data={data} />
        ))}
      </StDiv>
    </>
  );
};

export default PokemonList;
