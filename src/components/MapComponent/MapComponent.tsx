import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { ViewPort } from './types';
import 'mapbox-gl/dist/mapbox-gl.css';
import { City } from 'uicontainers/MapContainer/cities';
import { Image } from 'antd';

const MAPBOX_TOKEN =
  process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

const MapComponent = (props: {viewport: ViewPort; setViewPort: (viewport: ViewPort) => void; city: City }) => {
  const { viewport, setViewPort, city } = props;
  return (
    <Map
            {...viewport}
            width="95%"
            height="60vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            transitionDuration={Number(viewport.transitionDuration)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={(viewport: ViewPort) => {
              setViewPort({ ...viewport, transitionDuration: '100' });
            }}
          >
            <Marker
              key={`marker-${city.city}-${city.latitude}-${city.longitude}`}
              longitude={city.longitude}
              latitude={city.latitude}
              offsetTop={(-5 * viewport.zoom) / 2}
              offsetLeft={(-5 * viewport.zoom) / 2}
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg"
                width={viewport.zoom * 5}
                height={viewport.zoom * 5}
                preview={false}
              />
            </Marker>
          </Map>
  )
}

export default MapComponent