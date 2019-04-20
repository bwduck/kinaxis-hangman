import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Question = ({ phrase }) => (
  <div className="c-question">
    <span>{phrase}</span>
  </div>
);

Question.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default Question;
