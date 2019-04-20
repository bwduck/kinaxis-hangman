import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameOver from './index';

describe('<GameOver/>', () => {
  const msg = 'test message';

  it('renders and matches the snapshot', () => {
    const restart = () => null;
    const newGame = () => null;
    const wrapper = shallow(
      <GameOver
        gameOverMessage={msg}
        lostGame
        restart={restart}
        startNewPuzzle={newGame}
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Calls restart callback when restart button is clicked', () => {
    const restart = jest.fn();
    const startNewPuzzle = jest.fn();
    const wrapper = mount(
      <GameOver
        gameOverMessage={msg}
        lostGame
        restart={restart}
        startNewPuzzle={startNewPuzzle}
      />
    );
    wrapper.find('button').simulate('click');
    expect(restart).toHaveBeenCalledTimes(1);
    expect(startNewPuzzle).toHaveBeenCalledTimes(0);
  });

  it('Calls startNewPuzzle callback when restart button is clicked', () => {
    const restart = jest.fn();
    const startNewPuzzle = jest.fn();
    const wrapper = mount(
      <GameOver
        gameOverMessage={msg}
        lostGame={false}
        restart={restart}
        startNewPuzzle={startNewPuzzle}
      />
    );
    wrapper.find('button').simulate('click');
    expect(restart).toHaveBeenCalledTimes(0);
    expect(startNewPuzzle).toHaveBeenCalledTimes(1);
  });
});
