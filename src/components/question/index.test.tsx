import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Question from './index';

describe('<Question/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Question phrase="this is a test" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
