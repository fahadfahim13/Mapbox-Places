import React, { useState } from 'react';
import Map, { Marker, FlyToInterpolator } from 'react-map-gl';

import { CITIES, City } from './cities';
import { Image, Row, Col, Divider, Space, Card } from 'antd';
import './styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import CitySelection from '../../components/CitySelection';
import CityList from '../../components/CityList';

const MAPBOX_TOKEN =
  process.env.REACT_APP_MAPBOX_TOKEN ||
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
    <Space direction="vertical" size={12} style={{ width: '100%', overflow: 'hidden' }}>
      <Row>
        <CitySelection onSelectCity={onSelectCity} />
      </Row>
      <Row>
        <Col span={4}>
          <CityList onSelectCity={onSelectCity} />
        </Col>
        <Col span={1}></Col>
        <Col span={13}>
          <Map
            {...viewport}
            width="95%"
            height="60vh"
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
        </Col>
        <Col span={6}>
          <Card title={city.city} bordered={false} cover={<img alt="example" src={city.image} />}>
            <Card.Meta title={`State: ${city.state}`} description={city.description} />
            {/* <h3></h3>
            <Row>
              <p>{city.description}</p>
            </Row> */}
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default MapContainer;
