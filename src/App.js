import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Character from "./components/Character";

const StyledApp = styled.div``;
const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        // console.log(response);
        const starChars = response.data.results;
        // console.log(starChars);
        setChars(starChars);
      })
      .catch((error) => {
        console.log("Sorry, no Characters", error);
      });
  }, []);

  return (
    <StyledApp className="App">
      <h1>Characters</h1>
      <StyledDiv>
        {chars.map((character) => {
          return <Character data={character}></Character>;
        })}
      </StyledDiv>
    </StyledApp>
  );
};

export default App;
