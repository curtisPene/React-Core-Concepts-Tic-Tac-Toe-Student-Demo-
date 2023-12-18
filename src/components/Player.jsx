import { useRef, useState } from "react";

const Player = ({ name, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const nameInputRef = useRef();

  const clickHandler = () => {
    setIsEditing((prevState) => !prevState);
    onNameChange(symbol, playerName);
  };

  const nameChangeHandler = () => {
    setPlayerName(nameInputRef.current.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={nameChangeHandler}
            ref={nameInputRef}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
