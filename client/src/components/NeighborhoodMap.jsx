import React from 'react';
import axios from 'axios';
import MAP_API_KEY from '../../../map_config';

class NeighborhoodMap extends React.Component {
  constructor() {
    super();
    this.showMap();
  }
  showMap() {
    axios.get('https://maps.googleapis.com/maps/api/js', { params: { key: MAP_API_KEY } })
      .then(() => {
        const uluru = { lat: this.props.lat, lng: this.props.lng };
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru,
        });
        const marker = new google.maps.Marker({
          position: uluru,
          map,
        });
      })
      .catch((err) => {
        document.getElementById('map').innerHTML = 'Unable to load map', err;
      });
  }
  render() {
    return (
      <div id="map" />
    );
  }
}

export default NeighborhoodMap;
