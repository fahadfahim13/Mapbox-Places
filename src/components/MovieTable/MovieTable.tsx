import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MovieData } from './types'
import { Pagination, Spin } from 'antd';

const MovieTable = (props: { rows: MovieData[], onChange: (p: number) => void, totalMovies: number, loading: boolean }) => {
  const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 260 },
    {
      field: 'year',
      headerName: 'Year',
      width: 90,
    },
  ];
  const { rows, onChange, totalMovies, loading } = props;
  return (
    <div style={{ height: 600, width: '100%' }}>
      {!loading ? <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
      />: 
      <div style={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30%' }}>
        <Spin size="large" />
      </div>
      }
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
          <Pagination defaultCurrent={1} onChange={onChange} total={totalMovies} />
        </div>
      <br />
    </div>
  )
}

export default MovieTable;