import React from "react";
import { CardDiv } from "../styled/styled";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetail = ({ datas }) => {
  const navigate = useNavigate();

  const param = useParams();
  return (
    <>
      <CardDiv>
        <img src={datas[param.id - 1].img_url} />
        <p>{datas[param.id - 1].korean_name}</p>
        <p>{datas[param.id - 1].types}</p>
        <p>{datas[param.id - 1].description}</p>
        <button
          onClick={() => {
            navigate("/Dex");
          }}
        >
          뒤로가기
        </button>
      </CardDiv>
    </>
  );
};
export default PokemonDetail;
