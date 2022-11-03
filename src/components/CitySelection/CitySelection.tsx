import { Select } from 'antd';
import * as React from 'react';
import { CITIES, City } from '../../uicontainers/MapContainer/cities';

const { Option } = Select;

function CitySelection(props: { onSelectCity: (city: City) => void }) {
  const { onSelectCity } = props;
  return (
    <div className="control-panel">
      <Select
        style={{ width: '120px' }}
        placeholder="Select City"
        onChange={(id: number) => onSelectCity(CITIES[id])}
      >
        {CITIES.map((city, idx) => (
          <Option value={idx}>{city.city}</Option>
        ))}
      </Select>
    </div>
  );
}

export default React.memo(CitySelection);
