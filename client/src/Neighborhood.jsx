import React from 'react';
import axios from 'axios';

import Description from './components/Description';
import MapWithAMarker from './components/MapWithAMarker';
import dummyData from './dummy_data';
import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: dummyData.listing,
    };
    const id = window.location.href.split('/')[4] || '19570882';
    axios.get(`http://localhost:3006/api/neighborhood/${id}`)
      .then((data) => {
        this.setState({ listing: data.data.listing });
      })
      .catch((err) => {
        throw err;
      });
  }
  render() {
    const apiKey = process.env.MAP_API_KEY || 'AIzaSyDe_auuESAjrCrYSfIpcYH6IhczbnKZ9cM';
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <div className="div-neighborhood">
        <span className="div-neighborhood-headline">The neighborhood</span>
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
