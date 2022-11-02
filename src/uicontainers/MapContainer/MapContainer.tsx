import React, { useState } from 'react';
import Map, { Marker, FlyToInterpolator, Popup } from 'react-map-gl';

import { CITIES, City } from './cities';
import ControlPanel from './control-panel';
import { Image } from 'antd';
import './styles.css';
import { LocationOn } from '@mui/icons-material';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZmFoYWRmYWhpbSIsImEiOiJja2dhN2Z0cGwwNGRqMnVtZnRrYm40emFuIn0.84IXoIs6W2CAolgYk8lhAw'; // Set your mapbox token here

interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
  transitionInterpolator?: FlyToInterpolator;
  transitionDuration?: string;
}

const MapContainer = () => {
  const [viewport, setViewport] = useState<ViewPort>({
    latitude: CITIES[0].latitude,
    longitude: CITIES[0].longitude,
    zoom: 10,
    transitionDuration: '100',
  });
  const [showPopup, setShowPopup] = useState(false);
  // const mapRef = useRef<>(null);
  const [city, setCity] = useState<City>(CITIES[0]);

  const onSelectCity = (city: City) => {
    const { latitude, longitude } = city;
    setCity(city);
    console.log(longitude, latitude, city);
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 0.005 }),
      transitionDuration: '2000',
    });
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <ControlPanel onSelectCity={onSelectCity} />
      <Map
        {...viewport}
        width="100vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        transitionDuration={Number(viewport.transitionDuration)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport: ViewPort) => {
          setViewport({ ...viewport, transitionDuration: '100' });
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
            onClick={() => setShowPopup(true)}
          />
        </Marker>
      </Map>
    </div>
  );
};

export default MapContainer;
