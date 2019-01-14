import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: { 
      lat: 42.3279, 
      lng: -71.0828 
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '500px', width: '800px' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC0mSSdwlJ6IjDk56fm35A-Osuaf68Wzok' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.3279}
            lng={-71.0828}
            text={"Urban League of Eastern Massachusetts"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
