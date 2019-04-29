import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import { jsxText } from '@babel/types';
import { useKeyPress, usePuzzle } from './index';
import * as mockConstants from '../constants/__mocks__';
import * as utils from '../utils';
// import * as constants from '../constants';
// import * as constants from '../constants';
import { getRandomInt } from '../utils';

configure({ adapter: new Adapter() });

type EventOrCallback = (e: Event | { key: string }) => void;

type Dict = { [key: string]: EventOrCallback };

jest.mock('../constants');

describe('useKeyPress hook', () => {
  const map: Dict = {};
  window.document.addEventListener = jest.fn(
    (event: string, cb: EventOrCallback) => {
      map[event] = cb;
    }
  );

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
  it('returns expected puzzles', () => {
    const utils = require('../utils');
    utils.getRandomInt = jest
      .fn()
      .mockReturnValue(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(2);
    let currentPuzzle;
    let getNewPuzzle: () => void;

    const Test = () => {
      [currentPuzzle, getNewPuzzle] = usePuzzle();
      return null;
    };
    mount(<Test />);
    expect(currentPuzzle).toEqual(mockConstants.p1);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(mockConstants.p3);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(mockConstants.p2);
    act(() => getNewPuzzle());
    expect(currentPuzzle).toEqual(mockConstants.p3);
  });
});
