import { Select } from 'antd';
import * as React from 'react';
import { TravelTypes } from '../../uicontainers/MapContainer/cities';

const { Option } = Select;

function TypeSelection(props: { onSelectType: (type: TravelTypes | string) => void }) {
  const { onSelectType } = props;
  return (
    <div className="control-panel">
      <h4>Select Travel Types:</h4>
      <Select
        style={{ width: '120px' }}
        placeholder="Select Type"
        onChange={(type: string) => onSelectType(type === 'All'? type: Object(TravelTypes)[type])}
      >
        <Option value={'All'}>All</Option>
        {Object.keys(TravelTypes).map((type) => (
          <Option value={type} key={type}>{Object(TravelTypes)[type]}</Option>
        ))}
      </Select>
    </div>
  );
}

export default React.memo(TypeSelection);
