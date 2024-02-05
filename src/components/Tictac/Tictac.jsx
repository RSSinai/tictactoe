import React, { useState, useRef } from "react";
import "./tictactoe.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import styled from "styled-components";

let data = ["", "", "", "", "", "", "", "", ""];

const Tictac = () => {
  let [counter, setCounter] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (counter % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCounter(++counter);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCounter(++counter);
    }

    checkWin();
  };
  console.log(counter);

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
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
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Tic tac toe
        </h1>
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
        <button
          className="reset"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Tictac;

const Container = styled.div`
  display: flex;
  height: 180px;
  width: 180px;
  background-color: rgb(107, 113, 234);
  border: 4px solid #0f1b21;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px;
  background-color: blue;
`;

const Board = styled.div`
  height: 600px;
  width: 564px;
  display: flex;
  margin: auto;
`;
