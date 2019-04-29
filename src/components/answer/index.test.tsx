import React from 'react';
import { shallow } from 'enzyme';
import Answer from './index';

describe('<AnswerWord/>', () => {
  const phrase = 'this is a test';
  const pickedLetters = ['T', 'I'];
  it('renders all the words', () => {
    const wrapper = shallow(
      <Answer pickedLetters={pickedLetters} phrase={phrase} />
    );
    const letter = wrapper.find('AnswerWord');
    expect(letter).toHaveLength(4);
  });
});
