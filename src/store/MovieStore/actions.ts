import formInputSlice from './slice';
import { fetchMovieAsync } from './thunks';

const { clearMovieState } = formInputSlice.actions;
export { clearMovieState, fetchMovieAsync };
