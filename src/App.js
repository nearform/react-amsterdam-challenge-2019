import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { useGeolocation } from 'react-browser-hooks';
import LoadingOverlay from 'react-loading-overlay';

const MyMapComponent = withScriptjs(
  withGoogleMap(({ latitude = 0, longitude = 0 }) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  )),
);

const App = () => {
  const { position, error } = useGeolocation();

  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${
    process.env.REACT_APP_GOOGLE_MAPS_API
  }&v=3.exp&libraries=geometry,drawing,places`;

  const errorMessage = error && <p>There was an error: {error.message}</p>;

  const { latitude, longitude } = position.coords || {};

  return (
    <LoadingOverlay
      active={!(latitude && longitude)}
      spinner
      text="Getting your Location"
    >
      <MyMapComponent
        latitude={latitude}
        longitude={longitude}
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </LoadingOverlay>
  );
};

export default App;
