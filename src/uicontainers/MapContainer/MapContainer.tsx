import React from 'react';
import { Row, Col, Space, Card, Button, Divider } from 'antd';
import CitySelection from 'components/TypeSelection';
import CityList from 'components/CityList';
import MapComponent from 'components/MapComponent';
import useMapContainer from './useMapContainer';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';

const MapContainer = () => {
  const {
    sort,
    sortAsc,
    sortDesc,
    onSelectCity,
    onSelectType,
    viewport,
    setViewPort,
    city,
    onPrevClick,
    onNextClick,
  } = useMapContainer();
  return (
    <Space direction="vertical" size={12} style={{ width: '120%', overflow: 'hidden' }}>
      <Row>
        <CitySelection onSelectType={onSelectType} />
      </Row>
      <Row>
        <Col span={4}>
          <CityList onSelectCity={onSelectCity} sort={sort} sortAsc={sortAsc} sortDesc={sortDesc} />
        </Col>
        <Col span={1}></Col>
        <Col span={13}>
          <MapComponent viewport={viewport} setViewPort={setViewPort} city={city} />
          <Divider />
          <Row>
            <Col span={6}>
              <Button onClick={onPrevClick}>Previous</Button>
            </Col>
            <Col span={14}></Col>
            <Col span={4}>
              <Button onClick={onNextClick}>Next</Button>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Card title={city.city} bordered={false} cover={<img alt="example" src={city.image} />}>
            <Card.Meta title={`State: ${city.state}`} description={city.description} />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default MapContainer;
