import React from "react";
import { CardDiv, StDiv } from "../styled/styled";
import pokemonball from "./pokemonball.png";
import { Pokemonball } from "../styled/styled";
import { PTag } from "../styled/styled";
import { removePokemon } from "../redux/Pokemonslice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const pokemonDashboard = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        <PTag>나만의 포켓몬</PTag>
        <StDiv>
          {pokemonDashboard.map((pokemon) => {
            return (
              <CardDiv key={pokemon.id}>
                <img src={pokemon.img_url ? pokemon.img_url : pokemonball} />
                <p>{pokemon.korean_name}</p>
                <p>No.{pokemon.id}</p>
                <button
                  onClick={() => {
                    dispatch(removePokemon(pokemon.korean_name));
                  }}
                >
                  삭제
                </button>
              </CardDiv>
            );
          })}
          {new Array(6 - pokemonDashboard.length).fill(null).map((_, index) => {
            return <Pokemonball src={pokemonball} key={index} />;
          })}
        </StDiv>
      </h1>
    </>
  );
};

export default Dashboard;
