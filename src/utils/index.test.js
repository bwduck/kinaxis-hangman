import { arrayWithIndex, getRandomInt, removeLetterFromString } from './index';

describe('arrayWithIndex', () => {
  it('Generates an array filled with the index at each location', () => {
    const result = arrayWithIndex(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});

describe('getRandomInt', () => {
  let realRandom;

  beforeAll(() => {
    realRandom = Math.random.bind(global.Math);
  });

  afterAll(() => {
    Math.random = realRandom;
  });

  it('Generates random number between 0 and max (not including max)', () => {
    global.Math.random = jest
      .fn()
      .mockReturnValue(0.5)
      .mockReturnValueOnce(0.001)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.999);

    expect(getRandomInt(3)).toBe(0);
    expect(getRandomInt(3)).toBe(1);
    expect(getRandomInt(3)).toBe(2);
  });
});

describe('removeLetterFromString()', () => {
  it('Removes each of specified letter from string', () => {
    expect(removeLetterFromString('testing', 't')).toBe('esing');
  });

  it('Removes nothing if character not in string', () => {
    expect(removeLetterFromString('testing', 'r')).toBe('testing');
  });

  it('Removes character even if case is different', () => {
    expect(removeLetterFromString('testing', 'S')).toBe('teting');
  });
});
