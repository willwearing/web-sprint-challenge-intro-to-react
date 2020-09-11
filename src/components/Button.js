import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// const StyledButton = styled.div`
//   border-radius: 5px;
//   background-color: #a1cdf1;
//   color: #fff;
//   padding: 10px 15px;
//   outline: none;
//   border: none;
//   cursor: pointer;
// `;

const Button = ({ page, setPage, pages }) => {
  console.log({ page, setPage, pages });

  function nextPage() {
    if (page < pages) {
      return page + 1;
    } else {
      return page;
    }
  }
  function backPage() {
    if (page > 1) {
      return page - 1;
    } else {
      return page;
    }
  }
  return (
    // <StyledButton>
    <div>
      <button onClick={() => setPage(1)}>First</button>
      <button onClick={() => setPage(backPage)}>Back</button>
      <button onClick={() => setPage(nextPage())}>Next</button>
      <button onClick={() => setPage(pages)}>Last</button>
    </div>
    // </StyledButton>
  );
};

export default Button;
