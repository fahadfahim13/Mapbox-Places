import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { logout } from 'store/LoginFormInputs/actions';
import { selectMoviesData, selectMovieStatus, selectTotalMovies } from 'store/MovieStore/selectors';
import { fetchMovieAsync } from 'store/MovieStore/thunks';
import { selectLoginFormInputs } from 'store/LoginFormInputs/selectors';

const useTableContainer = () => {
  const [page, setPage] = useState(1);
  const movies = useAppSelector(selectMoviesData);
  const totalMovies = useAppSelector(selectTotalMovies);
  const movieStatus = useAppSelector(selectMovieStatus);
  const loginStatus = useAppSelector(selectLoginFormInputs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAsync({ page, limit: 10 }));
  }, []);

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onPageChange = (p: number) => {
    setPage(p);
    dispatch(fetchMovieAsync({ page: p, limit: 10 }));
  };

  return {
    movies,
    totalMovies,
    onLogoutClick,
    onPageChange,
    tableLoading: movieStatus === 'Pending',
    pageLoading: loginStatus.status === 'Pending',
  };
};

export default useTableContainer;
