import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Card, List, Skeleton } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppSelector } from '../../store/hooks'
import { selectAllCities, selectedCityIndex } from '../../store/Map/selectors'
import { City } from '../../uicontainers/MapContainer/cities'

const CityList = (props: { onSelectCity: (city: City, idx: number) => void; sort: string | null; sortAsc: () => void; sortDesc: () => void; }) => {
  const cities = useAppSelector(selectAllCities);
  const selectedCityIdx = useAppSelector(selectedCityIndex);
  const { onSelectCity, sort, sortAsc, sortDesc } = props;
  return (
    <Card title='City List' 
    extra={
    <div>
      {sort === null || sort === 'asc' ? <SortAscendingOutlined onClick={sortAsc} /> : <SortDescendingOutlined onClick={sortDesc} />}
    </div>} >
      <InfiniteScroll
        dataLength={cities.length}
        next={() => {}}
        hasMore={false}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={null}
        scrollableTarget="scrollableDiv"
        style={{ height: '60vh', overflowX: 'hidden' }}
      >
        <List
          dataSource={cities}
          renderItem={(item, idx) => (
            <List.Item key={item.city} onClick={() => {
              onSelectCity(item, idx);
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