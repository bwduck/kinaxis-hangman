import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AnswerWord from './index';

describe('<AnswerWord/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <AnswerWord pickedLetters={['E', 'S']} word="TEST" />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders all the letters', () => {
    const wrapper = shallow(<AnswerWord pickedLetters={['T']} word="TEST" />);
    const letter = wrapper.find('AnswerLetter');
    expect(letter).toHaveLength(4);
  });
});
