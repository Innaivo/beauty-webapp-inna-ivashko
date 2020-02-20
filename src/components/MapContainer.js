import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={15}
            // style={mapStyles}
            initialCenter={{
             lat: 51.443686,
             lng: 5.479193
            }}
          />
            )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBylsKmHyljUWcHBomy2wpD0XeEPJ4S7-w'
  })(MapContainer);