import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LetterTile = ({ disabled, letter, handleLetterTileClick }) => {
  const handleClick = () => {
    handleLetterTileClick(letter);
  };

  return (
    <button
      className="btn c-letter-tile"
      disabled={disabled}
      type="button"
      onClick={handleClick}
    >
      {letter}
    </button>
  );
};

LetterTile.propTypes = {
  disabled: PropTypes.bool,
  letter: PropTypes.string,
  handleLetterTileClick: PropTypes.func,
};

export default LetterTile;
