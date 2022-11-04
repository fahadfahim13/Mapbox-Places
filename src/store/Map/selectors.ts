import { RootState } from 'store/types';

export const selectAllCities = (state: RootState) => state.cityReducer.cities;
export const selectedCity = (state: RootState) => state.cityReducer.selectedCity;
export const selectedCityIndex = (state: RootState) => state.cityReducer.selectedCityIdx;
