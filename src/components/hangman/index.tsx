import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HangmanIcon = ({ points }: { points: number }) => (
  <svg
    id="hangman-icon"
    viewBox="0 0 257 252"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="stand" transform="translate(2, 2)">
      <path d="M204.5,44.5 L204.5,1.5" id="Line" />
      <path d="M203.5,1.5 L90.5,1.5" id="Line-2" />
      <path d="M90.5,1.5 L90.5,245.502049" id="Line-5" />
      <path d="M0.5,246.5 L183.502732,246.5" id="Line-6" />
    </g>
    {points > 0 && <circle cx="206" cy="72" r="25" />}
    {points > 1 && <path d="M206.5,97.5 L206.5,153.5" />}
    {points > 2 && <path d="M205.5,117.5 L157.5,104.5" />}
    {points > 3 && (
      <path
        d="M254.5,117.5 L206.5,104.5"
        transform="translate(230.5, 111) scale(-1, 1) translate(-230.5, -111) "
      />
    )}
    {points > 4 && (
      <g id="left-leg" transform="translate(162, 153)">
        <path d="M44.5,0.5 L10.5,51.5" strokeLinejoin="round" />
        <path d="M10.5,51.5 L0.5,44.5" />
      </g>
    )}
    {points > 5 && (
      <g transform="translate(206, 153)">
        <path
          d="M34.5,0.5 L0.5,51.5"
          transform="translate(17.5, 26) scale(-1, 1) translate(-17, -26) "
        />
        <path
          d="M44.5,51.5 L34.5,44.5"
          transform="translate(39.5, 48) scale(-1, 1) translate(-39.5, -48) "
        />
      </g>
    )}
  </svg>
);

HangmanIcon.propTypes = {
  points: PropTypes.number,
};

export default HangmanIcon;
