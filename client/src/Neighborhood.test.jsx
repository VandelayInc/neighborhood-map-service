import React from 'react';
import jest from 'jest';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Neighborhood from './Neighborhood';

configure({
  adapter: new Adapter()
});

test('should exist', () => {
  const wrap = shallow(<Neighborhood />);
  expect(wrap.exists()).toEqual(true);
});
