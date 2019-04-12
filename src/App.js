import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { useGeolocation, useMousePosition } from 'react-browser-hooks';
import LoadingOverlay from 'react-loading-overlay';

const DEFAULT_ZOOM = 12;
const MOVEMENT_SLOWDOWN = 1000;
const CENTER_POSITION_NOT_DEFINED = {
  lat: null,
  lng: null,
};

const MyMapComponent = withScriptjs(
  withGoogleMap(({ center, currentPosition }) => (
    <GoogleMap defaultZoom={DEFAULT_ZOOM} center={center}>
      <Marker position={currentPosition} />
    </GoogleMap>
  )),
);

const useMouseMovementInWindow = () => {
  const { x, y } = useMousePosition(60);
  const { innerWidth: w, innerHeight: h } = window;
  const offsetX = (w / 2 - x) / DEFAULT_ZOOM;
  const offsetY = (h / 2 - y) / DEFAULT_ZOOM;

  return { x: offsetX, y: offsetY };
};

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${
  process.env.REACT_APP_GOOGLE_MAPS_API
}&v=3.exp&libraries=geometry,drawing,places`;

const App = () => {
  const { position, error } = useGeolocation();
  const { x, y } = useMouseMovementInWindow();
  const [centerPosition, setCenterPosition] = useState(
    CENTER_POSITION_NOT_DEFINED,
  );

  useEffect(() => {
    setCenterPosition({
      lat: latitude + y / MOVEMENT_SLOWDOWN,
      lng: longitude - x / MOVEMENT_SLOWDOWN,
    });
  }, [x, y]);

  const errorMessage = error && <p>There was an error: {error.message}</p>;
  const { latitude = 0, longitude = 0 } = position.coords || {};
  const positionFound = latitude && longitude;

  const currentPosition = { lat: latitude, lng: longitude };
  const center =
    centerPosition !== CENTER_POSITION_NOT_DEFINED
      ? centerPosition
      : currentPosition;

  return (
    <LoadingOverlay
      active={!positionFound}
      spinner={!positionFound || !!errorMessage}
      text={
        errorMessage && positionFound ? errorMessage : 'Getting your location'
      }
    >
      <MyMapComponent
        center={center}
        currentPosition={currentPosition}
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </LoadingOverlay>
  );
};

export default App;
