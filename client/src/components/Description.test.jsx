import React from 'react';
import jest from 'jest';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './Description';

configure({adapter: new Adapter()});

const sampleData = {
  'listing': {
    'primary_host': {
      'first_name': 'Yeeman'
    },
    'city': 'San Francisco',
    'country': 'United States',
    'id': 19570882,
    'lat': 37.73270812233686,
    'lng': -122.44749922109642,
    'state': 'CA',
    'zipcode': '94127',
    'neighborhood_overview': '-Super safe walkable neighborhood.  Mostly flat.\n-Close to Glen Park Bart station.\n-Uber and Lyft accessible.  They can park on driveway while you come downstairs without impeding traffic.\n-Several muni bus lines through area.\n-Supermarket one block away.\n-Restaurants and coffee shops a block away.\n-4.5 blocks to city college of sf',
    'transit': ''
  },
};

describe('Description Component Tests', () => {
  const wrapShallow = shallow(<Description listing={sampleData.listing} />);
  const wrapMount = mount(<Description listing={sampleData.listing} />);

  it('should exist', () => {
    expect(wrapShallow.exists()).toEqual(true);
  });

  it('should render without an error', () => {
    expect(wrapShallow.contains(<span>Getting Around</span>)).toBe(true);  
  });

  it('should use the data passed to it', () => {
    expect(wrapShallow.contains('Yeeman')).toBe(true);  
  });

  // once PR merges with master branch, test accordian feature

});


