import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import { useKeyPress, usePuzzle } from './index';
import * as utils from '../utils';
import * as constants from '../constants';

configure({ adapter: new Adapter() });

describe('useKeyPress hook', () => {
  const map = {};
  window.document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  it('calls callback if allowed key is pushed', () => {
    const callbackFn = jest.fn();
    const keysAllowed = ['A', 'b'];
    const Test = () => {
      useKeyPress(callbackFn, keysAllowed);
      return null;
    };
    mount(<Test />);
    map.keyup({ key: 'A' });
    expect(callbackFn).toBeCalledWith('A');
  });

  it('does not call callback if not allowed key is pressed', () => {
    const callbackFn = jest.fn();
    const keysAllowed = ['A', 'b'];
    const Test = () => {
      useKeyPress(callbackFn, keysAllowed);
      return null;
    };
    mount(<Test />);
    map.keyup({ key: 'B' });
    expect(callbackFn).toHaveBeenCalledTimes(0);
  });
});

describe('usePuzzle hook', () => {
  const p1 = { question: 'q1', answer: 'a1', congrats: 'c1' };
  const p2 = { question: 'q2', answer: 'a2', congrats: 'c2' };
  const p3 = { question: 'q3', answer: 'a3', congrats: 'c3' };
  const puzzles = [{ ...p1 }, { ...p2 }, { ...p3 }];
  it('returns expected puzzles', () => {
    constants.PUZZLES = puzzles;
    utils.getRandomInt = jest
      .fn()
      .mockReturnValue(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(2);

    let currentPuzzle;
    let getNewPuzzle;

    const Test = () => {
      [currentPuzzle, getNewPuzzle] = usePuzzle();
      return null;
    };
    mount(<Test />);
    expect(currentPuzzle).toEqual(p1);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(p3);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(p2);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(p3);
  });
});
