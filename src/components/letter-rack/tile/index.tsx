import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LetterTile = ({
  disabled,
  letter,
  handleLetterTileClick,
}: {
  disabled: boolean;
  letter: string;
  handleLetterTileClick: Function;
}) => {
  const handleClick = () => {
    handleLetterTileClick(letter);
  };

  return (
    <button
      className="btn c-letter-tile"
      data-picked={disabled}
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
