import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AnswerLetter from './index';

describe('<AnswerLetter/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AnswerLetter show letter="A" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the letter properly', () => {
    const wrapper = shallow(<AnswerLetter show letter="A" />);
    const span = wrapper.find('span');
    expect(span.text()).toBe('A');
  });

  it('does not render letter if show is false', () => {
    const wrapper = shallow(<AnswerLetter show={false} letter="A" />);
    const span = wrapper.find('span');
    expect(span.text()).toBe('');
  });
});
