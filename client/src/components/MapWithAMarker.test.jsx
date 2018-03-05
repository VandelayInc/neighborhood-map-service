import React from 'react';
import jest from 'jest';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MapWithAMarker from './MapWithAMarker';

configure({ adapter: new Adapter() });


const apiKey = 'AIzaSyDe_auuESAjrCrYSfIpcYH6IhczbnKZ9cM';
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const wrapShallow = shallow(<MapWithAMarker
  lat="37.73270812233686"
  lng="-122.44749922109642"
  googleMapURL={url}
  loadingElement={<div style={{ height: '100%' }} />}
  containerElement={<div style={{ height: '400px' }} />}
  mapElement={<div style={{ height: '100%' }} />}
/>);

const wrapMount = mount(<MapWithAMarker
  lat={37.73270812233686}
  lng={-122.44749922109642}
  googleMapURL={url}
  loadingElement={<div style={{ height: '100%' }} />}
  containerElement={<div style={{ height: '400px' }} />}
  mapElement={<div style={{ height: '100%' }} />}
/>);

describe('MapWithAMarker Component Tests', () => {
  it('should exist', () => {
    expect(wrapShallow.exists()).toEqual(true);
  });
  it('should have a lat and lng property', () => {
    expect('lat' in wrapMount.props()).toEqual(true);
    expect('lng' in wrapMount.props()).toEqual(true);
  });
});
