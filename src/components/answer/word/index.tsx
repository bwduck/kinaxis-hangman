import React from 'react';
import PropTypes from 'prop-types';
import AnswerLetter from './letter';
import './index.css';

const AnswerWord = ({
  pickedLetters,
  word,
}: {
  pickedLetters: string[];
  word: string;
}) => {
  const letters = word.split('');

  return (
    <div className="c-answer-word">
      {letters.map((letter, i) => (
        <AnswerLetter
          key={i}
          letter={letter}
          show={pickedLetters.includes(letter)}
        />
      ))}
    </div>
  );
};

AnswerWord.propTypes = {
  pickedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
};

export default AnswerWord;
