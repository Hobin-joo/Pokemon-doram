import React, { useState } from "react";
import { CardDiv, StDiv } from "../styled/styled";

const Dashboard = ({ props, removePokemon }) => {
  return (
    <>
      <h1>
        나만의 포켓몬
        <StDiv>
          {props.map((pokemon) => {
            return (
              <CardDiv key={pokemon.id}>
                <img src={pokemon.img_url} />
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
        </StDiv>
      </h1>
    </>
  );
};

export default Dashboard;
