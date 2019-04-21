import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ gameOverMessage, lostGame, restart, startNewPuzzle }) => {
  const title = lostGame ? 'GAME OVER!!' : 'YOU WIN!!';
  return (
    <div className="c-game-over">
      <span className="c-game-over-title">{title}</span>
      <span className="c-game-over-message">{gameOverMessage}</span>
      <div className="c-game-over-buttons">
        {lostGame && (
          <button className="btn" onClick={restart} type="button">
            Try again
          </button>
        )}
        {!lostGame && (
          <button className="btn" onClick={startNewPuzzle} type="button">
            New Puzzle
          </button>
        )}
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
