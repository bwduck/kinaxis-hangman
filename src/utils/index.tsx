import { replace } from 'ramda';

const removeLetterFromString = (phrase, letter) =>
  replace(new RegExp(letter, 'ig'), '', phrase);

const getRandomInt = max => Math.floor(Math.random() * max);

const arrayWithIndex = length => [...Array(length)].map((v, i) => i);

export { arrayWithIndex, getRandomInt, removeLetterFromString };
