import React, { useContext, useState } from "react";
import { CardDiv, StDiv } from "../styled/styled";
import pokemonball from "./pokemonball.png";
import { ConText } from "../ContText/ContText";

const Dashboard = () => {
  const { pokemonDashboard, removePokemon } = useContext(ConText);
  return (
    <>
      <h1>
        나만의 포켓몬
        <StDiv>
          {pokemonDashboard.map((pokemon) => {
            return (
              <CardDiv key={pokemon.id}>
                <img src={pokemon.img_url ? pokemon.img_url : pokemonball} />
                <p>{pokemon.korean_name}</p>
                <p>No.{pokemon.id}</p>
                <button
                  onClick={() => {
                    removePokemon(pokemon.korean_name);
                  }}
                >
                  삭제
                </button>
              </CardDiv>
            );
          })}
          {new Array(6 - pokemonDashboard.length).fill(null).map((_, index) => {
            return <img src={pokemonball} key={index} />;
          })}
        </StDiv>
      </h1>
    </>
  );
};

export default Dashboard;
