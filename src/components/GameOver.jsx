const GameOver = ({ winner, resetGame }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won` : "Draw"}</p>
      <p>
        <button
          onClick={() => {
            console.log("Reset game");
            resetGame();
          }}
        >
          Rematch!
        </button>
      </p>
    </div>
  );
};

export default GameOver;
