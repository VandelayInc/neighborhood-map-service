import React from 'react';

import Description from './components/Description';
import NeighborhoodMap from './components/NeighborhoodMap';
import dummyData from './dummy_data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: dummyData.listing,
    };
  }

  render() {
    return (
      <div>
        <span>The Neighborhood</span>
        <Description listing={this.state.listing} />
        <NeighborhoodMap lat={this.state.listing.lat} lng={this.state.listing.lng} />
        <span>Exact location information is provided after a booking is confirmed.</span>
      </div>
    );
  }
}

export default App;
