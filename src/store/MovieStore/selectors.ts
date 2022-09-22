import { RootState } from 'store/types';

export const selectMoviesData = (state: RootState) => state.movies.data;
export const selectTotalMovies = (state: RootState) => state.movies.total;
export const selectMovieStatus = (state: RootState) => state.movies.status;
