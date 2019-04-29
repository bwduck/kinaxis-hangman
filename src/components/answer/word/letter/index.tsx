import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const AnswerLetter = ({ letter, show }: { letter: string; show: boolean }) => (
  <span className="c-answer-letter">{show && letter}</span>
);

AnswerLetter.propTypes = {
  letter: PropTypes.string,
  show: PropTypes.bool,
};

export default AnswerLetter;
