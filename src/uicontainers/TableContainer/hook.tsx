import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { logout } from 'store/LoginFormInputs/actions';
import { selectMoviesData, selectMovieStatus, selectTotalMovies } from 'store/MovieStore/selectors';
import { fetchMovieAsync } from 'store/MovieStore/thunks';
import { selectLoginFormInputs } from 'store/LoginFormInputs/selectors';
import { debounce } from 'lodash';

const useTableContainer = () => {
  const [page, setPage] = useState(1);
  const movies = useAppSelector(selectMoviesData);
  const totalMovies = useAppSelector(selectTotalMovies);
  const movieStatus = useAppSelector(selectMovieStatus);
  const loginStatus = useAppSelector(selectLoginFormInputs);
  const dispatch = useAppDispatch();

  const searchMovies = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchMovieAsync({ value: e.target.value, page, limit: 10 }));
  };

  const debouncedSearchMovies = useMemo(() => debounce(searchMovies, 500), []);

  useEffect(() => {
    dispatch(fetchMovieAsync({ value: '', page, limit: 10 }));
  }, []);

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onPageChange = (p: number) => {
    setPage(p);
    dispatch(fetchMovieAsync({ value: '', page: p, limit: 10 }));
  };

  return {
    movies,
    totalMovies,
    onLogoutClick,
    page,
    onPageChange,
    tableLoading: movieStatus === 'Pending',
    pageLoading: loginStatus.status === 'Pending',
    onMovieSearch: debouncedSearchMovies,
  };
};

export default useTableContainer;
