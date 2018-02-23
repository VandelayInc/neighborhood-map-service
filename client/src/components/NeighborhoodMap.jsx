import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import MAP_API_KEY from '../../../map_config.js';

class NeighborhoodMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    }
    // setTimeout(()=>{this.showMap(this.state.lat, this.state.lng)},1000);
  }
  showMap(latitude, longitude) {
    axios.get('https://maps.googleapis.com/maps/api/js', {params: {key: MAP_API_KEY}})
    .then(() => {
      var uluru = {lat: this.state.lat, lng: this.state.lng};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    })
    .catch(console.error);
  }
  render() {
    return (
      <div id='map'></div>
    );
  }
}

export default NeighborhoodMap;

// let showMap = () => {
//   axios.get('https://maps.googleapis.com/maps/api/js', {params: {key: MAP_API_KEY}})
//   .then(() => {
//     var uluru = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: uluru
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
//     });
//   })
//   .catch(console.error);
// };


// showMap();