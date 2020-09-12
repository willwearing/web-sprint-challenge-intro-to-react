import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Character from "./components/Character";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

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
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => {
        setPages(response.data.count);
        setChars(response.data.results);
      })
      .catch((error) => {
        console.log("Sorry, no Characters", error);
      });
  }, [page]);

  return (
    <StyledApp className="App">
      <Button page={page} setPage={setPage} pages={pages} />
      <StyledDiv>
        {chars.map((character) => {
          return <Character data={character}></Character>;
        })}
      </StyledDiv>
        <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Buy Movies{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Select movie" items={items} multiSelect />
    </div>
    </StyledApp>

 );
  );
};

export default App;
