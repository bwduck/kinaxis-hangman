const MAX_POINTS = 6;
const MSG_LOSE = 'Not quite!  Nice try.';
const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const PUZZLES = [
  {
    question: 'What should Kinaxis do?',
    answer: 'Hire Brad Duck',
    congrats: 'Good Idea!',
  },
  {
    question: "What is a Kinaxis' primary product?",
    answer: 'Rapid Response',
    congrats: 'Good thing you got this one right!',
  },
  {
    question: 'Fun Kinaxis core value',
    answer: 'Laugh Often',
    congrats: 'A solid life lesson',
  },
  {
    question: 'Finish these lyrics: "Never gonna..."',
    answer: 'give you up',
    congrats: 'I am so sorry....',
  },
];

export { ALPHABET, MAX_POINTS, MSG_LOSE, KEYS, PUZZLES };
