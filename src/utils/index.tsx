import { replace } from 'ramda';

const removeLetterFromString = (phrase: string, letter: string) =>
  replace(new RegExp(letter, 'ig'), '', phrase);

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const arrayWithIndex = (length: number) => [...Array(length)].map((v, i) => i);

export { arrayWithIndex, getRandomInt, removeLetterFromString };
