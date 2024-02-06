import React, { useState, useRef } from "react";
import styled from "styled-components";
import Board from "./Tictac/Board";
import { titleHeaders } from "../constants/titles";

const Tictac = () => {
  let data = Array.from({ length: 9 }, () => "");
  const [lock, setLock] = useState(false);
  const [title, setTitle] = useState(titleHeaders.stratingTitle);
  const box_array = Array.from({ length: 9 }, () => useRef(null));

  const won = (winner) => {
    setLock(true);
    if (winner === "x" || winner === "o") {
      setTitle(titleHeaders.wonTitle);
    }
  };

  const reset = () => {
    setLock(false);
    data = Array.from({ length: 9 }, () => "");
    setTitle(titleHeaders.stratingTitle);
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div>
      <PageContainer>
        <Title>{title}</Title>
        <Board won={won} lock={lock} box_array={box_array} data={data} />
        <Button onClick={reset}>Reset</Button>
      </PageContainer>
    </div>
  );
};

export default Tictac;

const Button = styled.button`
  width: 250px;
  height: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: lightblue;
  font-size: 45px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 50px;
  color: darkblue;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
