const ROOT = '/';
const HOME = '/home';

export const ROUTES = {
  PATHS: {
    ROOT,
    HOME
  }
};

export const BASE_API_ROUTE = process.env.REACT_APP_API_URL || "http://localhost:8888/api/";
export const API_ROUTE = {
  AUTH: {
    REGISTER: BASE_API_ROUTE + 'auth/register',
    LOGIN: BASE_API_ROUTE + 'auth/login',
  },
  MOVIE: {
    GET: BASE_API_ROUTE + 'movies/search',
    SEARCH: BASE_API_ROUTE + 'movies/search',
  }
}