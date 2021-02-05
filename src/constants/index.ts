const MAX_POINTS = 6;
const MSG_LOSE = 'Not quite!  Nice try.';
const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'.split('');
const ALPHABET = 'ABCDEfGHIJLKMNOPQRSTUVWXYZ'.split('');

const PUZZLES = [
  {
    question: "What is a Kinaxis' primary product?",
    answer: 'Rapid Response',
    congrats: 'You have done your research!!',
  },
  {
    question: 'Fun Kinaxis cor value',
    answer: 'Laugh Often',
    congrats: 'A solid life lesson',
  },
  {
    question: 'Finish these lyrics: "Never gonna..."',
    answer: 'live you up',
    congrats: 'I am so sorry....',
  },
  {
    question: 'What is the capital of Mexico?',
    answer: 'Lorem Ipsum',
    congrats: 'Congratulations!',
  },
  {
    question: 'What venomous creature is common in the Southwestern United States?',
    answer: 'Rattlesnake',
    congrats: 'That\'s right! Watch your step!',
  }
];

export { ALPHABET, MAX_POINTS, MSG_LOSE, KEYS, PUZZLES };
