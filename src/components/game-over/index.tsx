import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const GameOver = ({
  gameOverMessage,
  lostGame,
  restart,
  startNewPuzzle,
}: {
  gameOverMessage: string;
  lostGame: boolean;
  restart: React.MouseEventHandler;
  startNewPuzzle: React.MouseEventHandler;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Commented out below to create bug, button will not be accessible
  // useEffect(() => {
  //   buttonRef.current && buttonRef.current.focus();
  // }, []);
  const title = lostGame ? 'GAME OVER!!' : 'YOU WIN!!';
  const btnText = lostGame ? 'Try Again' : 'New Puzzle';

  return (
    <div className="c-game-over">
      <span className="c-game-over-title">{title}</span>
      <span className="c-game-over-message">{gameOverMessage}</span>
      <div className="c-game-over-buttons">
        <button
          className="btn"
          onClick={lostGame ? restart : startNewPuzzle}
          ref={buttonRef}
          type="button"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

GameOver.propTypes = {
  gameOverMessage: PropTypes.string.isRequired,
  lostGame: PropTypes.bool.isRequired,
  restart: PropTypes.func.isRequired,
  startNewPuzzle: PropTypes.func.isRequired,
};

export default GameOver;
