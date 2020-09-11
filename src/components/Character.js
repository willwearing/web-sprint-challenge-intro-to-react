import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const StyledChar = styled.div`
  margin: 15px;
  border: 1px solid black;
`;

const Character = (props) => {
  return (
    <StyledChar>
      <h1>Name: {props.data.name}</h1>
      <h2>Height: {props.data.height}</h2>
      <h2>Mass: {props.data.mass}</h2>
      <h2>Hair Color: {props.data.hair_color}</h2>
      <h2>Skin Color: {props.data.skin_color}</h2>
      <h2>Eye Color: {props.data.eye_color}</h2>
      <h2>Birth Year: {props.data.birth_year}</h2>
      <h2>Gender: {props.data.gender}</h2>
    </StyledChar>
  );
};

export default Character;
