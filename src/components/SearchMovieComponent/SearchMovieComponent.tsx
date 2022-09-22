import { Input } from 'antd'
import { DebouncedFunc } from 'lodash';
import { ChangeEvent } from 'react';

const SearchMovieComponent = (props: { onMovieSearch: DebouncedFunc<(e: ChangeEvent<HTMLInputElement>) => void> }) => {
  const { onMovieSearch } = props;
  return (
    <Input placeholder='Search movies with title' onChange={onMovieSearch} />
  )
}

export default SearchMovieComponent