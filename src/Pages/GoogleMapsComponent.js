import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%', // Make the map take up full width of its parent container
  height: '400px', // Set a fixed height
};

const center = {
  lat: 40.73061,
  lng: -73.935242,
};

function GoogleMapComponent() {
  return (
    <div className="map-container max-w-xl mx-auto my-4 p-4"> {/* Container for the map */}
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
        
      </LoadScript>
    </div>
  );
}

export default GoogleMapComponent;
