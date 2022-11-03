import { Button, Card, List, Skeleton } from 'antd'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CITIES, City } from '../../uicontainers/MapContainer/cities'

const CityList = (props: {onSelectCity: (city: City) => void}) => {
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const {onSelectCity} = props;
  return (
    <Card title='City List'>
      <InfiniteScroll
        dataLength={CITIES.length}
        next={() => {}}
        hasMore={false}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={null}
        scrollableTarget="scrollableDiv"
        style={{ height: '60vh', overflowX: 'hidden' }}
      >
        <List
          dataSource={CITIES}
          renderItem={(item, idx) => (
            <List.Item key={item.city} onClick={() => {
              onSelectCity(item);
              setSelectedCityIdx(idx);
            }} 
            style={{ cursor: 'pointer', 
                     backgroundColor: idx === selectedCityIdx? 'beige': 'white', 
                     textAlign: 'center' 
                  }}>
              <List.Item.Meta
                title={item.city}
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </Card>
  )
}

export default CityList