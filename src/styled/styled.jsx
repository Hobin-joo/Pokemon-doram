import styled from "styled-components";

export const StDiv = styled.div`
  width: 80%;
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #ffe5f9, #ffecec);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  transition: transform 0.2s ease-in-out;
  height: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const CardDiv = styled.div`
  width: 200px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  &:hover {
    border: 5px solid blue;
  }
`;

export const Pokemonball = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackImg = styled.div`
  background-image: url(https://phoneky.co.uk/thumbs/wallpapers/p2ls/games/45/cd691c7b12720920.jpg);
  height: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PTag = styled.p`
  display: flex;
  justify-content: center;
  color: #ff6363;
`;
