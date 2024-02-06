import React, { useState } from "react";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import styled from "styled-components";
import { colors } from "../../appearance/colorsConst";
import { winningCombinations } from "../../constants/winningCombinations";

const Board = ({ won, lock, box_array, data }) => {
  const [counter, setCounter] = useState(0);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] != "") {
      return;
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

  return (
    <Container>
      {[0, 1, 2].map((row) => (
        <div key={`row-${row}`}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Box
                key={`container-${index}`}
                ref={box_array[index]}
                onClick={(e) => {
                  toggle(e, index);
                }}
              />
            );
          })}
        </div>
      ))}
    </Container>
  );
};

export default Board;

const Box = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background-color: ${colors.sqaureContainer};
  border: 4px solid #0f1b21;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px;
`;

const Container = styled.div`
  height: 400px;
  width: 564px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
