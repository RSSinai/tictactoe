import React, { useState, useRef } from "react";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import styled from "styled-components";
import { containerColor } from "../../appearance/colorsConst";
import { winningCombinations } from "../../constants/winningCombinations";

let data = ["", "", "", "", "", "", "", "", ""];

const Tictac = () => {
  let [counter, setCounter] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  const box_array = Array.from({ length: 9 }, () => useRef(null));

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (counter % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCounter(counter + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCounter(counter + 1);
    }

    checkWin();
  };
  console.log(counter);

  const checkWin = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      const [a, b, c] = combination;
      if (data[a] === data[b] && data[b] === data[c] && data[c] !== "") {
        won(data[c]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerText = "Congrats!";
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div>
      <PageContainer>
        <Title ref={titleRef}>Tic tac toe</Title>
        <Board>
          <div>
            {[0, 1, 2].map((index) => {
              return (
                <Container
                  ref={box_array[index]}
                  onClick={(e) => {
                    toggle(e, index);
                  }}
                />
              );
            })}
          </div>
          <div>
            <div>
              {[3, 4, 5].map((index) => {
                return (
                  <Container
                    ref={box_array[index]}
                    onClick={(e) => {
                      toggle(e, index);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div>
              {[6, 7, 8].map((index) => {
                return (
                  <Container
                    ref={box_array[index]}
                    onClick={(e) => {
                      toggle(e, index);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </Board>
        <Button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
      </PageContainer>
    </div>
  );
};

export default Tictac;

const Container = styled.div`
  display: flex;
  height: 180px;
  width: 180px;
  background-color: ${containerColor};
  border: 4px solid #0f1b21;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px;
`;

const Board = styled.div`
  height: 600px;
  width: 564px;
  display: flex;
  margin: auto;
`;

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
