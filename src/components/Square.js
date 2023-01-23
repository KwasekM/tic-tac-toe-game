import React from "react";

export default function Square(props) {
  const styles = {
    color: props.selected === "O" ? "#3ec5f3" : "#ff615f",
    fontSize: "45px",
  };

  return (
    <div
      className="game-board__square"
      onClick={
        !props.selected && !props.endGame
          ? () => {
              props.handleClick(props.id);
            }
          : null
      }
    >
      <div>
        {props.selected === "X" ? (
          <i style={styles} className="fa-solid fa-x"></i>
        ) : null}
        {props.selected === "O" ? (
          <i style={styles} className="fa-regular fa-circle"></i>
        ) : null}
      </div>
    </div>
  );
}
