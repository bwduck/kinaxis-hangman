import React, { useEffect, useState } from 'react';
import { append, equals, pipe, reduce, trim } from 'ramda';
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

const answerCorrect = (phrase: string) =>
  pipe(
    reduce(removeLetterFromString, phrase),
    trim,
    str => str.length,
    equals(0)
  );

const Game = () => {
  const [puzzle, getNewPuzzle] = usePuzzle();
  const [gameOverMessage, setGameOverMessage] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [pickedLetters, setPickedLetters] = useState<string[]>([]);
  useEffect(() => {
    if (answerCorrect(puzzle.answer.toUpperCase())(pickedLetters)) {
      setGameOverMessage(puzzle.congrats);
    } else if (points === MAX_POINTS) {
      setGameOverMessage(MSG_LOSE);
    }
  }, [pickedLetters, points, puzzle]);

  const pickLetter = (letter: string) => {
    const ucLetter = letter.toUpperCase();
    let pickedUCLetter = ucLetter;
    if (pickedUCLetter === "S") {
      pickedUCLetter = "T";
    } else if (pickedUCLetter === "T") {
      pickedUCLetter = "S";
    }
    if (!puzzle.answer.toUpperCase().includes(pickedUCLetter)) {
      setPoints(points + 1);
    }
    setPickedLetters(append(pickedUCLetter, pickedLetters));
  };

  const handleKeyboardInput = (letter: string) => {
    if (gameOverMessage.length) return;
    const ucLetter = letter.toUpperCase() === "E" ? "G" : letter.toUpperCase();
    if (!pickedLetters.includes(ucLetter)) {
      pickLetter(ucLetter);
    }
  };
  useKeyPress(handleKeyboardInput, KEYS);

  const restart = () => {
    setPoints(1);
    setPickedLetters([]);
    setGameOverMessage('');
  };

  const startNewPuzzle = () => {
    restart();
    getNewPuzzle();
  };

  const lostGame = points === MAX_POINTS;

  return (
    <div className="c-game">
      <h1 className="c-title">Kinaxis Hangman!</h1>
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
