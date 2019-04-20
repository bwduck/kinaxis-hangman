import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LetterTile from './index';

describe('<LetterTile/>', () => {
  it('renders and matches the snapshot', () => {
    const handleClick = () => null;
    const wrapper = shallow(
      <LetterTile
        disabled={false}
        letter="A"
        handleLetterTileClick={handleClick}
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('calls callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <LetterTile
        disabled={false}
        letter="A"
        handleLetterTileClick={callback}
      />
    );
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call callback if button is disabled', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <LetterTile disabled letter="A" handleLetterTileClick={callback} />
    );
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
