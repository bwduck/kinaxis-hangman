import React, { useEffect, useState } from 'react';
import { append, equals, length, pipe, reduce, trim } from 'ramda';
import LetterRack from '../letter-rack';
import HangmanIcon from '../hangman';
import Question from '../question';
import Answer from '../answer';
import Modal from '../modal';
import GameOver from '../game-over';
import { useKeyPress, usePuzzle } from '../../custom-hooks';
import { MAX_POINTS, MSG_LOSE, KEYS } from '../../constants';
import { removeLetterFromString } from '../../utils';
import './index.css';

const answerCorrect = phrase =>
  pipe(
    reduce(removeLetterFromString, phrase),
    trim,
    length,
    equals(0)
  );

const Game = () => {
  const [puzzle, getNewPuzzle] = usePuzzle();
  const [gameOverMessage, setGameOverMessage] = useState('');
  const [points, setPoints] = useState(0);
  const [pickedLetters, setPickedLetters] = useState([]);
  useEffect(() => {
    if (answerCorrect(puzzle.answer.toUpperCase())(pickedLetters)) {
      setGameOverMessage(puzzle.congrats);
    } else if (points === MAX_POINTS) {
      setGameOverMessage(MSG_LOSE);
    }
  }, [pickedLetters, points, puzzle]);

  const pickLetter = letter => {
    if (!puzzle.answer.toUpperCase().includes(letter)) {
      setPoints(points + 1);
    }
    setPickedLetters(append(letter, pickedLetters));
  };

  const handleKeyboardInput = letter => {
    if (gameOverMessage.length) return;
    if (!pickedLetters.includes(letter.toUpperCase())) {
      pickLetter(letter.toUpperCase());
    }
  };
  useKeyPress(handleKeyboardInput, KEYS);

  const restart = () => {
    setPoints(0);
    setPickedLetters([]);
    setGameOverMessage(false);
  };

  const startNewPuzzle = () => {
    restart();
    getNewPuzzle();
  };

  const lostGame = points === MAX_POINTS;

  return (
    <div className="c-game">
      <h1 className="c-title">Duck Hangman!</h1>
      <HangmanIcon points={points} />
      <Question phrase={puzzle.question} />
      <Answer
        phrase={puzzle.answer.toUpperCase()}
        pickedLetters={pickedLetters}
      />
      <LetterRack pickLetter={pickLetter} pickedLetters={pickedLetters} />
      {gameOverMessage.length > 0 && (
        <Modal>
          <GameOver
            gameOverMessage={gameOverMessage}
            lostGame={lostGame}
            restart={restart}
            startNewPuzzle={startNewPuzzle}
          />
        </Modal>
      )}
    </div>
  );
};

export default Game;
