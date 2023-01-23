import React from "react";
import data from "./data";

import Square from "./components/Square";
import Nav from "./components/Nav";
import PlayersPanel from "./components/PlayersPanel";

import "./styles/App.css";

function App() {
  const [squaresData, setSquaresData] = React.useState(data);
  const [circleOrX, setCircleOrX] = React.useState(false);
  const [endGame, setEndGame] = React.useState(false);
  const [draw, setDraw] = React.useState(false);

  React.useEffect(() => {
    const notSelectedSquares = squaresData.filter((element) => {
      return element.selected !== false;
    });
    if (notSelectedSquares.length === 9 && !checkIfWin(squaresData)) {
      setDraw(true);
    }

    if (checkIfWin(squaresData) || notSelectedSquares.length === 9) {
      setEndGame(true);
    }
  }, [squaresData]);

  function checkIfWin(squares) {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < winPositions.length; i++) {
      const [a, b, c] = winPositions[i];
      if (
        squares[a].selected &&
        squares[a].selected === squares[b].selected &&
        squares[a].selected === squares[c].selected
      ) {
        return true;
      }
    }
  }

  function handleClick(id) {
    setCircleOrX((prev) => !prev);
    if (circleOrX) {
      changeSelect("O", id);
    }
    if (!circleOrX) {
      changeSelect("X", id);
    }
  }
  function changeSelect(sign, id) {
    setSquaresData((prev) =>
      prev.map((data) => {
        return data.id === id ? { ...data, selected: sign } : data;
      })
    );
  }
  function resetGame() {
    setSquaresData(data);
    setCircleOrX(false);
    setEndGame(false);
    setDraw(false);
  }

  const squaresElements = squaresData.map((element, i) => (
    <Square
      endGame={endGame}
      selected={element.selected}
      id={element.id}
      key={element.id + i}
      handleClick={handleClick}
    />
  ));

  return (
    <div className="App">
      <Nav />
      <div className="game-board">{squaresElements}</div>
      <PlayersPanel endGame={endGame} circleOrX={circleOrX} draw={draw} />
      {endGame ? (
        <button onClick={resetGame} className="new-game">
          New Game
        </button>
      ) : null}
    </div>
  );
}

export default App;
