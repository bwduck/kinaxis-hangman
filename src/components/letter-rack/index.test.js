import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LetterRack from './index';

describe('<LetterRack/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <LetterRack pickLetter={() => null} pickedLetters={['A', 'B']} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
