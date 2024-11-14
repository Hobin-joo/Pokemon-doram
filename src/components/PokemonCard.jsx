import React from "react";
import { CardDiv } from "../styled/styled";
import { Link } from "react-router-dom";
import { addPokemon } from "../redux/Pokemonslice";
import { useDispatch } from "react-redux";

const PokemonCard = ({ data }) => {
  const dispatch = useDispatch();
  const dataId = data.id.toString();
  return (
    <CardDiv key={data.id}>
      <Link to={`/Dex/PokemonDetail/${data.id}`}>
        <img src={data.img_url} />
      </Link>
      <p>{data.korean_name}</p>
      <p>No.{dataId.padStart(3, "0")}</p>
      <button
        onClick={() => {
          dispatch(addPokemon(data));
        }}
      >
        추가
      </button>
    </CardDiv>
  );
};

export default PokemonCard;
