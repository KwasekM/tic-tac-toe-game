import React from "react";

export default function PlayersPanel(props) {
  const { endGame, circleOrX, draw } = props;
  const styles = {
    textDecoration: "underline",
    textDecorationColor: circleOrX ? "#3ec5f3" : "#ff615f",
    textDecorationThickness: "5px",
  };

  return (
    <div className="players">
      <h3
        className={`players__player players__player--1 ${
          (endGame && circleOrX) || draw ? "players__player--animation" : null
        } `}
        style={!circleOrX && !endGame ? styles : null}
      >
        Player1
      </h3>
      <h3
        className={`players__player  ${
          (endGame && !circleOrX) || draw ? "players__player--animation" : null
        } `}
        style={circleOrX && !endGame ? styles : null}
      >
        Player2
      </h3>
    </div>
  );
}
