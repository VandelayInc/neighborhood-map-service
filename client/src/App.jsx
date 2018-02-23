import React from 'react';
import Description from './components/Description.jsx';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import NeighborhoodMap from './components/NeighborhoodMap.jsx';
import dummyData from './dummy_data.js';
import axios from 'axios';

const MapWithAMarker = withGoogleMap(props => 
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{lat:0, lng:0}}>
    <Marker position={{lat:0,lng:0}} />
  </GoogleMap>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: dummyData.listing
    };

    axios.get('/rooms/10812630/neighborhood')
      .then((room) => {this.setState({listing: room.data.listing})})
      .catch((err) => {console.error(err)});
  }

  render() {
    return (
      <div>
        <span>The Neighborhood</span>
        <Description listing={this.state.listing} />
        <span>{this.state.listing.lat + ' ' + this.state.listing.lng}</span>
        <NeighborhoodMap listing={this.state.listing} />
        <span>Exact location information is provided after a booking is confirmed.</span>
      </div>
    );
  }
}


export default App;