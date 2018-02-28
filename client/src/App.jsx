import React from 'react';

import Description from './components/Description';
import MapWithAMarker from './components/MapWithAMarker';
import dummyData from './dummy_data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: dummyData.listing,
    };
  }

  render() {
    const apiKey = process.env.MAP_API_KEY || 'AIzaSyDe_auuESAjrCrYSfIpcYH6IhczbnKZ9cM';
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <div>
        <span className='div-neighborhood-headline'>The neighborhood</span>
        <Description listing={this.state.listing} />
        <MapWithAMarker
          lat={this.state.listing.lat}
          lng={this.state.listing.lng}
          // TODO Hide API Key somewhere, e.g. in Env Var
          googleMapURL={url}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <span>Exact location information is provided after a booking is confirmed.</span>
      </div>
    );
  }
}

export default App;
