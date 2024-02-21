import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userOneCount, setUserOneCount] = useState(0);
  const [userTwoCount, setUserTwoCount] = useState(0);
  const [userOneDisabled, setuserOneDisabled] = useState(false);
  const [userTwoDisabled, setuserTwoDisabled] = useState(false);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(1);

  const typesOfSchenarious = ["User1", "User2", "DRAW"];
  // implementing dice roll
  const diceRoll = () => {
    if (turn === 1) {
      setUserOneCount(Math.floor(Math.random() * 6 + 1));
      setTurn(2);
      setuserOneDisabled(true);
    } else if (turn === 2) {
      setUserTwoCount(Math.floor(Math.random() * 6 + 1));
      setTurn(1);
      setuserTwoDisabled(true);
    }
  };

  // finding a winner functionality
  useEffect(() => {
    if (userOneCount !== 0 && userTwoCount !== 0) {
      if (userOneCount > userTwoCount) {
        setWinner(typesOfSchenarious[0]);
      } else if (userOneCount < userTwoCount) {
        setWinner(typesOfSchenarious[1]);
      } else {
        setWinner(typesOfSchenarious[2]);
      }
    }
  }, [userTwoCount]);
  // reset functionality
  function reset() {
    setUserOneCount(0);
    setUserTwoCount(0);
    setuserTwoDisabled(false);
    setuserOneDisabled(false);
    setWinner("");
    setTurn(1);
  }
  return (
    <>
      <div className="btn-1">
        <button onClick={diceRoll} disabled={userOneDisabled}>
          Roll
        </button>
        <h2>{userOneCount}</h2>
      </div>

      <div className="btn-2">
        <button onClick={diceRoll} disabled={userTwoDisabled}>
          Roll
        </button>
        <h2>{userTwoCount}</h2>
      </div>

      <h1>Winner is {winner}</h1>
      <button onClick={reset}>Reset The game</button>
    </>
  );
}

export default App;
