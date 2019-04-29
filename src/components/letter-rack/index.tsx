import React from 'react';
import PropTypes from 'prop-types';
import LetterTile from './tile';
import { ALPHABET } from '../../constants';
import './index.css';

const LetterRack = ({
  pickLetter,
  pickedLetters,
}: {
  pickLetter: Function;
  pickedLetters: string[];
}) => (
  <div className="c-letter-rack">
    {ALPHABET.map(letter => (
      <LetterTile
        handleLetterTileClick={pickLetter}
        letter={letter}
        disabled={pickedLetters.includes(letter)}
        key={letter}
      />
    ))}
  </div>
);

LetterRack.propTypes = {
  pickLetter: PropTypes.func,
  pickedLetters: PropTypes.array,
};

export default LetterRack;
