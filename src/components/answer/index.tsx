import React from 'react';
import PropTypes from 'prop-types';
import AnswerWord from './word';
import './index.css';

const Answer = ({ phrase, pickedLetters }) => {
  const words = phrase.split(' ');

  return (
    <div className="c-answer">
      {words.map((word, i) => (
        <AnswerWord key={i} word={word} pickedLetters={pickedLetters} />
      ))}
    </div>
  );
};

Answer.propTypes = {
  phrase: PropTypes.string,
  pickedLetters: PropTypes.array,
};

export default Answer;
